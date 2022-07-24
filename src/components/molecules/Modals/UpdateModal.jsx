
import React from "react";
import Button from "../../atoms/buttons/Button";
import UpdateArticleForm from "../Forms/UpdateArticleForm";

const UpdateModal = ({ handleOpenModal,article, title }) => {

  return (
    <>
      <div className='c-modal' onClick={handleOpenModal} />
      <div className='c-modal__centered'>
        <div className='c-modal__modal'>
          <div className='c-modal__modalHeader'>
            <h5 className='c-modal__heading'>{title}</h5>
          </div>
          <button className='c-modal__btnClose' onClick={handleOpenModal}>
            x
          </button>
          <div className='c-modal__modalContent'>
            <UpdateArticleForm handleOpenModal={handleOpenModal} article={article}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateModal;