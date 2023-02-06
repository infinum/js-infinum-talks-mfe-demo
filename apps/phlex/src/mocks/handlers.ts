import { Movie } from '@phlex/tvdb';
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

const getAllMoviesHandler = rest.get('/api/movies', async (req, res, ctx) => {
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

export const handlers = [logInHandler, getAllMoviesHandler, getOneMovieHandler];
