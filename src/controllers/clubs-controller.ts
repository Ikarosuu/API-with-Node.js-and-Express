import { Request, Response } from "express"
import * as service from "../services/clubs-service"

export const getClubs = async (req: Request, res: Response) => {
    const response = await service.getClubService()
    res.status(response.statusCode).json(response.body)
}

export const getClubById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const httpResponse = await service.getClubsById(id)
    res.status(httpResponse.statusCode).json(httpResponse.body)
}