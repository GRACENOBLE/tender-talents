import Image from "next/image";
import React from "react";
import Container from "./Container";

export default function StudentGrowth() {
  return (
    <section className="bg-tt-pink">
      <Container>
        <div className="flex justify-around">
          <div>
            <Image src="/Images/Badge.png" alt="" width={400} height={400} />
          </div>
          <div className="max-w-[800px] flex flex-col gap-9 justify-center">
            <h1 className="text-[70px] uppercase font-bold text-tt-red">
              OUR COMMITMENT TO STUDENT GROWTH
            </h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              quas nulla aspernatur ex odit quidem, necessitatibus maxime illo
              culpa, porro similique eius atque iusto velit dolores voluptates!
              Velit accusamus sapiente, quasi dolorem nobis aperiam laudantium
              eligendi reiciendis molestias, mollitia fuga minus, neque at
              dolores esse quae repellendus. Fugiat, necessitatibus ex?
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
