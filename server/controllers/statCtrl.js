let winNum = 0
let loseNum = 0
let stat1Num = 0
let stat2Num = 0

statsArr = []

module.exports = {
    getWinNum: (req, res) => {
        res.status(200).send(winNum)
    },
    getLossNum: (req, res) => {
        res.status(200).send(loseNum)
    },
    getStat1Num: (req, res) => {
        res.status(200).send(stat1Num)
    },
    getStat2Num: (req, res) => {
        res.status(200).send(stat2Num)
    },
    updateWins: (req, res) => {
        let {wins} = req.params
        winNum = wins
        res.status(200).send(winNum)
    },
    updateLosses: (req, res) => {
        let {losses} = req.params
        loseNum = losses
        res.status(200).send(loseNum)
    },
    updateStat1: (req, res) => {
        let {stat1} = req.params
        console.log(stat1)
        stat1Num = stat1
        res.status(200).send(stat1Num)
    },
    updateStat2: (req, res) => {
        let {stat2} = req.params
        stat2Num = stat2
        res.status(200).send(stat2Num)
    }
    
}