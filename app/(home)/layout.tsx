import React, { ReactNode } from 'react'
import TopBar from '@/components/layout/TopBar'

function HomeLayout({children}:{children:React.ReactNode}) {
  return (
    <div>
        <TopBar/>
        {children}
    </div>
  )
}

export default HomeLayout