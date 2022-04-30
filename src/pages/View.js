import React from 'react'
import DataTable from '../components/DataTable'
import '../style/view.css'
import { useEmployeesContext } from '../context/employeesCtx'
import { SimpleSelectMenu } from 'simple-select-menu'


const View = () => {
  const employeesCtx = useEmployeesContext()

  return (
    <div className='view'>
      <div className='view-top'>
        <div className='view-top-select'>
          Show
          <select name='entries'>
            <option>10</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </select> entries
        </div>
        <div className='view-top-search'>Search
          <input type='text'></input>
        </div>

      </div>
      
      <DataTable data={employeesCtx.employees} />
      <div className='view-bottom'>
        <div>Showing 1 to 6 of 6 entries</div>
        <div>Previous 1 Next</div>
      </div>
    </div>
  )
}

export default View