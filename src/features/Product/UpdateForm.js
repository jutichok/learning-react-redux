import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateProduct, deleteProduct } from "./actions";

function UpdateForm() {
  const { id } = useParams();
  const products = useSelector((state) => state.products);
  const product = products.find((product) => product.id === Number(id));

  const [name, setName] = useState(product.name);
  const [imageURL, setImageURL] = useState(product.imageURL);
  const [type, setType] = useState(product.type);

  const history = useHistory();
  const dispatch = useDispatch();

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onImageUrlChange = (event) => {
    setImageURL(event.target.value);
  };

  const onTypeChange = (event) => {
    setType(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(updateProduct({ id: product.id, name, type, imageURL }));
    history.push("/");
  };

  const onDelete = () => {
    dispatch(deleteProduct({ id: product.id }));
    history.push('/');
  };

  return (
    <>
      <h1>Update Product</h1>
      <form id="create-form" onSubmit={onSubmit}>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            id="name"
            onChange={onNameChange}
            value={name}
          />
        </div>

        <div className=" input-group">
          <label htmlFor="imageURL">Image URL</label>
          <input
            name="imageURL"
            type="text"
            id="imageURL"
            onChange={onImageUrlChange}
            value={imageURL}
          />
        </div>

        <div className=" input-group">
          <label htmlFor="type">Type</label>
          <input
            name="type"
            type="text"
            id="type"
            onChange={onTypeChange}
            value={type}
          />
        </div>

        <button type="submit">Add product</button>
        <button onClick={onDelete}>Delete product</button>

      </form>
    </>
  );
}

export default UpdateForm;
