import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { PostContext } from '../../contex/PostContext';
import './View.css';

function View() {
  const { productId } = useParams();
  const { postDetails } = useContext(PostContext);
  const [product, setProduct] = useState(postDetails || null); // Use context first

  useEffect(() => {
    // If no context data (e.g. page refreshed), fetch from Firestore
    if (!postDetails) {
      const fetchProduct = async () => {
        const docRef = doc(db, 'products', productId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProduct(docSnap.data());
        } else {
          console.log('No such product!');
        }
      };

      fetchProduct();
    }
  }, [postDetails, productId]);

  if (!product) return <p style={{ textAlign: 'center' }}>Loading...</p>;

  const {
    imageUrl,
    price,
    name,
    category,
    createdAt,
    username,
    phone
  } = product;

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={imageUrl} alt={name} />
      </div>

      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {price}</p>
          <span>{name}</span>
          <p>{category}</p>
          <span>{createdAt?.toDate().toDateString()}</span>
        </div>

        <div className="contactDetails">
          <p>Seller details</p>
          <p>{username || 'No name'}</p>
          <p>{phone || 'No phone'}</p>
        </div>
      </div>
    </div>
  );
}

export default View;
