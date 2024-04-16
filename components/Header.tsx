"use client"

import Image from "next/image";
import React, { useState,useEffect } from "react";
import Link from "next/link";
import Container from "./Container";
import { Button } from "@/components/ui/button";



export default function Header() {
  const[isScrolled, setisScrolled] = useState(false)

    useEffect(() =>{
      const handleScroll = () =>{
        const scrolled =
          (window.scrollY >= 600)
        setisScrolled(scrolled)
      }
      window.addEventListener("scroll",handleScroll)
      return () =>{
        if(window){
          window.removeEventListener("scroll",handleScroll)
        }     
      }
    },[])
  return (
      <header className={`"absolute w-full fixed py-4 top-0 z-50 left-0  text-white " ${isScrolled? "bg-tt-red":"bg-gradient-to-b from-black to-transparent"}`}>
      <Container>
        <nav className="flex justify-between items-center">
          <Link href="./">
            <div>
              <h2 className="uppercase">Tender Talents</h2>
              {/* <h2 className="uppercase">Magnet school</h2> */}
            </div>
          </Link>

          <div className="flex gap-7">
            <Navlink title={"Theatre"} path={"/Theatre"} />
            <Navlink title={"Programs"} path={"/Programs"} />
            <Navlink title={"About"} path={"/About"} />
            <Navlink title={"Contact"} path={"/Contact"} />
            <Navlink title={"Galery"} path={"/Galery"} />
          </div>
          <div>
            <Button className="bg-tt-yellow text-red-950 text-md font-bold hover:bg-white hover:text-black">
              APPLY
            </Button>
          </div>
        </nav>
      </Container>
    </header>
    
  )
}

type NavLinkProps = { title: string; path: string };

const Navlink = ({ title, path }: NavLinkProps) => (
  <Link
    href={path}
    className="relative hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
  >
    {title}
  </Link>
);
