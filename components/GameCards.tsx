import { landingGamesPage } from "@/actions/langing-games";
import GameCard from "./Card";

const GameCards = async ({query}: {query: string}) => {
  let games: any = await landingGamesPage(query);

  if(!games) {
    return (
      <div className="w-auto">
      <div className="mx-4">New and trending</div>
      <div className="flex flex-col flex-wrap w-full max-w-full max-h-[210vh] gap-x-2">
       No games found
      </div>
    </div> 
    )
  }

  return (
    <div className="w-auto">
      <p className=" text-7xl mt-1 font-bold">Top picks</p>
      <div className="flex flex-col flex-wrap w-full max-w-full max-h-[210vh] gap-x-2">

          {games.map((game: any) => (
              <GameCard key={game.slug} game={game} />
          ))}
       
      </div>
    </div>
  );
};

export default GameCards;
