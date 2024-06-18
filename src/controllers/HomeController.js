class HomeController {
  index(req, res) {
    res.status(200).json({
      hello: 'world',
    });
  }
}

export default new HomeController();
