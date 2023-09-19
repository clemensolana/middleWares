const mainController = {
  home: (req, res) => {
    return res.send('home');
  },
  prueba: (req, res) => {
    return res.send('prueba');
  },
  pruebaDos: (req, res) => {
    return res.send('prueba2');
  },
  admin: (req, res) => {
    return res.send('');
  },
};

module.exports = mainController;
