import { Truck, Shield, RotateCcw, Headphones } from 'lucide-react'

export default function TrustBadges() {
  const badges = [
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "7-14 days turnaround"
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "SSL encrypted transactions"
    },
    {
      icon: RotateCcw,
      title: "100% Money Back",
      description: "30-day guarantee"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Expert assistance"
    }
  ]

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge, index) => {
            const IconComponent = badge.icon
            return (
              <div key={index} className="flex items-center justify-center space-x-3">
                <IconComponent className="w-8 h-8 text-blue-600" />
                <div>
                  <div className="font-semibold text-gray-900">{badge.title}</div>
                  <div className="text-sm text-gray-600">{badge.description}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
