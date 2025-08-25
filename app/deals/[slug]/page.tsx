'use client'

import { useParams, useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import CashbackAppsModal from '@/components/modals/CashbackAppsModal'
import FreeSamplesModal from '@/components/modals/FreeSamplesModal'
import CouponStackingModal from '@/components/modals/CouponStackingModal'
import ClearanceDealsModal from '@/components/modals/ClearanceDealsModal'

const dealPages = {
  'cashback-apps': {
    title: 'Canadian Cashback Apps',
    component: CashbackAppsModal
  },
  'free-samples': {
    title: 'Free Samples Canada',
    component: FreeSamplesModal
  },
  'coupon-stacking': {
    title: 'Coupon Stacking Mastery',
    component: CouponStackingModal
  },
  'clearance-deals': {
    title: 'Premium Brand Clearance',
    component: ClearanceDealsModal
  }
}

export default function DealPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string
  
  const dealConfig = dealPages[slug as keyof typeof dealPages]
  
  if (!dealConfig) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Deal Not Found</h1>
          <Button onClick={() => router.push('/')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    )
  }

  const ModalComponent = dealConfig.component

  return (
    <div className="min-h-screen">
      {/* Native page wrapper - removes modal backdrop and transforms content */}
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
        {/* Page content - reusing modal content but as native page */}
        <ModalComponent 
          isOpen={true} 
          onClose={() => router.back()} 
        />
      </div>
    </div>
  )
}

