import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimesCircle,
  faCheckCircle
} from "@fortawesome/free-regular-svg-icons";

const Like = props => {
  const addLike = (id, idUser) => {
    fetch(
      `https://chitter-backend-api-v2.herokuapp.com/peeps/${id}/likes/${idUser}`,
      {
        method: "Put",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token token=" + sessionStorage.getItem("session_key")
        }
      }
    )
      .then(response => response.json())
      .catch(error => {
        console.error("Errorcito:", error);
      });
  };

  const handleLike = () => {
    addLike(props.peepID, props.currentUser);
  };

  const handleUnLike = () => {
    removeLike(props.peepID, props.currentUser);
  };

  const removeLike = (id, idUser) => {
    fetch(
      `https://chitter-backend-api-v2.herokuapp.com/peeps/${id}/likes/${idUser}`,
      {
        method: "Delete",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token token=" + sessionStorage.getItem("session_key")
        }
      }
    )
      .then(response => response.json())
      .catch(error => {
        console.error("Errorcito:", error);
      });
  };

  return (
    <div>
      <FontAwesomeIcon
        icon={faCheckCircle}
        onClick={handleLike}
        style={{ cursor: "pointer" }}
      />
      <h5>{props.likes.length}</h5>
      <br />
      <FontAwesomeIcon
        icon={faTimesCircle}
        onClick={handleUnLike}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default Like;
