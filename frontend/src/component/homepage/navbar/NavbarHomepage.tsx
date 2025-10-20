"use client"
import React, { JSX } from 'react'
import Link from 'next/link'

export default function NavbarHomepage(): JSX.Element {
  return (
    <nav className="w-full border-b border-[#36013F]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-12">
          <div className="text-white font-bold text-lg">IlluminateX</div>
          <div className="hidden sm:flex items-center space-x-8">
            <a href="#" className="relative group text-sm text-gray-200 hover:text-white transition">
              About Us
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#36013F] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
            </a>
            <a href="#" className="relative group text-sm text-gray-200 hover:text-white transition">
              Categories
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#36013F] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
            </a>
            <a href="#" className="relative group text-sm text-gray-200 hover:text-white transition">
              Leaderboard
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#36013F] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
            </a>
          </div>
        </div>

        <div className="flex-1 max-w-lg mx-6">
          <div className="relative p-0.5 rounded-full border border-[#36013F] bg-black/20">
            <input className="w-full pl-10 pr-4 py-2 rounded-full bg-transparent text-sm text-gray-100 placeholder-gray-400 border-0 focus:outline-none focus:ring-2 focus:ring-[#36013F]" placeholder="Search Content ..." />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m1.35-5.15A7.5 7.5 0 1110.5 3a7.5 7.5 0 017.5 7.5z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-green-500 to-purple-700 ring-2 ring-[#36013F]" />
            <div className="text-right">
              <div className="text-sm text-gray-100">Guest</div>
              <div className="text-xs text-gray-400">Welcome</div>
            </div>
          </div>
          <Link href="/login" className="px-4 py-1 rounded-full bg-purple-700 text-white text-sm transition-transform duration-200 ease-out transform motion-reduce:transform-none hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#6b2a7d]">Log In</Link>
        </div>
      </div>
    </nav>
  )
}
