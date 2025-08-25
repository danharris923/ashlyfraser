import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

const DATA_FILE = path.join(process.cwd(), 'data', 'cashback-apps.json')

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

const defaultApps: CashbackApp[] = [
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
  },
  {
    name: "Paymi",
    description: "Send money and earn rewards using just a phone number or email",
    cashback: "Various rewards",
    features: ["Interac e-Transfer", "Phone Number Sending", "Bank Integration", "Instant Transfers"],
    category: "Banking",
    rating: "4.5/5",
    users: "5M+",
    color: "from-blue-500 to-blue-700",
    bgColor: "from-blue-50 to-blue-100",
    borderColor: "border-blue-200",
    url: "https://paymi.com/",
    enabled: true
  },
  {
    name: "Caddle",
    description: "Earn points for shopping, surveys, and sharing purchase data",
    cashback: "Up to 20%",
    features: ["Receipt Scanning", "Surveys Available", "Purchase Data Rewards", "Multiple Redemption Options"],
    category: "Automatic",
    rating: "4.4/5",
    users: "1M+",
    color: "from-orange-500 to-orange-700",
    bgColor: "from-orange-50 to-orange-100",
    borderColor: "border-orange-200",
    url: "https://caddle.ca/",
    enabled: true
  },
  {
    name: "Drop",
    description: "Automatic cash back when you link your cards and shop at partner stores",
    cashback: "Up to 5%",
    features: ["Automatic Earnings", "Card Linking", "Partner Store Network", "Gift Card Rewards"],
    category: "Automatic",
    rating: "4.7/5",
    users: "3M+",
    color: "from-teal-500 to-teal-700",
    bgColor: "from-teal-50 to-teal-100",
    borderColor: "border-teal-200",
    url: "https://earnwithdrop.com/",
    enabled: true
  },
  {
    name: "Ampli",
    description: "Cash back rewards program from Canadian Tire for Triangle members",
    cashback: "Up to 10X CT Money",
    features: ["Triangle Integration", "Canadian Tire Family", "Bonus Offers", "Fuel Rewards"],
    category: "Retail",
    rating: "4.3/5",
    users: "800K+",
    color: "from-red-500 to-red-700",
    bgColor: "from-red-50 to-red-100",
    borderColor: "border-red-200",
    url: "https://www.canadiantire.ca/en/triangle.html",
    enabled: true
  },
  {
    name: "Pogo",
    description: "Earn points automatically when you pay with linked cards",
    cashback: "Up to 2%",
    features: ["Automatic Point Earning", "Card Linking", "Local Business Focus", "Instant Rewards"],
    category: "Automatic",
    rating: "4.2/5",
    users: "500K+",
    color: "from-indigo-500 to-indigo-700",
    bgColor: "from-indigo-50 to-indigo-100",
    borderColor: "border-indigo-200",
    url: "https://pogorewards.com/",
    enabled: true
  },
  {
    name: "Flipp",
    description: "Find deals and earn cash back by shopping weekly flyers",
    cashback: "Store-specific offers",
    features: ["Weekly Flyer Access", "Price Matching", "Deal Alerts", "Shopping Lists"],
    category: "Grocery",
    rating: "4.9/5",
    users: "6M+",
    color: "from-yellow-500 to-yellow-700",
    bgColor: "from-yellow-50 to-yellow-100",
    borderColor: "border-yellow-200",
    url: "https://flipp.com/",
    enabled: true
  }
]

async function readApps(): Promise<CashbackApp[]> {
  try {
    // Ensure data directory exists
    const dataDir = path.dirname(DATA_FILE)
    await fs.mkdir(dataDir, { recursive: true })
    
    const data = await fs.readFile(DATA_FILE, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    // If file doesn't exist, create it with default apps
    await writeApps(defaultApps)
    return defaultApps
  }
}

async function writeApps(apps: CashbackApp[]): Promise<void> {
  const dataDir = path.dirname(DATA_FILE)
  await fs.mkdir(dataDir, { recursive: true })
  await fs.writeFile(DATA_FILE, JSON.stringify(apps, null, 2))
}

export async function GET() {
  try {
    const apps = await readApps()
    return NextResponse.json(apps)
  } catch (error) {
    console.error('Error reading cashback apps:', error)
    return NextResponse.json({ error: 'Failed to read apps' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const apps: CashbackApp[] = await request.json()
    await writeApps(apps)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error saving cashback apps:', error)
    return NextResponse.json({ error: 'Failed to save apps' }, { status: 500 })
  }
}