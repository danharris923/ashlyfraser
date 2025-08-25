'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Save, RefreshCw, ArrowLeft, FileText } from 'lucide-react'

interface SiteContent {
  hero: {
    title: string
    subtitle: string
    description: string
  }
  about: {
    experience: string
    followers: string
    mediaTitle: string
  }
  dealsSection: {
    title: string
    subtitle: string
  }
}

export default function ContentAdmin() {
  const [content, setContent] = useState<SiteContent>({
    hero: {
      title: "Follow Canada's Favorite Deal Finder",
      subtitle: "Hi, I'm Ashly Fraser — Canada's top couponing and deal-finding influencer. 🇨🇦 I help thousands of families save money every day through smart shopping, exclusive deals, and proven money-saving strategies.",
      description: "From finding the best freebies to uncovering hidden discounts, I share daily deals that put real money back in your pocket. Join my community of savvy shoppers and never pay full price again!"
    },
    about: {
      experience: "10+ Years Deal Expertise",
      followers: "100K+ Social Followers",
      mediaTitle: "Featured In"
    },
    dealsSection: {
      title: "Top Grocery Deals",
      subtitle: "Discover the latest money-saving opportunities handpicked by Canada's deal-finding expert"
    }
  })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')
  const [authenticated, setAuthenticated] = useState(false)
  const [password, setPassword] = useState('')

  const ADMIN_PASSWORD = 'ashly2024'

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
      fetchContent()
    }
  }, [authenticated])

  const fetchContent = async () => {
    try {
      const response = await fetch('/api/content')
      const data = await response.json()
      setContent(data)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching content:', error)
      setLoading(false)
    }
  }

  const saveContent = async () => {
    setSaving(true)
    try {
      const response = await fetch('/api/content', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(content)
      })
      
      const result = await response.json()
      if (result.success) {
        setMessage('✅ Content updated successfully!')
        setTimeout(() => setMessage(''), 3000)
      } else {
        setMessage('❌ Failed to save changes')
      }
    } catch (error) {
      console.error('Error saving content:', error)
      setMessage('❌ Error saving changes')
    }
    setSaving(false)
  }

  // Show login form if not authenticated
  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-4">
        <div className="container mx-auto max-w-md">
          <div className="flex items-center justify-center min-h-screen">
            <Card className="w-full">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-gray-900">
                  👋 Hey Ashly!
                </CardTitle>
                <CardDescription>
                  Enter your password to manage page content
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
                  className="w-full bg-purple-500 hover:bg-purple-600"
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
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-center h-64">
            <RefreshCw className="w-8 h-8 animate-spin text-purple-500" />
            <span className="ml-3 text-xl text-gray-600">Loading content...</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-4">
      <div className="container mx-auto max-w-4xl">
        
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
            📝 Manage Page Content
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Edit the text that appears on your website pages
          </p>
          
          {message && (
            <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-blue-800">
              {message}
            </div>
          )}
          
          <div className="flex justify-center gap-4">
            <Button 
              onClick={saveContent}
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
              onClick={fetchContent}
              variant="outline"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-6">
          
          {/* Hero Section */}
          <Card className="border-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-purple-500" />
                Hero Section (Top of homepage)
              </CardTitle>
              <CardDescription>
                This is the first thing people see when they visit your website
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="hero-title">Main Title</Label>
                <Input
                  id="hero-title"
                  value={content.hero.title}
                  onChange={(e) => setContent({
                    ...content,
                    hero: { ...content.hero, title: e.target.value }
                  })}
                  placeholder="Follow Canada's Favorite Deal Finder"
                />
              </div>
              
              <div>
                <Label htmlFor="hero-subtitle">Subtitle (Main description)</Label>
                <Textarea
                  id="hero-subtitle"
                  value={content.hero.subtitle}
                  onChange={(e) => setContent({
                    ...content,
                    hero: { ...content.hero, subtitle: e.target.value }
                  })}
                  rows={3}
                  placeholder="Hi, I'm Ashly Fraser — Canada's top couponing..."
                />
              </div>
              
              <div>
                <Label htmlFor="hero-description">Additional Description</Label>
                <Textarea
                  id="hero-description"
                  value={content.hero.description}
                  onChange={(e) => setContent({
                    ...content,
                    hero: { ...content.hero, description: e.target.value }
                  })}
                  rows={3}
                  placeholder="From finding the best freebies to uncovering..."
                />
              </div>
            </CardContent>
          </Card>

          {/* About Section */}
          <Card className="border-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-purple-500" />
                About Section Stats
              </CardTitle>
              <CardDescription>
                Your credentials and achievements
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="experience">Years of Experience</Label>
                  <Input
                    id="experience"
                    value={content.about.experience}
                    onChange={(e) => setContent({
                      ...content,
                      about: { ...content.about, experience: e.target.value }
                    })}
                    placeholder="10+ Years Deal Expertise"
                  />
                </div>
                
                <div>
                  <Label htmlFor="followers">Social Media Followers</Label>
                  <Input
                    id="followers"
                    value={content.about.followers}
                    onChange={(e) => setContent({
                      ...content,
                      about: { ...content.about, followers: e.target.value }
                    })}
                    placeholder="100K+ Social Followers"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="media-title">Media Section Title</Label>
                <Input
                  id="media-title"
                  value={content.about.mediaTitle}
                  onChange={(e) => setContent({
                    ...content,
                    about: { ...content.about, mediaTitle: e.target.value }
                  })}
                  placeholder="Featured In"
                />
              </div>
            </CardContent>
          </Card>

          {/* Deals Section */}
          <Card className="border-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-purple-500" />
                Deals Section
              </CardTitle>
              <CardDescription>
                The heading for your deals section
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="deals-title">Section Title</Label>
                <Input
                  id="deals-title"
                  value={content.dealsSection.title}
                  onChange={(e) => setContent({
                    ...content,
                    dealsSection: { ...content.dealsSection, title: e.target.value }
                  })}
                  placeholder="Top Grocery Deals"
                />
              </div>
              
              <div>
                <Label htmlFor="deals-subtitle">Section Subtitle</Label>
                <Textarea
                  id="deals-subtitle"
                  value={content.dealsSection.subtitle}
                  onChange={(e) => setContent({
                    ...content,
                    dealsSection: { ...content.dealsSection, subtitle: e.target.value }
                  })}
                  rows={2}
                  placeholder="Discover the latest money-saving opportunities..."
                />
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Help Section */}
        <Card className="mt-8 bg-purple-50 border-purple-200">
          <CardHeader>
            <CardTitle className="text-purple-800">💡 Tips</CardTitle>
          </CardHeader>
          <CardContent className="text-purple-700">
            <ul className="space-y-2 text-sm">
              <li>• Keep your main title short and catchy (under 10 words)</li>
              <li>• Use the subtitle to explain who you are and what you do</li>
              <li>• Stats should be accurate and impressive (like "10+ Years")</li>
              <li>• Changes appear immediately after clicking "Save All Changes"</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}