import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Backend } from "../../utils/utils";

import "./AddCreator.css";

const AddCreator = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");

  const handleCancel = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newCreatorData = {
      name: name,
      description: description,
      url: link,
      imageURL: imageUrl,
    };
    const result = await Backend.post("/rest/v1/creators", newCreatorData);

    navigate("/");
    setName("");
    setImageUrl("");
    setDescription("");
    setLink("");
  };

  return (
    <div className="form-container">
      <h2>Create New Content Creator</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Image URL: </label>
          <input
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description: </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Link: </label>
          <input
            type="url"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="cancel" onClick={handleCancel}>
            Cancel
          </button>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCreator;
