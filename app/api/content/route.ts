import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

const DATA_FILE = path.join(process.cwd(), 'data', 'content.json')

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

const defaultContent: SiteContent = {
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
}

async function readContent(): Promise<SiteContent> {
  try {
    // Ensure data directory exists
    const dataDir = path.dirname(DATA_FILE)
    await fs.mkdir(dataDir, { recursive: true })
    
    const data = await fs.readFile(DATA_FILE, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    // If file doesn't exist, create it with default content
    await writeContent(defaultContent)
    return defaultContent
  }
}

async function writeContent(content: SiteContent): Promise<void> {
  const dataDir = path.dirname(DATA_FILE)
  await fs.mkdir(dataDir, { recursive: true })
  await fs.writeFile(DATA_FILE, JSON.stringify(content, null, 2))
}

export async function GET() {
  try {
    const content = await readContent()
    return NextResponse.json(content)
  } catch (error) {
    console.error('Error reading content:', error)
    return NextResponse.json({ error: 'Failed to read content' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const content: SiteContent = await request.json()
    await writeContent(content)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error saving content:', error)
    return NextResponse.json({ error: 'Failed to save content' }, { status: 500 })
  }
}