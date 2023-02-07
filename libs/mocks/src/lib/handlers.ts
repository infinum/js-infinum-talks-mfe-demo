import { Movie, Show } from '@phlex/tvdb';
import { rest } from 'msw';

const logInHandler = rest.post('/api/login', async (req, res, ctx) => {
  const { email, password }: { email: string; password: string } =
    await req.json();

  if (password === 'fail') {
    return res(ctx.status(401, 'Invalid credentials'));
  }

  return res(
    ctx.json({
      id: `id-${email}`,
      email,
    })
  );
});

const movies: Array<Movie> = [
  {
    id: '1',
    name: 'Pulp Fiction',
    description: `This stylized crime caper weaves together stories featuring a hit man, his philosophical partner and a washed-up boxer.`,
    posterUrl:
      'https://artworks.thetvdb.com/banners/movies/228/posters/2395182.jpg',
  },
  {
    id: '2',
    name: 'The Matrix',
    description: `An unassuming programmer comes to the attention of a rebel alliance who seek to overthrow their sentient AI overlords and upset the world's status quo.`,
    posterUrl:
      'https://artworks.thetvdb.com/banners/movies/169/posters/5f274c00c85c1.jpg',
  },
];

const getAllMoviesHandler = rest.get('/api/movies', (req, res, ctx) => {
  return res(ctx.json(movies));
});

const getOneMovieHandler = rest.get(
  '/api/movies/:id',
  async (req, res, ctx) => {
    const id = req.params['id'];

    const movie = movies.find((movie) => movie.id === id);

    if (!movie) {
      return res(ctx.status(404, 'Movie not found'));
    }

    return res(ctx.json(movie));
  }
);

const shows: Array<Show> = [
  {
    id: '1',
    name: 'The Sopranos',
    description: `New Jersey mob boss Tony Soprano deals with personal and professional issues in his home and business life that affect his mental state, leading him to seek professional psychiatric counseling.`,
    posterUrl: 'https://artworks.thetvdb.com/banners/posters/75299-17.jpg',
  },
  {
    id: '2',
    name: 'Twin Peaks',
    description: `The body of a young girl is washed up on a beach near the small Washington state town of Twin Peaks. Eccentric FBI Special Agent Dale Cooper is called in to investigate her strange demise only to uncover a web of mystery that ultimately leads him deep into the heart of the surrounding woodland and his very own soul. Season 3 - also known as Twin Peaks: The Return - is set 25 years after the events of Seasons 1 and 2.`,
    posterUrl: 'https://artworks.thetvdb.com/banners/posters/70533-6.jpg',
  },
  {
    id: '3',
    name: 'Battlestar Galactica (2003)',
    description: `In a distant part of the universe, a civilization of humans live on planets known as the Twelve Colonies. In the past, the Colonies have been at war with a cybernetic race known as the Cylons. 40 years after the first war the Cylons launch a devastating attack on the Colonies. The only military ship that survived the attack takes up the task of leading a small fugitive fleet of survivors into space in search of a fabled refuge known as Earth.`,
    posterUrl: 'https://artworks.thetvdb.com/banners/posters/73545-2.jpg',
  },
];

const getRandomShowHandler = rest.get('/api/shows/random', (req, res, ctx) => {
  return res(ctx.json(shows[Math.floor(Math.random() * shows.length)]));
});

export const handlers = [
  logInHandler,
  getAllMoviesHandler,
  getOneMovieHandler,
  getRandomShowHandler,
];
