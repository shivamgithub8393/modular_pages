const sql = require("./mysqlconnect");

var Blog = function (Blog) {
  this.blogId = Blog.blogId;
  this.blogTitle = Blog.blogTitle;
  this.blogContent = Blog.blogContent;
};

Blog.getAllBlogs = function (result) {
  sql.query("SELECT * FROM blog", function (err, res) {
    if(err){
      result(err, null)
    }else{
      result(null, res)
    }
  })
}

Blog.addBlog = function (newBlog, result){
  sql.query("INSERT INTO blog set ?", newBlog, function (err, res) {
    if (err) {
      result(err, null);
    } else {
      result(null, res.insertId);
    }
  });
} 

module.exports = Blog;
