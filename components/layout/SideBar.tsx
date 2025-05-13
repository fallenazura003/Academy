"use client"
import { BarChart4, MonitorPlay } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function SideBar() {
    const pathName= usePathname()
    const sidebarRoutes = [
        { icon: <MonitorPlay />, label: "Các khóa học", path: "/instructor/courses" },
        { icon: <BarChart4 />, label: "Thống kê", path: "/instructor/performance" }
    ]
    return (
        <div className='max-sm:hidden flex flex-col w-64 border-r shadow-md px-3 my-4 gap-4 text-sm font-medium'>
            {sidebarRoutes.map((route) => (
                <Link href={route.path} key={route.path} className={`'flex items-center gap-4 p-3 rounded-lg hover:bg-blue-500'
                ${pathName.startsWith(route.path) && "bg-blue-500 hover:bg-blue-500/70"}`}>
                    {route.icon}{route.label}</Link>
            ))}
        </div>
    )
}

export default SideBar