import { ITweet } from "./types/tweet";

export const tweetsData: ITweet[] = [
  {
    id: 1,
    user: {
      fullName: "Christoper Francisco",
      username: "@christopher",
    },
    message: "I like coding",
    favoriteCount: 3,
    replyCount: 2,
    retweetCount: 1,
    type: "default",
  },
  {
    id: 2,
    user: {
      fullName: "Jaun García",
      username: "@juank",
    },
    message: `Her ay 70 TL ücret.
      Günde 7-8 kere kopma. 
      3 haftadır her aradığımda "Ekip arkadaşlarımız çalışıyor." yanıtı, sanırım fiber falan döşüyorlar.`,
    favoriteCount: 3,
    replyCount: 2,
    retweetCount: 1,
    type: "default",
  },

  {
    id: 3,
    user: {
      fullName: "Daniel Fernando",
      username: "@dani",
    },
    message: "I like coding",
    favoriteCount: 3,
    replyCount: 2,
    retweetCount: 1,
    type: "default",
  },
];
