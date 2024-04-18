import Image from "next/image";
import React from "react";

export default function GaleryCard({image}: {image: string}) {
  return (
    <div className="rounded-lg hover:shadow-lg p-4 hover:bg-tt-pink hover:text-black border">
      <Image
        src={image}
        alt=""
        width={600}
        height={400}
        className="w-full min-w-40 max-w-[363.2px]"
        // loading="lazy"
        // placeholder="blur"
      />
      {/* <div className="max-w-80 min-w-40 py-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut vitae,
        soluta sint repellendus nobis ipsam.
      </div> */}
    </div>
  );
}
