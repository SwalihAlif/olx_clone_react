import React from 'react';
import './Create.css';
import Header from '../Header/Header';

const Create = () => {
  return (
    <>
      <Header />
      <div className="centerDiv">
        <form>
          <label htmlFor="name">Name</label>
          <br />
          <input className="input" type="text" id="name" name="name" />
          <br />
          <label htmlFor="category">Category</label>
          <br />
          <input className="input" type="text" id="category" name="category" />
          <br />
          <label htmlFor="price">Price</label>
          <br />
          <input className="input" type="number" id="price" name="price" />
          <br />
        </form>
        <br />
        <img alt="Posts" width="200px" height="200px" src="" />
        <form>
          <br />
          <input type="file" />
          <br />
          <button className="uploadBtn">Upload and Submit</button>
        </form>
      </div>
    </>
  );
};

export default Create;
