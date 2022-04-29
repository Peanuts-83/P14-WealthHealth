import React from 'react'
import {useEmployeesContext} from '../context/employeesCtx'

const View = () => {
  const employeesCtx = useEmployeesContext()
  
  return (
    <div className='view'>
      <div className='view-top'>
        <div>
          Show
            <select name='entries'>
              <option>10</option>
              <option>25</option>
              <option>50</option>
              <option>100</option>
            </select> entries
        </div>
        <div>Search
          <input type='text'></input>
        </div>
      </div>
      <div className='table'>
        Table
      </div>
      <div className='view-bottom'>
        <div>Showing 1 to 6 of 6 entries</div>
        <div>Previous 1 Next</div>
      </div>
    </div>
  )
}

export default View