import Image from "next/image";
import React from "react";
import Container from "./Container";
import { Button } from "./ui/button";

export default function Nurturing() {
  return (
    <div className="w-full h-[980px] flex justify-center items-center  gap-52 bg-tt-cream">
      <Container>
        <div className="w-full h-[980px] flex justify-between items-center gap-52">
          <div className="w-full">
            <Image
            src="/Images/Badge.png"
            alt=""
            width={400}
            height={400}
            className="h-[400] w-[400] mx-auto"
          />
          </div>
          
          <div className="max-w-[800px] flex flex-col gap-8">
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
              <Button className="bg-tt-yellow hover:bg-orange-400">Contact us now</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
