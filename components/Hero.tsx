import Image from "next/image";
import React from "react";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="bg-tt-red ">
      <div className="w-screen max-w-[1920px] mx-auto grid grid-cols-6 grid-rows-4 gap-1 h-screen max-h-[900px]">
        <HeroImage
          image="/Images/one.jpg"
          grid_position={"col-span-2 row-span-2"}
        />
        <HeroImage
          image="https://images.pexels.com/photos/18889468/pexels-photo-18889468/free-photo-of-pencil.jpeg?auto=compress&cs=tinysrgb&w=800"
          grid_position={"col-span-1 "}
        />
        <HeroImage
          image="https://images.pexels.com/photos/8948347/pexels-photo-8948347.jpeg?auto=compress&cs=tinysrgb&w=800"
          grid_position={"col-span-1 "}
        />

        <HeroImage
          image="https://images.pexels.com/photos/2170105/pexels-photo-2170105.jpeg?auto=compress&cs=tinysrgb&w=800"
          grid_position={"col-span-2 row-span-2"}
        />

        <div className="col-span-2 row-span-2 bg-tt-cream grid place-items-center  p-4">
          <h1 className="text-tt-red text-2xl">
            <div>
              <Image
                src="/Images/Badge.png"
                alt=""
                width={150}
                height={150}
                className="mx-auto pb-6"
              />
              <h1 className="text-xl font-bold">
                IN OUR HANDS LIES THE FUTURE
              </h1>
            </div>
          </h1>
        </div>

        <HeroImage
          image="https://images.pexels.com/photos/9628111/pexels-photo-9628111.jpeg?auto=compress&cs=tinysrgb&w=800"
          grid_position={"row-span-2 col-span-2"}
        />

        <HeroImage
          image="https://images.pexels.com/photos/5905458/pexels-photo-5905458.jpeg?auto=compress&cs=tinysrgb&w=800"
          grid_position={"col-span-2 row-span-2"}
        />

        <HeroImage
          image="https://images.pexels.com/photos/6344238/pexels-photo-6344238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          grid_position={"col-span-1 "}
        />

        <HeroImage
          image="https://images.pexels.com/photos/8618026/pexels-photo-8618026.jpeg?auto=compress&cs=tinysrgb&w=800"
          grid_position={"col-span-1 "}
        />
      </div>
    </section>
  );
}

//so-----------------> on to the colors
