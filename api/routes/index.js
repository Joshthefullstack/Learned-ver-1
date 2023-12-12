module.exports = function (app) {
  app.use('/api/users', require("./userRoutes"));
  app.use('/api/courses', require("./courseRoutes"));
  app.use('/api/enrollments', require("./enrollmentRoute"));



  app.use((req, res, next) => {
    res.status(404).json({
      message: 'Invalid api endpoint',
    });
  });

}