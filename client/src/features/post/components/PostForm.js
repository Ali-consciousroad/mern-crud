import React, { useState } from 'react'

const defaultForm = {
  title: '',
  content: '',
  user: ''
}
const PostForm = ({ initial = defaultForm, submitLabel='submit', onSubmit }) => {
  
  const [form, setForm] = useState(initial)
  
  const handleOnChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  
  const handleOnSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  }
  
  return (
    <form onSubmit={handleOnSubmit}>
      <div className="form-group">
        <label className="text-muted">Title</label>
        <input
          className="form-control"
          onChange={handleOnChange}
          name='title'
          value={form.title}
          type="text"
          placeholder="Post title"
          required />
      </div>

      <div className="form-group">
        <label className="text-muted">Content</label>
        <textarea
          className="form-control"
          name='content'
          onChange={handleOnChange}
          value={form.content} type="text"
          placeholder="Post title"
          required />

      </div>

      <div className="form-group">
        <label className="text-muted">User</label>
        <input
          onChange={handleOnChange}
          name='user'
          value={form.user}
          type="text"
          className="form-control"
          placeholder="Post title"
          required />

      </div>

      <div>
        <button className="btn btn-primary">{ submitLabel }</button>
      </div>
    </form>)
}

export default PostForm;
