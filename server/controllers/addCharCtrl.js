const axios = require('axios')
const data = require('./data')

module.exports = {
    
    dropdownList: (req, res) => {
        
    },
    getCharImg: (req, res) => {
        for (let i = 0; i < data.length; i++){
            if(data[i].id === +req.params.id){
                const charArr = {
                    "name": data[i].name,
                    "img": data[i].img
                }
                res.status(200).send(charArr)
            }
        }
    }
}