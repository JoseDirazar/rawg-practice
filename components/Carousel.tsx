"use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function GameCarousel({
  screenshots,
}: {
  screenshots: string[];
}) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="hidden group-hover:block rounded-t-xl overflow-hidden">
      <Carousel setApi={setApi} className="w-full ">
        <CarouselPrevious className="absolute left-0 top-1/2 z-10 hidden group-hover:flex items-center justfy-center bg-white/20 border-none hover:bg-white/50" />
        <CarouselContent className="">
          {screenshots.map((screenshot, index) => (
            <CarouselItem key={index} className="w-full ">
              <Image
                src={screenshot}
                alt={screenshot}
                height={240}
                width={360}
                className="bg-cover p-0 m-0 w-full"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="absolute right-0 top-1/2 hidden group-hover:flex items-center justfy-center bg-white/20 border-none hover:bg-white/50" />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>
  );
}
