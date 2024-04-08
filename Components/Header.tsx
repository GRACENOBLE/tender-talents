import Image from "next/image";
import React from "react";
import Container from "./Container";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-[75px] top-0 left-0 bg-red-950 text-white">
      <Container>
        <nav className="flex justify-between items-center">
          <div className="flex">
            <Image
              src="/Images/Badge.png"
              alt=""
              width={4000}
              height={8000}
              className="w-9"
            />
            <div className="flex flex-col justify-center ">
              <p>TENDER TALENTS</p>
              <p>MAGNET SCHOOL</p>
            </div>
          </div>
          <div className="flex gap-7">
            <Navlink title={"Theatre"} path={""} />
            <Navlink title={"Programs"} path={""} />
            <Navlink title={"About"} path={""} />
            <Navlink title={"Contact"} path={""} />
            <Navlink title={"Galery"} path={""} />
          </div>
          <div>
            <button className="bg-orange-400 rounded-md w-20 text-red-950 font-bold hover:bg-white">APPLY</button>
          </div>
        </nav>
      </Container>
    </header>
  );
}

type NavLinkProps = { title: string; path: string };

const Navlink = ({ title, path }: NavLinkProps) => (
  <Link href={path} className="hover:underline">
    {title}
  </Link>
);
