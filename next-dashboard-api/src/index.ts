import express from 'express'
import { config } from 'dotenv'
config()

const app = express()
const PORT = process.env.PORT || 3001

async function  main() {
    try{
        app.listen(PORT, () => console.log(`Running on Port ${PORT}`))
        console.log(`Running in ${process.env.ENVIORNMENT} mode.`)
    } catch (err) {
        console.log(err)
    }
}

main()