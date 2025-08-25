'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Save, Edit3, Eye, EyeOff, RefreshCw, ArrowLeft } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import Image from 'next/image'

interface ClearanceDeal {
  id: string
  title: string
  description: string
  savings: string
  category: string
  brand: string
  logoUrl: string
  imageUrl: string
  websiteUrl: string
  validUntil: string
  enabled: boolean
}

export default function ClearanceAdmin() {
  const [deals, setDeals] = useState<ClearanceDeal[]>([])
  const [editingDeal, setEditingDeal] = useState<ClearanceDeal | null>(null)
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
      const response = await fetch('/api/clearance')
      const data = await response.json()
      setDeals(data.clearanceDeals || [])
      setLoading(false)
    } catch (error) {
      console.error('Error fetching deals:', error)
      setLoading(false)
    }
  }

  const saveDeals = async () => {
    setSaving(true)
    try {
      const response = await fetch('/api/clearance', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ clearanceDeals: deals })
      })
      
      const result = await response.json()
      if (result.success) {
        setMessage('✅ Clearance deals updated successfully!')
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

  const updateDeal = (updatedDeal: ClearanceDeal) => {
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
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 p-4">
        <div className="container mx-auto max-w-md">
          <div className="flex items-center justify-center min-h-screen">
            <Card className="w-full">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-gray-900">
                  👋 Hey Ashly!
                </CardTitle>
                <CardDescription>
                  Enter your password to manage clearance deals
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
                  className="w-full bg-amber-500 hover:bg-amber-600"
                >
                  Access Dashboard
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 p-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-center h-64">
            <RefreshCw className="w-8 h-8 animate-spin text-amber-500" />
            <span className="ml-3 text-xl text-gray-600">Loading clearance deals...</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 p-4">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Button 
              variant="outline" 
              onClick={() => window.location.href = '/admin'}
              className="mb-2"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            🏷️ Manage Clearance Deals
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Edit the clearance deals that show up on your clearance page
          </p>
          
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

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {deals.map((deal) => (
            <Card key={deal.id} className={`relative ${!deal.enabled ? 'opacity-50' : ''} bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200`}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs">
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
                
                {/* Brand Logo */}
                <div className="relative w-full h-16 bg-white rounded-lg p-2 shadow-sm mb-2">
                  <Image
                    src={deal.logoUrl}
                    alt={`${deal.brand} logo`}
                    fill
                    className="object-contain p-1"
                    sizes="200px"
                  />
                </div>
                
                <CardTitle className="text-lg flex items-center justify-between">
                  {deal.brand}
                  <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                    {deal.savings}
                  </Badge>
                </CardTitle>
                <CardDescription className="text-sm">
                  {deal.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span>Valid until: {deal.validUntil}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Edit Modal */}
        {editingDeal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <CardHeader>
                <CardTitle>Edit: {editingDeal.brand}</CardTitle>
                <CardDescription>
                  Update clearance deal information
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="brand">Brand Name</Label>
                    <Input
                      id="brand"
                      value={editingDeal.brand}
                      onChange={(e) => setEditingDeal({...editingDeal, brand: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="savings">Savings</Label>
                    <Input
                      id="savings"
                      value={editingDeal.savings}
                      onChange={(e) => setEditingDeal({...editingDeal, savings: e.target.value})}
                      placeholder="e.g. Up to 70% OFF"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={editingDeal.description}
                    onChange={(e) => setEditingDeal({...editingDeal, description: e.target.value})}
                    rows={3}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Input
                      id="category"
                      value={editingDeal.category}
                      onChange={(e) => setEditingDeal({...editingDeal, category: e.target.value})}
                      placeholder="e.g. Athletic Wear, Designer"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="validUntil">Valid Until</Label>
                    <Input
                      id="validUntil"
                      value={editingDeal.validUntil}
                      onChange={(e) => setEditingDeal({...editingDeal, validUntil: e.target.value})}
                      placeholder="2025-12-31"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="websiteUrl">Website URL</Label>
                  <Input
                    id="websiteUrl"
                    value={editingDeal.websiteUrl}
                    onChange={(e) => setEditingDeal({...editingDeal, websiteUrl: e.target.value})}
                    placeholder="https://example.com/sale"
                  />
                </div>
                
                <div>
                  <Label htmlFor="logoUrl">Logo URL</Label>
                  <Input
                    id="logoUrl"
                    value={editingDeal.logoUrl}
                    onChange={(e) => setEditingDeal({...editingDeal, logoUrl: e.target.value})}
                    placeholder="https://example.com/logo.png"
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Switch
                    id="enabled"
                    checked={editingDeal.enabled}
                    onCheckedChange={(checked) => setEditingDeal({...editingDeal, enabled: checked})}
                  />
                  <Label htmlFor="enabled">Show this deal on website</Label>
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
        <Card className="mt-8 bg-amber-50 border-amber-200">
          <CardHeader>
            <CardTitle className="text-amber-800">💡 Tips</CardTitle>
          </CardHeader>
          <CardContent className="text-amber-700">
            <ul className="space-y-2 text-sm">
              <li>• Click <Edit3 className="w-4 h-4 inline" /> to edit any clearance deal</li>
              <li>• Use the eye icon to show/hide deals from your website</li>
              <li>• Logo URLs should be high-quality brand logos</li>
              <li>• Changes appear immediately after clicking "Save All Changes"</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}