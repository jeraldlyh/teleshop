import type { NextApiRequest, NextApiResponse } from "next"
import Database from "@/database/actions"
import _ from "lodash"


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { query: { id }, method, body } = req


    const data = await Database.getCategoryByShop(id)
    const category = data?.toJSON()
    console.log(category)
    res.status(200).send(data)
}