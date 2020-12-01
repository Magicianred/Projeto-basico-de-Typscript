import { Response, Request } from "express";
import createUser from './services/CreateUser'

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: 'Rosana',
    email: 'rosana@gmail.com',
    password: '123',
    techs: ['Node.js', 'React',
      { title: 'javaScrip', experience: 100 },
    ],
  });
  return response.json(user);
}