import express from "express"
import dotenv from "dotenv"
dotenv.config()

const app = express()
const port = process.env.PORT;


app.get("/", (request, response) => {
    response.send("I love CRYPTO!")
})


app.listen(port, () => {
    console.log(`Running on port: ${port}`)
})




