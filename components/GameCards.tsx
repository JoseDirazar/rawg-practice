import { landingGamesPage } from "@/actions/langing-games";
import GameCard from "./Card";
import PaginationGames from "./Pagination";

const GameCards = async ({ query, page }: { query: string; page: number }) => {
  let games: any = await landingGamesPage(query, page);
  let gamesLength = games.length

  if (games.length === 0) {
    return (
      <div className="w-auto">
        <div className="mx-4">New and trending</div>
        <div className="flex flex-wrap w-full max-w-full max-h-[210vh] gap-x-2">
          No games found
        </div>
      </div>
    );
  }
  const col1 = games.slice(0, 7)
  const col2 = games.slice(7, 14)
  const col3 = games.slice(14, 21)
  const col4 = games.slice(21, 29)
  return (
    <div className="w-full min-w-[70vh] ">
      <p className=" text-7xl mt-1 font-bold">Top picks</p>
      <PaginationGames page={page} />
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-2 max-h-[270vh]">
        <div className="">
        {col1.map((game: any) => (
          <GameCard key={game.slug} game={game} />
        ))}
        </div>
        <div className="">
        {col2.map((game: any) => (
          <GameCard key={game.slug} game={game} />
        ))}
        </div>
        <div className="">
        {col3.map((game: any) => (
          <GameCard key={game.slug} game={game} />
        ))}
        </div>
        <div className="">
        {col4.map((game: any) => (
          <GameCard key={game.slug} game={game} />
        ))}
        </div>
      </div>
    </div>
  );
};

export default GameCards;
