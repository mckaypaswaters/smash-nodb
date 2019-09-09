const team = []

module.exports = {
    addToTeam: (req, res) => {
        team.push(req.body)
        res.status(200).send(team)
    },
    showTeam: (req, res) => {
        res.status(200).send(team)
    },
    deleteTeam: (req, res) => {
        const index = team.findIndex(el => el.id === +req.params.id)
        team.splice(index, 1) 
        res.status(200).send(team)
    }
}