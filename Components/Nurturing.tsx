import Image from "next/image";
import React from "react";

export default function Nurturing() {
  return (
    <div className="w-full h-[980px] flex justify-center items-center border gap-52 bg-red-950">
      <Image
        src="/Images/Badge.png"
        alt=""
        width={100}
        height={100}
        className="h-96 w-48"
      />
      <div className="max-w-[800px] flex flex-col gap-4">
        <div>
          <h1 className="font-bold text-[50px] uppercase text-white">Nurturing section</h1>
        </div>
        <div className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
          laborum dolore, esse totam repellendus aliquid obcaecati accusantium
          temporibus, ducimus, dolorem doloribus nihil! Nam dolorem, vero
          facilis molestias impedit perferendis laborum, temporibus, quis ut hic
          ex rem distinctio dolorum vel officia aliquid cum sit totam tempora
          enim! Architecto repudiandae doloribus voluptate.
        </div>
        <div>
          <button className="bg-orange-400 w-40 h-7 rounded-md hover:bg-white">Contact us now</button>
        </div>
      </div>
    </div>
  );
}
