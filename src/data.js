const data = [
  {
    "id": 1,
    "title": "The Shape of Water",
    "genre": ["Romance", "Fantasy", "Drama"],
    "image": "https://image.tmdb.org/t/p/w500/k4FwHlMhuRR5BISY2Gm2QZHlH5Q.jpg"
  },
  {
    "id": 2,
    "title": "Stardust",
    "genre": ["Fantasy", "Adventure", "Romance"],
    "image": "https://image.tmdb.org/t/p/w500/3O8OZ8X0qYhG9R8w0j7sKnzGWxZ.jpg"
  },
  {
    "id": 3,
    "title": "Beauty and the Beast",
    "genre": ["Fantasy", "Romance", "Family"],
    "image": "https://image.tmdb.org/t/p/w500/6aUWe0GSl69wMTSWWexsorMIvwU.jpg"
  },
  {
    "id": 4,
    "title": "The Princess Bride",
    "genre": ["Fantasy", "Adventure", "Romance"],
    "image": "https://image.tmdb.org/t/p/w500/dvjqlp2sAhUeFjUOfQDgCqj0VjD.jpg"
  },
  {
    "id": 5,
    "title": "Enchanted",
    "genre": ["Fantasy", "Romance", "Comedy"],
    "image": "https://image.tmdb.org/t/p/w500/8KzRk7l0G2m5YkN0rF3v9mV7G4B.jpg"
  },
  {
    "id": 6,
    "title": "Aladdin",
    "genre": ["Fantasy", "Adventure", "Romance"],
    "image": "https://image.tmdb.org/t/p/w500/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg"
  },
  {
    "id": 7,
    "title": "Cinderella",
    "genre": ["Fantasy", "Romance", "Family"],
    "image": "https://image.tmdb.org/t/p/w500/oEhY7UwVYvG2H0tN8c6VbWm6q3b.jpg"
  },
  {
    "id": 8,
    "title": "The Little Mermaid",
    "genre": ["Fantasy", "Romance", "Family"],
    "image": "https://image.tmdb.org/t/p/w500/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg"
  },
  {
    "id": 9,
    "title": "Edward Scissorhands",
    "genre": ["Fantasy", "Romance", "Drama"],
    "image": "https://image.tmdb.org/t/p/w500/1RFIbuW9Z3eN6O6a7ZBq5xZr9qV.jpg"
  },
  {
    "id": 10,
    "title": "The Curious Case of Benjamin Button",
    "genre": ["Fantasy", "Romance", "Drama"],
    "image": "https://image.tmdb.org/t/p/w500/26wEWZYt6yJkwRVkjcbwJEFh9IS.jpg"
  },
  {
    "id": 11,
    "title": "About Time",
    "genre": ["Romance", "Fantasy", "Drama"],
    "image": "https://image.tmdb.org/t/p/w500/7D2RrgpXreI7q9d3S9nA3Wf7d2k.jpg"
  },
  {
    "id": 12,
    "title": "Midnight in Paris",
    "genre": ["Fantasy", "Romance", "Comedy"],
    "image": "https://image.tmdb.org/t/p/w500/4wBG5kbfagTQclETblPRRGihk0I.jpg"
  },
  {
    "id": 13,
    "title": "The Age of Adaline",
    "genre": ["Romance", "Fantasy", "Drama"],
    "image": "https://image.tmdb.org/t/p/w500/od8A9mWj9B2s4Pq2n0z2yN1Yx7L.jpg"
  },
  {
    "id": 14,
    "title": "Your Name",
    "genre": ["Fantasy", "Romance", "Animation"],
    "image": "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg"
  },
  {
    "id": 15,
    "title": "Weathering With You",
    "genre": ["Fantasy", "Romance", "Animation"],
    "image": "https://image.tmdb.org/t/p/w500/qgrk7r1fV4IjuoeiGS5HOhXNdLJ.jpg"
  },
  {
    "id": 16,
    "title": "Howl's Moving Castle",
    "genre": ["Fantasy", "Romance", "Animation"],
    "image": "https://image.tmdb.org/t/p/w500/TkTPELv4kC3u1lkloush8skOjE.jpg"
  },
  {
    "id": 17,
    "title": "The Time Traveler's Wife",
    "genre": ["Romance", "Fantasy", "Drama"],
    "image": "https://image.tmdb.org/t/p/w500/4cQK8cJX3qjE7zvY4xXHzkwmo7a.jpg"
  },
  {
    "id": 18,
    "title": "Ruby Sparks",
    "genre": ["Fantasy", "Romance", "Comedy"],
    "image": "https://image.tmdb.org/t/p/w500/6X8RZpJqJ5E2l50Tzw9uQWGWp9J.jpg"
  },
  {
    "id": 19,
    "title": "Warm Bodies",
    "genre": ["Fantasy", "Romance", "Comedy"],
    "image": "https://image.tmdb.org/t/p/w500/9qUqQ8qv0hYz2X5V9V8vQX5P8ZP.jpg"
  },
  {
    "id": 20,
    "title": "The Fountain",
    "genre": ["Fantasy", "Romance", "Drama"],
    "image": "https://image.tmdb.org/t/p/w500/mfKk4B9dYj1WFJsbgx5caX5WDH5.jpg"
  },
  {
    "id": 21,
    "title": "Penelope",
    "genre": ["Fantasy", "Romance", "Comedy"],
    "image": "https://image.tmdb.org/t/p/w500/pvQKQ5jTqS0bkkCm1cW0XkyRjO6.jpg"
  },
  {
    "id": 22,
    "title": "The Lake House",
    "genre": ["Romance", "Fantasy", "Drama"],
    "image": "https://image.tmdb.org/t/p/w500/6x3E6M7s8mYy7K6e8X7p0xZ4H2P.jpg"
  },
  {
    "id": 23,
    "title": "Ella Enchanted",
    "genre": ["Fantasy", "Romance", "Family"],
    "image": "https://image.tmdb.org/t/p/w500/qf0xqvJ0J8s8q5k8t0l7y0h0p4.jpg"
  },
  {
    "id": 24,
    "title": "Legend",
    "genre": ["Fantasy", "Romance", "Adventure"],
    "image": "https://image.tmdb.org/t/p/w500/hv5qXhC8FAdZkGouVp21HbQJseb.jpg"
  },
  {
    "id": 25,
    "title": "Ladyhawke",
    "genre": ["Fantasy", "Romance", "Adventure"],
    "image": "https://image.tmdb.org/t/p/w500/gp8Y2sHqGgfHdCqkfNNpJBWlAbI.jpg"
  },
  {
    "id": 26,
    "title": "The Secret of Moonacre",
    "genre": ["Fantasy", "Romance", "Family"],
    "image": "https://image.tmdb.org/t/p/w500/y6vNruM3aMcMBXNIN1qNbfXDnpa.jpg"
  },
  {
    "id": 27,
    "title": "The Fall",
    "genre": ["Fantasy", "Romance", "Adventure"],
    "image": "https://image.tmdb.org/t/p/w500/t6zqW0YtL6ZooxOMm3mcVGhjmOY.jpg"
  },
  {
    "id": 28,
    "title": "Big Fish",
    "genre": ["Fantasy", "Romance", "Drama"],
    "image": "https://image.tmdb.org/t/p/w500/tjK063yCgaBAluVU72rZ6PKPH2l.jpg"
  },
  {
    "id": 29,
    "title": "The Green Knight",
    "genre": ["Fantasy", "Adventure", "Romance"],
    "image": "https://image.tmdb.org/t/p/w500/gmQqmoHnrxlA9P8Y0F7QqK4ZfUO.jpg"
  },
  {
    "id": 30,
    "title": "The Shape of Things to Come",
    "genre": ["Fantasy", "Romance", "Drama"],
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
  }
];


export default data