import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <section className="z-20 w-full bg-white border-t border-gray-200 shadow-sm md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <div className="relative z-10 mx-auto max-w-7xl px-2">
        <div className="-m-6 flex flex-wrap">
          {/* Logo and copyright */}
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Logo width="40px" />
              </div>
              <div>
                <p className="text-sm text-indigo-100">
                  &copy; {new Date().getFullYear()} All Rights Reserved by ankit1306_b.
                </p>
              </div>
            </div>
          </div>
          {/* Company */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-widest mb-6 text-xs font-semibold uppercase text-indigo-200">
                Company
              </h3>
              <ul>
                <li className="mb-3">
                  <Link
                    className="text-base font-medium text-white hover:text-indigo-100 transition-colors"
                    to="/"
                  >
                    Features
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    className="text-base font-medium text-white hover:text-indigo-100 transition-colors"
                    to="/"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    className="text-base font-medium text-white hover:text-indigo-100 transition-colors"
                    to="/"
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-white hover:text-indigo-100 transition-colors"
                    to="/"
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Support */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-widest mb-6 text-xs font-semibold uppercase text-indigo-200">
                Support
              </h3>
              <ul>
                <li className="mb-3">
                  <Link
                    className="text-base font-medium text-white hover:text-indigo-100 transition-colors"
                    to="/"
                  >
                    Account
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    className="text-base font-medium text-white hover:text-indigo-100 transition-colors"
                    to="/"
                  >
                    Help
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    className="text-base font-medium text-white hover:text-indigo-100 transition-colors"
                    to="/"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-white hover:text-indigo-100 transition-colors"
                    to="/"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Legals */}
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-widest mb-6 text-xs font-semibold uppercase text-indigo-200">
                Legals
              </h3>
              <ul>
                <li className="mb-3">
                  <Link
                    className="text-base font-medium text-white hover:text-indigo-100 transition-colors"
                    to="/"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    className="text-base font-medium text-white hover:text-indigo-100 transition-colors"
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-white hover:text-indigo-100 transition-colors"
                    to="/"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center text-xs text-indigo-100">
          Made with <span className="text-pink-300">♥</span> by ankit1306_b
        </div>
      </div>
    </section>
  )
}

export default Footer