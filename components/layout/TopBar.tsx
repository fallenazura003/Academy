"use client"
import { Button } from '@/components/ui/button'
import { useAuth, UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function TopBar() {

  const { isSignedIn } = useAuth()
  const topRoutes = [
    { label: "Dạy", path: "/instructor/courses" },
    { label: "Học", path: "/learning" }
  ]
  return (
    <div className='flex justify-between items-center p-4 py-0'>

      {/* logo */}
      <Link href="/">
        <Image src="/logo.svg" height={15} width={30} alt='logo' />
      </Link>

      {/* thanh tìm kiếm */}
      <div className="max-md:hidden w-[400px] rounded-full flex">
        <input className='flex-grow bg-blue-200 rounded-l-full border-none outline-none text-sm pl-4 py-3' placeholder='Tìm kiếm khóa học' />
        <button className='bg-blue-200 rounded-r-full border-none outline-none cursor-pointer px-4 py-3 hover:bg-blue-500'><Search className='h-4 w-4' /></button>
      </div>

      <div className='flex gap-6 items-center'>
        <div className='max-sm:hidden flex gap-6'>
          {topRoutes.map((route) => (
            <Link
              href={route.path}
              key={route.path}
              className='text-sm font-medium hover:text-blue-500'>
              {route.label}
            </Link>
          ))}
        </div>
        {isSignedIn ? (<UserButton afterSignOutUrl='/sign-in' />) : (<Link href="/sign-in"><Button>Đăng nhập</Button></Link>)
        }
      </div>
    </div>
  )
}

export default TopBar