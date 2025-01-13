const adatService = require("../services/adatService");

exports.getAdatok = async (req, res, next) =>
{
    const {id} = req.params;

    res.status(200).send(await adatService.getAdatok(id));
}
