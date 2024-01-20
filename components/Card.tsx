import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import GameCarousel from '@/components/Carousel'

import { SiPlaystation } from "react-icons/si";
import { SiSteam, SiWindows10, SiEpicgames, SiXbox  } from "react-icons/si";

/* bg-[#202020] */
const GameCard = ({ game }: { game: any }) => {
  const stores = game?.stores?.map((store: any) => {
    return store.store.name;
  });
  const screenshots = game?.short_screenshots.map((image: any) => image.image)
  return (
    <Card className="group last:mb-0 flex flex-1 flex-col my-4 mx-1 bg-secondary rounded-xl overflow-visible hover:rounded-b-none border-none min-w-[270px] max-w-[400px] hover:scale-110 hover:after:transition-none transition-transform">
      {game.background_image && (
        <Image
          src={game.background_image}
          alt={game.name}
          height={200}
          width={300}
          className="rounded-t-xl bg-cover w-full group-hover:hidden"
        />
        )}
        <GameCarousel screenshots={screenshots}/>

      <CardContent className="py-3 flex flex-col  pl-2">
        <div className="flex items-center gap-x-2">
          {stores?.map((store: any, key: number) => {
            if (store === "PlayStation Store") {
              return <SiPlaystation key={key} size={20} />;
            }
            if (store === "Xbox Store" || store === "Xbox 360 Store") {
              return <SiXbox key={key} size={18} />;
            }
            if (store === "Steam") {
              return <SiSteam key={key} size={20} />;
            }
            if (store === "PC") {
              return <SiWindows10 key={key} size={20} />;
            }
            if (store === "Epic Games") {
              return <SiEpicgames key={key} size={20} />;
            }
          })}
        </div>
        <p className="font-bold text-xl mt-2">{game.name}</p>
        <p className="py-2 text-xl">{game.rating}</p>
      </CardContent>
      <CardFooter className="hidden absolute group-hover:inline-block z-50 -bottom-[118px] w-full bg-inherit rounded-b-xl overflow-clip">
        <p className="">{game.reviews_text_count}</p>
        <p className="">{game.reviews_text_count}</p>
        <p className="">{game.reviews_text_count}</p>
        <p className="">{game.reviews_text_count}</p>
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
      stores: [
                  {
                    id: 4787,
                    store: {
                      id: 3,
                      name: 'PlayStation Store',
                      slug: 'playstation-store',
                      domain: 'store.playstation.com',
                      games_count: 7878,
                      image_background: 'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg'
                    }
                  },
                  {
                    id: 465944,
                    store: {
                      id: 2,
                      name: 'Xbox Store',
                      slug: 'xbox-store',
                      domain: 'microsoft.com',
                      games_count: 4790,
                      image_background: 'https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg'
                    }
                  },
                  {
                    id: 17290,
                    store: {
                      id: 1,
                      name: 'Steam',
                      slug: 'steam',
                      domain: 'store.steampowered.com',
                      games_count: 87632,
                      image_background: 'https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg'
                    }
                  },
                  {
                    id: 42864,
                    store: {
                      id: 7,
                      name: 'Xbox 360 Store',
                      slug: 'xbox360',
                      domain: 'marketplace.xbox.com',
                      games_count: 1912,
                      image_background: 'https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg'
                    }
                  }
               ],
      clip: null,
      tags: [Array],
      esrb_rating: [Object],
      short_screenshots: [Array]
    }, */
