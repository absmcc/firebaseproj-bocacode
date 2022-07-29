import {dbconnect} from "./connect.js"

export function getAllCelebs(req, res){
    const db = dbconnect()
    db.collection('celebs').get()
    .then(collection =>{
        const celebs = collection.docs.map(doc => doc.data())
        res.send(celebs)
    })
    .catch(err =>res.status(500).send(err))
}   

export function addNewCeleb(req, res) {
    const db = dbconnect()
    const newCeleb = req.body
    db.collection('celebs').add(newCeleb)
        .then(doc => {
            res.status(201).send({
                success: true,
                id: doc.id
            })
        })
        .catch(err => res.status(500).send(err))
}