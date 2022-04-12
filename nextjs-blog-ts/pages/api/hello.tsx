import { NextApiRequest, NextApiResponse } from 'next';

type Response = {
  text: string;
};

export default (req: NextApiRequest, res: NextApiResponse<Response>) => {
  res.status(200).json({ text: 'Hello' });
};
