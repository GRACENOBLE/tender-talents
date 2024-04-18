import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "./Container";

export default function WhoWeAre() {
  return (
    <section className="h-[850px] w-full bg-tt-pink">
      <Container>
        <div className="w-full h-full flex flex-col items-center">
          <h1 className="text-[90px] uppercase font-bold text-tt-red">
            Who we are
          </h1>
          <div className="flex gap-4 my-auto w-full justify-between">
            <div className=" flex flex-col justify-center px-7">
              <Image
                src="https://r9kvhfb2qmlqu55z.public.blob.vercel-storage.com/building-44ffvJjAoUWW8CWmQhwlOPeqD7Z4gi.png"
                alt=""
                width={400}
                height={400}
                className=" w-[700px] h-[570px] object-cover rounded-lg"
                loading="lazy"
                placeholder="blur"
              />
            </div>
            <div className="flex flex-col items-center gap-4 w-[600px] py-7">
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
    </section>
  );
}

type CardProps = { title: string; path: string; description: string };

const Card = ({ title, description }: CardProps) => (
  <div className="border rounded-lg w-96 hover:shadow-xl hover:bg-tt-cream ps-5 py-7 backdrop:blur-md">
    <div className="text-tt-red font-bold text-xl">{title}</div>
    <div>{description}</div>
  </div>
);
