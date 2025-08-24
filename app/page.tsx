import Hero from "@/components/Hero"
import About from "@/components/About"
import TopDeals from "@/components/TopDeals"
import Community from "@/components/Community"
import AsSeenIn from "@/components/AsSeenIn"
import WhatsNew from "@/components/WhatsNew"
import FloatingDoodles from "@/components/FloatingDoodles"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-blue-50 text-gray-900 relative overflow-hidden">
      <FloatingDoodles />
      <Hero />
      <About />
      <TopDeals />
      <Community />
      <AsSeenIn />
      <WhatsNew />
    </div>
  )
}
