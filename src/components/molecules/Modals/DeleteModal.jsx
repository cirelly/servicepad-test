
import React from "react";
import { useDeleteArticle, useGetArticles } from "../../../hooks/useArticles";
import Button from "../../atoms/buttons/Button";

const DeleteModal = ({ handleOpenModal,article, labelOkButton, title }) => {
    const {mutateAsync} = useDeleteArticle();
    const {refetch} = useGetArticles();
    const handleDelete = () =>{
        mutateAsync(article)
        refetch();
    }
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
            Are you sure you want to delete the item?
          </div>
          <div className='c-modal__modalActions'>
            <div className='c-modal__actionsContainer'>
              <Button textButton onClick={() => {handleDelete(); handleOpenModal();}}>
                {labelOkButton}
              </Button>
              <Button
                textButton
                deleteColor
                onClick={handleOpenModal}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;