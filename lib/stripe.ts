import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})

export const plans = {
  starter: {
    priceId: 'price_starter',
    price: 9,
    name: 'Starter Plan',
    features: ['Basic Features', '5 Projects', 'Email Support']
  },
  professional: {
    priceId: 'price_professional', 
    price: 29,
    name: 'Professional Plan',
    features: ['Advanced Features', 'Unlimited Projects', 'Priority Support', 'API Access']
  },
  enterprise: {
    priceId: 'price_enterprise',
    price: 99,
    name: 'Enterprise Plan', 
    features: ['All Features', 'Custom Integration', '24/7 Support', 'SLA Guarantee']
  }
}