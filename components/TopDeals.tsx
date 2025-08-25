"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"
import GroceryFlyersModal from "@/components/modals/GroceryFlyersModal"

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

export default function TopDeals() {
  const router = useRouter()
  const [groceryModalOpen, setGroceryModalOpen] = useState(false)
  const [deals, setDeals] = useState<Deal[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchDeals()
  }, [])

  const fetchDeals = async () => {
    try {
      const response = await fetch('/api/deals')
      const data = await response.json()
      setDeals(data.filter((deal: Deal) => deal.enabled))
      setLoading(false)
    } catch (error) {
      console.error('Error fetching deals:', error)
      // Fallback to empty array
      setDeals([])
      setLoading(false)
    }
  }

  // Show loading state
  if (loading) {
    return (
      <section id="deals" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading deals...</p>
          </div>
        </div>
      </section>
    )
  }

  const handleModalOpen = (modalType: string) => {
    if (modalType === 'grocery') {
      setGroceryModalOpen(true)
    } else if (modalType === 'cashback-apps') {
      router.push('/deals/cashback-apps')
    } else if (modalType === 'free-samples') {
      router.push('/deals/free-samples')
    } else if (modalType === 'clearance') {
      router.push('/deals/clearance-deals')
    } else if (modalType === 'guide') {
      router.push('/deals/coupon-stacking')
    }
  }

  return (
    <section id="deals" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Top{" "}
            <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Grocery Deals
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the latest money-saving opportunities handpicked by Canada's deal-finding expert
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((deal, index) => (
            <motion.div
              key={deal.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full bg-gradient-to-br ${deal.bgColor} ${deal.borderColor} border-2 hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${deal.color}`}>
                      {deal.category}
                    </span>
                    <span className="text-lg font-bold text-gray-700">{deal.savings}</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{deal.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    {deal.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  {deal.action === 'modal' ? (
                    <Button 
                      className={`w-full bg-gradient-to-r ${deal.color} hover:opacity-90 text-white font-semibold py-3 rounded-xl transition-all duration-300`}
                      onClick={() => handleModalOpen(deal.modal || '')}
                    >
                      View Deals
                    </Button>
                  ) : deal.link?.startsWith('http') ? (
                    <a href={deal.link} target="_blank" rel="noopener noreferrer" className="block">
                      <Button 
                        className={`w-full bg-gradient-to-r ${deal.color} hover:opacity-90 text-white font-semibold py-3 rounded-xl transition-all duration-300`}
                      >
                        View Deals
                      </Button>
                    </a>
                  ) : (
                    <Link href={deal.link || "/flyers"} className="block">
                      <Button 
                        className={`w-full bg-gradient-to-r ${deal.color} hover:opacity-90 text-white font-semibold py-3 rounded-xl transition-all duration-300`}
                      >
                        View Deals
                      </Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 text-white px-8 py-4 text-lg font-bold rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-xl"
            onClick={() => setGroceryModalOpen(true)}
          >
            Browse Grocery Deals →
          </Button>
        </motion.div>
      </div>
      
      {/* Only grocery modal remains - others are now pages */}
      <GroceryFlyersModal 
        isOpen={groceryModalOpen}
        onClose={() => setGroceryModalOpen(false)}
      />
    </section>
  )
}