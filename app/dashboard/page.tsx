'use client'

import { useSession, signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { User, CreditCard, Settings } from 'lucide-react'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'

export default function DashboardPage() {
  const { data: session, status } = useSession()

  useEffect(() => {
    if (status === 'loading') return
    if (!session) redirect('/auth/signin')
  }, [session, status])

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (!session) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <nav className="border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-white">Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-white">Welcome, {session.user?.name}</span>
              <Button 
                onClick={() => signOut({ callbackUrl: '/' })}
                variant="outline" 
                className="text-white border-white hover:bg-white hover:text-slate-900"
              >
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-blue-400" />
                <CardTitle className="text-white">Profile</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-300">
                Manage your account settings and profile information
              </CardDescription>
              <Button className="mt-4 w-full bg-blue-600 hover:bg-blue-700">
                Edit Profile
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <CreditCard className="h-5 w-5 text-green-400" />
                <CardTitle className="text-white">Subscription</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-300">
                Manage your subscription and billing information
              </CardDescription>
              <Button className="mt-4 w-full bg-green-600 hover:bg-green-700">
                Manage Billing
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Settings className="h-5 w-5 text-purple-400" />
                <CardTitle className="text-white">Settings</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-300">
                Configure application settings and preferences
              </CardDescription>
              <Button className="mt-4 w-full bg-purple-600 hover:bg-purple-700">
                Open Settings
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Quick Stats</CardTitle>
              <CardDescription className="text-slate-300">
                Overview of your account activity
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">12</div>
                  <div className="text-sm text-slate-300">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">$299</div>
                  <div className="text-sm text-slate-300">Revenue</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">1,234</div>
                  <div className="text-sm text-slate-300">Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">98%</div>
                  <div className="text-sm text-slate-300">Uptime</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}