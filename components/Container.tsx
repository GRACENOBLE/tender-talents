import React from 'react'

export default function Container({ children }: { children: React.ReactNode }) {
  return  <div className="w-full mx-auto max-w-[1280px] px-4 md:px-8">{children}</div>;
}

