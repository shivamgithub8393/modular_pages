const adminController = require("../controllers/adminController");

module.exports = function (app) {
  //Admin HTTP request Mapping
  app
    .route("/blog")
    .get(adminController.getBlogs)
    .post(adminController.addBlog);

  
};
