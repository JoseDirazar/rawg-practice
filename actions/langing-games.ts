import { unstable_noStore as noStore } from "next/cache";

export const landingGamesPage = async (slug: string, page: number) => {
    noStore()
    const userSearch = slug ? slug : ''
    try {
      const response = await fetch(
        `https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_API_KEY}&search=${userSearch}&page_size=28&page=${page}`
      ).then((res) => res.json());
      return response.results
    } catch (error) {
     console.log(error)
    }
   };