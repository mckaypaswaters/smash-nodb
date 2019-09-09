const axios = require('axios')
const data = require('./data')
let id = 0
let newData = [...data]

module.exports = {

    deleteChar: (req, res) => {
        const {id} = req.params
        const index = newData.findIndex(el => el.id === +id)
        newData.splice(index, 1)
        res.status(200).send(newData)
    },


    getFullChar: (req, res) => {
        for (let i = 0; i < data.length; i++){
            if(data[i].id === +req.params.id){
                const fullCharArr = {
                    "name": data[i].name,
                    "game": data[i].game,
                    "tier": data[i].tier,
                    "img": data[i].img,
                    "id": data[i].id
                }
                res.status(200).send(fullCharArr)
            }
        }
    }
}