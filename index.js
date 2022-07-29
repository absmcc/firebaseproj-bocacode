import express from "express"

import { addNewCeleb } from "./src/functions.js"
import { getAllCelebs } from "./src/functions.js"

const app = express()
const PORT = 3001
app.use(express.json())

app.get('/celebes', getAllCelebs)
app.post('/celebs', addNewCeleb)


app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})
