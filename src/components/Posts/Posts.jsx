import React, {useContext, useEffect, useState} from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import Heart from '../../assets/Heart';
import './Posts.css';
import { useNavigate } from 'react-router-dom';
import { PostContext } from '../../contex/PostContext';

function Posts() {

  const [products, setProducts] = useState([]);
  const { setPostDetails } = useContext(PostContext) // this is Access setter
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const snapshot = await getDocs(collection(db, 'products'));
      const productsData = snapshot.docs.map(doc => ( {id: doc.id, ...doc.data() }));
      setProducts(productsData);
    };

    fetchProducts();
  }, []);

  const handleCardClick = (product) => {
    setPostDetails(product); // this is for storing data in the context
    navigate(`/view/${product.id}`);
  }

  return (
    <div className="postParentDiv">
      {/* Quick Menu */}
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
        </div>
        <div className="cards">
          {products.map(product => (

            <div className="card" key={product.id} onClick={() => handleCardClick(product)}>
            <div className="favorite">
              <Heart />
            </div>
            <div className="image">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer">{product.category}</span>
              <p className="name">{product.name}</p>
            </div>
            <div className="date">
            <span>{product.createdAt?.toDate().toDateString() || 'No date'}</span>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Posts;
