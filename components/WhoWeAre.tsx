import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "./Container";

export default function WhoWeAre() {
  return (
    <div className="h-[980px] w-full">
      <Container>
        <div className="w-full h-full flex flex-col items-center">
        <h1 className="text-[60px] uppercase border font-bold">Who we are section</h1>
        <div className="flex gap-4 my-auto w-full justify-between border">
          <div className="border flex flex-col justify-center px-7">
            <Image
              src="/Images/Badge.png"
              alt=""
              width={100}
              height={100}
              className="h-96 w-[700px] object-contain"
            />
          </div>
          <div className="flex flex-col items-center gap-4 border w-[600px] py-7">
            <Card
              title={"Mission"}
              path={""}
              description={
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae et cupiditate doloribus! Minima praesentium ipsa amet sapiente recusandae labore necessitatibus!"
              }
            />
            <Card
              title={"Vision"}
              path={""}
              description={
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae et cupiditate doloribus! Minima praesentium ipsa amet sapiente recusandae labore necessitatibus!"
              }
            />
            <Card
              title={"Discipline"}
              path={""}
              description={
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae et cupiditate doloribus! Minima praesentium ipsa amet sapiente recusandae labore necessitatibus!"
              }
            />
          </div>
        </div>
      </div>
      </Container>
      
    </div>
  );
}

type CardProps = { title: string; path: string; description: string };

const Card = ({ title, path, description }: CardProps) => (
  <Link href={path}>
    <div className="border rounded-lg w-96 hover:shadow-xl ps-5 py-7 backdrop:blur-md">
      <div className="text-tt-red font-bold text-xl">{title}</div>
      <div>{description}</div>
    </div>
  </Link>
);
