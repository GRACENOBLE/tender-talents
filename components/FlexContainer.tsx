import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

type FlexContProps = {
  title: string;
  text: string;
  dir: boolean;
  image: string;
  text2: string;
  btntext?: string;
  path?: string;
};

const FlexContainer = ({ title, text, text2, dir, image,btntext,path }: FlexContProps) => {
  return (
    <div
      className={`max-w-[1280px] mx-auto px-4 flex  justify-between items-start flex-col ${
        dir ? "lg:flex-row-reverse" : "lg:flex-row"
      } py-8 md:py-16 gap-4`}
    >
      <div className="max-w-[600px] h-[400px] w-full gap-4">
        <Image
          src={image}
          height={300}
          width={600}
          alt={title + " at Tender Talents mahnet School Kasangati"}
          className="col-span-2 h-full object-cover rounded-2xl shadow-xl"
        />
      </div>
      <div className="max-w-[460px]">
        <h1 className="text-3xl text-tt-red font-[500] py-4 ">{title}</h1>
        <p className="text-sm text-black max-w-[460px]">{text}</p>
        <p className="text-sm text-black max-w-[460px] mt-4">{text2}</p>
        <div className="mt-14">
          {path && (
            <Link href={path}>
              <Button variant={"secondary"}>{btntext}</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlexContainer;
