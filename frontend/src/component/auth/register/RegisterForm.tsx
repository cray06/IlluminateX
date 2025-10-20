"use client"
import React, {FormEvent, FormEventHandler, ReactElement, useEffect, useState} from 'react'
import Link from 'next/link'

export default function RegisterForm(): ReactElement {
  const [mounted, setMounted] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [step, setStep] = useState<0 | 1>(0)

  useEffect((): () => void => {
    const t: NodeJS.Timeout = setTimeout((): void => setMounted(true), 50)
    return (): void => clearTimeout(t)
  }, [])

  const handleAccountSubmit: FormEventHandler<HTMLFormElement> = (e: FormEvent): void => {
    e.preventDefault()
    setStep(1)
  }

  const handlePersonalInfoSubmit: FormEventHandler<HTMLFormElement> = (e: FormEvent): void => {
    e.preventDefault()
    alert('Registration completed (stub)')
  }

  return (
    <div className="w-full max-w-md">
      <div
        className={`bg-white/95 rounded-xl p-7 shadow-xl mx-4 sm:mx-0 border border-[#EFE7F2] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} transition-all duration-700`}
      >
        <h2 className="text-center text-2xl font-extrabold text-[#36013F] mb-6">Join IlluminateX</h2>

        <div className="relative overflow-hidden">
          <div
            className={`flex w-[200%] transition-transform duration-500 ease-out ${step === 0 ? 'translate-x-0' : '-translate-x-1/2'}`}
          >
            <form onSubmit={handleAccountSubmit} className="w-1/2 pr-3 space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-2">email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-[#36013F] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#36013F]"
                  placeholder="you@email.com"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">referral id (optional)</label>
                <input
                  type="text"
                  name="referralId"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-[#36013F] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#36013F]"
                  placeholder=""
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

              <div>
                <label className="block text-sm text-gray-600 mb-2">confirm password</label>
                <div className="relative">
                  <input
                    type={showConfirm ? 'text' : 'password'}
                    name="confirmPassword"
                    required
                    className="w-full pr-12 px-4 py-2 rounded-md border border-gray-300 bg-white text-[#36013F] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#36013F]"
                    placeholder="Re-enter your password"
                  />
                  <button
                    type="button"
                    onClick={(): void => setShowConfirm(v => !v)}
                    className="absolute inset-y-0 right-0 px-3 text-sm text-[#36013F] hover:opacity-80"
                    aria-label={showConfirm ? 'Hide password' : 'Show password'}
                  >
                    {showConfirm ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-3 mt-2">
                <button
                  type="submit"
                  className="w-40 bg-[#36013F] text-white px-4 py-2 rounded-full shadow hover:shadow-lg transition"
                >
                  Continue
                </button>
              </div>

              <div className="mt-4 text-center text-sm text-gray-700">
                Already have an account?{' '}
                <Link href="/login">
                  <span className="text-[#6b2a7d] font-semibold hover:underline">Log in</span>
                </Link>
              </div>
            </form>

            <form onSubmit={handlePersonalInfoSubmit} className="w-1/2 pl-3 space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-2">first name</label>
                <input
                  type="text"
                  name="firstName"
                  required
                  className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-[#36013F] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#36013F]"
                  placeholder=""
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">middle name (optional)</label>
                <input
                  type="text"
                  name="middleName"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-[#36013F] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#36013F]"
                  placeholder=""
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">last name</label>
                <input
                  type="text"
                  name="lastName"
                  required
                  className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-[#36013F] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#36013F]"
                  placeholder=""
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">phone no.</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="countryCode"
                    className="w-20 px-4 py-2 rounded-md border border-gray-300 bg-white text-[#36013F] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#36013F]"
                    placeholder=""
                    defaultValue="+234"
                  />
                  <input
                    type="tel"
                    name="phoneNumber"
                    required
                    className="flex-1 px-4 py-2 rounded-md border border-gray-300 bg-white text-[#36013F] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#36013F]"
                    placeholder=""
                  />
                </div>
              </div>

              <div className="flex items-center justify-between mt-6">
                <button
                  type="button"
                  onClick={() => setStep(0)}
                  className="text-sm text-[#36013F] hover:underline"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="w-40 bg-[#36013F] text-white px-4 py-2 rounded-full shadow hover:shadow-lg transition"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
