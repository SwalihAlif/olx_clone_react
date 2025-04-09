import React, { useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { useAuth } from '../../contex/AuthContex';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase'; // Firestore db import
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const { user } = useAuth();

  const navigate = useNavigate();

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

      // Save product data to Firestore
      await addDoc(collection(db, "products"), {
        name,
        category,
        price,
        imageUrl,
        userId: user?.uid,
        username: user?.username,
        createdAt: serverTimestamp(),
      });

      alert("Product uploaded successfully!");

      // Reset form
      setName("");
      setCategory("");
      setPrice("");
      setImage(null);
      setImagePreview("");

      navigate('/');
    } catch (err) {
      console.error('Upload failed', err);
      alert("Image upload or Firestore save failed.");
    }
  };

  return (
    <>
      <Header />
      <div className="centerDiv">
        <div className='mainContent'>

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
      </div>
    </>
  );
};

export default Create;
