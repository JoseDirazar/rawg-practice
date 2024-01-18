import { landingGamesPage } from "@/actions/langing-games";
import Card from "./Card";

const GameCards = async ({query}: {query: string}) => {

  let games: any = await landingGamesPage(query);

  return (
    <div>
      <div className="mx-4">New and trending</div>
      <div className="flex flex-col flex-wrap w-full max-h-[190vh] gap-x-2">
      
          {games.map((game: any) => (
            <Card key={game.slug} game={game} />
          ))}
       
      </div>
    </div>
  );
};

export default GameCards;
