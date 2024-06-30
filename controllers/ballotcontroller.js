const { executeQuery } = require("../database/database");
const getBallot = (req,res) => {
    res.render("ballot");
}

module.exports = {
    getBallot
};
