import React, { useEffect, useState } from 'react';

import Heart from '../../assets/Heart';
import './Post.css';

import { collection, getDocs } from 'firebase/firestore/lite';
import { firebase } from "../../firebase/config";

function Posts() {
  const [product, ProductSet] = useState([])

  useEffect(() => {
    async function check() {
      const dbproducts = collection(firebase, 'products');
      const allproducts = await getDocs(dbproducts);
      const products = allproducts.docs.map(doc => {
        return {
          ...doc.data(),
          id: doc.id
        }

      })
      ProductSet(products);
    }
    check();
  }, []);




  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>

        <div className="cards">
          {
            product.map((prod) => {
              console.log(prod);
              return <div className="card">
                <div className="favorite">
                  <Heart></Heart>
                </div>
                <div className="image">
                  <img src={prod.image} alt="" />
                </div>
                <div className="content">
                  <p className="rate">&#x20B9; {prod.name.slice(0,18)}</p>
                  <span className="kilometer">{prod.price}</span>
                  <p className="name"> {prod.category}</p>
                </div>
                <div className="date">
                  <span>{prod.createdAt}</span>
                </div>
              </div>
            })
          }
    
        </div>

      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
