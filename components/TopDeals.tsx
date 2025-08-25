"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import GroceryFlyersModal from "@/components/modals/GroceryFlyersModal"
import ClearanceDealsModal from "@/components/modals/ClearanceDealsModal"
import PrintableCouponsModal from "@/components/modals/PrintableCouponsModal"
import MailOutCouponsModal from "@/components/modals/MailOutCouponsModal"
import CouponGuideModal from "@/components/modals/CouponGuideModal"
import CashbackAppsModal from "@/components/modals/CashbackAppsModal"
import FreeSamplesModal from "@/components/modals/FreeSamplesModal"

export default function TopDeals() {
  const [groceryModalOpen, setGroceryModalOpen] = useState(false)
  const [clearanceModalOpen, setClearanceModalOpen] = useState(false)
  const [printableCouponsModalOpen, setPrintableCouponsModalOpen] = useState(false)
  const [mailOutCouponsModalOpen, setMailOutCouponsModalOpen] = useState(false)
  const [couponGuideModalOpen, setCouponGuideModalOpen] = useState(false)
  const [cashbackAppsModalOpen, setCashbackAppsModalOpen] = useState(false)
  const [freeSamplesModalOpen, setFreeSamplesModalOpen] = useState(false)
  const deals = [
    {
      title: "Grocery Deals",
      description: "Weekly grocery flyers and deals across Canada",
      savings: "Up to 70% off",
      category: "Food & Groceries",
      color: "from-green-400 to-green-600",
      bgColor: "from-green-50 to-green-100",
      borderColor: "border-green-200",
      action: "modal",
      modal: "grocery"
    },
    {
      title: "Cashback Apps",
      description: "Compare all 8 top Canadian cashback apps in one place - from Rakuten to KOHO",
      savings: "Up to 30% back",
      category: "Cashback Apps",
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-50 to-emerald-100",
      borderColor: "border-green-200",
      action: "modal",
      modal: "cashback-apps"
    },
    {
      title: "Free Samples",
      description: "Best sources for free products and samples across Canada",
      savings: "100% Free",
      category: "Free Samples",
      color: "from-emerald-500 to-teal-600",
      bgColor: "from-emerald-50 to-teal-100",
      borderColor: "border-emerald-200",
      action: "modal",
      modal: "free-samples"
    },
    {
      title: "Online Deals",
      description: "Exclusive promo codes and flash sales from major retailers",
      savings: "Up to 80% off",
      category: "E-commerce",
      color: "from-purple-400 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200",
      link: "https://www.rakuten.ca"
    },
    {
      title: "Clearance Finds",
      description: "Seasonal clearance and end-of-line product discoveries",
      savings: "Up to 90% off",
      category: "Clearance",
      color: "from-amber-400 to-amber-600",
      bgColor: "from-amber-50 to-amber-100",
      borderColor: "border-amber-200",
      action: "modal",
      modal: "clearance"
    },
    {
      title: "Kids & Family",
      description: "Money-saving deals on everything for Canadian families",
      savings: "Family Focused",
      category: "Family",
      color: "from-pink-400 to-pink-600",
      bgColor: "from-pink-50 to-pink-100",
      borderColor: "border-pink-200",
      link: "https://www.toogoodtogo.com/en-ca"
    },
    {
      title: "Printable Coupons",
      description: "Top Canadian coupon sites and cashback programs",
      savings: "Free Coupons",
      category: "Coupons",
      color: "from-indigo-400 to-purple-600",
      bgColor: "from-indigo-50 to-purple-100",
      borderColor: "border-indigo-200",
      action: "modal",
      modal: "printable"
    },
    {
      title: "Mail-Out Coupons",
      description: "Companies that send free coupons and samples by mail",
      savings: "Direct Mail",
      category: "Coupons",
      color: "from-emerald-400 to-teal-600",
      bgColor: "from-emerald-50 to-teal-100",
      borderColor: "border-emerald-200",
      action: "modal",
      modal: "mailout"
    },
    {
      title: "Coupon Guide",
      description: "Complete beginner's guide to couponing in Canada",
      savings: "Learn & Save",
      category: "Education",
      color: "from-rose-400 to-pink-600",
      bgColor: "from-rose-50 to-pink-100",
      borderColor: "border-rose-200",
      action: "modal",
      modal: "guide"
    }
  ]

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
                      onClick={() => {
                        if (deal.modal === 'grocery') {
                          setGroceryModalOpen(true)
                        } else if (deal.modal === 'clearance') {
                          setClearanceModalOpen(true)
                        } else if (deal.modal === 'printable') {
                          setPrintableCouponsModalOpen(true)
                        } else if (deal.modal === 'mailout') {
                          setMailOutCouponsModalOpen(true)
                        } else if (deal.modal === 'guide') {
                          setCouponGuideModalOpen(true)
                        } else if (deal.modal === 'cashback-apps') {
                          setCashbackAppsModalOpen(true)
                        } else if (deal.modal === 'free-samples') {
                          setFreeSamplesModalOpen(true)
                        }
                      }}
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
      
      {/* Modals */}
      <GroceryFlyersModal 
        isOpen={groceryModalOpen}
        onClose={() => setGroceryModalOpen(false)}
      />
      <ClearanceDealsModal
        isOpen={clearanceModalOpen}
        onClose={() => setClearanceModalOpen(false)}
      />
      <PrintableCouponsModal
        isOpen={printableCouponsModalOpen}
        onClose={() => setPrintableCouponsModalOpen(false)}
      />
      <MailOutCouponsModal
        isOpen={mailOutCouponsModalOpen}
        onClose={() => setMailOutCouponsModalOpen(false)}
      />
      <CouponGuideModal
        isOpen={couponGuideModalOpen}
        onClose={() => setCouponGuideModalOpen(false)}
      />
      <CashbackAppsModal
        isOpen={cashbackAppsModalOpen}
        onClose={() => setCashbackAppsModalOpen(false)}
      />
      <FreeSamplesModal
        isOpen={freeSamplesModalOpen}
        onClose={() => setFreeSamplesModalOpen(false)}
      />
    </section>
  )
}