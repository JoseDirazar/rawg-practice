import { landingGamesPage } from "@/actions/langing-games";
import GameCard from "./Card";
import PaginationGames from "./Pagination";

const GameCards = async ({query, page}: {query: string, page: number}) => {
  let games: any = await landingGamesPage(query, page);

  if(!games) {
    return (
      <div className="w-auto">
      <div className="mx-4">New and trending</div>
      <div className="flex flex-wrap w-full max-w-full max-h-[210vh] gap-x-2">
       No games found
      </div>
    </div> 
    )
  }

  return (
    <div className="w-full min-w-[70vh] ">
      <p className=" text-7xl mt-1 font-bold">Top picks</p>
        <PaginationGames page={page} />
      <div className="flex flex-col align-bottom flex-wrap  gap-x-2 max-h-[150vh]">
          {games.map((game: any) => (
              <GameCard key={game.slug} game={game} />
          ))}
      </div>
    </div>
  );
};

export default GameCards;
