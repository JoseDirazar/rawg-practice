import Card from "./Card";

const GameCards = ({col1, col2, col3, col4}: any) => {
  return (
    <div>
      <div className="mx-4">New and trending</div>
      <div className="grid grid-cols-4 w-full max-h-[200vh] gap-x-2">
        <div className="grid-col-1">
          {col1.map((game: any) => (
            <Card key={game.slug} game={game} />
          ))}
        </div>
        <div className="grid-col-2">
        {col2.map((game: any) => (
            <Card key={game.slug} game={game} />
          ))}
        </div>
        <div className="grid-col-3">
        {col3.map((game: any) => (
            <Card key={game.slug} game={game} />
          ))}
        </div>
        <div className="grid-col-4">
        {col4.map((game: any) => (
            <Card key={game.slug} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameCards;
