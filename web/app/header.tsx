'use client'

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaX } from "react-icons/fa6";
import Image from "next/image"

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const links = [
    {
      text: "Projects",
      href: "/projects"
    },
    {
      text: "Talks",
      href: "/talks"
    },
    {
      text: "Blogs",
      href: "/blogs"
    },
    {
      text: "Certifications",
      href: "/certifications"
    },
    {
      text: "About",
      href: "/about"
    }
  ]

  return (
    <>
      <div className="py-3 px-8 md:px-32 lg:px-48 xl:px-64 2xl:px-96 bg-blue-500">
        <nav className="text-sm text-white flex items-center">
          <Link className="font-bold" href="/">
            <Image src="/logo_128x35.png" alt="NikYo Technology Consulting" width={128} height={35}/>
          </Link>
          <div className="grow text-end hidden md:block">
            {
              links.map((l, i) => (
                <Link 
                  key={`link-${i}`} 
                  className="p-2 hover:bg-gray-300 hover:text-blue-500"
                  href={l.href}>
                    {l.text}
                </Link>
              ))
            }  
          </div>
          <div className="grow text-end md:hidden">
            <button onClick={() => setShowMenu(!showMenu)}>
              {
                showMenu ?
                <FaX className="size-6" /> :
                <FaBars className="size-6"/>
              }            
            </button>
          </div>
        </nav>      
      </div>
      <div className={`relative ${showMenu ? '' : 'hidden'} md:hidden`}>
        <div className="flex flex-col absolute top-0 right-0 mx-8 md:mx-32 lg:mx-48 xl:mx-64 2xl:mx-96 bg-blue-500 text-sm text-white">
          {
            links.map((l, i) => (
              <Link 
                key={`link-${i}`} 
                className="py-2 ps-4 pe-8 hover:bg-gray-300 hover:text-blue-500"
                href={l.href}>
                  {l.text}
              </Link>
            ))
          }
        </div>
      </div>
    </>
  )
}