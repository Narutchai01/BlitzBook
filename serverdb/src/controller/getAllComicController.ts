import { Connect , Query} from '../lib/mysql';
import { Request , Response } from 'express';

export const getAllComic = async (req: Request , res: Response ) => {
    let query = "SELECT * FROM Comic";

    await Connect()
    .then(connection => {
        Query(connection , query)
        .then(result => {
            return res.status(200).json({
                result
            })
        }) 
    }).catch(Error => {
        return res.status(500).json({
            message: Error.message,
            Error
        })
    })
}

