"use client";

import { useStoreUser } from '@/hooks/use-store-user';
import { BarLoader } from "react-spinners";
import { SignInButton, SignUpButton, UserButton, SignedIn, SignedOut } from '@clerk/nextjs'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Authenticated, Unauthenticated } from 'convex/react';
import { Button } from './ui/button';
import { LayoutDashboard } from 'lucide-react';

const Header = () => {

  const {isLoading} = useStoreUser();
  const path = usePathname();

  return (
    <header className='fixed top-0 w-full border-b bg-white/95 backdrop-blur z-50 supports-backdrop-filter:bg-white/60'>
      <nav className='container mx-auto h-16 flex items-center justify-between'>
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src={'/logos/placeholder.png'}
            alt= 'ShareEz logo'
            width={200}
            height={'60'}
            className='h-11 w-auto object-contain'
            />
        </Link>

        {path==='/' &&(
          <div className='hidden md:flex items-center gap-6'>
            <Link href='#features'
              className="text-sm font-medium hover:text-blue-500 transition">
              Features
            </Link>
            <Link href='#how-it-works'
              className="text-sm font-medium hover:text-blue-500 transition">
              How it Works
            </Link>
          </div>
        )}
        
          <div className='flex items-center gap-4'>
            <Authenticated>
              <Link href="/dashboard">
                <Button
                  variant='outline'
                  className='hidden md:inline-flex items-center gap-2 
                  hover:text-blue-500
                  hover:border-blue-500 transition'>
                    <LayoutDashboard className='h-4 w-4' />
                  Dashboard
                </Button>
                <Button 
                  variant='ghost' 
                  className='md:hidden w-10 h-10 p-0'>
                    <LayoutDashboard className='h-4 w-4' />
                </Button>
              </Link>
              <UserButton />
            </Authenticated>

            <Unauthenticated>
              <SignInButton>
                <Button variant={"ghost"}>Sign In</Button>
              </SignInButton>
              <SignUpButton>
                <Button className="bg-blue-500 hover:bg-blue-600 border-none">
                  Get Started
                </Button>
              </SignUpButton>
            </Unauthenticated>
          </div>
      </nav>
      {isLoading && <BarLoader width={"100%"} color="#069AF3"/>}
    </header>
  )
}

export default Header
