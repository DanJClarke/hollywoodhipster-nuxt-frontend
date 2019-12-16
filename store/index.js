export default{
  state:{
    films:[
      {
      "id": 1,
      "title": "Jokers",
      "imgsrc": "1575461835.jpeg",
      "running_time": 120,
      "release_date": "2019-10-04",
      "budget": 70000000,
      "plot": "Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him. Isolated, bullied and disregarded by society, Fleck begins a slow descent into madness as he transforms into the criminal mastermind known as the Joker",
      "created_at": "2019-11-27 11:16:24",
      "updated_at": "2019-12-05 10:13:47",
      "director_id": 2,
      "director": {
      "id": 2,
      "name": "Todd Phillips",
      "bio": "Todd Phillips is an American filmmaker and actor. He is best known for writing and directing the films Road Trip, Old School, Starsky & Hutch, The Hangover Trilogy, Due Date, and Joker. For his work on the satirical comedy film Borat, Phillips was nominated for the Academy Award for Best Adapted Screenplay",
      "created_at": "2019-11-27 16:23:07",
      "updated_at": "2019-12-04 12:17:39"
      },
      "genres": [
      {
      "id": 1,
      "name": "Thriller",
      "created_at": "2019-11-27 16:16:17",
      "updated_at": "2019-11-27 16:16:17",
      "pivot": {
      "film_id": 1,
      "genre_id": 1,
      "created_at": "2019-11-27 16:32:39",
      "updated_at": "2019-11-27 16:32:39"
      }
      },
      {
      "id": 12,
      "name": "Super Hero",
      "created_at": "2019-11-27 16:20:27",
      "updated_at": "2019-11-27 16:20:27",
      "pivot": {
      "film_id": 1,
      "genre_id": 12,
      "created_at": "2019-11-27 16:32:51",
      "updated_at": "2019-11-27 16:32:51"
      }
      },
      {
      "id": 2,
      "name": "Horror",
      "created_at": "2019-11-27 16:16:33",
      "updated_at": "2019-11-27 16:16:33",
      "pivot": {
      "film_id": 1,
      "genre_id": 2,
      "created_at": "2019-11-28 16:31:49",
      "updated_at": "2019-11-28 16:31:49"
      }
      },
      {
      "id": 3,
      "name": "Action",
      "created_at": "2019-11-27 16:16:50",
      "updated_at": "2019-11-27 16:16:50",
      "pivot": {
      "film_id": 1,
      "genre_id": 3,
      "created_at": "2019-11-28 16:31:49",
      "updated_at": "2019-11-28 16:31:49"
      }
      },
      {
      "id": 11,
      "name": "Political",
      "created_at": "2019-11-27 16:20:13",
      "updated_at": "2019-11-27 16:20:13",
      "pivot": {
      "film_id": 1,
      "genre_id": 11,
      "created_at": "2019-12-04 08:08:29",
      "updated_at": "2019-12-04 08:08:29"
      }
      }
      ],
      "reviews": [
      {
      "id": 186,
      "content": "Love it",
      "user_id": 2,
      "film_id": 1,
      "created_at": "2019-12-16 09:45:45",
      "updated_at": "2019-12-16 09:45:45"
      },
      {
      "id": 187,
      "content": "Hate it",
      "user_id": 1,
      "film_id": 1,
      "created_at": "2019-12-16 09:46:05",
      "updated_at": "2019-12-16 09:46:05"
      }
      ],
      "rating": [
      {
      "id": 74,
      "rating": 5,
      "user_id": 2,
      "film_id": 1,
      "created_at": "2019-12-16 09:45:45",
      "updated_at": "2019-12-16 09:45:45"
      },
      {
      "id": 75,
      "rating": 1,
      "user_id": 1,
      "film_id": 1,
      "created_at": "2019-12-16 09:46:05",
      "updated_at": "2019-12-16 09:46:05"
      }
      ]
      },
      {
      "id": 2,
      "title": "Avengers Endgame",
      "imgsrc": "1576227369.webp",
      "running_time": 182,
      "release_date": "2019-04-25",
      "budget": 356000000,
      "plot": "After Thanos, an intergalatic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
      "created_at": "2019-11-27 11:26:55",
      "updated_at": "2019-12-13 08:56:09",
      "director_id": 4,
      "director": {
      "id": 4,
      "name": "Joe Russo",
      "bio": "Anthony Russo is an American film and television director. Most of his work is a collaboration with his bother Joseph, and occasionally works as a producer, screenwriter, actor, and editors",
      "created_at": "2019-11-27 16:26:55",
      "updated_at": "2019-11-27 16:26:55"
      },
      "genres": [
      {
      "id": 3,
      "name": "Action",
      "created_at": "2019-11-27 16:16:50",
      "updated_at": "2019-11-27 16:16:50",
      "pivot": {
      "film_id": 2,
      "genre_id": 3,
      "created_at": "2019-11-27 16:33:16",
      "updated_at": "2019-11-27 16:33:16"
      }
      },
      {
      "id": 12,
      "name": "Super Hero",
      "created_at": "2019-11-27 16:20:27",
      "updated_at": "2019-11-27 16:20:27",
      "pivot": {
      "film_id": 2,
      "genre_id": 12,
      "created_at": "2019-11-27 16:33:31",
      "updated_at": "2019-11-27 16:33:31"
      }
      }
      ],
      "reviews": [],
      "rating": []
      },
      {
      "id": 3,
      "title": "Saw",
      "imgsrc": "1576227500.jpeg",
      "running_time": 104,
      "release_date": "2004-10-01",
      "budget": 1200000,
      "plot": "Two men awaken to find themselves on the opposite sides of a dead body, each with specific instructions to kill the other or face consequences. These two are the latest victims of the Jigsaw Killer.",
      "created_at": "2019-11-27 11:33:04",
      "updated_at": "2019-12-13 08:58:20",
      "director_id": 5,
      "director": {
      "id": 5,
      "name": "James Wan",
      "bio": "James Wan is a Malaysian-born Australian film director, screenwriter, and producer. He rose to prominence as co-creator of the Saw film franchise. He served as a producer on all eight films in the series, in addition to directing Saw and co-writing Saw III",
      "created_at": "2019-11-27 16:27:31",
      "updated_at": "2019-11-27 16:27:31"
      },
      "genres": [
      {
      "id": 1,
      "name": "Thriller",
      "created_at": "2019-11-27 16:16:17",
      "updated_at": "2019-11-27 16:16:17",
      "pivot": {
      "film_id": 3,
      "genre_id": 1,
      "created_at": "2019-11-27 16:33:46",
      "updated_at": "2019-11-27 16:33:46"
      }
      },
      {
      "id": 2,
      "name": "Horror",
      "created_at": "2019-11-27 16:16:33",
      "updated_at": "2019-11-27 16:16:33",
      "pivot": {
      "film_id": 3,
      "genre_id": 2,
      "created_at": "2019-11-27 16:33:56",
      "updated_at": "2019-11-27 16:33:56"
      }
      }
      ],
      "reviews": [],
      "rating": []
      },
      {
      "id": 4,
      "title": "Back to the Future",
      "imgsrc": "1576228317.jpeg",
      "running_time": 116,
      "release_date": "1985-12-04",
      "budget": 19000000,
      "plot": "Marty travels back in time using an eccentric scientist's time machine. However, he must make his high-school-aged parents fall in love in order to return to the present.",
      "created_at": "2019-11-27 12:41:30",
      "updated_at": "2019-12-13 09:11:57",
      "director_id": 3,
      "director": {
      "id": 3,
      "name": "Robert Zemeckis",
      "bio": "Robert Lee Zemeckis is an American director, film producer and screenwriter frequently credited as an innovator in visual effects.",
      "created_at": "2019-11-27 16:23:52",
      "updated_at": "2019-11-27 16:23:52"
      },
      "genres": [
      {
      "id": 3,
      "name": "Action",
      "created_at": "2019-11-27 16:16:50",
      "updated_at": "2019-11-27 16:16:50",
      "pivot": {
      "film_id": 4,
      "genre_id": 3,
      "created_at": "2019-11-27 16:34:16",
      "updated_at": "2019-11-27 16:34:16"
      }
      },
      {
      "id": 4,
      "name": "Comedy",
      "created_at": "2019-11-27 16:17:25",
      "updated_at": "2019-11-27 16:17:25",
      "pivot": {
      "film_id": 4,
      "genre_id": 4,
      "created_at": "2019-11-27 16:34:34",
      "updated_at": "2019-11-27 16:34:34"
      }
      },
      {
      "id": 9,
      "name": "Science Fiction",
      "created_at": "2019-11-27 16:19:30",
      "updated_at": "2019-11-27 16:19:30",
      "pivot": {
      "film_id": 4,
      "genre_id": 9,
      "created_at": "2019-11-27 16:34:45",
      "updated_at": "2019-11-27 16:34:45"
      }
      },
      {
      "id": 13,
      "name": "Crime",
      "created_at": "2019-11-27 16:21:17",
      "updated_at": "2019-11-27 16:21:17",
      "pivot": {
      "film_id": 4,
      "genre_id": 13,
      "created_at": "2019-11-28 16:33:02",
      "updated_at": "2019-11-28 16:33:02"
      }
      },
      {
      "id": 6,
      "name": "Kids",
      "created_at": "2019-11-27 16:17:53",
      "updated_at": "2019-11-27 16:17:53",
      "pivot": {
      "film_id": 4,
      "genre_id": 6,
      "created_at": "2019-12-05 10:14:50",
      "updated_at": "2019-12-05 10:14:50"
      }
      }
      ],
      "reviews": [],
      "rating": []
      },
      {
      "id": 6,
      "title": "Jurassic Park",
      "imgsrc": "1576228836.jpeg",
      "running_time": 127,
      "release_date": "1993-07-16",
      "budget": 63000000,
      "plot": "John Hammond, an entrepreneur, opens a wildlife park containing cloned dinosaurs. However, a breakdown of the island's security system causes the creatures to escape and bring about chaos.",
      "created_at": "2019-11-27 14:44:47",
      "updated_at": "2019-12-13 09:20:36",
      "director_id": 1,
      "director": {
      "id": 1,
      "name": "Steven Spielberg",
      "bio": "Steven S Allan Spielberg KBE is an American filmmaker. He is considered one of the founding pioneers of the New Hollywood era and one of the most popular directors and producers in film history. Spielberg started in Hollywood directing television and several minor theatrical releases",
      "created_at": "2019-11-27 16:22:16",
      "updated_at": "2019-12-12 13:42:15"
      },
      "genres": [
      {
      "id": 3,
      "name": "Action",
      "created_at": "2019-11-27 16:16:50",
      "updated_at": "2019-11-27 16:16:50",
      "pivot": {
      "film_id": 6,
      "genre_id": 3,
      "created_at": "2019-11-27 16:34:59",
      "updated_at": "2019-11-27 16:34:59"
      }
      },
      {
      "id": 9,
      "name": "Science Fiction",
      "created_at": "2019-11-27 16:19:30",
      "updated_at": "2019-11-27 16:19:30",
      "pivot": {
      "film_id": 6,
      "genre_id": 9,
      "created_at": "2019-11-27 16:35:16",
      "updated_at": "2019-11-27 16:35:16"
      }
      }
      ],
      "reviews": [],
      "rating": []
      },
      {
      "id": 21,
      "title": "Robocop",
      "imgsrc": "1576229169.jpeg",
      "running_time": 102,
      "release_date": "1987-02-05",
      "budget": 13000000,
      "plot": "In a dystopic and crime-infested Detroit, a terminally injured policeman returns to the force as a potent cyborg haunted by submerged memories.",
      "created_at": "2019-12-05 09:10:27",
      "updated_at": "2019-12-13 09:26:09",
      "director_id": 8,
      "director": {
      "id": 8,
      "name": "Paul Verhoeven",
      "bio": "Paul Verhoeven is a Dutch director, screenwriter and film producer. Active in both the Netherlands and Hollywood, Verhoeven's blending of graphic violence and sexual content with social satire are trademarks of both his drama and science fiction films.",
      "created_at": "2019-12-05 09:07:51",
      "updated_at": "2019-12-05 09:07:51"
      },
      "genres": [
      {
      "id": 3,
      "name": "Action",
      "created_at": "2019-11-27 16:16:50",
      "updated_at": "2019-11-27 16:16:50",
      "pivot": {
      "film_id": 21,
      "genre_id": 3,
      "created_at": "2019-12-05 09:10:27",
      "updated_at": "2019-12-05 09:10:27"
      }
      },
      {
      "id": 9,
      "name": "Science Fiction",
      "created_at": "2019-11-27 16:19:30",
      "updated_at": "2019-11-27 16:19:30",
      "pivot": {
      "film_id": 21,
      "genre_id": 9,
      "created_at": "2019-12-05 09:10:27",
      "updated_at": "2019-12-05 09:10:27"
      }
      },
      {
      "id": 13,
      "name": "Crime",
      "created_at": "2019-11-27 16:21:17",
      "updated_at": "2019-11-27 16:21:17",
      "pivot": {
      "film_id": 21,
      "genre_id": 13,
      "created_at": "2019-12-05 09:10:27",
      "updated_at": "2019-12-05 09:10:27"
      }
      },
      {
      "id": 1,
      "name": "Thriller",
      "created_at": "2019-11-27 16:16:17",
      "updated_at": "2019-11-27 16:16:17",
      "pivot": {
      "film_id": 21,
      "genre_id": 1,
      "created_at": "2019-12-09 15:25:56",
      "updated_at": "2019-12-09 15:25:56"
      }
      }
      ],
      "reviews": [],
      "rating": []
      },
      {
      "id": 22,
      "title": "Shaun of the Dead",
      "imgsrc": "1576145111.jpeg",
      "running_time": 100,
      "release_date": "2004-04-09",
      "budget": 6100000,
      "plot": "Shaun is a salesman whose life has no direction. However, his uneventful life takes a sudden turn when he has to singlehandedly deal with an entire community of zombies.",
      "created_at": "2019-12-12 10:05:11",
      "updated_at": "2019-12-12 10:05:11",
      "director_id": 6,
      "director": {
      "id": 6,
      "name": "Edgar Wright",
      "bio": "Edgar Howard Wright is an English director, screenwriter and producer. Being recognized as a modern day auteur he is famous for making fast-paced and kinetic mock genre films with extensive reliance on music, tracking steady-cam shots, dolly zooms and signature editing style including transitions, whip-pans and wipes.",
      "created_at": "2019-11-28 15:49:29",
      "updated_at": "2019-11-28 16:00:11"
      },
      "genres": [
      {
      "id": 2,
      "name": "Horror",
      "created_at": "2019-11-27 16:16:33",
      "updated_at": "2019-11-27 16:16:33",
      "pivot": {
      "film_id": 22,
      "genre_id": 2,
      "created_at": "2019-12-12 10:05:11",
      "updated_at": "2019-12-12 10:05:11"
      }
      },
      {
      "id": 3,
      "name": "Action",
      "created_at": "2019-11-27 16:16:50",
      "updated_at": "2019-11-27 16:16:50",
      "pivot": {
      "film_id": 22,
      "genre_id": 3,
      "created_at": "2019-12-12 10:05:11",
      "updated_at": "2019-12-12 10:05:11"
      }
      },
      {
      "id": 4,
      "name": "Comedy",
      "created_at": "2019-11-27 16:17:25",
      "updated_at": "2019-11-27 16:17:25",
      "pivot": {
      "film_id": 22,
      "genre_id": 4,
      "created_at": "2019-12-12 10:05:11",
      "updated_at": "2019-12-12 10:05:11"
      }
      }
      ],
      "reviews": [],
      "rating": []
      },
      {
      "id": 23,
      "title": "Bloodsport",
      "imgsrc": "1576228970.jpeg",
      "running_time": 92,
      "release_date": "1988-02-26",
      "budget": 1500000,
      "plot": "Frank Dux, an American soldier who is skilled in the ways of the ninjutsu, leaves the army life behind to participate in a secret martial arts tournamen",
      "created_at": "2019-12-12 11:43:44",
      "updated_at": "2019-12-13 09:22:50",
      "director_id": 9,
      "director": {
      "id": 9,
      "name": "Newt Arnold",
      "bio": "Frank Dux, an American soldier who is skilled in the ways of the ninjutsu, leaves the army life behind to participate in a secret martial arts tournamen",
      "created_at": "2019-12-11 11:16:33",
      "updated_at": "2019-12-12 11:30:11"
      },
      "genres": [
      {
      "id": 3,
      "name": "Action",
      "created_at": "2019-11-27 16:16:50",
      "updated_at": "2019-11-27 16:16:50",
      "pivot": {
      "film_id": 23,
      "genre_id": 3,
      "created_at": "2019-12-12 11:43:44",
      "updated_at": "2019-12-12 11:43:44"
      }
      }
      ],
      "reviews": [],
      "rating": []
      }
      ]
}
}