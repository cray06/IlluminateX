"use client"
import React, {FormEventHandler, useEffect, useState} from 'react'
import Link from 'next/link'

export default function LoginForm(): React.ReactElement {
  const [mounted, setMounted] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  useEffect((): () => void => {
    const t: NodeJS.Timeout = setTimeout((): void => setMounted(true), 50)
    return (): void => clearTimeout(t)
  }, [])

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e: React.FormEvent): void => {
    e.preventDefault()
    alert('Login submitted (stub)')
  }

  return (
    <div className="w-full max-w-md">
      <div
        className={`bg-white/95 rounded-xl p-7 shadow-xl mx-4 sm:mx-0 border border-[#EFE7F2] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} transition-all duration-700`}
      >
        <h2 className="text-center text-2xl font-extrabold text-[#36013F] mb-6">Log in to <span className="">IlluminateX</span></h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-2">email or username</label>
            <input
              type="text"
              name="identifier"
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-[#36013F] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#36013F]"
              placeholder="you@email.com or username"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-2">password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                required
                className="w-full pr-12 px-4 py-2 rounded-md border border-gray-300 bg-white text-[#36013F] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#36013F]"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={(): void => setShowPassword(v => !v)}
                className="absolute inset-y-0 right-0 px-3 text-sm text-[#36013F] hover:opacity-80"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <button type="button" className="text-sm text-[#36013F] hover:underline">Forgot Password</button>
          </div>

          <div className="flex flex-col items-center space-y-3 mt-2">
            <button
              type="submit"
              className="w-40 bg-[#36013F] text-white px-4 py-2 rounded-full shadow hover:shadow-lg transition"
            >
              Log in
            </button>

            <button
              type="button"
              className="w-52 border border-gray-300 rounded-full px-4 py-2 text-sm bg-white text-[#36013F]"
              onClick={(): void => alert('Connect wallet (stub)')}
            >
              Connect to a Wallet
            </button>
          </div>

          <div className="mt-4 text-center text-sm text-gray-700">
            Don’t have an account?{' '}
            <Link href="/register">
              <span className="text-[#6b2a7d] font-semibold hover:underline">Sign Up</span>
            </Link>
          </div>

          <div className="mt-4 border-t pt-3 text-xs text-gray-500">
            By clicking Log in you agree to IlluminateX <span className="text-[#6b2a7d]">Terms and Conditions</span> &amp; <span className="text-[#6b2a7d]">Privacy Policy</span>
          </div>
        </form>
      </div>
    </div>
  )
}
