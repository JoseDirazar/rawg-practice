
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

  return (
    <div className="hidden group-hover:block rounded-t-xl overflow-hidden">
      <Carousel className="w-full ">
        <CarouselPrevious className="absolute left-0 top-1/2 z-10 hidden group-hover:flex items-center justfy-center bg-white/20 border-none hover:bg-white/50" />
        <CarouselContent className="">
          {screenshots.map((screenshot, index) => (
            <CarouselItem key={index + screenshot} className="w-full m-0 p-0">
              <Image
                src={screenshot}
                alt={screenshot}
                height={288}
                width={600}
                className="bg-cover p-0 m-0 w-full"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="absolute right-0 top-1/2 hidden group-hover:flex items-center justfy-center bg-white/20 border-none hover:bg-white/50" />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
      
      </div>
    </div>
  );
}
