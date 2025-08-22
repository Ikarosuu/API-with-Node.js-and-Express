import express, { json } from "express"
import router from "./routes"
import cors from "cors"

function createApp(){
    const app = express()

    app.use(json())
    app.use("/api", router)
    app.use(cors())

    const corsOptions = {
        origin: ["https://www.exemplo.com/", "http://www.exemplo2.com"],
        methods: ["GET"],
    }

    app.use(cors(corsOptions))

    return app
}

export default createApp