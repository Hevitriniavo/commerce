"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

export default function Navigation() {
    const pathname = usePathname();

    const links: { name: string; link: string; }[] = [
        {
            name: "Acceuil",
            link: '/home'
        },
        {
            name: "Produits",
            link: '/products'
        },
        {
            name: "tableau de bord",
            link: '/dashboard'
        },

    ];
    return (
        <div className='fixed w-full bg-gray-300 z-50 h-auto top-0'>  
            <div className='mx-8 flex flex-row items-center justify-between'>
                <div>
                    <Link href="/home">
                        <Image
                            src="/logo.jpg"
                            alt="logo"
                            width={40}
                            height={40}
                            className="object-cover w-full"
                        />
                    </Link>
                </div>
                <div className='flex items-center justify-between gap-4'>
                    {links.map(({ name, link }) => (
                        <Link key={link} href={link} className={`px-6 py-3 bg-gray-300 rounded-sm border-b-2 border-opacity-1 hover:border-gray-400 hover:border-b-2  hover:bg-slate-200 transition-opacity duration-300 ${pathname === link ? 'border-b-2 border-gray-400 bg-slate-100' : ''}`}>
                            {name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
