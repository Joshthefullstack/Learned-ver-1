module.exports = function (app) {
  app.use('/api/users', require("./userRoutes"));



  app.use((req, res, next) => {
    res.status(404).json({
      message: 'Invalid api endpoint',
    });
  });

}