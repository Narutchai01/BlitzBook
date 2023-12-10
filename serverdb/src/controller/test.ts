import { Connect , Query } from '../lib/mysql';
import { Request , Response } from 'express';

const getAllComic = (req: Request , res: Response ) => {
    let query = "SELECT * FROM Comic";

    Connect()
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

export default { getAllComic };