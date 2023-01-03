import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  status: boolean
}

export default function handler(_: NextApiRequest, res: NextApiResponse<Data>) {
  return res.status(200).json({ status: true })
}
