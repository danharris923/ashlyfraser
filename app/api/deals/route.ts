import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

// Default deals data
const defaultDeals = [
  {
    id: "grocery",
    title: "Grocery Deals",
    description: "Weekly grocery flyers and deals across Canada",
    savings: "Up to 70% off",
    category: "Food & Groceries",
    color: "from-green-400 to-green-600",
    bgColor: "from-green-50 to-green-100",
    borderColor: "border-green-200",
    action: "modal",
    modal: "grocery",
    enabled: true
  },
  {
    id: "cashback-apps",
    title: "Cashback Apps",
    description: "Compare all 8 top Canadian cashback apps in one place - from Rakuten to KOHO",
    savings: "Up to 30% back",
    category: "Cashback Apps",
    color: "from-blue-500 to-indigo-600",
    bgColor: "from-blue-50 to-indigo-100",
    borderColor: "border-blue-200",
    action: "modal",
    modal: "cashback-apps",
    enabled: true
  },
  {
    id: "free-samples",
    title: "Free Samples",
    description: "Best sources for free products and samples across Canada",
    savings: "100% Free",
    category: "Free Samples",
    color: "from-rose-500 to-pink-600",
    bgColor: "from-rose-50 to-pink-100",
    borderColor: "border-rose-200",
    action: "modal",
    modal: "free-samples",
    enabled: true
  },
  {
    id: "online-deals",
    title: "Online Deals",
    description: "Exclusive promo codes and flash sales from major retailers",
    savings: "Up to 80% off",
    category: "E-commerce",
    color: "from-purple-400 to-purple-600",
    bgColor: "from-purple-50 to-purple-100",
    borderColor: "border-purple-200",
    link: "https://www.rakuten.ca",
    enabled: true
  },
  {
    id: "clearance",
    title: "Clearance Finds",
    description: "Seasonal clearance and end-of-line product discoveries",
    savings: "Up to 90% off",
    category: "Clearance",
    color: "from-amber-400 to-amber-600",
    bgColor: "from-amber-50 to-amber-100",
    borderColor: "border-amber-200",
    action: "modal",
    modal: "clearance",
    enabled: true
  },
  {
    id: "family",
    title: "Kids & Family",
    description: "Money-saving deals on everything for Canadian families",
    savings: "Family Focused",
    category: "Family",
    color: "from-pink-400 to-pink-600",
    bgColor: "from-pink-50 to-pink-100",
    borderColor: "border-pink-200",
    link: "https://www.toogoodtogo.com/en-ca",
    enabled: true
  },
  {
    id: "printable",
    title: "Printable Coupons",
    description: "Top Canadian coupon sites and cashback programs",
    savings: "Free Coupons",
    category: "Coupons",
    color: "from-indigo-400 to-purple-600",
    bgColor: "from-indigo-50 to-purple-100",
    borderColor: "border-indigo-200",
    action: "modal",
    modal: "printable",
    enabled: true
  },
  {
    id: "mailout",
    title: "Mail-Out Coupons",
    description: "Companies that send free coupons and samples by mail",
    savings: "Direct Mail",
    category: "Coupons",
    color: "from-emerald-400 to-teal-600",
    bgColor: "from-emerald-50 to-teal-100",
    borderColor: "border-emerald-200",
    action: "modal",
    modal: "mailout",
    enabled: true
  },
  {
    id: "guide",
    title: "Coupon Guide",
    description: "Complete beginner's guide to couponing in Canada",
    savings: "Learn & Save",
    category: "Education",
    color: "from-rose-400 to-pink-600",
    bgColor: "from-rose-50 to-pink-100",
    borderColor: "border-rose-200",
    action: "modal",
    modal: "guide",
    enabled: true
  }
]

const dealsFilePath = path.join(process.cwd(), 'data', 'deals.json')

function ensureDataDir() {
  const dataDir = path.join(process.cwd(), 'data')
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }
}

function readDeals() {
  try {
    ensureDataDir()
    if (fs.existsSync(dealsFilePath)) {
      const data = fs.readFileSync(dealsFilePath, 'utf8')
      return JSON.parse(data)
    } else {
      // Create file with default data
      fs.writeFileSync(dealsFilePath, JSON.stringify(defaultDeals, null, 2))
      return defaultDeals
    }
  } catch (error) {
    console.error('Error reading deals:', error)
    return defaultDeals
  }
}

function writeDeals(deals: any[]) {
  try {
    ensureDataDir()
    fs.writeFileSync(dealsFilePath, JSON.stringify(deals, null, 2))
    return true
  } catch (error) {
    console.error('Error writing deals:', error)
    return false
  }
}

export async function GET() {
  const deals = readDeals()
  return NextResponse.json(deals)
}

export async function PUT(request: NextRequest) {
  try {
    const deals = await request.json()
    const success = writeDeals(deals)
    
    if (success) {
      return NextResponse.json({ success: true, message: 'Deals updated successfully' })
    } else {
      return NextResponse.json({ success: false, message: 'Failed to update deals' }, { status: 500 })
    }
  } catch (error) {
    console.error('Error updating deals:', error)
    return NextResponse.json({ success: false, message: 'Invalid data format' }, { status: 400 })
  }
}