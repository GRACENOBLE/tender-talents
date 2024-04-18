import Image from "next/image";
import React from "react";
import Container from "./Container";
import { Button } from "./ui/button";

export default function Nurturing() {
  return (
    <section className="w-full h-screen flex justify-center items-center bg-tt-cream">
      <Container>
        <div className=" h-[980px] flex items-center ">
          <div className="w-[800px]">
            <Image
              src="/Images/discussion.png"
              alt=""
              width={1000}
              height={1000}
              className=" h-[460px] w-[600px] rounded-md object-cover"
              loading="lazy"
              placeholder="blur"
              blurDataURL="/Images/discussion.png"
            />
          </div>

          <div className="ps-20 max-w-[800px] flex flex-col gap-8">
            <div>
              <h1 className="font-bold text-[90px] uppercase text-tt-red">
                Nurturing Potential
              </h1>
            </div>
            <div className="text-black">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
              laborum dolore, esse totam repellendus aliquid obcaecati
              accusantium temporibus, ducimus, dolorem doloribus nihil! Nam
              dolorem, vero facilis molestias impedit perferendis laborum,
              temporibus, quis ut hic ex rem distinctio dolorum vel officia
              aliquid cum sit totam tempora enim! Architecto repudiandae
              doloribus voluptate.
            </div>
            <div>
              <Button className="bg-tt-yellow text-red-950 text-md font-bold hover:bg-white hover:text-black">
                Contact us now
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
