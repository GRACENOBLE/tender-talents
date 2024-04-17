import Image from "next/image";
import React from "react";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="bg-tt-red ">
      <div className="w-screen max-w-[1920px] mx-auto grid grid-cols-6 grid-rows-4 gap-1 h-screen pb-1 max-h-[900px]">
        <HeroImage
          image="https://r9kvhfb2qmlqu55z.public.blob.vercel-storage.com/studensWalking2-94jPhR9VnaDVQjGzqDQ34djrQvpTBn.png"
          grid_position={"col-span-2 row-span-2"}
        />
        <HeroImage
          image="https://r9kvhfb2qmlqu55z.public.blob.vercel-storage.com/discussion-arqBzOEkjIyVWHpA7igS8RjmGOUJNo.png"
          grid_position={"col-span-1 "}
        />
        <HeroImage
          image="https://r9kvhfb2qmlqu55z.public.blob.vercel-storage.com/studentsWalking-UyrVwa6BwFHVSvnLPwLCEpmHk2FGKI.png"
          grid_position={"col-span-1 "}
        />

        <HeroImage
          image="https://r9kvhfb2qmlqu55z.public.blob.vercel-storage.com/potOnHead-5TRJ4PIIG0yYM7dyJzSR9QHbFT09xT.png"
          grid_position={"col-span-2 row-span-2"}
        />

        <div className="col-span-2 row-span-2 bg-tt-cream grid place-items-center  p-4">
          <h1 className="text-tt-red text-2xl">
            <div>
              {/*note to self each of these images will have to be replaced with hosted images so as to improve SEO */}
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
          image="https://r9kvhfb2qmlqu55z.public.blob.vercel-storage.com/computerLab2-DRkdj4CwvzpDwaLD3xGzkijcb6s5CI.JPG"
          grid_position={"row-span-2 col-span-2"}
        />

        <HeroImage
          image="https://r9kvhfb2qmlqu55z.public.blob.vercel-storage.com/theatre3-dEkp4upXBHVNP6qRlNHWaGlZXpFS8L.png"
          grid_position={"col-span-2 row-span-2"}
        />

        <HeroImage
          image="https://r9kvhfb2qmlqu55z.public.blob.vercel-storage.com/band-loTi7eHjHhYCiBK1Iv2G3hG1y0uDpE.png"
          grid_position={"col-span-1 "}
        />

        <HeroImage
          image="https://r9kvhfb2qmlqu55z.public.blob.vercel-storage.com/dance2-GT0TTuDIEr4ufMgfOcWrQEddKLJlIQ.png"
          grid_position={"col-span-1 "}
        />
      </div>
    </section>
  );
}

//so-----------------> on to the colors
