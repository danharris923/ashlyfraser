'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Save, Edit3, Eye, EyeOff, RefreshCw, ArrowLeft, Gift } from 'lucide-react'
import { Badge } from "@/components/ui/badge"

interface FreeSample {
  name: string
  description: string
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

export default function FreeSamplesAdmin() {
  const [samples, setSamples] = useState<FreeSample[]>([])
  const [editingSample, setEditingSample] = useState<FreeSample | null>(null)
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
      fetchSamples()
    }
  }, [authenticated])

  const fetchSamples = async () => {
    try {
      const response = await fetch('/api/free-samples')
      const data = await response.json()
      setSamples(data)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching samples:', error)
      // Default samples if API fails
      setSamples([
        {
          name: "SampleSource Canada",
          description: "Canada's leading sample platform with thousands of free products from major brands",
          features: ["5,000+ Active Samples", "Major Brand Partners", "Health & Beauty Focus", "Fast Shipping"],
          category: "Platform",
          rating: "4.8/5",
          users: "500K+",
          color: "from-blue-500 to-blue-700",
          bgColor: "from-blue-50 to-blue-100",
          borderColor: "border-blue-200",
          url: "https://samplesource.com/en-ca/",
          enabled: true
        },
        {
          name: "GetMeFreeSamples",
          description: "Curated directory of the best free samples available to Canadians",
          features: ["Daily Sample Updates", "Verified Offers Only", "Category Filters", "Mobile Optimized"],
          category: "Directory",
          rating: "4.6/5",
          users: "250K+",
          color: "from-green-500 to-green-700",
          bgColor: "from-green-50 to-green-100",
          borderColor: "border-green-200",
          url: "https://getmefreesamples.com/",
          enabled: true
        }
      ])
      setLoading(false)
    }
  }

  const saveSamples = async () => {
    setSaving(true)
    try {
      const response = await fetch('/api/free-samples', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(samples)
      })
      
      const result = await response.json()
      if (result.success) {
        setMessage('✅ Free samples updated successfully!')
        setTimeout(() => setMessage(''), 3000)
      } else {
        setMessage('❌ Failed to save changes')
      }
    } catch (error) {
      console.error('Error saving samples:', error)
      setMessage('❌ Error saving changes')
    }
    setSaving(false)
  }

  const updateSample = (updatedSample: FreeSample) => {
    setSamples(samples.map(sample => 
      sample.name === updatedSample.name ? updatedSample : sample
    ))
    setEditingSample(null)
  }

  const toggleSampleEnabled = (sampleName: string) => {
    setSamples(samples.map(sample => 
      sample.name === sampleName ? { ...sample, enabled: !sample.enabled } : sample
    ))
  }

  // Show login form if not authenticated
  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 p-4">
        <div className="container mx-auto max-w-md">
          <div className="flex items-center justify-center min-h-screen">
            <Card className="w-full">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-gray-900">
                  👋 Hey Ashly!
                </CardTitle>
                <CardDescription>
                  Enter your password to manage free samples
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
                  className="w-full bg-emerald-500 hover:bg-emerald-600"
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
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 p-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-center h-64">
            <RefreshCw className="w-8 h-8 animate-spin text-emerald-500" />
            <span className="ml-3 text-xl text-gray-600">Loading free samples...</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 p-4">
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
            🎁 Manage Free Samples
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Edit the sample sources that show up on your free samples page
          </p>
          
          {message && (
            <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-blue-800">
              {message}
            </div>
          )}
          
          <div className="flex justify-center gap-4">
            <Button 
              onClick={saveSamples}
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
              onClick={fetchSamples}
              variant="outline"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
          </div>
        </div>

        {/* Samples Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {samples.map((sample) => (
            <Card key={sample.name} className={`relative ${!sample.enabled ? 'opacity-50' : ''} bg-gradient-to-br ${sample.bgColor} ${sample.borderColor} border-2`}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Badge className={`bg-gradient-to-r ${sample.color} text-white text-xs`}>
                      {sample.category}
                    </Badge>
                    <button
                      onClick={() => toggleSampleEnabled(sample.name)}
                      className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
                    >
                      {sample.enabled ? (
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
                    onClick={() => setEditingSample(sample)}
                  >
                    <Edit3 className="w-4 h-4" />
                  </Button>
                </div>
                
                <CardTitle className="text-lg">{sample.name}</CardTitle>
                <CardDescription className="text-sm">
                  {sample.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{sample.rating}</span>
                    <span className="text-gray-600">{sample.users} users</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-1">
                    {sample.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-1 text-xs text-gray-600">
                        <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
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
        {editingSample && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <CardHeader>
                <CardTitle>Edit: {editingSample.name}</CardTitle>
                <CardDescription>
                  Update sample source information that shows on your website
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Source Name</Label>
                    <Input
                      id="name"
                      value={editingSample.name}
                      onChange={(e) => setEditingSample({...editingSample, name: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Input
                      id="category"
                      value={editingSample.category}
                      onChange={(e) => setEditingSample({...editingSample, category: e.target.value})}
                      placeholder="e.g. Platform, Directory, Family"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={editingSample.description}
                    onChange={(e) => setEditingSample({...editingSample, description: e.target.value})}
                    rows={3}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="rating">Rating</Label>
                    <Input
                      id="rating"
                      value={editingSample.rating}
                      onChange={(e) => setEditingSample({...editingSample, rating: e.target.value})}
                      placeholder="4.8/5"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="users">Users</Label>
                    <Input
                      id="users"
                      value={editingSample.users}
                      onChange={(e) => setEditingSample({...editingSample, users: e.target.value})}
                      placeholder="500K+"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="url">Website URL</Label>
                  <Input
                    id="url"
                    value={editingSample.url}
                    onChange={(e) => setEditingSample({...editingSample, url: e.target.value})}
                    placeholder="https://example.com"
                  />
                </div>
                
                <div>
                  <Label htmlFor="features">Features (one per line)</Label>
                  <Textarea
                    id="features"
                    value={editingSample.features.join('\n')}
                    onChange={(e) => setEditingSample({
                      ...editingSample, 
                      features: e.target.value.split('\n').filter(f => f.trim())
                    })}
                    rows={4}
                    placeholder="5,000+ Active Samples&#10;Major Brand Partners&#10;Health & Beauty Focus&#10;Fast Shipping"
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Switch
                    id="enabled"
                    checked={editingSample.enabled}
                    onCheckedChange={(checked) => setEditingSample({...editingSample, enabled: checked})}
                  />
                  <Label htmlFor="enabled">Show this source on website</Label>
                </div>
                
                <div className="flex gap-2 pt-4">
                  <Button 
                    onClick={() => updateSample(editingSample)}
                    className="flex-1"
                  >
                    Save Changes
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setEditingSample(null)}
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
        <Card className="mt-8 bg-emerald-50 border-emerald-200">
          <CardHeader>
            <CardTitle className="text-emerald-800">💡 Tips</CardTitle>
          </CardHeader>
          <CardContent className="text-emerald-700">
            <ul className="space-y-2 text-sm">
              <li>• Click <Edit3 className="w-4 h-4 inline" /> to edit any sample source</li>
              <li>• Use the eye icon to show/hide sources from your website</li>
              <li>• Features should be short descriptive points (one per line)</li>
              <li>• Changes appear immediately after clicking "Save All Changes"</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}