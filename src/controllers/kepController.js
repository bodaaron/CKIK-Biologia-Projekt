const kepService = require("../services/kepService");

exports.getKepek = async (req, res, next) =>
{
    res.status(200).send(await kepService.getKepek());
}
