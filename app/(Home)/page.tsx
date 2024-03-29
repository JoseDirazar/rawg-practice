import GameCards from "../../components/GameCards";
import { Suspense } from "react";

export default async function Home({
  searchParams,
}: {
  searchParams: { search: string, page: string };
}) {
  const search = searchParams?.search || ''
  const page: number = Number(searchParams?.page) || 1

  return (
    <div className="bg-inherit">
      <Suspense key={search} fallback={<div>Loading...</div>}>
      <GameCards query={search} page={page} />

      </Suspense>
    </div>
  );
}

/*  count: 861692,
  next: 'https://api.rawg.io/api/games?key=2ed1cbc206f94950abfb03e2e872af32&page=2',
  previous: null,
  results: [
    {
      id: 3498,
      slug: 'grand-theft-auto-v',
      name: 'Grand Theft Auto V',
      released: '2013-09-17',
      tba: false,
      background_image: 'https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg',
      rating: 4.47,
      rating_top: 5,
      ratings: [Array],
      ratings_count: 6694,
      reviews_text_count: 57,
      added: 20468,
      added_by_status: [Object],
      metacritic: 92,
      playtime: 74,
      suggestions_count: 429,
      updated: '2024-01-17T15:59:41',
      user_game: null,
      reviews_count: 6793,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [Array],
      parent_platforms: [Array],
      genres: [Array],
      stores: [
                      {
                        id: 290375,
                        store: {
                           id: 3,
                           name: 'PlayStation Store',
                           slug: 'playstation-store',
                           domain: 'store.playstation.com',
                           games_count: 7878,
                           image_background: 'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg'
                         }
                       },
                       {
                         id: 438095,
                         store: {
                           id: 11,
                           name: 'Epic Games',
                           slug: 'epic-games',
                           domain: 'epicgames.com',
                           games_count: 1309,
                           image_background: 'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg'
                         }
                       }
                       ...],
      clip: null,
      tags: [Array],
      esrb_rating: [Object],
      short_screenshots: [Array]
    },
    {
      id: 3328,
      slug: 'the-witcher-3-wild-hunt',
      name: 'The Witcher 3: Wild Hunt',
      released: '2015-05-18',
      tba: false,
      background_image: 'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
      rating: 4.65,
      rating_top: 5,
      ratings: [Array],
      ratings_count: 6415,
      reviews_text_count: 70,
      added: 19772,
      added_by_status: [Object],
      metacritic: 92,
      playtime: 46,
      suggestions_count: 674,
      updated: '2024-01-18T00:56:30',
      user_game: null,
      reviews_count: 6517,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [Array],
      parent_platforms: [Array],
      genres: [Array],
      stores: [Array],
      clip: null,
      tags: [Array],
      esrb_rating: [Object],
      short_screenshots: [Array]
    },
    {
      id: 4200,
      slug: 'portal-2',
      name: 'Portal 2',
      released: '2011-04-18',
      tba: false,
      background_image: 'https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg',
      rating: 4.61,
      rating_top: 5,
      ratings: [Array],
      ratings_count: 5557,
      reviews_text_count: 34,
      added: 18653,
      added_by_status: [Object],
      metacritic: 95,
      playtime: 11,
      suggestions_count: 548,
      updated: '2024-01-18T00:56:32',
      user_game: null,
      reviews_count: 5609,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [Array],
      parent_platforms: [Array],
      genres: [Array],
      stores: [Array],
      clip: null,
      tags: [Array],
      esrb_rating: [Object],
      short_screenshots: [Array]
    },
    {
      id: 4291,
      slug: 'counter-strike-global-offensive',
      name: 'Counter-Strike: Global Offensive',
      released: '2012-08-21',
      tba: false,
      background_image: 'https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg',
      rating: 3.57,
      rating_top: 4,
      ratings: [Array],
      ratings_count: 3414,
      reviews_text_count: 26,
      added: 16294,
      added_by_status: [Object],
      metacritic: 81,
      playtime: 65,
      suggestions_count: 584,
      updated: '2024-01-17T14:08:27',
      user_game: null,
      reviews_count: 3449,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [Array],
      parent_platforms: [Array],
      genres: [Array],
      stores: [Array],
      clip: null,
      tags: [Array],
      esrb_rating: [Object],
      short_screenshots: [Array]
    },
    {
      id: 5286,
      slug: 'tomb-raider',
      name: 'Tomb Raider (2013)',
      released: '2013-03-05',
      tba: false,
      background_image: 'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
      rating: 4.05,
      rating_top: 4,
      ratings: [Array],
      ratings_count: 3839,
      reviews_text_count: 13,
      added: 16200,
      added_by_status: [Object],
      metacritic: 86,
      playtime: 10,
      suggestions_count: 645,
      updated: '2024-01-18T02:29:06',
      user_game: null,
      reviews_count: 3868,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [Array],
      parent_platforms: [Array],
      genres: [Array],
      stores: [Array],
      clip: null,
      tags: [Array],
      esrb_rating: [Object],
      short_screenshots: [Array]
    },
    {
      id: 13536,
      slug: 'portal',
      name: 'Portal',
      released: '2007-10-09',
      tba: false,
      background_image: 'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
      rating: 4.51,
      rating_top: 5,
      ratings: [Array],
      ratings_count: 4624,
      reviews_text_count: 27,
      added: 15868,
      added_by_status: [Object],
      metacritic: 90,
      playtime: 4,
      suggestions_count: 290,
      updated: '2024-01-18T00:51:00',
      user_game: null,
      reviews_count: 4664,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [Array],
      parent_platforms: [Array],
      genres: [Array],
      stores: [Array],
      clip: null,
      tags: [Array],
      esrb_rating: [Object],
      short_screenshots: [Array]
    },
    {
      id: 12020,
      slug: 'left-4-dead-2',
      name: 'Left 4 Dead 2',
      released: '2009-11-17',
      tba: false,
      background_image: 'https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg',
      rating: 4.09,
      rating_top: 4,
      ratings: [Array],
      ratings_count: 3208,
      reviews_text_count: 10,
      added: 15778,
      added_by_status: [Object],
      metacritic: 89,
      playtime: 9,
      suggestions_count: 588,
      updated: '2024-01-15T09:33:25',
      user_game: null,
      reviews_count: 3228,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [Array],
      parent_platforms: [Array],
      genres: [Array],
      stores: [Array],
      clip: null,
      tags: [Array],
      esrb_rating: [Object],
      short_screenshots: [Array]
    },
    {
      id: 5679,
      slug: 'the-elder-scrolls-v-skyrim',
      name: 'The Elder Scrolls V: Skyrim',
      released: '2011-11-11',
      tba: false,
      background_image: 'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
      rating: 4.42,
      rating_top: 5,
      ratings: [Array],
      ratings_count: 4545,
      reviews_text_count: 32,
      added: 15443,
      added_by_status: [Object],
      metacritic: 94,
      playtime: 46,
      suggestions_count: 597,
      updated: '2024-01-15T09:31:15',
      user_game: null,
      reviews_count: 4592,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [Array],
      parent_platforms: [Array],
      genres: [Array],
      stores: [Array],
      clip: null,
      tags: [Array],
      esrb_rating: [Object],
      short_screenshots: [Array]
    },
    {
      id: 28,
      slug: 'red-dead-redemption-2',
      name: 'Red Dead Redemption 2',
      released: '2018-10-26',
      tba: false,
      background_image: 'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
      rating: 4.59,
      rating_top: 5,
      ratings: [Array],
      ratings_count: 4836,
      reviews_text_count: 76,
      added: 14958,
      added_by_status: [Object],
      metacritic: 96,
      playtime: 20,
      suggestions_count: 607,
      updated: '2024-01-18T00:56:32',
      user_game: null,
      reviews_count: 4940,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [Array],
      parent_platforms: [Array],
      genres: [Array],
      stores: [Array],
      clip: null,
      tags: [Array],
      esrb_rating: [Object],
      short_screenshots: [Array]
    },
    {
      id: 4062,
      slug: 'bioshock-infinite',
      name: 'BioShock Infinite',
      released: '2013-03-26',
      tba: false,
      background_image: 'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
      rating: 4.38,
      rating_top: 5,
      ratings: [Array],
      ratings_count: 3962,
      reviews_text_count: 22,
      added: 14908,
      added_by_status: [Object],
      metacritic: 94,
      playtime: 12,
      suggestions_count: 601,
      updated: '2024-01-17T01:52:18',
      user_game: null,
      reviews_count: 4000,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [Array],
      parent_platforms: [Array],
      genres: [Array],
      stores: [Array],
      clip: null,
      tags: [Array],
      esrb_rating: [Object],
      short_screenshots: [Array]
    },
    {
      id: 3439,
      slug: 'life-is-strange-episode-1-2',
      name: 'Life is Strange',
      released: '2015-01-29',
      tba: false,
      background_image: 'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
      rating: 4.12,
      rating_top: 5,
      ratings: [Array],
      ratings_count: 3568,
      reviews_text_count: 28,
      added: 14704,
      added_by_status: [Object],
      metacritic: 83,
      playtime: 6,
      suggestions_count: 538,
      updated: '2024-01-17T12:53:56',
      user_game: null,
      reviews_count: 3612,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [Array],
      parent_platforms: [Array],
      genres: [Array],
      stores: [Array],
      clip: null,
      tags: [Array],
      esrb_rating: [Object],
      short_screenshots: [Array]
    },
    {
      id: 802,
      slug: 'borderlands-2',
      name: 'Borderlands 2',
      released: '2012-09-18',
      tba: false,
      background_image: 'https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg',
      rating: 4.01,
      rating_top: 4,
      ratings: [Array],
      ratings_count: 3139,
      reviews_text_count: 12,
      added: 14696,
      added_by_status: [Object],
      metacritic: 89,
      playtime: 10,
      suggestions_count: 680,
      updated: '2024-01-15T09:33:07',
      user_game: null,
      reviews_count: 3159,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [Array],
      parent_platforms: [Array],
      genres: [Array],
      stores: [Array],
      clip: null,
      tags: [Array],
      esrb_rating: [Object],
      short_screenshots: [Array]
    },
    {
      id: 13537,
      slug: 'half-life-2',
      name: 'Half-Life 2',
      released: '2004-11-16',
      tba: false,
      background_image: 'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
      rating: 4.49,
      rating_top: 5,
      ratings: [Array],
      ratings_count: 3790,
      reviews_text_count: 17,
      added: 14137,
      added_by_status: [Object],
      metacritic: 96,
      playtime: 7,
      suggestions_count: 552,
      updated: '2024-01-17T01:32:40',
      user_game: null,
      reviews_count: 3814,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [Array],
      parent_platforms: [Array],
      genres: [Array],
      stores: [Array],
      clip: null,
      tags: [Array],
      esrb_rating: [Object],
      short_screenshots: [Array]
    },
    {
      id: 4286,
      slug: 'bioshock',
      name: 'BioShock',
      released: '2007-08-21',
      tba: false,
      background_image: 'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg',
      rating: 4.36,
      rating_top: 5,
      ratings: [Array],
      ratings_count: 3202,
      reviews_text_count: 25,
      added: 13500,
      added_by_status: [Object],
      metacritic: 96,
      playtime: 3,
      suggestions_count: 645,
      updated: '2024-01-17T01:52:04',
      user_game: null,
      reviews_count: 3243,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [Array],
      parent_platforms: [Array],
      genres: [Array],
      stores: [Array],
      clip: null,
      tags: [Array],
      esrb_rating: [Object],
      short_screenshots: [Array]
    },
    {
      id: 32,
      slug: 'destiny-2',
      name: 'Destiny 2',
      released: '2017-09-06',
      tba: false,
      background_image: 'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
      rating: 3.54,
      rating_top: 4,
      ratings: [Array],
      ratings_count: 2567,
      reviews_text_count: 19,
      added: 13162,
      added_by_status: [Object],
      metacritic: 82,
      playtime: 5,
      suggestions_count: 1217,
      updated: '2024-01-12T01:13:19',
      user_game: null,
      reviews_count: 2593,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [Array],
      parent_platforms: [Array],
      genres: [Array],
      stores: [Array],
      clip: null,
      tags: [Array],
      esrb_rating: [Object],
      short_screenshots: [Array]
    },
    {
      id: 1030,
      slug: 'limbo',
      name: 'Limbo',
      released: '2010-07-21',
      tba: false,
      background_image: 'https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg',
      rating: 4.15,
      rating_top: 4,
      ratings: [Array],
      ratings_count: 3217,
      reviews_text_count: 25,
      added: 13105,
      added_by_status: [Object],
      metacritic: 88,
      playtime: 3,
      suggestions_count: 191,
      updated: '2024-01-18T00:55:21',
      user_game: null,
      reviews_count: 3255,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [Array],
      parent_platforms: [Array],
      genres: [Array],
      stores: [Array],
      clip: null,
      tags: [Array],
      esrb_rating: [Object],
      short_screenshots: [Array]
    },
    {
      id: 58175,
      slug: 'god-of-war-2',
      name: 'God of War (2018)',
      released: '2018-04-20',
      tba: false,
      background_image: 'https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg',
      rating: 4.57,
      rating_top: 5,
      ratings: [Array],
      ratings_count: 4642,
      reviews_text_count: 68,
      added: 13079,
      added_by_status: [Object],
      metacritic: 94,
      playtime: 13,
      suggestions_count: 592,
      updated: '2024-01-17T06:37:42',
      user_game: null,
      reviews_count: 4738,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [Array],
      parent_platforms: [Array],
      genres: [Array],
      stores: [Array],
      clip: null,
      tags: [Array],
      esrb_rating: [Object],
      short_screenshots: [Array]
    },
    {
      id: 3070,
      slug: 'fallout-4',
      name: 'Fallout 4',
      released: '2015-11-09',
      tba: false,
      background_image: 'https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg',
      rating: 3.8,
      rating_top: 4,
      ratings: [Array],
      ratings_count: 3209,
      reviews_text_count: 19,
      added: 13019,
      added_by_status: [Object],
      metacritic: 84,
      playtime: 40,
      suggestions_count: 451,
      updated: '2024-01-17T01:49:56',
      user_game: null,
      reviews_count: 3237,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [Array],
      parent_platforms: [Array],
      genres: [Array],
      stores: [Array],
      clip: null,
      tags: [Array],
      esrb_rating: [Object],
      short_screenshots: [Array]
    },
    {
      id: 2454,
      slug: 'doom',
      name: 'DOOM (2016)',
      released: '2016-05-13',
      tba: false,
      background_image: 'https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg',
      rating: 4.38,
      rating_top: 5,
      ratings: [Array],
      ratings_count: 3434,
      reviews_text_count: 29,
      added: 12931,
      added_by_status: [Object],
      metacritic: 85,
      playtime: 10,
      suggestions_count: 657,
      updated: '2024-01-17T14:08:11',
      user_game: null,
      reviews_count: 3473,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [Array],
      parent_platforms: [Array],
      genres: [Array],
      stores: [Array],
      clip: null,
      tags: [Array],
      esrb_rating: [Object],
      short_screenshots: [Array]
    },
    {
      id: 3939,
      slug: 'payday-2',
      name: 'PAYDAY 2',
      released: '2013-08-13',
      tba: false,
      background_image: 'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
      rating: 3.51,
      rating_top: 4,
      ratings: [Array],
      ratings_count: 2105,
      reviews_text_count: 14,
      added: 12799,
      added_by_status: [Object],
      metacritic: 79,
      playtime: 9,
      suggestions_count: 415,
      updated: '2024-01-10T16:52:20',
      user_game: null,
      reviews_count: 2122,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [Array],
      parent_platforms: [Array],
      genres: [Array],
      stores: [Array],
      clip: null,
      tags: [Array],
      esrb_rating: [Object],
      short_screenshots: [Array]
    }
  ],
  seo_title: 'All Games',
  seo_description: '',
  seo_keywords: '',
  seo_h1: 'All Games',
  noindex: false,
  nofollow: false,
  description: '',
  filters: {
    years: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object]
    ]
  },
  nofollow_collections: [ 'stores' ]
} */
