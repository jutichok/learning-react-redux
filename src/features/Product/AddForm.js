import React, { useState } from "react";
import { addProduct } from "./actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function AddForm() {
  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [type, setType] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

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
    console.log("Name:",name + "Type:",type+ "ImageUrl:",imageURL)
    dispatch(addProduct({ name, type, imageURL }));
    history.push("/");
  };

  return (
    <>
      <h1>Add Product</h1>
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
      </form>
    </>
  );
}



export default AddForm;
