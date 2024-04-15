class HomeController {
  index(req, res) {
    res.json({ // Formata o req.body como json
      tudoCerto: true,
    });
  }
}

export default new HomeController();
