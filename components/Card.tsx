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
    <Card className="flex flex-col my-3 bg-secondary rounded-xl">
      <CardHeader>
      <Image
        src={game.background_image}
        alt={game.name}
        height={200}
        width={300}
        className="rounded-t-xl bg-cover w-full overflow-hidden"
        />

      </CardHeader>
        <div className="m-3">
        <p className="px-2 font-bold text-2xl">{game.name}</p>
        <p className="px-1">{game.rating}</p>
        </div>
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
