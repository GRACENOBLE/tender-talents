import Image from "next/image";
import React from "react";
import Link from "next/link";
import Container from "./Container";
import {Button} from "@/components/ui/button"


const Header = ()=> {
  return (
    <header className="w-full fixed py-4 top-0 z-50 left-0 text-white bg-gradient-to-b from-black to-transparent">
      <Container>
        <nav className="flex justify-between items-center">
          <Link href="./">
              <h2>Tender Talents</h2>
          </Link>

          <div className="flex gap-7">
            <Navlink title={"Theatre"} path={"/Theatre"} />
            <Navlink title={"Programs"} path={"/Programs"} />
            <Navlink title={"About"} path={"/About"} />
            <Navlink title={"Contact"} path={"/Contact"} />
            <Navlink title={"Galery"} path={"/Galery"} />
          </div>
          <div>
            <Button className="bg-tt-yellow text-red-950 text-md font-bold hover:bg-orange-400">APPLY</Button>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;

type NavLinkProps = { title: string; path: string };

const Navlink = ({ title, path }: NavLinkProps) => (
  <Link
    href={path}
    className="relative hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
  >
    {title}
  </Link>
);
