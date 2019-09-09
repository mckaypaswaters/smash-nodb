winNum = 0
loseNum = 0

statsArr = []

module.exports = {
    getWinNum: (req, res) => {
        res.status(200).send(winNum)
    },
    getLossNum: (req, res) => {
        res.status(200).send(loseNum)
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
    addStat1: (req, res) => {
        // http://localhost:5000/api/stats/?thing=search
        // req.query = search
        let {input} = req.body
        statsArr.push(input)
        res.status(200).send(statsArr)
    }
}