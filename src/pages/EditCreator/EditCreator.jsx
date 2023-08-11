import React, { useState } from "react";

import { useNavigate, useLocation } from "react-router-dom";

import { Backend } from "../../utils/utils";

import "./EditCreator.css";

const EditCreator = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const { id, name, url, description, image } = location.state;

  const [m_name, setName] = useState(name);
  const [m_imageUrl, setImageUrl] = useState(image);
  const [m_description, setDescription] = useState(description);
  const [m_link, setLink] = useState(url);

  const handleCancel = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const editedCreatorData = {
      name: m_name,
      description: m_description,
      url: m_link,
      imageURL: m_imageUrl,
    };
    const result = await Backend.patch(`/rest/v1/creators?id=eq.${id}`, editedCreatorData);

    navigate("/");
  };

  return (
    <div className="form-container">
      <h2>Create New Content Creator</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={m_name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Image URL: </label>
          <input
            type="url"
            value={m_imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description: </label>
          <textarea
            value={m_description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Link: </label>
          <input
            type="url"
            value={m_link}
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

export default EditCreator;