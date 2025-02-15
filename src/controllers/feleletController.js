const FeleletService = require('../services/feleletService')

exports.createFeleletDiak = async (req, res, next) => {
    const { diakId, kepId, tanarId } = req.body

    const newFelelet = {
        diakId: diakId,
        kepId: kepId,
        tanarId: tanarId,
        kitoltesDatum: null,
        helyesValaszok: 0,
    }

    const result = await FeleletService.createFelelet(newFelelet);

    if (result) {
      res.status(201).json(result)
    } else {
      res.status(400).send('Fail')
    }
}