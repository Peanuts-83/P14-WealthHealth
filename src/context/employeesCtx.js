import { createContext, useContext, useEffect, useState } from "react";
import { employees } from '../utils/defaultEmployees'

// Context
export const EmployeesCtx = createContext()

// Initial State
const initialState = JSON.parse(localStorage.getItem('WH_employees')) || employees

// Provider
function EmployeeProvider(props) {
    const [employees, setEmployees] = useState(initialState)
    const [initForm, setInitForm] = useState(false)

    // SORT table management
    const [sortBy, setSortBy] = useState(null)
    const [sortWay, setSortWay] = useState(null)
    const setSorting = { setSortBy, setSortWay }
    const sortInfo = { sortBy, sortWay }

    // INIT form components
    const [init, setInit] = useState(false)
    const initComponent = { init, setInit }

    useEffect(() => {
        localStorage.setItem('WH_employees', JSON.stringify(employees))
    }, [employees])

    function add(employee) {
        setEmployees([...employees, employee])
    }

    function removeByIndex(index) {
        const copy = [...employees]
        copy.splice(index, 1)
        setEmployees(copy)
    }

    function removeByName(name) {
        const copy = [...employees]
        let indexes = copy
            .map((employee, i) => {
                if (employee.firstName.includes(name) || employee.lastName.includes(name)) {
                    return i
                }
                return null
            })
            .filter(elt => elt !== null)
        console.log('INDEXES -', indexes);
        indexes.forEach(index => removeByIndex(index))
    }

    const employeesData = {
        employees,
        initForm,
        setInitForm,
        setSorting,
        sortInfo,
        initComponent,
        add,
        removeByIndex,
        removeByName
    }
    return (<EmployeesCtx.Provider value={employeesData} {...props} />)
}

// Custom Hook Context
function useEmployeesContext() {
    return useContext(EmployeesCtx)
}

// Export provider & custom hook ctx
export { EmployeeProvider, useEmployeesContext }
