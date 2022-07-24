import React from 'react'
import useTable from '../../../hooks/useTable';
import Button from '../../atoms/buttons/Button';
import TableFooter from './TableFooter';
import UpdateModal from '../../molecules/Modals/UpdateModal'
import DeleteModal from '../Modals/DeleteModal';

const Table = ({data, rowsPerPage}) => {
  const [page, setPage] = React.useState(1);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpenDelete, setIsOpenDelete] = React.useState(false);
  const [article, setArticle] = React.useState();


  const { slice, range } = useTable(data, page, rowsPerPage);

  const handleOpenModal = () => {
    setIsOpen(prev=> !prev);
    setIsOpenDelete(false);
  }
  const handleOpenDeleteModal = () => {
    setIsOpen(false);
    setIsOpenDelete(prev=> !prev);
  }

  return (
    <>
      <table className='c-table'>
          <thead className=''>
            <tr>
            <th className='' >Author Name</th>
            <th className='' >Title</th>
            <th className='' >Content</th>
            <th className='' >Date</th>
            <th className=''></th>
            </tr>
          </thead>
          <tbody>
            {slice?.map((el) => (
              <tr className='' key={el.id}>
                <td className=''>{el.author}</td>
                <td className=''>{el.title}</td>
                <td className=''>{el.content}</td>
                <td className=''>{el.date}</td>
                <td className=''>
                  <Button textButton={true} onClick={() => {setArticle(el);handleOpenModal()}}>Edit</Button>
                  <Button textButton={true} onClick={() => {setArticle(el);handleOpenDeleteModal()}} deleteColor={true}>Delete</Button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <hr className='c-divider' />
        <TableFooter range={range} slice={slice} setPage={setPage} page={page} />

        {isOpen &&
        <UpdateModal title='Update Article' article={article} labelOkButton='Yes, update' handleOpenModal={handleOpenModal} />}
        {isOpenDelete &&
        <DeleteModal title='Delete Article' article={article} labelOkButton='Yes, delete' handleOpenModal={handleOpenDeleteModal}/>}
      </>
  )
}

export default Table