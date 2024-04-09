import Image from "next/image";
import React from "react";
import Container from "./Container";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-[75px] top-0 left-0 bg-red-950 text-white">
      <Container>
        <nav className="flex justify-between items-center">
          <Link href="./">
          <div className="flex gap-2">
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
          </Link>
          
          <div className="flex gap-7">
            <Navlink title={"Theatre"} path={"/Theatre"} />
            <Navlink title={"Programs"} path={"/Programs"} />
            <Navlink title={"About"} path={"/About"} />
            <Navlink title={"Contact"} path={"/Contact"} />
            <Navlink title={"Galery"} path={"/Galery"} />
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
  <Link
    href={path}
    className="relative hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
  >
    {title}
  </Link>
);
