import { noContent, ok } from "../utils/http-helpers"

export const getPlayerService = async () => {
    const data = { player: "Ronaldo" }
    
    let response = null
    if (data){
        response = await ok(data)
    }else{
        response = await noContent()
    }
    
    return response
}