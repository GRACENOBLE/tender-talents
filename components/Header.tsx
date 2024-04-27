"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Container from "./Container";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const pathname = usePathname();

  type NavLinkProps = { title: string; path: string };
  type SubjectCardProps = { title: string; subjects: any };

  const OLevelSubjects = [
    { subject: "English" },
    { subject: "History" },
    { subject: "Geography" },
    { subject: "Agriculture" },
    { subject: "Physics" },
    { subject: "Chemistry" },
    { subject: "Biology" },
    { subject: "Islamic Religious Studies" },
    { subject: "Christian Religious Education" },
    { subject: "Computer studies" },
    { subject: "Luganda" },
    { subject: "Mathematics" },
    { subject: "Kiswahili" },
    { subject: "Physical education" },
    { subject: "Entreprenuership" },
    { subject: "Literature" },
  ];

  const ALevelSubjects = [
    { subject: "History" },
    { subject: "Geography" },
    { subject: "Agriculture" },
    { subject: "Physics" },
    { subject: "Chemistry" },
    { subject: "Biology" },
    { subject: "Mathematics" },
    { subject: "Islamic Religious Studies" },
    { subject: "Divinity" },
    { subject: "Luganda" },
    { subject: "Kiswahili" },
    { subject: "Economics" },
    { subject: "Entreprenuership" },
    { subject: "Literature" },
    { subject: "subsidiary ICT" },
    { subject: "subsidiary Maths" },
  ];

  const VocationalSubjects = [
    { subject: "Visual Production" },
    { subject: "Welding" },
    { subject: "Fine Art" },
    { subject: "Baking" },
    { subject: "Tailoring" },
    { subject: "Saponification" },
    { subject: "Music instrumenty" },
    { subject: "Audio Production" },
  ];
  const Navlink = ({ title, path }: NavLinkProps) => (
    <li>
      <Link
        href={path}
        className={clsx(
          "relative hover:text-tt-yellow duration-300 before:w-full before:transition-all ease-in-out before:ease-in-out before:duration-300 before:absolute before:bg-tt-yellow before:origin-center before:h-[1px] before:scale-0 hover:before:scale-100 before:-bottom-1 before:left-0 text-white text-xs font-semibold",
          { "underline underline-offset-[7px]": pathname === path }
        )}
      >
        {title}
      </Link>
    </li>
  );

  const SubjectCard = ({ title, subjects }: SubjectCardProps) => (
    <div className="border rounded-lg hover:shadow-lg py-5 px-5">
      <h1 className="font-bold text-tt-red">{title}</h1>
      <div className=" grid grid-cols-2">
        {subjects.map(({ subject }: any) => (
          <DropdownMenuItem>{subject}</DropdownMenuItem>
        ))}
      </div>
    </div>
  );
  const [isScrolled, setisScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY >= 600;
      setisScrolled(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      if (window) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  return (
    <header
      className={` w-full fixed  top-0 z-50 left-0 backdrop-blur-sm border-b-[.5px] duration-500 transition-all border-b-white/20 bg-tt-red ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <Container>
        <nav className="flex justify-between items-center">
          <Link href="./">
            <div>
              <h2 className="text-white">Tender Talents</h2>
            </div>
          </Link>

          <div className="flex items-center gap-20">
            <ul className="flex items-center gap-8">
              <DropdownMenu>
                <DropdownMenuTrigger className=" hover:text-tt-yellow duration-300 before:transition-all ease-in-out text-white text-xs font-semibold">
                  Programs
                </DropdownMenuTrigger>
                <DropdownMenuContent className="flex justify-center bg-tt-cream w-screen">
                  <DropdownMenuSub>
                    <div className="flex justify-between bg-tt-cream my-8 rounded-md gap-4">
                      <SubjectCard
                        title={"O-Level"}
                        subjects={OLevelSubjects}
                      />
                      <SubjectCard
                        title={"A-Level"}
                        subjects={ALevelSubjects}
                      />
                      <SubjectCard
                        title={"Vocational"}
                        subjects={VocationalSubjects}
                      />
                    </div>
                  </DropdownMenuSub>
                </DropdownMenuContent>
              </DropdownMenu>
              <Navlink title={"About"} path={"/About"} />
              <Navlink title={"Contact"} path={"/Contact"} />
            </ul>
            <Button className="hover:bg-tt-yellow/20 hover:text-white">
              Apply Now
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  );
}
