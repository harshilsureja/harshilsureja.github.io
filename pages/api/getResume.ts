// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }

import request from '../../src/utils/request';
import resumeData from './harshil-sureja-resume-data.json';

export default async function handler(req: any, res: any) {
  const { data } = resumeData;
  // const apiContent = {
  //   method: 'GET',
  //   url: `${BASE_URL}/api/getResume`,
  // };

  // const result = await request(apiContent);
  if (data) {
    setTimeout(() => {
      res.status(200).json(data);
    }, 1000);
  } else {
    res.status(400).json({ error: 'Bad request' });
  }
}
