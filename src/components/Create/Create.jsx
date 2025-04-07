import React, { useState } from 'react';
import './Create.css';
import Header from '../Header/Header';

const Create = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !category || !price || !image) {
      alert("Please fill all fields and choose an image.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', image);
      formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);

      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await res.json();
      const imageUrl = data.secure_url;
      console.log('Image URL:', imageUrl);

      alert("Upload successful!");

      // Reset form fields
      setName("");
      setCategory("");
      setPrice("");
      setImage(null);
      setImagePreview("");
    } catch (err) {
      console.error('Upload failed', err);
      alert("Image upload failed.");
    }
  };

  return (
    <>
      <Header />
      <div className="centerDiv">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <br />
          <input
            className="input"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="category">Category</label>
          <br />
          <input
            className="input"
            type="text"
            id="category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <br />
          <label htmlFor="price">Price</label>
          <br />
          <input
            className="input"
            type="number"
            id="price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
          <input type="file" onChange={handleImageChange} />
          <br />
          {imagePreview && (
            <img alt="Preview" width="200px" height="200px" src={imagePreview} />
          )}
          <br />
          <button className="uploadBtn" type="submit">
            Upload and Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Create;
