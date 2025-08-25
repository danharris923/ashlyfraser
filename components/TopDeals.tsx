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
import RakutenModal from "@/components/modals/RakutenModal"
import GCRModal from "@/components/modals/GCRModal"
import Checkout51Modal from "@/components/modals/Checkout51Modal"
import DropModal from "@/components/modals/DropModal"
import CaddleModal from "@/components/modals/CaddleModal"
import AmpliModal from "@/components/modals/AmpliModal"
import PaymiModal from "@/components/modals/PaymiModal"
import KOHOModal from "@/components/modals/KOHOModal"
import SampleSourceModal from "@/components/modals/SampleSourceModal"
import GetMeFreeSamplesModal from "@/components/modals/GetMeFreeSamplesModal"
import CanadianParentModal from "@/components/modals/CanadianParentModal"

export default function TopDeals() {
  const [groceryModalOpen, setGroceryModalOpen] = useState(false)
  const [clearanceModalOpen, setClearanceModalOpen] = useState(false)
  const [printableCouponsModalOpen, setPrintableCouponsModalOpen] = useState(false)
  const [mailOutCouponsModalOpen, setMailOutCouponsModalOpen] = useState(false)
  const [couponGuideModalOpen, setCouponGuideModalOpen] = useState(false)
  const [rakutenModalOpen, setRakutenModalOpen] = useState(false)
  const [gcrModalOpen, setGCRModalOpen] = useState(false)
  const [checkout51ModalOpen, setCheckout51ModalOpen] = useState(false)
  const [dropModalOpen, setDropModalOpen] = useState(false)
  const [caddleModalOpen, setCaddleModalOpen] = useState(false)
  const [ampliModalOpen, setAmpliModalOpen] = useState(false)
  const [paymiModalOpen, setPaymiModalOpen] = useState(false)
  const [kohoModalOpen, setKohoModalOpen] = useState(false)
  const [sampleSourceModalOpen, setSampleSourceModalOpen] = useState(false)
  const [getMeFreeSamplesModalOpen, setGetMeFreeSamplesModalOpen] = useState(false)
  const [canadianParentModalOpen, setCanadianParentModalOpen] = useState(false)
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
      title: "SampleSource Canada",
      description: "Canada's #1 free sample platform with 4 campaigns yearly",
      savings: "100% Free",
      category: "Sample Platform",
      color: "from-rose-500 to-pink-500",
      bgColor: "from-rose-50 to-pink-50",
      borderColor: "border-rose-200",
      action: "modal",
      modal: "samplesource"
    },
    {
      title: "GetMeFreeSamples",
      description: "Daily updated directory of free samples by mail",
      savings: "Daily updates",
      category: "Sample Directory",
      color: "from-green-600 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      action: "modal",
      modal: "getmefreesamples"
    },
    {
      title: "Canadian Parent",
      description: "Curated family-focused freebies and sample offers",
      savings: "Family focus",
      category: "Family Samples",
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-50 to-rose-50",
      borderColor: "border-pink-200",
      action: "modal",
      modal: "canadianparent"
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
      title: "Rakuten Canada",
      description: "Get paid to shop online at 750+ Canadian stores",
      savings: "Up to 10% back",
      category: "Online Cashback",
      color: "from-purple-400 to-red-500",
      bgColor: "from-purple-50 to-red-50",
      borderColor: "border-purple-200",
      action: "modal",
      modal: "rakuten"
    },
    {
      title: "Great Canadian Rebates",
      description: "Higher cashback rates than competitors",
      savings: "Up to 15% back",
      category: "Premium Cashback",
      color: "from-red-500 to-red-600",
      bgColor: "from-red-50 to-red-100",
      borderColor: "border-red-200",
      action: "modal",
      modal: "gcr"
    },
    {
      title: "Checkout 51",
      description: "Scan grocery receipts for instant cashback",
      savings: "Weekly offers",
      category: "Grocery Cashback",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      action: "modal",
      modal: "checkout51"
    },
    {
      title: "Drop App",
      description: "Earn points on everyday purchases automatically",
      savings: "Gift cards",
      category: "Points Rewards",
      color: "from-blue-500 to-purple-500",
      bgColor: "from-blue-50 to-purple-50",
      borderColor: "border-blue-200",
      action: "modal",
      modal: "drop"
    },
    {
      title: "Caddle",
      description: "Surveys + grocery cashback, Canadian-owned",
      savings: "2 ways to earn",
      category: "Surveys + Cashback",
      color: "from-orange-500 to-amber-500",
      bgColor: "from-orange-50 to-amber-50",
      borderColor: "border-orange-200",
      action: "modal",
      modal: "caddle"
    },
    {
      title: "Ampli by RBC",
      description: "Automatic cashback with bank-grade security",
      savings: "Auto cashback",
      category: "Banking Cashback",
      color: "from-blue-600 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-200",
      action: "modal",
      modal: "ampli"
    },
    {
      title: "Paymi",
      description: "Passive automatic cashback with multi-bank support",
      savings: "Set & forget",
      category: "Passive Cashback",
      color: "from-teal-500 to-cyan-500",
      bgColor: "from-teal-50 to-cyan-50",
      borderColor: "border-teal-200",
      action: "modal",
      modal: "paymi"
    },
    {
      title: "KOHO",
      description: "Banking + budgeting + cashback all-in-one",
      savings: "Up to 2%",
      category: "Banking + Cashback",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-50 to-teal-50",
      borderColor: "border-emerald-200",
      action: "modal",
      modal: "koho"
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
                        } else if (deal.modal === 'rakuten') {
                          setRakutenModalOpen(true)
                        } else if (deal.modal === 'gcr') {
                          setGCRModalOpen(true)
                        } else if (deal.modal === 'checkout51') {
                          setCheckout51ModalOpen(true)
                        } else if (deal.modal === 'drop') {
                          setDropModalOpen(true)
                        } else if (deal.modal === 'caddle') {
                          setCaddleModalOpen(true)
                        } else if (deal.modal === 'ampli') {
                          setAmpliModalOpen(true)
                        } else if (deal.modal === 'paymi') {
                          setPaymiModalOpen(true)
                        } else if (deal.modal === 'koho') {
                          setKohoModalOpen(true)
                        } else if (deal.modal === 'samplesource') {
                          setSampleSourceModalOpen(true)
                        } else if (deal.modal === 'getmefreesamples') {
                          setGetMeFreeSamplesModalOpen(true)
                        } else if (deal.modal === 'canadianparent') {
                          setCanadianParentModalOpen(true)
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
      <RakutenModal
        isOpen={rakutenModalOpen}
        onClose={() => setRakutenModalOpen(false)}
      />
      <GCRModal
        isOpen={gcrModalOpen}
        onClose={() => setGCRModalOpen(false)}
      />
      <Checkout51Modal
        isOpen={checkout51ModalOpen}
        onClose={() => setCheckout51ModalOpen(false)}
      />
      <DropModal
        isOpen={dropModalOpen}
        onClose={() => setDropModalOpen(false)}
      />
      <CaddleModal
        isOpen={caddleModalOpen}
        onClose={() => setCaddleModalOpen(false)}
      />
      <AmpliModal
        isOpen={ampliModalOpen}
        onClose={() => setAmpliModalOpen(false)}
      />
      <PaymiModal
        isOpen={paymiModalOpen}
        onClose={() => setPaymiModalOpen(false)}
      />
      <KOHOModal
        isOpen={kohoModalOpen}
        onClose={() => setKohoModalOpen(false)}
      />
      <SampleSourceModal
        isOpen={sampleSourceModalOpen}
        onClose={() => setSampleSourceModalOpen(false)}
      />
      <GetMeFreeSamplesModal
        isOpen={getMeFreeSamplesModalOpen}
        onClose={() => setGetMeFreeSamplesModalOpen(false)}
      />
      <CanadianParentModal
        isOpen={canadianParentModalOpen}
        onClose={() => setCanadianParentModalOpen(false)}
      />
    </section>
  )
}