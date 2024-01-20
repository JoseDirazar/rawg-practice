import { unstable_noStore as noStore } from "next/cache";

export const landingGamesPage = async (slug: string) => {
    noStore()
    const safeSlug = slug ? slug : ''
    try {
      const response = await fetch(
        `https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_API_KEY}&search=${safeSlug}&page_size=24`
      ).then((res) => res.json());
        console.log(response)
      return response.results
    } catch (error) {
     console.log(error)
    }
   };