'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Save, Edit3, Eye, EyeOff, RefreshCw, ArrowLeft, Star } from 'lucide-react'
import { Badge } from "@/components/ui/badge"

interface CashbackApp {
  name: string
  description: string
  cashback: string
  features: string[]
  category: string
  rating: string
  users: string
  color: string
  bgColor: string
  borderColor: string
  url: string
  enabled: boolean
}

export default function CashbackAppsAdmin() {
  const [apps, setApps] = useState<CashbackApp[]>([])
  const [editingApp, setEditingApp] = useState<CashbackApp | null>(null)
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
      fetchApps()
    }
  }, [authenticated])

  const fetchApps = async () => {
    try {
      const response = await fetch('/api/cashback-apps')
      const data = await response.json()
      setApps(data)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching apps:', error)
      // Default apps if API fails
      setApps([
        {
          name: "Rakuten Canada",
          description: "Get cash back at 3,500+ stores including Walmart, Best Buy, and Sephora",
          cashback: "Up to 10%",
          features: ["3,500+ Partner Stores", "$25 Minimum Payout", "Quarterly Payments", "Browser Extension"],
          category: "Online Shopping",
          rating: "4.8/5",
          users: "17M+",
          color: "from-purple-500 to-purple-700",
          bgColor: "from-purple-50 to-purple-100",
          borderColor: "border-purple-200",
          url: "https://www.rakuten.ca/",
          enabled: true
        },
        {
          name: "Checkout 51",
          description: "Canada's original cash back app for groceries and everyday purchases",
          cashback: "Up to $5 per offer",
          features: ["Grocery Focus", "Weekly Offers", "No Minimum Payout", "Receipt Scanning"],
          category: "Grocery",
          rating: "4.6/5",
          users: "2M+",
          color: "from-green-500 to-green-700",
          bgColor: "from-green-50 to-green-100",
          borderColor: "border-green-200",
          url: "https://checkout51.com/",
          enabled: true
        }
      ])
      setLoading(false)
    }
  }

  const saveApps = async () => {
    setSaving(true)
    try {
      const response = await fetch('/api/cashback-apps', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(apps)
      })
      
      const result = await response.json()
      if (result.success) {
        setMessage('✅ Cashback apps updated successfully!')
        setTimeout(() => setMessage(''), 3000)
      } else {
        setMessage('❌ Failed to save changes')
      }
    } catch (error) {
      console.error('Error saving apps:', error)
      setMessage('❌ Error saving changes')
    }
    setSaving(false)
  }

  const updateApp = (updatedApp: CashbackApp) => {
    setApps(apps.map(app => 
      app.name === updatedApp.name ? updatedApp : app
    ))
    setEditingApp(null)
  }

  const toggleAppEnabled = (appName: string) => {
    setApps(apps.map(app => 
      app.name === appName ? { ...app, enabled: !app.enabled } : app
    ))
  }

  // Show login form if not authenticated
  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
        <div className="container mx-auto max-w-md">
          <div className="flex items-center justify-center min-h-screen">
            <Card className="w-full">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-gray-900">
                  👋 Hey Ashly!
                </CardTitle>
                <CardDescription>
                  Enter your password to manage cashback apps
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
                  className="w-full bg-blue-500 hover:bg-blue-600"
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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-center h-64">
            <RefreshCw className="w-8 h-8 animate-spin text-blue-500" />
            <span className="ml-3 text-xl text-gray-600">Loading cashback apps...</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
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
            💰 Manage Cashback Apps
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Edit the apps that show up on your cashback apps page
          </p>
          
          {message && (
            <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-blue-800">
              {message}
            </div>
          )}
          
          <div className="flex justify-center gap-4">
            <Button 
              onClick={saveApps}
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
              onClick={fetchApps}
              variant="outline"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
          </div>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {apps.map((app) => (
            <Card key={app.name} className={`relative ${!app.enabled ? 'opacity-50' : ''} bg-gradient-to-br ${app.bgColor} ${app.borderColor} border-2`}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Badge className={`bg-gradient-to-r ${app.color} text-white text-xs`}>
                      {app.category}
                    </Badge>
                    <button
                      onClick={() => toggleAppEnabled(app.name)}
                      className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
                    >
                      {app.enabled ? (
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
                    onClick={() => setEditingApp(app)}
                  >
                    <Edit3 className="w-4 h-4" />
                  </Button>
                </div>
                
                <CardTitle className="text-lg">{app.name}</CardTitle>
                <CardDescription className="text-sm">
                  {app.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="font-medium">{app.rating}</span>
                    </div>
                    <div className="font-medium text-green-600">{app.cashback}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-1">
                    {app.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-1 text-xs text-gray-600">
                        <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Edit Modal */}
        {editingApp && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <CardHeader>
                <CardTitle>Edit: {editingApp.name}</CardTitle>
                <CardDescription>
                  Update app information that shows on your website
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">App Name</Label>
                    <Input
                      id="name"
                      value={editingApp.name}
                      onChange={(e) => setEditingApp({...editingApp, name: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="cashback">Cashback Amount</Label>
                    <Input
                      id="cashback"
                      value={editingApp.cashback}
                      onChange={(e) => setEditingApp({...editingApp, cashback: e.target.value})}
                      placeholder="e.g. Up to 10%"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={editingApp.description}
                    onChange={(e) => setEditingApp({...editingApp, description: e.target.value})}
                    rows={3}
                  />
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Input
                      id="category"
                      value={editingApp.category}
                      onChange={(e) => setEditingApp({...editingApp, category: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="rating">Rating</Label>
                    <Input
                      id="rating"
                      value={editingApp.rating}
                      onChange={(e) => setEditingApp({...editingApp, rating: e.target.value})}
                      placeholder="4.8/5"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="users">Users</Label>
                    <Input
                      id="users"
                      value={editingApp.users}
                      onChange={(e) => setEditingApp({...editingApp, users: e.target.value})}
                      placeholder="17M+"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="url">Website URL</Label>
                  <Input
                    id="url"
                    value={editingApp.url}
                    onChange={(e) => setEditingApp({...editingApp, url: e.target.value})}
                    placeholder="https://example.com"
                  />
                </div>
                
                <div>
                  <Label htmlFor="features">Features (one per line)</Label>
                  <Textarea
                    id="features"
                    value={editingApp.features.join('\n')}
                    onChange={(e) => setEditingApp({
                      ...editingApp, 
                      features: e.target.value.split('\n').filter(f => f.trim())
                    })}
                    rows={4}
                    placeholder="3,500+ Partner Stores&#10;$25 Minimum Payout&#10;Quarterly Payments&#10;Browser Extension"
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Switch
                    id="enabled"
                    checked={editingApp.enabled}
                    onCheckedChange={(checked) => setEditingApp({...editingApp, enabled: checked})}
                  />
                  <Label htmlFor="enabled">Show this app on website</Label>
                </div>
                
                <div className="flex gap-2 pt-4">
                  <Button 
                    onClick={() => updateApp(editingApp)}
                    className="flex-1"
                  >
                    Save Changes
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setEditingApp(null)}
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
            <CardTitle className="text-blue-800">💡 Tips</CardTitle>
          </CardHeader>
          <CardContent className="text-blue-700">
            <ul className="space-y-2 text-sm">
              <li>• Click <Edit3 className="w-4 h-4 inline" /> to edit any app's information</li>
              <li>• Use the eye icon to show/hide apps from your website</li>
              <li>• Features should be short bullet points (one per line)</li>
              <li>• Changes appear immediately after clicking "Save All Changes"</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}