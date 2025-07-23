import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Shield, Zap, Globe } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Authentication",
      description: "OAuth integration with Google and GitHub for secure user management"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Payment Processing",
      description: "Stripe integration for secure subscription and one-time payments"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Cloud Deployment",
      description: "Scalable AWS infrastructure with automated deployment"
    }
  ]

  const plans = [
    {
      name: "Starter",
      price: "$9",
      features: ["Basic Features", "5 Projects", "Email Support"]
    },
    {
      name: "Professional",
      price: "$29",
      features: ["Advanced Features", "Unlimited Projects", "Priority Support", "API Access"]
    },
    {
      name: "Enterprise",
      price: "$99",
      features: ["All Features", "Custom Integration", "24/7 Support", "SLA Guarantee"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <nav className="border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-white">SaaS Platform</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/auth/signin">
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-slate-900">
                  Sign In
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Build Your SaaS Dreams
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              A modern platform with authentication, payments, and cloud deployment 
              built with the latest technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <div className="text-blue-400 mb-2">{feature.icon}</div>
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Choose Your Plan</h3>
            <p className="text-slate-300">Start free and scale as you grow</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 relative">
                {index === 1 && (
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-white">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-white">
                    {plan.price}<span className="text-lg font-normal text-slate-300">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-slate-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${index === 1 ? 'bg-blue-600 hover:bg-blue-700' : 'bg-slate-700 hover:bg-slate-600'}`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}