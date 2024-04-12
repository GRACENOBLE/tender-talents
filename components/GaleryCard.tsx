import Image from "next/image";
import React from "react";

export default function GaleryCard() {
  return (
    <div className=" border rounded-lg hover:shadow-lg bg-tt-red p-4 hover:bg-tt-yellow hover:text-black text-white">
      <Image src="/Images/one.jpg" alt="" width={400} height={400} className="w-full min-w-40 max-w-80"/>
      <div className="max-w-80 min-w-40 py-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut vitae,
        soluta sint repellendus nobis ipsam.
      </div>
    </div>
  );
}
