import React from 'react'
import '../style/dataTable.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import { useEmployeesContext } from '../context/employeesCtx'


/**
 * It renders a table of employees, with a header row that allows the user to sort the table by
 * clicking on the header
 * @param {Array} data - List of employees.
 *   @param {Object} employee - Employee props.
 * @param {Number} start - Beginning number of the displayed employees.
 * @returns A table of employees
 */
const DataTable = ({ data, start }) => {
    // LEGENDS
    const columns = {
        'firstName': 'First Name',
        'lastName': 'Last Name',
        'startDate': 'Start Date',
        'department': 'Department',
        'birthDate': 'Birth Date',
        'street': 'Street',
        'city': 'City',
        'stateName': 'State',
        'zipCode': 'Zip Code'
    }

    // SORT global variable management
    const employeesCtx = useEmployeesContext()
    const { setSortBy, setSortWay } = employeesCtx.setSorting
    const { sortBy, sortWay } = employeesCtx.sortInfo

    // SORT function - toggle WAY up / down / null
    function toggleSort(e) {
        let target
        if (e.target.classList.contains('employee-legend-col')) {
            target = e.target.querySelector('svg')
        } else {
            if (e.target.classList.contains('svg-inline--fa')) {
                target = e.target
            } else {
                target = e.target.parentNode
            }
        }
        const sortColumn = target.id.split('sort-')[1]
        setSortBy(sortColumn)
        if (sortWay === null) {
            setSortWay('up')
        } else if (sortWay === 'up') {
            setSortWay('down')
        } else {
            setSortWay(null)
            setSortBy(null)
        }
    }

    return (
        <div className='data-table'>
            <div className='employee-legend'>
                <div className='employee-legend-num'>Id</div>
                {Object.keys(columns).map((colName, i) => (
                    <div className={`employee-legend-col employee-legend-${colName}`} id={`employee-cell${i + 1}`} key={i} onClick={toggleSort} >
                        {columns[colName] + ' '}
                        {sortBy !== colName || sortBy === null ? (
                            <FontAwesomeIcon id={`sort-${colName}`} className='employee-legend-fa' icon="fa-sort" />
                        ) :
                            sortWay === 'up' ? (
                                <FontAwesomeIcon id={`sort-${colName}`} className='employee-legend-fa' icon="fa-sort-up" onClick={toggleSort} />
                            ) : (
                                <FontAwesomeIcon id={`sort-${colName}`} className='employee-legend-fa' icon="fa-sort-down" onClick={toggleSort} />
                            )
                        }
                    </div>
                ))}
            </div>
            {data.length === 0 ? (
                <p>- No result to display -</p>
            ) : (
                data.map((employee, i) => (
                    <div className='employee' id={i} key={i}>
                        <div className='employee-num' id="employee-cell0">#{start + i + 1}</div>
                        <div className='employee-firstName' id="employee-cell1">{employee.firstName}</div>
                        <div className='employee-lastName' id="employee-cell2">{employee.lastName}</div>
                        <div className='employee-startDate' id="employee-cell3">{employee.startDate}</div>
                        <div className='employee-department' id="employee-cell4">{employee.department[0].toUpperCase() + employee.department.slice(1)}</div>
                        <div className='employee-birthDate' id="employee-cell5">{employee.birthDate}</div>
                        <div className='employee-street' id="employee-cell6">{employee.address.street}</div>
                        <div className='employee-city' id="employee-cell7">{employee.address.city}</div>
                        <div className='employee-stateName' id="employee-cell8">{employee.address.stateName}</div>
                        <div className='employee-zipCode' id="employee-cell9">{employee.address.zipCode}</div>
                    </div>
                ))
            )
            }
            <div className='employee-legend employee-legend-bottom'></div>
        </div>
    )
}

export default DataTable

DataTable.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.object.isRequired
    ),
    start: PropTypes.number.isRequired,
}