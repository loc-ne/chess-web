'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronDown,
  LogOut,
  User,
} from 'lucide-react';

interface NavbarProps {
  user?: {
    id: number;
    username: string;
    email: string;
  } | null;
  onLogout?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, onLogout }) => {
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsAccountDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    onLogout?.();
    setIsAccountDropdownOpen(false);
  };

  return (
    <nav className="w-full border-b border-gray-300 bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/assets/logo.png"
              width={130}
              height={100}
              alt="Kangyoo Logo"
            />
          </Link>

          {/* Navigation Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-12">

              {/* Chơi */}
              <Link
                href="/play/online"
                className="text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" id="sword" viewBox="0 0 40 32">
                  <path fill-rule="evenodd" d="M-1755.115 304.06a.132.132 0 0 0-.015 0 .132.132 0 0 0-.075.037 159.718 159.718 0 0 0-3.61 3.585c-1.643-1.722-1.808-1.893-3.571-3.585a.132.132 0 0 0-.096-.037.132.132 0 0 0-.127.108c-.098.514 0 .954.31 1.367a.132.132 0 0 0 .01.012c1.454 1.5 1.284 1.309 2.776 2.851-.295.306-.59.61-.883.918a2.265 2.265 0 0 0-.494-.058 2.169 2.169 0 0 0-.8.113.132.132 0 0 0 0 .002c-.136.055-.24.14-.333.201a.132.132 0 0 0-.012.21l.663.566-1.233 1.331a.132.132 0 0 0-.035.09v.624a.132.132 0 0 0 .162.128l.65-.148a.132.132 0 0 0 .068-.04l1.184-1.307.754.644a.132.132 0 0 0 .203-.041s.036-.067.074-.154c.039-.087.082-.188.1-.283a1.72 1.72 0 0 0 0-.569.132.132 0 0 0 0-.002 2.113 2.113 0 0 0-.19-.653c.288-.298.568-.581.85-.868l.84.872a2.123 2.123 0 0 0-.191.65.132.132 0 0 0 0 .001 1.835 1.835 0 0 0 0 .569c.018.095.063.196.101.283.039.087.072.154.072.154a.132.132 0 0 0 .205.04l.751-.64 1.183 1.303a.132.132 0 0 0 .068.04l.65.15a.132.132 0 0 0 .162-.13v-.623a.132.132 0 0 0-.035-.09l-1.232-1.33.666-.568a.132.132 0 0 0-.02-.213.132.132 0 0 0-.012-.008 1.655 1.655 0 0 0-.096-.068 1.051 1.051 0 0 0-.223-.123 2.162 2.162 0 0 0-.799-.113c-.164.005-.341.017-.512.063l-.88-.932c.933-.948 1.857-1.883 2.786-2.842a.132.132 0 0 0 .012-.012c.313-.413.407-.852.309-1.367a.132.132 0 0 0-.131-.108z" transform="translate(6663.411 -1149.203)scale(3.77953)"></path>
                  <path fill="#fc3275" fill-rule="evenodd" d="M-1755.328 304.594c-.014.265.01.534-.176.779v.002c-1.417 1.462-2.812 2.85-4.279 4.364a1.14 1.14 0 0 0-.345-.32 168.442 168.442 0 0 1 4.8-4.826z" transform="translate(6663.411 -1149.203)scale(3.77953)"></path>
                  <path fill="#0096e0" fill-rule="evenodd" d="M-1762.265 304.596a79.781 79.781 0 0 1 3.263 3.275l-.327.336c-1.475-1.525-1.329-1.356-2.76-2.832v-.002c-.186-.245-.162-.512-.176-.777zm3.989 3.982.802.85a1.15 1.15 0 0 0-.332.313l-.797-.829.327-.334z" transform="translate(6663.411 -1149.203)scale(3.77953)"></path>
                  <path fill="#9cc055" fill-rule="evenodd" d="M-1760.906 309.523c.233.006.466.029.633.121.137.076.251.213.344.365a.132.132 0 0 0 .019.029v.007c.1.174.153.39.187.613.021.166.032.332 0 .484a1.6 1.6 0 0 1-.078.215l-.693-.591a.132.132 0 0 0-.043-.038l-1.205-1.027c.044-.028.091-.066.133-.082a1.92 1.92 0 0 1 .698-.096z" transform="translate(6663.411 -1149.203)scale(3.77953)"></path>
                  <path fill="#fd3533" fill-rule="evenodd" d="M-1756.69 309.523a1.91 1.91 0 0 1 .702.096c.024.01.082.046.133.078l-1.947 1.662a1.37 1.37 0 0 1-.078-.217 1.612 1.612 0 0 1 0-.48v-.004c.034-.223.087-.44.188-.614.096-.166.22-.318.369-.4.167-.093.397-.115.63-.121z" transform="translate(6663.411 -1149.203)scale(3.77953)"></path>
                  <path fill="#fd982f" fill-rule="evenodd" d="m-1761.175 310.52.393.337-1.15 1.27-.45.102v-.407l1.207-1.301z" transform="translate(6663.411 -1149.203)scale(3.77953)"></path>
                  <path fill="#ffe625" fill-rule="evenodd" d="m-1756.416 310.523 1.203 1.299v.407l-.447-.102-1.15-1.269.394-.335z" transform="translate(6663.411 -1149.203)scale(3.77953)"></path>
                  <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".249" d="m6.756 25.526-1.336.2m.963.404-1.482.166m.891.528-1.414.15m.768.572-1.37.082m.656.684-1.26-.004m.71.655-1.218-.045m8.38-6s.222.885.252 1.343c.038.32.038.647-.037.966m13.96.3 1.335.2m-.963.403 1.483.166m-.892.528 1.414.15m-.768.572 1.372.082m-.657.684 1.26-.004m-.711.655 1.218-.045m-8.378-6s-.223.885-.254 1.343c-.037.32-.037.647.038.966"></path>
                </svg>

                <span>Chơi</span>
              </Link>

              {/* Câu đố */}
              <Link
                href="/puzzles"
                className="text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="mt-2" width="50" height="50" viewBox="0 0 64 64" id="puzzle">
                  <linearGradient id="a" x1="32.574" x2="32.574" y1="12.519" y2="61.398" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#fff" stop-opacity=".25"></stop>
                    <stop offset="1" stop-color="#fed3be"></stop>
                  </linearGradient>
                  <path fill="url(#a)" d="M24.6 14.7c6-2.9 13.4-2.9 19.5 0 2.2 1.1 4.2 2.6 5.4 4.6 2.4 4.1.9 9.5 2.9 13.9 1.1 2.5 3.3 4.4 5.2 6.4 1.9 2 3.8 4.3 4 7.1.2 2.5-1 4.9-2.7 6.7-1.7 1.8-4 3-6.3 4-11.4 5-24.8 5.4-36.5 1.1C12 56.9 7.9 54.6 5.4 51c-2.4-3.6-2.8-8.9.2-12.1 2.1-2.2 4.9-3.3 6.4-6.1 1-1.8 1-3.8 1.6-5.7 1.9-5.3 6-9.9 11-12.4z"></path>
                  <path fill="#f86c66" stroke="#0000db" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.234" d="M56.6 6.1c0-1.6-1.3-2.8-2.8-2.8H33.7v7.9c.8-.4 1.8-.6 2.8-.4 1.8.3 3.2 1.8 3.5 3.7.3 2.6-1.7 4.8-4.2 4.8-.7 0-1.4-.2-2-.5v7.9h7.8c-.3.6-.5 1.3-.5 2 0 2.4 1.9 4.3 4.2 4.3 2.3 0 4.2-1.9 4.2-4.3 0-.7-.2-1.4-.5-2h7.8V6.1z"></path>
                  <path fill="#ff9d23" stroke="#0000db" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.234" d="M33.7 26.6v7.5c-.6-.3-1.3-.5-2-.5-2.5 0-4.5 2.2-4.2 4.8.2 1.8 1.6 3.4 3.5 3.7 1 .2 2 0 2.8-.4v7.9H13.6c-1.6 0-2.8-1.3-2.8-2.8V26.6h7.8c-.3-.6-.5-1.3-.5-2 0-2.3 1.9-4.3 4.2-4.3 2.3 0 4.2 1.9 4.2 4.3 0 .7-.2 1.4-.5 2h7.7z"></path>
                  <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.447" d="M33.7 26.6v-1"></path>
                  <path fill="#9495fa" stroke="#0000db" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.234" d="M56.6 26.6v20.1c0 1.6-1.3 2.8-2.8 2.8H33.7v-7.9c-.8.4-1.8.6-2.8.4-1.8-.3-3.2-1.8-3.5-3.7-.3-2.6 1.7-4.8 4.2-4.8.7 0 1.4.2 2 .5v-7.5h7.8c-.3.6-.5 1.3-.5 2 0 2.4 1.9 4.3 4.2 4.3 2.3 0 4.2-1.9 4.2-4.3 0-.7-.2-1.4-.5-2h7.8z"></path>
                  <path fill="#fed3be" stroke="#0000db" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.234" d="M35.8 19.1c-.7 0-1.4-.2-2-.5v7.9H26c.3-.6.5-1.3.5-2 0-2.3-1.9-4.3-4.2-4.3-2.3 0-4.2 1.9-4.2 4.3 0 .7.2 1.4.5 2h-7.8V6c0-1.6 1.3-2.8 2.8-2.8h20.1v7.9c.8-.4 1.8-.6 2.8-.4 1.8.3 3.2 1.8 3.5 3.7.3 2.6-1.7 4.7-4.2 4.7z"></path>
                  <path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.234" d="M48.3 18.1v-2.5c1.9 0 3.5-1.5 3.5-3.5 0-1.9-1.5-3.5-3.5-3.5-1.9 0-3.5 1.6-3.5 3.5 0 .2 0 .4.1.6m3.8 7.6c0 .2-.2.3-.3.3-.2 0-.3-.2-.3-.3 0-.2.2-.3.3-.3.1 0 .3.1.3.3z"></path>
                  <path fill="none" stroke="#9495fa" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.482" d="m4.1 24 1.6-1.7 1.5 1.5"></path>
                  <path fill="none" stroke="#ff4b4d" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.482" d="m60.1 38.9 1.7-1.7 1.4 1.5M3 31.4.8 33.7"></path>
                  <path fill="none" stroke="#ff9d23" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.482" d="m61.9 18.1-2.5 2.6"></path>
                  <path fill="none" stroke="#0000db" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.482" d="m8.1 56.7-2.6 2.6"></path>
                  <path fill="none" stroke="#ff9d23" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.482" d="m43.3 54.1-2.6 2.6"></path>
                </svg>
                <span>Câu đố</span>


              </Link>

              {/* Học */}
              <Link
                href="/learn"
                className="text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-1"
              >
                <img src="https://d3sxshmncs10te.cloudfront.net/icon/free/svg/10012778.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkM3N4c2htbmNzMTB0ZS5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTc1ODg4MzU5OSwicSI6bnVsbCwiaWF0IjoxNzU4NjI0Mzk5fQ__.98eee27cb68b8e9be2e1954024cf5328af331c4f97e7df2b3f24d7328992ee92" width="60" height="60" />


                <span>Học</span>
              </Link>

              {/* Cài đặt */}
              <Link
                href="/settings"
                className="text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-1"
              >
                <img src="https://d3sxshmncs10te.cloudfront.net/icon/free/svg/4574515.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkM3N4c2htbmNzMTB0ZS5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTc1ODg4NDQyNywicSI6bnVsbCwiaWF0IjoxNzU4NjI1MjI3fQ__.7fc6ea76c340c492cf27e2abbee3a6f7b078378b8aa26719608993c96d4be9f7" width="50" height="50" />

                <span>Cài đặt</span>
              </Link>

            </div>
          </div>

          {/* Account Section */}
          <div className="relative" ref={dropdownRef}>
            {user ? (
              // Logged in user
              <div className="relative">
                <button
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors focus:outline-none"
                  onClick={() => setIsAccountDropdownOpen(!isAccountDropdownOpen)}
                >
                  <User className="h-5 w-5" />
                  <span className="hidden sm:block">{user.username}</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${isAccountDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {isAccountDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    <div className="py-1">

                      {/* Ngôn ngữ */}
                      <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 flex items-center space-x-2">
                        <span>Profile</span>
                      </button>

                      {/* Âm thanh */}
                      <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 flex items-center space-x-2">
                        <span>Language</span>
                      </button>

                      {/* Nền */}
                      <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 flex items-center space-x-2">
                        <span>Theme</span>
                      </button>

                      {/* Divider */}
                      <div className="border-t border-gray-200 my-1"></div>

                      {/* Đăng xuất */}
                      <button
                        onClick={handleLogout}
                        className="w-full px-4 py-2 text-left text-red-600 hover:bg-gray-50 hover:text-red-700 flex items-center space-x-2"
                      >
                        <LogOut className="h-4 w-4" />
                        <span>Đăng xuất</span>
                      </button>

                    </div>
                  </div>
                )}
              </div>
            ) : (
              // Not logged in
              <div className="flex items-center space-x-4">
                <Link
                  href="/login"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Đăng nhập
                </Link>
                <Link
                  href="/register"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Đăng ký
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;