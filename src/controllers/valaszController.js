const valaszService = require('../services/valaszService')

exports.createValasz= async (req, res, next) => {
  const { feleletId, valasz  } = req.body

  const newValasz = {
    feleletId: feleletId,
    valasz: valasz,
    elfogadotte: null,
  }
  
  const result = await valaszService.createValasz(newValasz);

  if (result) {
    res.status(201).json(result)
  } else {
    res.status(400).send('Fail')
  }
}

exports.getValaszok = async (req, res, next) =>{
  const {id} = req.params;
  res.status(200).send(await valaszService.getValaszok(id));
}

exports.kijavitValasz = async (req,res,next) =>{
  const {id,elfogadotte} = req.body;
  res.status(200).send(await valaszService.kijavitValasz(id,elfogadotte));
}
  