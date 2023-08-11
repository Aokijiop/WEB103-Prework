import React, { useEffect, useState } from "react";

import ContentCreatorPreview from "../../components/ContentCreatorPreview/ContentCreatorPreview";
import "./ShowCreators.css";

import { useNavigate } from "react-router-dom";

import { Backend } from "../../utils/utils";

const ShowCreators = () => {
  const navigate = useNavigate();
  const [creatorsArr, setCreatorsArr] = useState();

  const handleAdd = () => {
    navigate('/add');
  };

  useEffect(() => {
    const getCreators = async () => {
      const result = await Backend.get("/rest/v1/creators");
      console.log(result.data);
      setCreatorsArr(result.data);
    };
    getCreators();
  }, []);

  return (
    <div className="outer">
      <div className="header">
        <h1>All Content Creators</h1>
        <button type="add" onClick={handleAdd}>Add creator</button>
      </div>
      {creatorsArr ? (
        <div className="grid-container">
          {creatorsArr?.map((creator) => (
            <ContentCreatorPreview
              id={creator.id}
              name={creator.name}
              url={creator.url}
              description={creator.description}
              image={creator.imageURL}
            />
          ))}
        </div>
      ) : (
        <h2>No creators yet. Add some!</h2>
      )}
    </div>
  );
};

export default ShowCreators;
