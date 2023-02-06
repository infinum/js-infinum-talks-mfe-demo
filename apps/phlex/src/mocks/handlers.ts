import { rest } from 'msw';

const logInHandler = rest.post('/api/login', async (req, res, ctx) => {
  const { email, password }: { email: string; password: string } =
    await req.json();

  if (password === 'fail') {
    return res(ctx.status(401));
  }

  return res(
    ctx.json({
      id: `id-${email}`,
      email,
    })
  );
});

export const handlers = [logInHandler];
