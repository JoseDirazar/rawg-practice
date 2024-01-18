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
const GameCard = ({ game }: { game: any }) => {
  return (
    <Card className="group flex flex-col my-4 mx-1 bg-secondary rounded-xl border-none max-w-[400px] hover:scale-125 transition-transform">
      <Image
        src={game.background_image}
        alt={game.name}
        height={200}
        width={300}
        className="rounded-t-xl bg-cover w-full overflow-hidden"
        />
        <CardContent className="py-2">
        <p className="font-bold text-3xl">{game.name}</p>
        <p className="py-2 text-xl">{game.rating}</p>
        </CardContent>
        <CardFooter className="hidden group-hover:animate-accordion-down group-hover:block" >
        {game.reviews_text_count}
        </CardFooter>
    </Card>
  );
};

export default GameCard;

/*  {
      id: 3498,
      slug: 'grand-theft-auto-v',
      name: 'Grand Theft Auto V',
      released: '2013-09-17',
      tba: false,
      background_image: 'https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg',
      rating: 4.47,
      rating_top: 5,
      ratings: [Array],
      ratings_count: 6694,
      reviews_text_count: 57,
      added: 20468,
      added_by_status: [Object],
      metacritic: 92,
      playtime: 74,
      suggestions_count: 429,
      updated: '2024-01-17T15:59:41',
      user_game: null,
      reviews_count: 6793,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [Array],
      parent_platforms: [Array],
      genres: [Array],
      stores: [Array],
      clip: null,
      tags: [Array],
      esrb_rating: [Object],
      short_screenshots: [Array]
    }, */
