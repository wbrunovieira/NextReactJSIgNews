import { NextApiRequest, NextApiResponse } from 'next';


export default(req:NextApiRequest, res: NextApiResponse) => {
    console.log('Done')

    res.status(200).json({ok:true})
}