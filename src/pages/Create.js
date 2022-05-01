import '../style/create.css'
import React, { useRef, useState } from 'react'
import Datepicker from '../components/Datepicker'
import ModalConfirm from '../components/ModalConfirm'
import { SimpleSelectMenu } from 'simple-select-menu'
import { states } from '../utils/states'
import { useEmployeesContext } from '../context/employeesCtx'

/**
 * It's a form that allows the user to create a new employee
 * @returns A form with a few inputs and a submit button.
 */
const Create = () => {
  const departmentOptions = ["Sales", "Marketing", "Engineering", "Human Resources", "Legal"]

  // DISPLAY MODAL when new data is stored
  const [dataStored, setDataStored] = useState(false)

  // SET component back to default once form is sent
  const employeesCtx = useEmployeesContext()
  const initComponent = employeesCtx.initComponent
  const {setInit} = initComponent

  // FORM values
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [birthDate, setBirthDate] = useState(new Date())
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [stateName, setStateName] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [department, setDepartment] = useState('')

  // ERRORS refs
  const errFirstName = useRef(null)
  const errLastName = useRef(null)
  const errStartDate = useRef(null)
  const errBirthDate = useRef(null)
  const errStreet = useRef(null)
  const errCity = useRef(null)
  const errStateName = useRef(null)
  const errZipCode = useRef(null)
  const errDepartment = useRef(null)

  // CHECK FORM values & RECORD new employee
  function handleSubmit(e) {
    e.preventDefault()
    const address = { street, city, stateName, zipCode }
    const res = { firstName, lastName, birthDate, startDate, address, department }
    let errorCounter = 0

    // VALIDITY check
    if (firstName.length < 2) {
      errFirstName.current.innerText = `First name should be at least 2 characters long.`
      errorCounter++
    } else {
      errFirstName.current.innerText = ` `
    }

    if (lastName.length < 2) {
      errLastName.current.innerText = `Last name should be at least 2 characters long.`
      errorCounter++
    } else {
      errLastName.current.innerText = ` `
    }

    const age = new Date().getFullYear() - new Date(birthDate).getFullYear()
    if (age < 17) {
      errBirthDate.current.innerText = `Employee's age is ${age}. It should be at least 18.`
      errorCounter++
    } else {
      errBirthDate.current.innerText = ` `
    }

    if (city.length < 2) {
      errCity.current.innerText = `City is required.`
      errorCounter++
    } else {
      errCity.current.innerText = ` `
    }

    if (stateName.length < 2) {
      errStateName.current.innerText = `Please choose a State.`
      errorCounter++
    } else {
      errStateName.current.innerText = ` `
    }

    if (typeof zipCode !== 'number' && zipCode.toString().length !== 5) {
      errZipCode.current.innerText = `Correct Zip Code is required.`
      errorCounter++
    } else {
      errZipCode.current.innerText = ` `
    }

    if (department.length < 2) {
      errDepartment.current.innerText = `Please choose a department.`
      errorCounter++
    } else {
      errDepartment.current.innerText = ` `
    }

    // DISPLAY ERRORS OR SAVE DATA //
    if (errorCounter > 0) {
      return
    } else {
      // SAVE datas to Context Store
      employeesCtx.add(res)
      employeesCtx.setInitForm(true)

      // RESET all form
      setFirstName('')
      setLastName('')
      setBirthDate('')
      setStartDate('')
      setStreet('')
      setCity('')
      setStateName('')
      setZipCode('')
      setDepartment('')

      // SET menu components back to default
      setInit(true)

      // DISPLAY confirmation modal
      setDataStored(true)
    }
  }

  return (
    <div>
      {dataStored && <ModalConfirm show={setDataStored} />}
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-parts'>

          <div className='form-part-left'>
            <div className='form-part-pair'>
              <label htmlFor='firstName'>First Name</label>
              <input name='firstName' type='text' placeholder=' - ' value={firstName} onChange={e => setFirstName(e.target.value)} />
            </div>
            <div className='error' ref={errFirstName}> </div>
            <div className='form-part-pair'>
              <label htmlFor='lastName'>Last Name</label>
              <input name='lastName' type='text' placeholder=' - ' value={lastName} onChange={e => setLastName(e.target.value)} />
            </div>
            <div className='error' ref={errLastName}> </div>
            <div className='form-part-pair'>
              <Datepicker label="Birth date" setvalue={setBirthDate} init={initComponent} />
            </div>
            <div className='error' ref={errBirthDate}> </div>
            <div className='form-part-pair'>
              <Datepicker label="Start date" setvalue={setStartDate} init={initComponent} />
            </div>
            <div className='error' ref={errStartDate}> </div>
          </div>

          <div className='form-part-right'>
            <fieldset className='legend'>
              <legend>Address</legend>
              <div className='form-part-pair'>
                <label htmlFor='street'>Street</label>
                <input name='street' type='text' value={street} placeholder=' - ' onChange={e => setStreet(e.target.value)} />
              </div>
              <div className='error' ref={errStreet}> </div>
              <div className='form-part-pair'>
                <label htmlFor='city'>City</label>
                <input name='city' type='text' value={city} placeholder=' - ' onChange={e => setCity(e.target.value)} />
              </div>
              <div className='error' ref={errCity}> </div>
              <div className='form-part-pair'>
                <SimpleSelectMenu label="State" options={states} value={stateName} placeholder="Please choose a State" log={false} setvalue={setStateName} initComponent={initComponent} />
              </div>
              <div className='error' ref={errStateName}> </div>
              <div className='form-part-pair'>
                <label htmlFor='code'>Zip code</label>
                <input name='code' type='text' value={zipCode} placeholder=' - ' onChange={e => setZipCode(e.target.value)} />
              </div>
              <div className='error' ref={errZipCode}> </div>
            </fieldset>
          </div>

        </div>

        <div className='department form-part-pair'>
          <SimpleSelectMenu label="Department" options={departmentOptions} value={department} placeholder="Please choose a Department" log={false} setvalue={setDepartment} initComponent={initComponent} />
        </div>
        <div className='error errDepartment' ref={errDepartment}> </div>
        <input className='save-btn' type='submit' value='Save' />
      </form>
    </div>
  )
}

export default Create