import { response } from "express"
import { PlayerModel } from "../models/player-model"
import * as PlayerRepository from "../repositories/players-repository"
import * as HttpResponse from "../utils/http-helpers"
import { StatisticsModel } from "../models/statistics-model"

export const getPlayerService = async () => {
    const data = await PlayerRepository.findAllPlayers()
    let response = null

    if (data){
        response = await HttpResponse.ok(data)
    }else{
        response = await HttpResponse.noContent()
    }
    
    return response
}

export const getPlayerByIdService = async (id: number) => {
    const data = await PlayerRepository.findPlayerById(id)
    let response = null

    if(data){
        response = HttpResponse.ok(data)
    }else{
        response = HttpResponse.noContent()
    }
    return response
}

export const createPlayerService = async (player: PlayerModel) => {
    let response = null
    
    if (player){
        await PlayerRepository.insertPlayer(player)
        response = HttpResponse.created()
    }else{
        response = HttpResponse.badRequest()
    }
    
    return response
}

export const deletePlayerService = async (id: number) => {
    let response = null
    const isDeleted = await PlayerRepository.deleteOnePlayer(id)
    
    if (isDeleted){
        response = await HttpResponse.ok({message: "deleted"})
    }else{
        response = await HttpResponse.badRequest()
    }

    return response

}

export const updatePlayerService = async (id: number, statistics: StatisticsModel) => {
    let response = null
    
    const data = await PlayerRepository.findAndModifyplayer(id, statistics)
    if (id){
        
        response = await HttpResponse.ok(data)
    }else{
        response = await HttpResponse.badRequest()
    }

    return response
}