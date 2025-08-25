import { NextResponse } from 'next/server'

// Flipp API configuration for Canada
const FLIPP_API_BASE = 'https://gateflipp.flippback.com/api/v2'
const POSTAL_CODE = 'M5V3A8' // Toronto postal code - can be made dynamic

interface FlippItem {
  id: string
  name: string
  merchant_name: string
  current_price?: string
  original_price?: string
  sale_price?: string
  discount?: string
  valid_to?: string
  category?: string
  image_url?: string
}

export async function GET(request: Request) {
  try {
    // Try to fetch from Flipp API
    // Note: The unofficial Flipp API may require specific headers or change over time
    const flippResponse = await fetch(
      `${FLIPP_API_BASE}/flyers/items?postal_code=${POSTAL_CODE}&locale=en-ca`,
      {
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      }
    )

    if (flippResponse.ok) {
      const data = await flippResponse.json()
      
      // Transform Flipp data to our format
      const flyers = data.items?.map((item: FlippItem) => ({
        id: item.id,
        title: item.name,
        merchant: item.merchant_name,
        price: item.sale_price || item.current_price,
        originalPrice: item.original_price,
        discount: item.discount,
        imageUrl: item.image_url,
        validUntil: item.valid_to,
        category: item.category,
        location: 'Toronto, ON'
      })) || []

      return NextResponse.json({ flyers })
    }
  } catch (error) {
    console.error('Error fetching flyers from Flipp API:', error)
  }

  // Return mock flyer items if API fails
  const mockFlyers = [
    {
      id: '1',
      title: 'Fresh Atlantic Salmon',
      merchant: 'Loblaws',
      price: '$9.99/lb',
      originalPrice: '$14.99/lb',
      discount: '33% OFF',
      category: 'Seafood',
      validUntil: '2025-08-31',
      location: 'Toronto, ON'
    },
    {
      id: '2',
      title: 'Organic Bananas',
      merchant: 'Metro',
      price: '$0.69/lb',
      originalPrice: '$0.99/lb',
      discount: '30% OFF',
      category: 'Produce',
      validUntil: '2025-08-30',
      location: 'Toronto, ON'
    },
    {
      id: '3',
      title: 'Kellogg\'s Cereal Family Size',
      merchant: 'No Frills',
      price: '$3.99',
      originalPrice: '$6.99',
      discount: '43% OFF',
      category: 'Breakfast',
      validUntil: '2025-09-02',
      location: 'Toronto, ON'
    },
    {
      id: '4',
      title: 'Dairy Milk 2L',
      merchant: 'Shoppers Drug Mart',
      price: '$4.49',
      originalPrice: '$6.99',
      discount: '36% OFF',
      category: 'Dairy',
      validUntil: '2025-08-29',
      location: 'Toronto, ON',
      imageUrl: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=300&fit=crop'
    },
    {
      id: '5',
      title: 'Ground Beef Lean',
      merchant: 'Sobeys',
      price: '$4.99/lb',
      originalPrice: '$7.99/lb',
      discount: '37% OFF',
      category: 'Meat',
      validUntil: '2025-08-31',
      location: 'Toronto, ON'
    },
    {
      id: '6',
      title: 'Pepsi 24 Pack',
      merchant: 'Walmart',
      price: '$6.99',
      originalPrice: '$12.99',
      discount: '46% OFF',
      category: 'Beverages',
      validUntil: '2025-08-28',
      location: 'Toronto, ON'
    },
    {
      id: '7',
      title: 'Whole Wheat Bread',
      merchant: 'FreshCo',
      price: '$1.88',
      originalPrice: '$3.49',
      discount: '46% OFF',
      category: 'Bakery',
      validUntil: '2025-09-01',
      location: 'Toronto, ON'
    },
    {
      id: '8',
      title: 'Ben & Jerry\'s Ice Cream',
      merchant: 'Loblaws',
      price: '$4.99',
      originalPrice: '$7.99',
      discount: '37% OFF',
      category: 'Frozen',
      validUntil: '2025-08-30',
      location: 'Toronto, ON'
    },
    {
      id: '9',
      title: 'Maple Syrup 500ml',
      merchant: 'Food Basics',
      price: '$3.99',
      originalPrice: '$6.99',
      discount: '43% OFF',
      category: 'Pantry',
      validUntil: '2025-09-02',
      location: 'Toronto, ON'
    },
    {
      id: '10',
      title: 'Fresh Avocados',
      merchant: 'No Frills',
      price: '$0.99',
      originalPrice: '$1.99',
      discount: '50% OFF',
      category: 'Produce',
      validUntil: '2025-08-29',
      location: 'Toronto, ON'
    },
    {
      id: '11',
      title: 'Oreo Cookies Family Pack',
      merchant: 'Metro',
      price: '$2.99',
      originalPrice: '$4.99',
      discount: '40% OFF',
      category: 'Snacks',
      validUntil: '2025-08-31',
      location: 'Toronto, ON'
    },
    {
      id: '12',
      title: 'Fresh Strawberries 2lb',
      merchant: 'Farm Boy',
      price: '$3.99',
      originalPrice: '$6.99',
      discount: '43% OFF',
      category: 'Produce',
      validUntil: '2025-09-03',
      location: 'Toronto, ON'
    }
  ]

  return NextResponse.json({ flyers: mockFlyers })
}