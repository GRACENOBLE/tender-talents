import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="w-full h-80 bottom-0 bg-red-950">
      <Container>
        <div className="flex w-full h-max justify-between items-center">
          <div>
            <Image
              src="/Images/Badge.png"
              height={8000}
              width={4000}
              alt=""
              className="w-24"
            />
          </div>
          <div className="flex gap-40 text-white">
            <div className="flex flex-col gap-2">
              <h1 className="text-orange-400">DOWNLOAD</h1>
              <Navlink title={"Fees structure"} path={""} />
              <Navlink title={"Application form"} path={""} />
              <Navlink title={"Prospectus"} path={""} />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-orange-400">SCHOOL</h1>
              <Navlink title={"Theatre"} path={""} />
              <Navlink title={"About"} path={""} />
              <Navlink title={"Programs"} path={""} />
            </div>
            <div>
              <h1 className="text-orange-400">LOCATION</h1>
              <p>P.O Box 26354,   </p>
              <p>UG Kasangati,</p>
              <p>Buyinja zone,</p>
              <p>Sseninde Road</p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-orange-400">CONTACT</h1>
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
  <Link href={path} className="hover:underline">
    {title}
  </Link>
);
