import Image from "next/image";
import React from "react";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="bg-tt-red ">
      <div className="w-screen max-w-[1920px] mx-auto grid grid-cols-6 grid-rows-4 gap-1 h-screen pb-1 max-h-[900px]">
        <HeroImage
          image="/Images/studensWalking2.png"
          grid_position={"col-span-2 row-span-2"}
        />
        <HeroImage image="/Images/discussion.png" grid_position={"col-span-1 "} />
        <HeroImage
          image="/Images/studentsWalking.png"
          grid_position={"col-span-1 "}
        />

        <HeroImage
          image="/Images/potOnHead.png"
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
          image="/Images/computerLab2.JPG"
          grid_position={"row-span-2 col-span-2"}
        />

        <HeroImage
          image="/Images/theatre3.png"
          grid_position={"col-span-2 row-span-2"}
        />

        <HeroImage image="/Images/band.png" grid_position={"col-span-1 "} />

        <HeroImage image="/Images/dance2.png" grid_position={"col-span-1 "} />
      </div>
    </section>
  );
}

//so-----------------> on to the colors
