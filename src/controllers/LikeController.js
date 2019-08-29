const Dev = require("../models/Dev");

module.exports = {
  store(req, res) {
    console.log(req.params.devId); //Acessar parametro que vem atraves da rota
    console.log(req.headers.user); //Acessar Usuario que vem do Header JWT

    return res.json({ ok: true });
  }
};
