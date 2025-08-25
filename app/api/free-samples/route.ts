import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

const DATA_FILE = path.join(process.cwd(), 'data', 'free-samples.json')

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

const defaultSamples: FreeSample[] = [
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
  },
  {
    name: "Canadian Parent",
    description: "Family-focused sample platform featuring baby products, snacks, and household items",
    features: ["Family Product Focus", "Baby & Kids Samples", "Snack & Food Items", "Household Products"],
    category: "Family",
    rating: "4.7/5",
    users: "150K+",
    color: "from-purple-500 to-purple-700",
    bgColor: "from-purple-50 to-purple-100",
    borderColor: "border-purple-200",
    url: "https://canadianparent.com/samples/",
    enabled: true
  },
  {
    name: "Walmart Canada Samples",
    description: "Free samples directly from Walmart Canada featuring popular grocery and household brands",
    features: ["Grocery Samples", "Household Products", "Health & Beauty", "Direct From Retailer"],
    category: "Retailer",
    rating: "4.5/5",
    users: "300K+",
    color: "from-yellow-500 to-yellow-700",
    bgColor: "from-yellow-50 to-yellow-100",
    borderColor: "border-yellow-200",
    url: "https://www.walmart.ca/samples",
    enabled: true
  },
  {
    name: "Costco Canada Samples",
    description: "Bulk sample offerings and product trials exclusive to Costco members",
    features: ["Member Exclusive", "Bulk Sample Sizes", "Premium Brands", "In-Store Tastings"],
    category: "Membership",
    rating: "4.9/5",
    users: "200K+",
    color: "from-red-500 to-red-700",
    bgColor: "from-red-50 to-red-100",
    borderColor: "border-red-200",
    url: "https://www.costco.ca/samples",
    enabled: true
  },
  {
    name: "Loblaws PC Samples",
    description: "President's Choice and No Name product samples from Canada's largest grocery chain",
    features: ["PC Brand Focus", "Grocery Samples", "Seasonal Offers", "Store Pickup Available"],
    category: "Grocery",
    rating: "4.4/5",
    users: "400K+",
    color: "from-orange-500 to-orange-700",
    bgColor: "from-orange-50 to-orange-100",
    borderColor: "border-orange-200",
    url: "https://www.loblaws.ca/samples",
    enabled: true
  }
]

async function readSamples(): Promise<FreeSample[]> {
  try {
    // Ensure data directory exists
    const dataDir = path.dirname(DATA_FILE)
    await fs.mkdir(dataDir, { recursive: true })
    
    const data = await fs.readFile(DATA_FILE, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    // If file doesn't exist, create it with default samples
    await writeSamples(defaultSamples)
    return defaultSamples
  }
}

async function writeSamples(samples: FreeSample[]): Promise<void> {
  const dataDir = path.dirname(DATA_FILE)
  await fs.mkdir(dataDir, { recursive: true })
  await fs.writeFile(DATA_FILE, JSON.stringify(samples, null, 2))
}

export async function GET() {
  try {
    const samples = await readSamples()
    return NextResponse.json(samples)
  } catch (error) {
    console.error('Error reading free samples:', error)
    return NextResponse.json({ error: 'Failed to read samples' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const samples: FreeSample[] = await request.json()
    await writeSamples(samples)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error saving free samples:', error)
    return NextResponse.json({ error: 'Failed to save samples' }, { status: 500 })
  }
}