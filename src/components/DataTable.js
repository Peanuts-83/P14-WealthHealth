import React from 'react'
import '../style/dataTable.css'

const DataTable = ({ data }) => {
    return (
        <div className='data-table'>
            <div className='employee-legend'>
                <div className='employee-legend-firstName' id="employee-cell1">First Name</div>
                <div className='employee-legend-lastName' id="employee-cell2">Last Name</div>
                <div className='employee-legend-startDate' id="employee-cell3">Start Date</div>
                <div className='employee-legend-department' id="employee-cell4">Department</div>
                <div className='employee-legend-birthDate' id="employee-cell5">Birth Date</div>
                <div className='employee-legend-street' id="employee-cell6">Street</div>
                <div className='employee-legend-city' id="employee-cell7">City</div>
                <div className='employee-legend-stateName' id="employee-cell8">State</div>
                <div className='employee-legend-zipCode' id="employee-cell9">Zip Code</div>
            </div>
            {data.map((employee, i) => (
                <div className='employee' id={i} key={i}>
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
            ))}
            <div className='employee-legend'></div>
        </div>
    )
}

export default DataTable