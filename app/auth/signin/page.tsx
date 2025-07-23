'use client'

import { signIn, getProviders } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function SignInPage() {
  const [providers, setProviders] = useState<any>(null)

  useEffect(() => {
    const setAuthProviders = async () => {
      const res = await getProviders()
      setProviders(res)
    }
    setAuthProviders()
  }, [])

  if (!providers) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <Card className="w-full max-w-md bg-slate-800 border-slate-700">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-white">Welcome Back</CardTitle>
          <CardDescription className="text-slate-300">
            Sign in to your account to continue
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {Object.values(providers).map((provider: any) => (
            <Button
              key={provider.name}
              onClick={() => signIn(provider.id, { callbackUrl: '/dashboard' })}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              Sign in with {provider.name}
            </Button>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}