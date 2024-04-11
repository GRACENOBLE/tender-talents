import Image from "next/image";
import React from "react";
import Link from "next/link";
import Container from "./Container";
import {Button} from "@/components/ui/button"


export default function Header() {//interesting style......Yeah I think its coming along, thoughts?//so the colors are nolonger clashing too much but what i fear is that in making it look better by darkening and gradients we may sort of divert from their color scheme......that okay>>>???????......We are going to use mostly white and cream and sprinkle the other colors where necessary -- not too much----->works for me🤣👍....Thats all I had you can add other stuff======> no prob im gonna make my research and see what we can add to make it better // follow the tendertalents.com structure., co...okayn twe willl build on what ill have added , easy the following section below should be light//understood....cause hero bg is dark?? yeah. try to keep the website light. Following amberloops.com//oh yes i was referencing from there 
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
            <Button className="bg-orange-400 text-red-950 text-md font-bold hover:bg-white">APPLY</Button>
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
