import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "./Container";


export default function Footer() {
  return (
    <footer className="w-full  bottom-0 bg-tt-red">
      <Container>
        <div className="flex w-full h-[300px] justify-between items-center">
          <div>
            <Image
              src="/images/logo.svg"
              height={8000}
              width={4000}
              alt=""
              className="w-24"
            />
          </div>
          <div className="flex gap-40 text-white">
            <div className="flex flex-col gap-2 text-tt-cream">
              <h1 className="text-tt-yellow">DOWNLOAD</h1>
              <Navlink title={"Fees structure"} path={""} />
              <Navlink title={"Application form"} path={""} />
              <Navlink title={"Prospectus"} path={""} />
            </div>
            <div className="flex flex-col gap-2 text-tt-cream">
              <h1 className="text-tt-yellow">SCHOOL</h1>
              <Navlink title={"Theatre"} path={""} />
              <Navlink title={"About"} path={""} />
              <Navlink title={"Programs"} path={""} />
            </div>
            <div className="text-tt-cream">
              <h1 className="text-tt-yellow ">LOCATION</h1>
              <p>P.O Box 26354, </p>
              <p>UG Kasangati,</p>
              <p>Buyinja zone,</p>
              <p>Sseninde Road</p>
            </div>
            <div className="flex flex-col gap-2 text-tt-cream">
              <h1 className="text-tt-yellow">CONTACT</h1>
              <Navlink title={"+256 772 420453"} path={""} />
              <Navlink title={"+256 753 871851"} path={""} />
            </div>
          </div>
        </div>
      </Container>
    </footer>
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
