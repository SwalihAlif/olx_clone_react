import React, { useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { useAuth } from '../../contex/AuthContex';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

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
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // === Validation ===
    if (!name.trim()) {
      toast.error("Product name is required.");
      return;
    }

    if (!category.trim()) {
      toast.error("Category is required.");
      return;
    }

    if (!price) {
      toast.error("Price is required.");
      return;
    }

    const priceValue = parseFloat(price);
    if (isNaN(priceValue) || priceValue <= 0) {
      toast.error("Price must be a positive number.");
      return;
    }

    if (!image) {
      toast.error("Please upload an image.");
      return;
    }

    const validTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (!validTypes.includes(image.type)) {
      toast.error("Only JPG, JPEG, and PNG files are allowed.");
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

      await addDoc(collection(db, "products"), {
        name,
        category,
        price: priceValue,
        imageUrl,
        userId: user?.uid,
        username: user?.username,
        phone: user?.phone,
        createdAt: serverTimestamp(),
      });

      toast.success("Product uploaded successfully!");

      // Reset form
      setName("");
      setCategory("");
      setPrice("");
      setImage(null);
      setImagePreview("");

      navigate('/');
    } catch (err) {
      console.error('Upload failed', err);
      toast.error("Image upload or Firestore save failed.");
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

