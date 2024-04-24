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
    <header
      className={` w-full fixed  top-0 z-50 left-0 backdrop-blur-sm border-b-[.5px] duration-500 transition-all border-b-white/20 bg-tt-red ${isScrolled ?"py-2":"py-4" }`}
    >
      <Container>
        <nav className="flex justify-between items-center">
          <Link href="./">
            <div>
              <h2 className="text-white">Tender Talents</h2>
              {/* <h2 className="uppercase">Magnet school</h2> */}
            </div>
          </Link>

          <div className="flex items-center gap-20">
            <ul className="flex items-center gap-8">
              <Navlink title={"Programs"} path={"/Programs"} />
              <Navlink title={"About"} path={"/About"} />
              <Navlink title={"Contact"} path={"/Contact"} />
            </ul>
            <Button className="hover:bg-tt-yellow/20 hover:text-white">Apply Now</Button>
          </div>
        </nav>
      </Container>
    </header>
  );
}

type NavLinkProps = { title: string; path: string };

const Navlink = ({ title, path }: NavLinkProps) => (
  <li>
    <Link
      href={path}
      className="relative hover:text-tt-yellow duration-300 before:w-full before:transition-all ease-in-out before:ease-in-out before:duration-300 before:absolute before:bg-tt-yellow before:origin-center before:h-[1px] before:scale-0 hover:before:scale-100 before:-bottom-1 before:left-0 text-white text-xs font-semibold"
    >
      {title}
    </Link>
  </li>
);
