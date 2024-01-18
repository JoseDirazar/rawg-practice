import Search from "./Search";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-center w-full h-[108px] px-[40px] py-[24px]">
        <div className="flex mr-4 w-[88.828px] h-[60px] items-center justify-center">
        <h1 className="mr-12">RAWG</h1>
        </div>
        <Search placeholder="Buscar juegos"/>
        <div className="bg-indigo-800 ml-4 w-[249.5px] h-[60px]">
            <div></div>
            <div></div>
        </div>
    </nav>
  )
}
