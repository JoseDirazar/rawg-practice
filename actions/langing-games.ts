import { unstable_noStore as noStore } from "next/cache";

export const landingGamesPage = async (slug: string) => {
    noStore()
    try {
      const response = await fetch(
        `https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_API_KEY}&search=${slug}`
      ).then((res) => res.json());
 
      return response.results
    } catch (error) {
     console.log(error)
    }
   };