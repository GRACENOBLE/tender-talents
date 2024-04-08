import React from "react";

export default function Hero() {
  return (
    <div className="w-full h-[900px] borer bg-slate-950 grid grid-cols-6 gap-1">
      <div className="bg-green-500 col-span-2 row-span-3"></div>
      <div className="bg-red-500 col-span-1 row-span-1 "></div>
      <div className="bg-blue-500 col-span-1 row-span-1 "></div>
      <div className="bg-purple-500 h-full col-span-2 row-span-3"></div>
      <div className="bg-black row-span-4 col-span-2"></div>
      <div className="bg-gray-500 col-span-2 row-span-3"></div>
      <div className="bg-green-500 col-span-2 row-span-3"></div>
      <div className="bg-blue-600 col-span-1 row-span-1"></div>
      <div className="bg-pink-600 col-span-1 row-span-1"></div>
    </div>
  );
}
