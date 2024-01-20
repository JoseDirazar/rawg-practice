import Search from "./Search";
import { ThemeToggle } from "./ui/theme-toggle";
import { Black_Ops_One } from "next/font/google";

const font = Black_Ops_One({weight: ['400'], subsets: ["cyrillic-ext"]});

export default function Navbar() {
  return (
    <nav className="flex items-center justify-center mx-[40px] w-full h-[108px] py-[24px]">
        <div className="flex  h-[60px] items-center justify-center">
        <h1 className={`mr-[12px] text-xl ${font.className}`}>R{' '}A{' '}W{' '}G</h1>
        </div>
        <Search placeholder="Buscar juegos"/>
        <div className="bg-indigo-800 ml-4 w-[249.5px] h-[60px]">
            <ThemeToggle />
        </div>
    </nav>
  )
}
