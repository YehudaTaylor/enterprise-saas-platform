'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$9',
    priceId: 'price_starter',
    features: ['Basic Features', '5 Projects', 'Email Support']
  },
  {
    id: 'professional',
    name: 'Professional', 
    price: '$29',
    priceId: 'price_professional',
    features: ['Advanced Features', 'Unlimited Projects', 'Priority Support', 'API Access']
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '$99', 
    priceId: 'price_enterprise',
    features: ['All Features', 'Custom Integration', '24/7 Support', 'SLA Guarantee']
  }
]

export default function PricingPage() {
  const [loading, setLoading] = useState<string | null>(null)
  const { data: session } = useSession()
  const router = useRouter()

  const handleSubscribe = async (priceId: string, planId: string) => {
    if (!session) {
      router.push('/auth/signin')
      return
    }

    setLoading(planId)
    
    try {
      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ priceId }),
      })

      const { sessionId } = await response.json()
      
      const { loadStripe } = await import('@stripe/stripe-js')
      const stripe = await loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
      )
      
      await stripe?.redirectToCheckout({ sessionId })
    } catch (error) {
      console.error('Error creating checkout session:', error)
    } finally {
      setLoading(null)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <nav className="border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-white">Pricing</h1>
            </div>
            <div className="flex items-center space-x-4">
              {session ? (
                <Button 
                  onClick={() => router.push('/dashboard')}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Dashboard
                </Button>
              ) : (
                <Button 
                  onClick={() => router.push('/auth/signin')}
                  variant="outline" 
                  className="text-white border-white hover:bg-white hover:text-slate-900"
                >
                  Sign In
                </Button>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-slate-300">
            Start free and scale as you grow
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={plan.id} className="bg-slate-800 border-slate-700 relative">
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
                  {plan.price}
                  <span className="text-lg font-normal text-slate-300">/month</span>
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
                  onClick={() => handleSubscribe(plan.priceId, plan.id)}
                  disabled={loading === plan.id}
                  className={`w-full ${
                    index === 1 
                      ? 'bg-blue-600 hover:bg-blue-700' 
                      : 'bg-slate-700 hover:bg-slate-600'
                  }`}
                >
                  {loading === plan.id ? 'Loading...' : 'Get Started'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}