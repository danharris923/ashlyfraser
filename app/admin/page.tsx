'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Save, Edit3, Eye, EyeOff, RefreshCw } from 'lucide-react'
import { Badge } from "@/components/ui/badge"

interface Deal {
  id: string
  title: string
  description: string
  savings: string
  category: string
  color: string
  bgColor: string
  borderColor: string
  action?: string
  modal?: string
  link?: string
  enabled: boolean
}

export default function AdminDashboard() {
  const [deals, setDeals] = useState<Deal[]>([])
  const [editingDeal, setEditingDeal] = useState<Deal | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')
  const [authenticated, setAuthenticated] = useState(false)
  const [password, setPassword] = useState('')

  const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'ashly2024'

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true)
      setMessage('')
    } else {
      setMessage('❌ Incorrect password. Try again!')
    }
  }

  useEffect(() => {
    if (authenticated) {
      fetchDeals()
    }
  }, [authenticated])

  const fetchDeals = async () => {
    try {
      const response = await fetch('/api/deals')
      const data = await response.json()
      setDeals(data)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching deals:', error)
      setMessage('Error loading deals')
      setLoading(false)
    }
  }

  const saveDeals = async () => {
    setSaving(true)
    try {
      const response = await fetch('/api/deals', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(deals)
      })
      
      const result = await response.json()
      if (result.success) {
        setMessage('✅ Changes saved successfully!')
        setTimeout(() => setMessage(''), 3000)
      } else {
        setMessage('❌ Failed to save changes')
      }
    } catch (error) {
      console.error('Error saving deals:', error)
      setMessage('❌ Error saving changes')
    }
    setSaving(false)
  }

  const updateDeal = (updatedDeal: Deal) => {
    setDeals(deals.map(deal => 
      deal.id === updatedDeal.id ? updatedDeal : deal
    ))
    setEditingDeal(null)
  }

  const toggleDealEnabled = (dealId: string) => {
    setDeals(deals.map(deal => 
      deal.id === dealId ? { ...deal, enabled: !deal.enabled } : deal
    ))
  }

  // Show login form if not authenticated
  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 p-4">
        <div className="container mx-auto max-w-md">
          <div className="flex items-center justify-center min-h-screen">
            <Card className="w-full">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-gray-900">
                  👋 Hey Ashly!
                </CardTitle>
                <CardDescription>
                  Enter your password to access the dashboard
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {message && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-800">
                    {message}
                  </div>
                )}
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                  />
                </div>
                <Button 
                  onClick={handleLogin}
                  className="w-full bg-rose-500 hover:bg-rose-600"
                >
                  Access Dashboard
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  This keeps your content management secure
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-center h-64">
            <RefreshCw className="w-8 h-8 animate-spin text-blue-500" />
            <span className="ml-3 text-xl text-gray-600">Loading dashboard...</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-4">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Hey Ashly! 👋
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Your simple dashboard to manage website content - no tech skills needed!
          </p>
          
          {/* Navigation Tabs */}
          <div className="flex justify-center gap-2 mb-6">
            <Button className="bg-rose-500 hover:bg-rose-600 text-white">
              Deal Cards
            </Button>
            <Button variant="outline" onClick={() => window.location.href = '/admin/cashback-apps'}>
              Cashback Apps
            </Button>
            <Button variant="outline" onClick={() => window.location.href = '/admin/free-samples'}>
              Free Samples
            </Button>
            <Button variant="outline" onClick={() => window.location.href = '/admin/clearance'}>
              Clearance Deals
            </Button>
            <Button variant="outline" onClick={() => window.location.href = '/admin/content'}>
              Page Content
            </Button>
          </div>
          
          {message && (
            <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-blue-800">
              {message}
            </div>
          )}
          
          <div className="flex justify-center gap-4">
            <Button 
              onClick={saveDeals}
              disabled={saving}
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              {saving ? (
                <>
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Save All Changes
                </>
              )}
            </Button>
            
            <Button 
              onClick={fetchDeals}
              variant="outline"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <Card key={deal.id} className={`relative ${!deal.enabled ? 'opacity-50' : ''}`}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Badge className={`bg-gradient-to-r ${deal.color} text-white`}>
                      {deal.category}
                    </Badge>
                    <button
                      onClick={() => toggleDealEnabled(deal.id)}
                      className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
                    >
                      {deal.enabled ? (
                        <>
                          <Eye className="w-4 h-4" />
                          <span>Visible</span>
                        </>
                      ) : (
                        <>
                          <EyeOff className="w-4 h-4" />
                          <span>Hidden</span>
                        </>
                      )}
                    </button>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setEditingDeal(deal)}
                  >
                    <Edit3 className="w-4 h-4" />
                  </Button>
                </div>
                
                <CardTitle className="text-lg">{deal.title}</CardTitle>
                <CardDescription className="text-sm">
                  {deal.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Savings: <strong>{deal.savings}</strong></span>
                  {deal.link && (
                    <span className="text-blue-600 text-xs">Links to website</span>
                  )}
                  {deal.modal && (
                    <span className="text-purple-600 text-xs">Opens modal</span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Edit Modal */}
        {editingDeal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-lg max-h-[90vh] overflow-y-auto">
              <CardHeader>
                <CardTitle>Edit: {editingDeal.title}</CardTitle>
                <CardDescription>
                  Make changes to this card. All fields are easy to understand!
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="title">Card Title</Label>
                  <Input
                    id="title"
                    value={editingDeal.title}
                    onChange={(e) => setEditingDeal({...editingDeal, title: e.target.value})}
                    placeholder="e.g. Grocery Deals"
                  />
                </div>
                
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={editingDeal.description}
                    onChange={(e) => setEditingDeal({...editingDeal, description: e.target.value})}
                    placeholder="Describe what this card offers..."
                    rows={3}
                  />
                </div>
                
                <div>
                  <Label htmlFor="savings">Savings Text</Label>
                  <Input
                    id="savings"
                    value={editingDeal.savings}
                    onChange={(e) => setEditingDeal({...editingDeal, savings: e.target.value})}
                    placeholder="e.g. Up to 70% off"
                  />
                </div>
                
                <div>
                  <Label htmlFor="category">Category Badge</Label>
                  <Input
                    id="category"
                    value={editingDeal.category}
                    onChange={(e) => setEditingDeal({...editingDeal, category: e.target.value})}
                    placeholder="e.g. Food & Groceries"
                  />
                </div>
                
                {editingDeal.link && (
                  <div>
                    <Label htmlFor="link">Website Link (optional)</Label>
                    <Input
                      id="link"
                      value={editingDeal.link}
                      onChange={(e) => setEditingDeal({...editingDeal, link: e.target.value})}
                      placeholder="https://example.com"
                    />
                  </div>
                )}
                
                <div className="flex items-center space-x-2">
                  <Switch
                    id="enabled"
                    checked={editingDeal.enabled}
                    onCheckedChange={(checked) => setEditingDeal({...editingDeal, enabled: checked})}
                  />
                  <Label htmlFor="enabled">Show this card on website</Label>
                </div>
                
                <div className="flex gap-2 pt-4">
                  <Button 
                    onClick={() => updateDeal(editingDeal)}
                    className="flex-1"
                  >
                    Save Changes
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setEditingDeal(null)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
        
        {/* Help Section */}
        <Card className="mt-8 bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-800">🤔 Need Help?</CardTitle>
          </CardHeader>
          <CardContent className="text-blue-700">
            <ul className="space-y-2 text-sm">
              <li>• Click the <Edit3 className="w-4 h-4 inline" /> button to edit any card</li>
              <li>• Use the eye icon to show/hide cards from your website</li>
              <li>• Don't forget to click "Save All Changes" when you're done!</li>
              <li>• Changes appear on your website immediately after saving</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}