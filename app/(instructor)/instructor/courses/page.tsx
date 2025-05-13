import { Button } from '@/components/ui/button';
import { auth } from '@clerk/nextjs/server'
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'

async function CoursesPage() {
    const {userId}=await auth();
    if(!userId){
        return redirect("/sign-in")
    }
  return (
    <div className='px-6 py-4'>
        <Link href="instructor/create-course"><Button>Tạo khóa học mới</Button></Link>
    </div>
  )
}

export default CoursesPage