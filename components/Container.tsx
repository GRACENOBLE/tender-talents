import React from 'react'

export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="w-full max-w-[1280px] px-6 mx-auto">{children}</div>;
}

