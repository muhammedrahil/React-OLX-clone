import React, { Fragment, useState,useContext } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { getStorage, ref, getDownloadURL,uploadBytes } from "firebase/storage";
import { app } from "../../firebase/config";
import {  collection,addDoc} from 'firebase/firestore/lite';
import { firebase } from "../../firebase/config";
import { AuthContext } from '../../store/firebaseContext';
import { useNavigate } from "react-router-dom";

const Create = () => {
  const { user } = useContext(AuthContext);
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate();
  const date=new Date();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storage = getStorage(app);
    let img=image.name
    const storageRef = ref(storage,`/images/${img}`);
    uploadBytes(storageRef,image).then((result) => {
      getDownloadURL(ref(storage,`/images/${img}`))
        .then((url) => {
          console.log(url);
          const products = collection(firebase, 'products');
           addDoc(products, {
            name: name,
            category: category,
            price: price,
            image:url,
            useId:user.uid,
            createdAt:date.toDateString()
          });
        });
    }).then(()=>{
      navigate("/");
    })

  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Product Name</label>
          <br />
          <input  className="input"  type="text"  value={name}  onChange={(e) => { setName(e.target.value); }}  id="fname"  name="Name"  required={true}
          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            className="input"  value={category}  type="text"  onChange={(e) => { setCategory(e.target.value); }}  id="fname" name="category" required={true}
          />
          <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input value={price} className="input" type="number" required={true} onChange={(e) => { setPrice(e.target.value); }} id="fname" name="Price" />
          <br />
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''}></img>
          <br />
          <input type="file" onChange={(e) => { setImage(e.target.files[0]); }} required={true} />
          <br />
          <button type='Submit'  className="uploadBtn">upload and Submit</button>
          </form>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
