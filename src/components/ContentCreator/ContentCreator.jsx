import React from "react";

import { useNavigate } from "react-router-dom";
import { Backend } from "../../utils/utils";

import "./ContentCreator.css";

const ContentCreator = ({ id, name, url, description, image }) => {
  const navigate = useNavigate();

  const handleEdit = async () => {
    const state = {
      id: id,
      name: name,
      url: url,
      description: description,
      image: image,
    };
    navigate("/edit", { state });
  };

  const handleDelete = async () => {
    Backend.delete(`/rest/v1/creators?id=eq.${id}`);
    navigate("/");
  };

  const handleBack = () => {
    navigate("/");
  }

  return (
    <div className="card">
      <div className="card-title">
        <img className="image-body" src={image} alt={name} />
        <h2 className="title-text">{name}</h2>
      </div>
      <div className="card-section">
        <span className="label">Description:</span>
        <p className="desc-body">{description}</p>
      </div>
      <div className="card-section">
        <a
          className="link-body"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          View their work
        </a>
      </div>
      <div className="card-footer">
        <button type="back" onClick={handleBack}>Back</button>
        <button type="edit" onClick={handleEdit}>
          Edit
        </button>
        <button type="delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ContentCreator;
