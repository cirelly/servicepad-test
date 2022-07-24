import React from 'react'
import useTable from '../../../hooks/useTable';
import Button from '../../atoms/buttons/Button';
import TableFooter from './TableFooter';

const Table = ({data, rowsPerPage}) => {
  const [page, setPage] = React.useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
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
                <td className=''><Button textButton={true}>Edit</Button> <Button textButton={true} deleteColor={true}>Delete</Button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <hr className='c-divider' />
        <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
      </>
  )
}

export default Table