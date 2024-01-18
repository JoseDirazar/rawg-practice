import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
/* bg-[#202020] */
const HoverGameCard = ({ game }: { game: any }) => {
  return (
    <Card className="flex flex-col my-4 mx-1 bg-secondary rounded-xl border-none max-w-[400px]">
   
      <Image
        src={game.background_image}
        alt={game.name}
        height={200}
        width={300}
        className="rounded-t-xl bg-cover w-full overflow-hidden"
        />


        <CardContent className="py-2">
        <CardTitle className="font-bold text-3xl">{game.name}</CardTitle>
        <CardDescription className="py-2 text-xl">{game.rating}</CardDescription>
        </CardContent>
    </Card>
  );
};

export default HoverGameCard