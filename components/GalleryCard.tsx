import Image from "next/image";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

export default function GalleryCard({
  image,
  caption,
}: {
  image: number;
  caption: string;
  id: number;
}) {
  return (
    <Card className="w-full h-full rounded-2xl overflow-hidden">
      <CardContent className="p-0">
        <div className="w-full h-full relative isolate">
          <Image
            src={`/images/gallery-images/photo_${image}.webp`}
            alt={caption + "at Tender Talents Theater in Uganda"}
            width={600}
            height={400}
            className="w-full h-[360px] object-cover object-top rounded-md"
            loading="lazy"
            placeholder="blur"
            blurDataURL={`/images/gallery-images/photo_${image}.webp`}
          />

          <div className="absolute top-0 left-0 w-full h-full z-20 bg-gradient-to-t from-black via-transparent to-transparent flex items-end">
            <h2 className="text-white p-8 text-xs">{caption}</h2>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
