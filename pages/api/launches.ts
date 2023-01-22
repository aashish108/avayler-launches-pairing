import type { NextApiHandler } from 'next';
import { Launches } from '../../types/launchesResponse';

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'GET') {
    const response = await fetch('https://api.spacexdata.com/v4/launches');
    if (!response.ok) {
      return res.status(404).json({ error: 'Error!' });
    }
    const data: Launches = await response.json();
    return res.status(200).json(data);
  }

  return res.status(405).json({ error: 'Method not allowed' });
};

export default handler;
