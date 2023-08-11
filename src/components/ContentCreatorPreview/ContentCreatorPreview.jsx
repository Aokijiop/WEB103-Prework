import React from "react";

import { useNavigate } from "react-router-dom";

import "./ContentCreatorPreview.css";

const ContentCreatorPreview = ({ id, name, url, description, image }) => {
  const navigate = useNavigate();

  const viewCreator = () => {
    const state = {
      id: id,
      name: name,
      url: url,
      description: description,
      image: image,
    };
    navigate("/view", { state });
  };

  return (
    <div className="preview-card">
      <div className="preview-card-title" onClick={viewCreator}>
        <img className="preview-image-body" src={image} alt={name} />
        <h2 className="preview-title-text">{name}</h2>
      </div>
      <div>
        <h3>Description</h3>
        <p>{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          View their work
        </a>
      </div>
    </div>
  );
};

export default ContentCreatorPreview;
