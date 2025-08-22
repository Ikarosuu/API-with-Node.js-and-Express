import * as HttpResponse from "../utils/http-helpers"
import * as Repository from "../repositories/clubs-repository"

export const getClubService = async () => {
    const data = await Repository.findAllClubs()
    const response = HttpResponse.ok(data)
    return response
}

export const getClubsById = async (id: number) => {
    const data = await Repository.findclubById(id)
    let response = null

    if(data){
        response = HttpResponse.ok(data)
    }else{
        response = HttpResponse.noContent()
    }
    return response
}