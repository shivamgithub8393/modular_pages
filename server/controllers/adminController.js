const Blog = require('../dal/blogDAL')

exports.getBlogs = function(req, res) {
  Blog.getAllBlogs((err, customerData) => {
      if (err) res.send("Error : " + err.message);
      res.send(customerData);
  })
}

exports.addBlog = function (req, res) {
  var newData = req.body;
  console.log(newData)
  Blog.addBlog(newData, function (err, blogData) {
    if (err) res.send("Error : " + err.message);
    else res.send("Blog inserted");
  });
};