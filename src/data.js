const data = [
{
"id": 1,
"title": "The Shape of Water",
"genre": ["Romance","Fantasy","Drama"],
"image": "https://image.tmdb.org/t/p/w500/k4FwHlMhuRR5BISY2Gm2QZHlH5Q.jpg"
},
{
"id": 2,
"title": "Stardust",
"genre": ["Fantasy","Adventure","Romance"],
"image": "https://image.tmdb.org/t/p/w500/qh6zC6m3J6c2Kx1BvF3D8Y3bY8R.jpg"
},
{
"id": 3,
"title": "Beauty and the Beast",
"genre": ["Fantasy","Romance","Family"],
"image": "https://image.tmdb.org/t/p/w500/6aUWe0GSl69wMTSWWexsorMIvwU.jpg"
},
{
"id": 4,
"title": "The Princess Bride",
"genre": ["Fantasy","Adventure","Romance"],
"image": "https://image.tmdb.org/t/p/w500/dvjqlp2sAhUeFjUOfQDgCqj0VjD.jpg"
},
{
"id": 5,
"title": "Enchanted",
"genre": ["Fantasy","Romance","Comedy"],
"image": "https://image.tmdb.org/t/p/w500/8KzRk7l0G2m5YkN0rF3v9mV7G4B.jpg"
},
{
"id": 6,
"title": "Aladdin",
"genre": ["Fantasy","Adventure","Romance"],
"image": "https://image.tmdb.org/t/p/w500/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg"
},
{
"id": 7,
"title": "Cinderella",
"genre": ["Fantasy","Romance","Family"],
"image": "https://image.tmdb.org/t/p/w500/oEhY7UwVYvG2H0tN8c6VbWm6q3b.jpg"
},
{
"id": 8,
"title": "The Little Mermaid",
"genre": ["Fantasy","Romance","Family"],
"image": "https://image.tmdb.org/t/p/w500/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg"
},
{
"id": 9,
"title": "Edward Scissorhands",
"genre": ["Fantasy","Romance","Drama"],
"image": "https://image.tmdb.org/t/p/w500/1RFIbuW9Z3eN6O6a7ZBq5xZr9qV.jpg"
},
{
"id": 10,
"title": "The Curious Case of Benjamin Button",
"genre": ["Fantasy","Romance","Drama"],
"image": "https://image.tmdb.org/t/p/w500/26wEWZYt6yJkwRVkjcbwJEFh9IS.jpg"
},
{
"id": 11,
"title": "About Time",
"genre": ["Romance","Fantasy","Drama"],
"image": "https://image.tmdb.org/t/p/w500/7D2RrgpXreI7q9d3S9nA3Wf7d2k.jpg"
},
{
"id": 12,
"title": "Midnight in Paris",
"genre": ["Fantasy","Romance","Comedy"],
"image": "https://image.tmdb.org/t/p/w500/4wBG5kbfagTQclETblPRRGihk0I.jpg"
},
{
"id": 13,
"title": "The Age of Adaline",
"genre": ["Romance","Fantasy","Drama"],
"image": "https://image.tmdb.org/t/p/w500/od8A9mWj9B2s4Pq2n0z2yN1Yx7L.jpg"
},
{
"id": 14,
"title": "Your Name",
"genre": ["Fantasy","Romance","Animation"],
"image": "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg"
},
{
"id": 15,
"title": "Weathering With You",
"genre": ["Fantasy","Romance","Animation"],
"image": "https://image.tmdb.org/t/p/w500/qgrk7r1fV4IjuoeiGS5HOhXNdLJ.jpg"
},
{
"id": 16,
"title": "Howl's Moving Castle",
"genre": ["Fantasy","Romance","Animation"],
"image": "https://image.tmdb.org/t/p/w500/TkTPELv4kC3u1lkloush8skOjE.jpg"
},
{
"id": 17,
"title": "The Time Traveler's Wife",
"genre": ["Romance","Fantasy","Drama"],
"image": "https://image.tmdb.org/t/p/w500/4cQK8cJX3qjE7zvY4xXHzkwmo7a.jpg"
},
{
"id": 18,
"title": "Ruby Sparks",
"genre": ["Fantasy","Romance","Comedy"],
"image": "https://image.tmdb.org/t/p/w500/6X8RZpJqJ5E2l50Tzw9uQWGWp9J.jpg"
},
{
"id": 19,
"title": "Warm Bodies",
"genre": ["Fantasy","Romance","Comedy"],
"image": "https://image.tmdb.org/t/p/w500/9qUqQ8qv0hYz2X5V9V8vQX5P8ZP.jpg"
},
{
"id": 20,
"title": "The Fountain",
"genre": ["Fantasy","Romance","Drama"],
"image": "https://image.tmdb.org/t/p/w500/mfKk4B9dYj1WFJsbgx5caX5WDH5.jpg"
},
{
"id": 21,
"title": "Penelope",
"genre": ["Fantasy","Romance","Comedy"],
"image": "https://image.tmdb.org/t/p/w500/pvQKQ5jTqS0bkkCm1cW0XkyRjO6.jpg"
},
{
"id": 22,
"title": "The Lake House",
"genre": ["Romance","Fantasy","Drama"],
"image": "https://image.tmdb.org/t/p/w500/6x3E6M7s8mYy7K6e8X7p0xZ4H2P.jpg"
},
{
"id": 23,
"title": "Ella Enchanted",
"genre": ["Fantasy","Romance","Family"],
"image": "https://image.tmdb.org/t/p/w500/qf0xqvJ0J8s8q5k8t0l7y0h0p4.jpg"
},
{
"id": 24,
"title": "Legend",
"genre": ["Fantasy","Romance","Adventure"],
"image": "https://image.tmdb.org/t/p/w500/hv5qXhC8FAdZkGouVp21HbQJseb.jpg"
},
{
"id": 25,
"title": "Ladyhawke",
"genre": ["Fantasy","Romance","Adventure"],
"image": "https://image.tmdb.org/t/p/w500/gp8Y2sHqGgfHdCqkfNNpJBWlAbI.jpg"
},
{
"id": 26,
"title": "The Secret of Moonacre",
"genre": ["Fantasy","Romance","Family"],
"image": "https://image.tmdb.org/t/p/w500/y6vNruM3aMcMBXNIN1qNbfXDnpa.jpg"
},
{
"id": 27,
"title": "The Fall",
"genre": ["Fantasy","Romance","Adventure"],
"image": "https://image.tmdb.org/t/p/w500/t6zqW0YtL6ZooxOMm3mcVGhjmOY.jpg"
},
{
"id": 28,
"title": "Big Fish",
"genre": ["Fantasy","Romance","Drama"],
"image": "https://image.tmdb.org/t/p/w500/tjK063yCgaBAluVU72rZ6PKPH2l.jpg"
},
{
"id": 29,
"title": "The Green Knight",
"genre": ["Fantasy","Adventure","Romance"],
"image": "https://image.tmdb.org/t/p/w500/gmQqmoHnrxlA9P8Y0F7QqK4ZfUO.jpg"
},
{
"id": 30,
"title": "The Shape of Things to Come",
"genre": ["Fantasy","Romance","Drama"],
"image": "https://image.tmdb.org/t/p/w500/9pX2Y4gE0Yv7FpC18JNpDutVCRa.jpg"
},
  {
    "id": 31,
    "title": "Three Thousand Years of Longing",
    "genre": ["Fantasy", "Romance", "Drama"],
    "image": "https://image.tmdb.org/t/p/w500/uZs5E6GosFVJeFt3PcTJS3BM4ti.jpg"
  },
  {
    "id": 32,
    "title": "Irish Wish",
    "genre": ["Fantasy", "Romance", "Comedy"],
    "image": "https://image.tmdb.org/t/p/w500/6dHjvVYLRNvKcJsteVEhDWUpAJZ.jpg"
  },
  {
    "id": 33,
    "title": "All of Us Strangers",
    "genre": ["Fantasy", "Romance", "Drama"],
    "image": "https://image.tmdb.org/t/p/w500/fZPSd91y1nS9YuqbWNoXDpUe1ko.jpg"
  },
  {
    "id": 34,
    "title": "Timestalker",
    "genre": ["Fantasy", "Romance", "Comedy"],
    "image": "https://image.tmdb.org/t/p/w500/fyE0JkYyqSCDtnznuaCG2l9VmO6.jpg"
  },
  {
    "id": 35,
    "title": "The Golden Compass",
    "genre": ["Fantasy", "Adventure", "Romance"],
    "image": "https://image.tmdb.org/t/p/w500/8Vh2y7RUTpujISiFDUFxIr05o2X.jpg"
  },
  {
    "id": 36,
    "title": "The Chronicles of Narnia",
    "genre": ["Fantasy", "Adventure", "Family"],
    "image": "https://image.tmdb.org/t/p/w500/lRGLx1nS1H3A4Xk8Tz7kKIhxX3s.jpg"
  },
  {
    "id": 37,
    "title": "Pan's Labyrinth",
    "genre": ["Fantasy", "Drama", "Romance"],
    "image": "https://image.tmdb.org/t/p/w500/s8Zc5vY5h9K2Y2N6l0g9pXqJ0C9.jpg"
  },
  {
    "id": 38,
    "title": "A Monster Calls",
    "genre": ["Fantasy", "Drama", "Adventure"],
    "image": "https://image.tmdb.org/t/p/w500/xq1Ugd62d23K2knRUx6xxuALTZB.jpg"
  },
  {
    "id": 39,
    "title": "The Lovely Bones",
    "genre": ["Fantasy", "Drama", "Romance"],
    "image": "https://image.tmdb.org/t/p/w500/sQyVw9rRZJjYp7z2uVH54camzYN.jpg"
  },
  {
    "id": 40,
    "title": "City of Angels",
    "genre": ["Fantasy", "Romance", "Drama"],
    "image": "https://image.tmdb.org/t/p/w500/2K8lW0fvkYlCYwH14r2raXIiQun.jpg"
  },

  {
    "id": 41,
    "title": "Inception",
    "genre": ["Action", "Adventure", "Sci-Fi"],
    "image": "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg"
  },
  {
    "id": 42,
    "title": "Interstellar",
    "genre": ["Adventure", "Drama", "Sci-Fi"],
    "image": "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"
  },
  {
    "id": 43,
    "title": "The Dark Knight",
    "genre": ["Action", "Crime", "Drama"],
    "image": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
  },
  {
    "id": 44,
    "title": "Pulp Fiction",
    "genre": ["Crime", "Drama"],
    "image": "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg"
  },
  {
    "id": 45,
    "title": "Fight Club",
    "genre": ["Drama"],
    "image": "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg"
  },
  {
    "id": 46,
    "title": "Forrest Gump",
    "genre": ["Comedy", "Drama", "Romance"],
    "image": "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg"
  },
  {
    "id": 47,
    "title": "The Matrix",
    "genre": ["Action", "Sci-Fi"],
    "image": "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
  },
  {
    "id": 48,
    "title": "Gladiator",
    "genre": ["Action", "Adventure", "Drama"],
    "image": "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg"
  },
  {
    "id": 49,
    "title": "The Lord of the Rings: The Fellowship of the Ring",
    "genre": ["Adventure", "Fantasy"],
    "image": "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg"
  },
  {
    "id": 50,
    "title": "The Lord of the Rings: The Two Towers",
    "genre": ["Adventure", "Fantasy"],
    "image": "https://image.tmdb.org/t/p/w500/rrGlNlzFTrXFNGXsD7NNlxq4BPb.jpg"
  },
  {
    "id": 51,
    "title": "The Lord of the Rings: The Return of the King",
    "genre": ["Adventure", "Fantasy"],
    "image": "https://image.tmdb.org/t/p/w500/9deVtM7nYGUjF8uZ8DmJk6YgmBB.jpg"
  },
  {
    "id": 52,
    "title": "Star Wars: Episode IV - A New Hope",
    "genre": ["Action", "Adventure", "Sci-Fi"],
    "image": "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg"
  },
  {
    "id": 53,
    "title": "Star Wars: Episode V - The Empire Strikes Back",
    "genre": ["Action", "Adventure", "Sci-Fi"],
    "image": "https://image.tmdb.org/t/p/w500/7BuH8itoSrLExs2YZSsM01Qk2no.jpg"
  },
  {
    "id": 54,
    "title": "Star Wars: Episode VI - Return of the Jedi",
    "genre": ["Action", "Adventure", "Sci-Fi"],
    "image": "https://image.tmdb.org/t/p/w500/2LmvB20W9nGX1gcclmTQl9ye8bK.jpg"
  },
  {
    "id": 55,
    "title": "The Shawshank Redemption",
    "genre": ["Drama"],
    "image": "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"
  },
  {
    "id": 56,
    "title": "The Godfather",
    "genre": ["Crime", "Drama"],
    "image": "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg"
  },
  {
    "id": 57,
    "title": "The Godfather Part II",
    "genre": ["Crime", "Drama"],
    "image": "https://image.tmdb.org/t/p/w500/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg"
  },
  {
    "id": 58,
    "title": "The Silence of the Lambs",
    "genre": ["Crime", "Drama", "Thriller"],
    "image": "https://image.tmdb.org/t/p/w500/rplLJ2hPcOQmkFhTqUte0MkEaO2.jpg"
  },
  {
    "id": 59,
    "title": "Se7en",
    "genre": ["Crime", "Drama", "Mystery"],
    "image": "https://image.tmdb.org/t/p/w500/69Sns8WoET6CfaYlIkHbla4l7nC.jpg"
  },
  {
    "id": 60,
    "title": "Jurassic Park",
    "genre": ["Adventure", "Sci-Fi"],
    "image": "https://image.tmdb.org/t/p/w500/c414cDeQ9b6qLPLeKmiJuLDUREJ.jpg"
  },
  {
    "id": 61,
    "title": "Titanic",
    "genre": ["Drama", "Romance"],
    "image": "https://image.tmdb.org/t/p/w500/kHXEpyfl6zqn8a6YuozZUujufX.jpg"
  },
  {
    "id": 62,
    "title": "Avatar",
    "genre": ["Action", "Adventure", "Fantasy"],
    "image": "https://image.tmdb.org/t/p/w500/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg"
  },
  {
    "id": 63,
    "title": "The Avengers",
    "genre": ["Action", "Adventure", "Sci-Fi"],
    "image": "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg"
  },
  {
    "id": 64,
    "title": "Black Panther",
    "genre": ["Action", "Adventure", "Sci-Fi"],
    "image": "https://image.tmdb.org/t/p/w500/lKyxh5ichqg8a1sTR3f6QhCk8SC.jpg"
  },
  {
    "id": 65,
    "title": "Guardians of the Galaxy",
    "genre": ["Action", "Adventure", "Sci-Fi"],
    "image": "https://image.tmdb.org/t/p/w500/y31QB9kn3XSudA15tV7UWQ9XLuW.jpg"
  },
  {
    "id": 66,
    "title": "Spider-Man: Into the Spider-Verse",
    "genre": ["Animation", "Action", "Adventure"],
    "image": "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8s4L8dMZyfxh.jpg"
  },
  {
    "id": 67,
    "title": "Dune: Part Two",
    "genre": ["Sci-Fi", "Adventure"],
    "image": "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg"
  },
  {
    "id": 68,
    "title": "Deadpool & Wolverine",
    "genre": ["Action", "Comedy", "Sci-Fi"],
    "image": "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg"
  },
  {
    "id": 69,
    "title": "Furiosa: A Mad Max Saga",
    "genre": ["Action", "Adventure"],
    "image": "https://image.tmdb.org/t/p/w500/iADOJ8Zymht2JPMoy3R7xceZprc.jpg"
  },
  {
    "id": 70,
    "title": "Godzilla x Kong: The New Empire",
    "genre": ["Action", "Sci-Fi"],
    "image": "https://image.tmdb.org/t/p/w500/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg"
  },
  {
    "id": 71,
    "title": "Kingdom of the Planet of the Apes",
    "genre": ["Sci-Fi", "Adventure"],
    "image": "https://image.tmdb.org/t/p/w500/gKkl37BQuKTanygYQG1pyYgLVgf.jpg"
  },
  {
    "id": 72,
    "title": "The Fall Guy",
    "genre": ["Action", "Comedy"],
    "image": "https://image.tmdb.org/t/p/w500/tSz1qsmSJon0rqjHBxXZmrotuse.jpg"
  },
  {
    "id": 73,
    "title": "Civil War",
    "genre": ["Action", "Drama"],
    "image": "https://image.tmdb.org/t/p/w500/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg"
  },
  {
    "id": 74,
    "title": "Inside Out 2",
    "genre": ["Animation", "Family"],
    "image": "https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg"
  },
  {
    "id": 75,
    "title": "Kung Fu Panda 4",
    "genre": ["Animation", "Action"],
    "image": "https://image.tmdb.org/t/p/w500/w5fSSv2RyZkPpJX0hFvS7hJ2OZK.jpg"
  },
  {
    "id": 76,
    "title": "Wonka",
    "genre": ["Fantasy", "Family"],
    "image": "https://image.tmdb.org/t/p/w500/qhb1qOilapbapxWQn9jtRCMwXJF.jpg"
  },
  {
    "id": 77,
    "title": "Aquaman and the Lost Kingdom",
    "genre": ["Action", "Adventure"],
    "image": "https://image.tmdb.org/t/p/w500/7lTnXOy0iNtBAdRP3TZvaKJ77F6.jpg"
  },
  {
    "id": 78,
    "title": "The Marvels",
    "genre": ["Action", "Sci-Fi"],
    "image": "https://image.tmdb.org/t/p/w500/Ag3D9qXjhJ2FUkrlJ0Cv1pgxqYQ.jpg"
  },
  {
    "id": 79,
    "title": "Mission: Impossible – Dead Reckoning",
    "genre": ["Action", "Adventure"],
    "image": "https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg"
  },
  {
    "id": 80,
    "title": "John Wick: Chapter 4",
    "genre": ["Action", "Crime"],
    "image": "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg"
  },
  {
    "id": 81,
    "title": "The Batman",
    "genre": ["Action", "Crime"],
    "image": "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg"
  },
  {
    "id": 82,
    "title": "Doctor Strange in the Multiverse of Madness",
    "genre": ["Action", "Fantasy"],
    "image": "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg"
  },
  {
    "id": 83,
    "title": "Shang-Chi",
    "genre": ["Action", "Adventure"],
    "image": "https://image.tmdb.org/t/p/w500/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg"
  },
  {
    "id": 84,
    "title": "Thor: Love and Thunder",
    "genre": ["Action", "Fantasy"],
    "image": "https://image.tmdb.org/t/p/w500/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg"
  },
  {
    "id": 85,
    "title": "Top Gun: Maverick",
    "genre": ["Action", "Drama"],
    "image": "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg"
  },
  {
    "id": 86,
    "title": "The Flash",
    "genre": ["Action", "Sci-Fi"],
    "image": "https://image.tmdb.org/t/p/w500/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg"
  },
  {
    "id": 87,
    "title": "Transformers: Rise of the Beasts",
    "genre": ["Action", "Sci-Fi"],
    "image": "https://image.tmdb.org/t/p/w500/gPbM0MK8CP8A174rmUwGsADNYKD.jpg"
  },
  {
    "id": 88,
    "title": "Meg 2: The Trench",
    "genre": ["Action", "Sci-Fi"],
    "image": "https://image.tmdb.org/t/p/w500/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg"
  },
  {
    "id": 89,
    "title": "The Hunger Games: The Ballad of Songbirds",
    "genre": ["Action", "Adventure"],
    "image": "https://image.tmdb.org/t/p/w500/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg"
  },
  {
    "id": 90,
    "title": "Oppenheimer",
    "genre": ["Drama", "History"],
    "image": "https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg"
  },
  {
    "id": 91,
    "title": "Barbie",
    "genre": ["Comedy", "Fantasy"],
    "image": "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg"
  },
  {
    "id": 92,
    "title": "Gran Turismo",
    "genre": ["Action", "Drama"],
    "image": "https://image.tmdb.org/t/p/w500/51tqzRtKMMZEYUpSYkrUE7v9ehm.jpg"
  },
  {
    "id": 93,
    "title": "The Creator",
    "genre": ["Sci-Fi", "Action"],
    "image": "https://image.tmdb.org/t/p/w500/vBZ0qvaRxqEhZwl6LWmruJqWE8Z.jpg"
  },
  {
    "id": 94,
    "title": "Napoleon",
    "genre": ["Drama", "History"],
    "image": "https://image.tmdb.org/t/p/w500/jE5o7y9K6pZtWNNMEw3IdpHuncR.jpg"
  },
  {
    "id": 95,
    "title": "Five Nights at Freddy's",
    "genre": ["Horror"],
    "image": "https://image.tmdb.org/t/p/w500/7BpNtNfxuocYEVREzVMO75hso1l.jpg"
  },
  {
    "id": 96,
    "title": "Smile",
    "genre": ["Horror", "Thriller"],
    "image": "https://image.tmdb.org/t/p/w500/aPqcQwu4VGEewPhagWNncDbJ9Xp.jpg"
  },
  {
    "id": 97,
    "title": "Scream VI",
    "genre": ["Horror"],
    "image": "https://image.tmdb.org/t/p/w500/wDWwtvkRRlgTiUr6TyLSMX8FCuZ.jpg"
  },
  {
    "id": 98,
    "title": "No Time to Die",
    "genre": ["Action", "Adventure"],
    "image": "https://image.tmdb.org/t/p/w500/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg"
  },
  {
    "id": 99,
    "title": "The Exorcist: Believer",
    "genre": ["Horror"],
    "image": "https://image.tmdb.org/t/p/w500/8KGPYy3i9Xy6Ff5o2JpFQyq1hQk.jpg"
  },
  {
    "id": 100,
    "title": "Rebel Moon",
    "genre": ["Sci-Fi", "Adventure"],
    "image": "https://image.tmdb.org/t/p/w500/ui4DrH1cKk2vkHshcUcGt2lKxCm.jpg"
  },





  // Yangi 100 film (2023–2025 yillar)
{
  "id": 101,
  "title": "Mission: Impossible – The Final Reckoning",
  "genre": ["Action","Adventure","Spy"],
  "image": "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg"
},
{
  "id": 102,
  "title": "Inside Out 2",
  "genre": ["Animation","Family","Comedy"],
  "image": "https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg"
},
{
  "id": 103,
  "title": "Zootopia 2",
  "genre": ["Animation","Family","Adventure"],
  "image": "https://image.tmdb.org/t/p/w500/ytw6Z1pJp2UuJm4lWrtZgrIQo4C.jpg"
},
{
  "id": 104,
  "title": "Deadpool & Wolverine",
  "genre": ["Action","Comedy","Sci-Fi"],
  "image": "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg"
},
{
  "id": 105,
  "title": "Dune: Part Two",
  "genre": ["Sci-Fi","Adventure"],
  "image": "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg"
},
{
  "id": 106,
  "title": "Furiosa: A Mad Max Saga",
  "genre": ["Action","Adventure"],
  "image": "https://image.tmdb.org/t/p/w500/iADOJ8Zymht2JPMoy3R7xceZprc.jpg"
},
{
  "id": 107,
  "title": "Godzilla x Kong: The New Empire",
  "genre": ["Action","Sci-Fi"],
  "image": "https://image.tmdb.org/t/p/w500/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg"
},
{
  "id": 108,
  "title": "Kung Fu Panda 4",
  "genre": ["Animation","Action","Comedy"],
  "image": "https://image.tmdb.org/t/p/w500/w5fSSv2RyZkPpJX0hFvS7hJ2OZK.jpg"
},
{
  "id": 109,
  "title": "Sonic the Hedgehog 3",
  "genre": ["Action","Adventure","Family"],
  "image": "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg"
},
{
  "id": 110,
  "title": "Moana 2",
  "genre": ["Animation","Adventure","Family"],
  "image": "https://image.tmdb.org/t/p/w500/qzBdv7X9ZlFhs9EqlnWJp7sDP1U.jpg"
},
{
  "id": 111,
  "title": "Tenet",
  "genre": ["Action","Sci-Fi","Thriller"],
  "image": "https://image.tmdb.org/t/p/w500/k68nPLbIST6NP96JmTxmZijEvCA.jpg"
},
{
  "id": 112,
  "title": "The Batman",
  "genre": ["Action","Crime","Drama"],
  "image": "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg"
},
{
  "id": 113,
  "title": "The Suicide Squad",
  "genre": ["Action","Comedy"],
  "image": "https://image.tmdb.org/t/p/w500/q61qEyssk2ku3okWICKArlAdhBn.jpg"
},
{
  "id": 114,
  "title": "Everything Everywhere All at Once",
  "genre": ["Action","Sci-Fi","Comedy"],
  "image": "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg"
},
{
  "id": 115,
  "title": "The Northman",
  "genre": ["Action","Adventure","Drama"],
  "image": "https://image.tmdb.org/t/p/w500/zhLKlUaF1SEpO58ppHIAyENkwgw.jpg"
},
{
  "id": 116,
  "title": "Nope",
  "genre": ["Horror","Sci-Fi"],
  "image": "https://image.tmdb.org/t/p/w500/AcKVlWaNVVVFQwro3nLXqPljcYA.jpg"
},
{
  "id": 117,
  "title": "The Whale",
  "genre": ["Drama"],
  "image": "https://image.tmdb.org/t/p/w500/jQ0gylJMxWSL490sy0RrPj1Lj7e.jpg"
},
{
  "id": 118,
  "title": "The Menu",
  "genre": ["Thriller","Comedy"],
  "image": "https://image.tmdb.org/t/p/w500/v31MsWhF9WFh7Qooq6xSBbmJxoG.jpg"
},
{
  "id": 119,
  "title": "The Super Mario Bros. Movie",
  "genre": ["Animation","Adventure","Family"],
  "image": "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg"
},
{
  "id": 120,
  "title": "Elemental",
  "genre": ["Animation","Family","Fantasy"],
  "image": "https://image.tmdb.org/t/p/w500/8riWcADI1ekEiBguVB9vkilhiQm.jpg"
},
{
  "id": 121,
  "title": "The Boy and the Heron",
  "genre": ["Animation","Fantasy"],
  "image": "https://image.tmdb.org/t/p/w500/jDQPkgzerGophKRRn7MKm071vCU.jpg"
},
{
  "id": 122,
  "title": "Killers of the Flower Moon",
  "genre": ["Crime","Drama"],
  "image": "https://image.tmdb.org/t/p/w500/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg"
},
{
  "id": 123,
  "title": "Poor Things",
  "genre": ["Fantasy","Romance"],
  "image": "https://image.tmdb.org/t/p/w500/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg"
},
{
  "id": 124,
  "title": "The Beekeeper",
  "genre": ["Action","Thriller"],
  "image": "https://image.tmdb.org/t/p/w500/A7EByudX0eOzlkQ2FIbogzyazm2.jpg"
},
{
  "id": 125,
  "title": "Argylle",
  "genre": ["Action","Comedy","Spy"],
  "image": "https://image.tmdb.org/t/p/w500/95VlSEfLMqeX36UVcHJuNlWEpwf.jpg"
},
{
  "id": 126,
  "title": "Madame Web",
  "genre": ["Action","Sci-Fi"],
  "image": "https://image.tmdb.org/t/p/w500/rULWuutDcN5NvtiZi4FRPzRYWSh.jpg"
},
{
  "id": 127,
  "title": "The Fall Guy",
  "genre": ["Action","Comedy"],
  "image": "https://image.tmdb.org/t/p/w500/tSz1qsmSJon0rqjHBxXZmrotuse.jpg"
},
{
  "id": 128,
  "title": "Alien: Romulus",
  "genre": ["Horror","Sci-Fi"],
  "image": "https://image.tmdb.org/t/p/w500/3jzYb6GZyX9dQ8q1Y5F2rM8Nl4F.jpg"
},
{
  "id": 129,
  "title": "Gladiator II",
  "genre": ["Action","Drama","History"],
  "image": "https://image.tmdb.org/t/p/w500/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg"
},
{
  "id": 130,
  "title": "Avatar 3",
  "genre": ["Action","Adventure","Sci-Fi"],
  "image": "https://image.tmdb.org/t/p/w500/9E0P5E1Wn0RvrRZtGJPD7W82dqo.jpg"
},
{
  "id": 131,
  "title": "Doctor Strange",
  "genre": ["Fantasy","Action","Sci-Fi"],
  "image": "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg"
},
{
  "id": 132,
  "title": "Doctor Strange in the Multiverse of Madness",
  "genre": ["Fantasy","Action","Sci-Fi"],
  "image": "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg"
},
{
  "id": 133,
  "title": "Fantastic Beasts and Where to Find Them",
  "genre": ["Fantasy","Adventure"],
  "image": "https://image.tmdb.org/t/p/w500/fLsaFKExQt05yqjoAvKsmOMYvJR.jpg"
},
{
  "id": 134,
  "title": "Fantastic Beasts: The Crimes of Grindelwald",
  "genre": ["Fantasy","Adventure"],
  "image": "https://image.tmdb.org/t/p/w500/kQK9u9Bf6YNJ9Y7bU6pCjzqD2cA.jpg"
},
{
  "id": 135,
  "title": "Fantastic Beasts: The Secrets of Dumbledore",
  "genre": ["Fantasy","Adventure"],
  "image": "https://image.tmdb.org/t/p/w500/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg"
},
{
  "id": 136,
  "title": "Ready Player One",
  "genre": ["Sci-Fi","Adventure"],
  "image": "https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg"
},
{
  "id": 137,
  "title": "The Tomorrow War",
  "genre": ["Sci-Fi","Action"],
  "image": "https://image.tmdb.org/t/p/w500/34nDCQZwaEvsy4CFO5hkGRFDCVU.jpg"
},
{
  "id": 138,
  "title": "Edge of Tomorrow",
  "genre": ["Sci-Fi","Action"],
  "image": "https://image.tmdb.org/t/p/w500/yUmSVctt9F3Y5wS5CqV3ZkR9a0Q.jpg"
},
{
  "id": 139,
  "title": "Oblivion",
  "genre": ["Sci-Fi","Adventure"],
  "image": "https://image.tmdb.org/t/p/w500/eO3r38fwnhb58M1YgcjQBd3VNcp.jpg"
},
{
  "id": 140,
  "title": "Eternals",
  "genre": ["Fantasy","Sci-Fi"],
  "image": "https://image.tmdb.org/t/p/w500/b6qUu00iIIkXX13szFy7d0CyNcg.jpg"
},
{
  "id": 141,
  "title": "The Creator",
  "genre": ["Sci-Fi","Action"],
  "image": "https://image.tmdb.org/t/p/w500/vBZ0qvaRxqEhZwl6LWmruJqWE8Z.jpg"
},
{
  "id": 142,
  "title": "Moonfall",
  "genre": ["Sci-Fi","Adventure"],
  "image": "https://image.tmdb.org/t/p/w500/odVv1sqVs0KxBXiA8bhIBlPgalx.jpg"
},
{
  "id": 143,
  "title": "65",
  "genre": ["Sci-Fi","Adventure"],
  "image": "https://image.tmdb.org/t/p/w500/rzRb63TldOKdKydCvWJM8B6EkPM.jpg"
},
{
  "id": 144,
  "title": "Chaos Walking",
  "genre": ["Sci-Fi","Adventure"],
  "image": "https://image.tmdb.org/t/p/w500/9kg73Mg8WJKlB9Y2SAJzeDKAnuB.jpg"
},
{
  "id": 145,
  "title": "The Adam Project",
  "genre": ["Sci-Fi","Adventure"],
  "image": "https://image.tmdb.org/t/p/w500/wFjboE0aFZNbVOF05fzrka9Fqyx.jpg"
},
{
  "id": 146,
  "title": "Project Power",
  "genre": ["Sci-Fi","Action"],
  "image": "https://image.tmdb.org/t/p/w500/TnOeov4w0sTtV2gqICqIxVi74V.jpg"
},
{
  "id": 147,
  "title": "Mortal Kombat",
  "genre": ["Fantasy","Action"],
  "image": "https://image.tmdb.org/t/p/w500/nkayOAUBUu4mMvyNf9iHSUiPjF1.jpg"
},
{
  "id": 148,
  "title": "Hellboy",
  "genre": ["Fantasy","Action"],
  "image": "https://image.tmdb.org/t/p/w500/4U8Wbj0YQ9Qh3vYwM1lJtMnbN2N.jpg"
},
{
  "id": 149,
  "title": "The Old Guard",
  "genre": ["Fantasy","Action"],
  "image": "https://image.tmdb.org/t/p/w500/cjr4NWURcVN3gW5FlHeabgBHLrY.jpg"
},
{
  "id": 150,
  "title": "Shazam!",
  "genre": ["Fantasy","Action"],
  "image": "https://image.tmdb.org/t/p/w500/xnopI5Xtky18MPhK40cZAGAOVeV.jpg"
},
{
  "id": 151,
  "title": "Shazam! Fury of the Gods",
  "genre": ["Fantasy","Action"],
  "image": "https://image.tmdb.org/t/p/w500/2VK4d3mqqTc7LVZLnLPeRiPaJ71.jpg"
},
{
  "id": 152,
  "title": "The Sorcerer's Apprentice",
  "genre": ["Fantasy","Adventure"],
  "image": "https://image.tmdb.org/t/p/w500/3hQ7wq3p7N3y9Yx8RJWb1x1o1tT.jpg"
},
{
  "id": 153,
  "title": "Eragon",
  "genre": ["Fantasy","Adventure"],
  "image": "https://image.tmdb.org/t/p/w500/7Q7cN0zZZhXnE4n4t4WRPcNI0Y3.jpg"
},
{
  "id": 154,
  "title": "Dragonheart",
  "genre": ["Fantasy","Adventure"],
  "image": "https://image.tmdb.org/t/p/w500/8yVZq1bVbWcv16O3MHuvb6jVWeN.jpg"
},
{
  "id": 155,
  "title": "The Dark Tower",
  "genre": ["Fantasy","Adventure"],
  "image": "https://image.tmdb.org/t/p/w500/i9GUSgddIqrroubiLsvvMRYyRy0.jpg"
},
{
  "id": 156,
  "title": "Warcraft",
  "genre": ["Fantasy","Adventure"],
  "image": "https://image.tmdb.org/t/p/w500/nHXiMnWUAUba2LZ0sU4G0u7hHnK.jpg"
},
{
  "id": 157,
  "title": "Prince of Persia: The Sands of Time",
  "genre": ["Fantasy","Adventure"],
  "image": "https://image.tmdb.org/t/p/w500/jI6Y8YqXxA3GqG3D1iWZ1zV9lN4.jpg"
},
{
  "id": 158,
  "title": "John Carter",
  "genre": ["Sci-Fi","Adventure"],
  "image": "https://image.tmdb.org/t/p/w500/lCxz1Yus07QCQQCb6I0Dr3Lmqpx.jpg"
},
{
  "id": 159,
  "title": "Valerian and the City of a Thousand Planets",
  "genre": ["Sci-Fi","Adventure"],
  "image": "https://image.tmdb.org/t/p/w500/j8607mHTtY7QJ7Wq5h0y2S3E8EM.jpg"
},
{
  "id": 160,
  "title": "Jupiter Ascending",
  "genre": ["Sci-Fi","Adventure"],
  "image": "https://image.tmdb.org/t/p/w500/aMEsvTUklw0uZ3gk3Q6lAj6302a.jpg"
},


];

export default data
