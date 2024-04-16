import Image from "next/image";
import React from "react";
import Container from "./Container";

export default function StudentGrowth() {
  return (
    <section className="bg-tt-pink h-screen">
      <Container>
        <div className="flex items-center h-screen">
          <div>
            <Image src="/Images/group.png" alt="" width={1000} height={1000} className="h-[460px] w-[600px] rounded-md object-cover"/>
          </div>
          <div className="max-w-[900px] flex flex-col gap-9 justify-center ps-20">
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
