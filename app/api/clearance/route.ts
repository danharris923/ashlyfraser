import { NextResponse } from 'next/server'

interface ClearanceDeal {
  id: string
  title: string
  description: string
  savings: string
  category: string
  brand: string
  logoUrl: string
  imageUrl: string
  websiteUrl: string
  validUntil: string
}

export async function GET() {
  // Mock clearance deals with proper brand logos - larger and more visible
  const clearanceDeals: ClearanceDeal[] = [
    {
      id: '1',
      title: 'Lululemon Clearance',
      description: 'Exclusive clearance on activewear, leggings, and athletic apparel',
      savings: 'Up to 70% OFF',
      category: 'Athletic Wear',
      brand: 'Lululemon',
      logoUrl: 'https://logos-world.net/wp-content/uploads/2020/09/Lululemon-Logo.png',
      imageUrl: 'https://images.unsplash.com/photo-1506629905607-53e103a0265d?w=400&h=300&fit=crop',
      websiteUrl: 'https://shop.lululemon.com/c/clearance',
      validUntil: '2025-09-15'
    },
    {
      id: '2',
      title: 'Michael Kors Clearance',
      description: 'Designer handbags, watches, and accessories at clearance prices',
      savings: 'Up to 60% OFF',
      category: 'Designer',
      brand: 'Michael Kors',
      logoUrl: 'https://cdn.shopify.com/s/files/1/0558/8647/4049/files/michael-kors-logo.png?v=1692951234',
      imageUrl: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=300&fit=crop',
      websiteUrl: 'https://www.michaelkors.ca/sale',
      validUntil: '2025-09-10'
    },
    {
      id: '3',
      title: 'Sephora Clearance',
      description: 'Beauty gift sets, makeup palettes, and skincare bundles on sale',
      savings: 'Up to 50% OFF',
      category: 'Beauty',
      brand: 'Sephora',
      logoUrl: 'https://companieslogo.com/img/orig/SEPH-c4c5a34b.png?t=1667547131',
      imageUrl: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop',
      websiteUrl: 'https://www.sephora.com/ca/sale',
      validUntil: '2025-09-12'
    },
    {
      id: '4',
      title: 'GAP Clearance',
      description: 'Seasonal clearance on clothing for the whole family',
      savings: 'Up to 70% OFF',
      category: 'Clothing',
      brand: 'GAP',
      logoUrl: 'https://logos-world.net/wp-content/uploads/2020/04/Gap-Logo.png',
      imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop',
      websiteUrl: 'https://www.gap.ca/browse/division.do?cid=5243',
      validUntil: '2025-09-08'
    },
    {
      id: '5',
      title: 'Nike Clearance',
      description: 'Athletic footwear, apparel, and accessories at clearance prices',
      savings: 'Up to 40% OFF',
      category: 'Athletic',
      brand: 'Nike',
      logoUrl: 'https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo.png',
      imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop',
      websiteUrl: 'https://www.nike.com/ca/w/sale-3yaep',
      validUntil: '2025-09-20'
    },
    {
      id: '6',
      title: 'Coach Outlet',
      description: 'Luxury handbags, wallets, and accessories at outlet prices',
      savings: 'Up to 60% OFF',
      category: 'Luxury',
      brand: 'Coach',
      logoUrl: 'https://logos-world.net/wp-content/uploads/2020/04/Coach-Logo.png',
      imageUrl: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=300&fit=crop',
      websiteUrl: 'https://canada.coach.com/on/demandware.store/Sites-Coach_CA-Site/en_CA/Search-Show?cgid=sale',
      validUntil: '2025-09-18'
    }
  ]

  return NextResponse.json({ clearanceDeals })
}