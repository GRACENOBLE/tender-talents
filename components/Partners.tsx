import React from "react";
import Container from "./Container";
import Image from "next/image";

export default function Partners() {
  return (
    <section className="bg-tt-cream">
      <Container>
        <div className="flex justify-center">
          <h1 className="text-[90px] uppercase font-bold text-tt-red">
            Our Partners
          </h1>
        </div>

        <div className="w-full h-full  flex justify-between">
          <div className="flex flex-col gap-4 justify-center pb-4 w-full">
            <div className="max-w-[600px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
              tempore eum reprehenderit laboriosam corrupti ratione iusto illo
              nesciunt obcaecati sunt beatae, necessitatibus, et aspernatur.
              Repellat nam beatae quisquam atque incidunt officiis magni vero
              veritatis labore saepe sunt, repudiandae recusandae odio iusto
              modi temporibus optio eos possimus a est, maxime molestias.
            </div>
            <div className="max-w-[600px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
              tempore eum reprehenderit laboriosam corrupti ratione iusto illo
              nesciunt obcaecati sunt beatae, necessitatibus, et aspernatur.
              Repellat nam beatae quisquam atque incidunt officiis magni vero
              veritatis labore saepe sunt, repudiandae recusandae odio iusto
              modi temporibus optio eos possimus a est, maxime molestias.
            </div>
          </div>
          <div>
            <Image src="/Images/Badge.png" width={400} alt="" height={400} />
          </div>
        </div>
      </Container>
    </section>
  );
}