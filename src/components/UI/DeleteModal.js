import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

import deleteModalStyles from "./DeleteModal.module.css";

const DeleteModal = () => {
  return (
    <div>
      <header>
        <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
        <h2>Are you sure?</h2>
      </header>
      <p>Do you really want to delete this?</p>
      <button>Cancel</button>
      <button>Delete</button>
    </div>
  );
};

export default DeleteModal;
