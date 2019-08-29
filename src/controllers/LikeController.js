const Dev = require("../models/Dev");

module.exports = {
  async store(req, res) {
    console.log(req.headers.user); //Acessar Usuario que vem do Header JWT
    console.log(req.params.devId); //Acessar parametro que vem atraves da rota

    const { user } = req.headers;
    const { devId } = req.params;

    const loggedDev = await Dev.findById(user); //Usuario que irá dar L ike
    const targetDev = await Dev.findById(devId); // Usuario que irá receber Like

    if (!targetDev) {
      //verifica que so usuario que vai receber existe
      return res.status(400).json({ error: "Dev not exists" });
    }

    loggedDev.likes.push(targetDev._id); //inclui no vetor o usuario que deu like

    return res.json({ ok: true });
  }
};
