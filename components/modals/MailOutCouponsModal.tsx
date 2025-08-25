'use client'

import { useEffect } from 'react'
import { ArrowLeft, Mail, Phone, MapPin, ExternalLink, Building2, Instagram, Facebook, MessageCircle, Youtube, AtSign } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface MailOutCouponsModalProps {
  isOpen: boolean
  onClose: () => void
}

const couponCompanies = [
  {
    category: 'Food & Beverage Companies',
    companies: [
      {
        name: 'Kraft Heinz Canada',
        address: '95 Moatfield Drive, Toronto, ON M3B 3L6',
        phone: '1-800-567-KRAFT (5738)',
        email: 'consumer.relations@kraftheinz.com',
        website: 'https://kraftheinzcompany.ca',
        products: 'Kraft Mac & Cheese, Heinz Ketchup, Philadelphia Cream Cheese',
        tips: 'Include your receipt and mention specific products you buy regularly'
      },
      {
        name: 'General Mills Canada',
        address: '5825 Explorer Drive, Mississauga, ON L4W 0C6',
        phone: '1-800-387-3074',
        email: 'consumer.services@genmills.com',
        website: 'https://generalmills.ca',
        products: 'Cheerios, Betty Crocker, Pillsbury, Nature Valley',
        tips: 'Request coupons for new product launches and seasonal items'
      },
      {
        name: 'Nestle Canada',
        address: '25 Sheppard Avenue West, Toronto, ON M2N 6S8',
        phone: '1-800-387-4636',
        email: 'consumer.services@ca.nestle.com',
        website: 'https://nestle.ca',
        products: 'KitKat, Smarties, Coffee-Mate, Lean Cuisine',
        tips: 'Mention allergies or dietary restrictions for targeted offers'
      },
      {
        name: 'Unilever Canada',
        address: '160 Bloor Street East, Toronto, ON M4W 3R2',
        phone: '1-800-598-1223',
        email: 'customer.care.ca@unilever.com',
        website: 'https://unilever.ca',
        products: 'Dove, Axe, Hellmann\'s, Ben & Jerry\'s',
        tips: 'Ask about loyalty programs and exclusive member offers'
      }
    ]
  },
  {
    category: 'Personal Care & Household',
    companies: [
      {
        name: 'Procter & Gamble Canada',
        address: '4711 Yonge Street, Toronto, ON M2N 6K8',
        phone: '1-800-668-0151',
        email: 'pgcanada.im@pg.com',
        website: 'https://pg.ca',
        products: 'Tide, Pampers, Crest, Head & Shoulders',
        tips: 'Join P&G Good Everyday for automatic coupon delivery'
      },
      {
        name: 'Johnson & Johnson Canada',
        address: '88 McNabb Street, Markham, ON L3R 5L2',
        phone: '1-800-265-7323',
        email: 'customercare@jjci.com',
        website: 'https://jnj.ca',
        products: 'Johnson\'s Baby, Band-Aid, Tylenol, Neutrogena',
        tips: 'Mention if you have a newborn for baby product samples'
      },
      {
        name: 'Colgate-Palmolive Canada',
        address: '1 Colgate Way, Morristown, NJ 07960 USA',
        phone: '1-800-468-6502',
        email: 'consumer_canada@colpal.com',
        website: 'https://colgate.ca',
        products: 'Colgate Toothpaste, Palmolive Dish Soap, Irish Spring',
        tips: 'Request coupons for professional dental recommendations'
      },
      {
        name: 'SC Johnson Canada',
        address: '1 Webster Street, Brantford, ON N3T 5R1',
        phone: '1-800-558-5252',
        email: 'canada@scj.com',
        website: 'https://scjohnson.ca',
        products: 'Windex, Glade, Raid, Ziploc',
        tips: 'Ask about seasonal cleaning product promotions'
      }
    ]
  },
  {
    category: 'Pet Care & Baby Products',
    companies: [
      {
        name: 'Mars Petcare Canada',
        address: '36 York Mills Road, Toronto, ON M2P 2A5',
        phone: '1-800-525-5273',
        email: 'consumer.care.ca@effem.com',
        website: 'https://mars.ca',
        products: 'Pedigree, Whiskas, Royal Canin, Greenies',
        tips: 'Include photos of your pets and their ages for targeted offers'
      },
      {
        name: 'Kimberly-Clark Canada',
        address: '50 Burnhamthorpe Road West, Mississauga, ON L5B 3C2',
        phone: '1-800-663-4340',
        email: 'consumer.care.canada@kcc.com',
        website: 'https://kimberly-clark.ca',
        products: 'Huggies, Pull-Ups, Kleenex, Kotex',
        tips: 'Join Huggies Rewards for ongoing coupon offers'
      }
    ]
  }
]

export default function MailOutCouponsModal({ isOpen, onClose }: MailOutCouponsModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={handleBackdropClick}
    >
      <div className="fixed inset-0 flex flex-col bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 animate-in slide-in-from-bottom duration-300 md:animate-in md:slide-in-from-bottom-4 md:fade-in md:zoom-in-95 md:inset-4 md:rounded-2xl md:shadow-2xl">
        
        {/* Mobile Header with Android-style back button */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-emerald-200">
          <div className="flex items-center h-14 px-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="mr-3 p-2 hover:bg-emerald-100 rounded-full"
            >
              <ArrowLeft className="w-5 h-5 text-emerald-700" />
            </Button>
            <div className="flex-1">
              <h1 className="text-lg font-semibold text-emerald-800">Mail-Out Coupons</h1>
              <p className="text-xs text-emerald-600">Canadian company contacts</p>
            </div>
            <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs px-2 py-1">
              Free Mail
            </Badge>
          </div>
        </div>

        {/* Content with overscroll behavior */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-4 pb-4">
          <div className="pt-4 space-y-6">
            {/* Intro text */}
            <div className="text-center">
              <p className="text-sm text-gray-700 font-medium mb-1">
                Contact these Canadian companies directly for mail-out coupons and samples
              </p>
              <p className="text-xs text-gray-600">
                Write a polite letter mentioning you're a loyal customer
              </p>
            </div>

            {/* Pro Tips */}
            <div className="p-4 bg-gradient-to-r from-yellow-100 to-amber-100 rounded-xl border-2 border-yellow-200">
              <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center gap-2">
                💡 Pro Tips for Success
              </h3>
              <div className="grid grid-cols-1 gap-2 text-xs text-gray-700">
                <div>• Include a self-addressed stamped envelope (SASE)</div>
                <div>• Mention specific products you purchase regularly</div>
                <div>• Include receipts showing recent purchases</div>
                <div>• Ask about new product launches</div>
              </div>
            </div>

            {/* Company Categories */}
            {couponCompanies.map((section) => (
              <div key={section.category}>
                <h2 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-emerald-500" />
                  {section.category}
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  {section.companies.map((company) => (
                    <Card 
                      key={company.name}
                      className="group hover:shadow-lg transition-all duration-200 border-emerald-100 hover:border-emerald-300 bg-white/80 backdrop-blur-sm active:scale-95"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-sm font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                            {company.name}
                          </h3>
                          <ExternalLink className="w-3 h-3 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        
                        <div className="space-y-2 mb-3 text-xs">
                          <div className="flex items-start gap-2">
                            <MapPin className="w-3 h-3 text-emerald-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{company.address}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="w-3 h-3 text-emerald-500" />
                            <span className="text-gray-600">{company.phone}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail className="w-3 h-3 text-emerald-500" />
                            <span className="text-gray-600 break-all">{company.email}</span>
                          </div>
                        </div>

                        <div className="mb-3">
                          <h4 className="font-medium text-gray-800 mb-1 text-xs">Popular Products:</h4>
                          <p className="text-gray-600 text-xs">{company.products}</p>
                        </div>

                        <div className="mb-3 p-3 bg-emerald-50 rounded-lg">
                          <h4 className="font-medium text-emerald-800 mb-1 text-xs">💡 Tip:</h4>
                          <p className="text-emerald-700 text-xs">{company.tips}</p>
                        </div>

                        <div className="flex gap-2">
                          <Button 
                            size="sm"
                            className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-xs h-8"
                            onClick={() => window.open(`mailto:${company.email}`, '_blank')}
                          >
                            <Mail className="w-3 h-3 mr-1" />
                            Email
                          </Button>
                          <Button 
                            variant="outline"
                            size="sm"
                            className="flex-1 border-emerald-300 text-emerald-600 hover:bg-emerald-50 text-xs h-8"
                            onClick={() => window.open(company.website, '_blank')}
                          >
                            Website
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}

            {/* Sample Letter Template */}
            <div className="p-4 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-xl border-2 border-emerald-200">
              <h3 className="text-base font-bold text-gray-900 mb-3">
                📝 Sample Letter Template
              </h3>
              <div className="bg-white p-4 rounded-lg border border-emerald-200 text-xs text-gray-700">
                <p className="mb-2"><strong>Dear [Company Name] Consumer Relations,</strong></p>
                <p className="mb-2">I am a loyal customer who regularly purchases your products, including [specific product names]. I have been using your products for [time period] and am very satisfied with their quality.</p>
                <p className="mb-2">I would greatly appreciate any coupons, samples, or promotional offers you might be able to send me. I am always eager to try new products from your company.</p>
                <p className="mb-2">Thank you for your time and consideration. I have included a self-addressed stamped envelope for your convenience.</p>
                <p>Sincerely,<br/>[Your Name]<br/>[Your Address]</p>
              </div>
            </div>

            {/* Footer CTA */}
            <div className="p-6 bg-gradient-to-r from-emerald-100 to-cyan-100 rounded-xl border-2 border-emerald-200">
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  📬 Start Your Coupon Collection Today!
                </h3>
                <p className="text-sm text-gray-700 mb-4">
                  Follow Ashly for more money-saving tips and coupon strategies
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Button 
                    className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-medium px-4 py-3 rounded-xl text-sm active:scale-95 transition-transform flex items-center gap-2"
                    onClick={() => window.open('https://instagram.com/ashly__savingsguruca', '_blank')}
                  >
                    <Instagram className="w-4 h-4" />
                    Instagram
                  </Button>
                  <Button 
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium px-4 py-3 rounded-xl text-sm active:scale-95 transition-transform flex items-center gap-2"
                    onClick={() => window.open('https://www.facebook.com/ashly.fraser.96/', '_blank')}
                  >
                    <Facebook className="w-4 h-4" />
                    Facebook
                  </Button>
                  <Button 
                    className="bg-gradient-to-r from-gray-800 to-black hover:from-gray-900 hover:to-gray-800 text-white font-medium px-4 py-3 rounded-xl text-sm active:scale-95 transition-transform flex items-center gap-2"
                    onClick={() => window.open('https://tiktok.com/@savingsguru', '_blank')}
                  >
                    <MessageCircle className="w-4 h-4" />
                    TikTok
                  </Button>
                  <Button 
                    className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-medium px-4 py-3 rounded-xl text-sm active:scale-95 transition-transform flex items-center gap-2"
                    onClick={() => window.open('https://www.youtube.com/channel/UCbVX-yAa2etLXvkYGx1C_Dw', '_blank')}
                  >
                    <Youtube className="w-4 h-4" />
                    YouTube
                  </Button>
                  <Button 
                    className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium px-4 py-3 rounded-xl text-sm active:scale-95 transition-transform flex items-center gap-2"
                    onClick={() => window.open('https://www.threads.com/@ashly_savingsguruca', '_blank')}
                  >
                    <AtSign className="w-4 h-4" />
                    Threads
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}