const { DATE } = require('sequelize');
const FeleletService = require('../services/feleletService')

exports.createFeleletDiak = async (req, res, next) => {
    const { diakId, kepId, tanarId, feleletMod } = req.body

    const newFelelet = {
        diakId: diakId,
        kepId: kepId,
        tanarId: tanarId,
        kitoltesDatum: null,
        feleletMod: feleletMod,
    }

    const result = await FeleletService.createFelelet(newFelelet);

    if (result) {
      res.status(201).json(result)
    } else {
      res.status(400).send('Fail')
    }
}

exports.getDiakFeleletek = async (req,res,next) =>{
  const {id} = req.params;
  res.status(200).send(await FeleletService.getDiakFeleletek(id));
}

exports.updateFeleletDate = async (req,res,next) =>{
  const {date} = new Date;
  const {id} = req.params;
  res.status(200).send(await FeleletService.updateFeleletDate(date,id));
}
