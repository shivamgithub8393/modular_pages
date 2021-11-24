import axios from "axios";
import React, { useState } from "react";

function AddBlog() {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [message, setMessage] = useState("");

  const addBlog = (e) => {
    e.preventDefault();
    setMessage("");
    let newBlog = { blogTitle, blogContent };
    axios
      .post("http://localhost:8000/blog", newBlog)
      .then((res) => setMessage("Blog added.."))
      .catch((err) => console.log({ Error: err }));
  };
  return (
    <div className="container mt-5">
      <p className="h2 text-center">Add Blog</p>
      <form onSubmit={addBlog}>
        <div className="form-group row">
          <label for="staticEmail" className="col-sm-2 col-form-label">
            Title
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="title"
              name="blogTitle"
              placeholder="Title"
              onChange={(e) => setBlogTitle(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="inputPassword" className="col-sm-2 col-form-label">
            Content
          </label>
          <div className="col-sm-10">
            <textarea
              type="text"
              className="form-control"
              id="content"
              placeholder="write here"
              rows="10"
              onChange={(e) => setBlogContent(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-2 col-form-label"></div>
          <button
            type="submit"
            className="btn btn-primary col-sm-2 text-center"
          >
            Add Blog
          </button>
        </div>
        {message && <div class="alert alert-success" role="alert">{message}</div>}
      </form>
    </div>
  );
}

export default AddBlog;
