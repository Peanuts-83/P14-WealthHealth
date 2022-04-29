import '../style/create.css'
import React, { useEffect, useRef, useState } from 'react'
import { SimpleSelectMenu } from 'simple-select-menu'
import Datepicker from '../components/Datepicker'
import { states } from '../utils/states'
import {useEmployeesContext} from '../context/employeesCtx'

const Create = () => {
  const employeesCtx = useEmployeesContext()
  const departmentOptions = ["Sales", "Marketing", "Engineering", "Human Resources", "Legal"]

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

  // Check form values & record new employee
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

    if (errorCounter > 0) {
      console.log('Errors to correct!')
      return
    } else {
      console.log(`Employee data stored : ${JSON.stringify(res, null, 4)}`);
      // TODO: reset form + modal confirmation
      employeesCtx.add(res)
    }
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='form-parts'>
        <div className='form-part-left'>
          <div className='form-part-pair'>
            <label htmlFor='firstName'>First Name</label>
            <input name='firstName' type='text' placeholder=' - ' onChange={e => setFirstName(e.target.value)} />
          </div>
          <div className='error' ref={errFirstName}> </div>
          <div className='form-part-pair'>
            <label htmlFor='lastName'>Last Name</label>
            <input name='lastName' type='text' placeholder=' - ' onChange={e => setLastName(e.target.value)} />
          </div>
          <div className='error' ref={errLastName}> </div>
          <div className='form-part-pair'>
            <Datepicker label="Birth date" setvalue={setBirthDate} />
          </div>
          <div className='error' ref={errBirthDate}> </div>
          <div className='form-part-pair'>
            <Datepicker label="Start date" setvalue={setStartDate} />
          </div>
          <div className='error' ref={errStartDate}> </div>
        </div>

        <div className='form-part-right'>
          <fieldset className='legend'>
            <legend>Address</legend>
            <div className='form-part-pair'>
              <label htmlFor='street'>Street</label>
              <input name='street' type='text' placeholder=' - ' onChange={e => setStreet(e.target.value)} />
            </div>
            <div className='error' ref={errStreet}> </div>
            <div className='form-part-pair'>
              <label htmlFor='city'>City</label>
              <input name='city' type='text' placeholder=' - ' onChange={e => setCity(e.target.value)} />
            </div>
            <div className='error' ref={errCity}> </div>
            <div className='form-part-pair'>
              <SimpleSelectMenu label="State" options={states} placeholder="Please choose a State" log={false} setvalue={setStateName} />
            </div>
            <div className='error' ref={errStateName}> </div>
            <div className='form-part-pair'>
              <label htmlFor='code'>Zip code</label>
              <input name='code' type='text' placeholder=' - ' onChange={e => setZipCode(e.target.value)} />
            </div>
            <div className='error' ref={errZipCode}> </div>
          </fieldset>
        </div>
      </div>
      <div className='department form-part-pair'>
        <SimpleSelectMenu label="Department" options={departmentOptions} placeholder="Please choose a Department" log={false} setvalue={setDepartment} />
      </div>
      <div className='error errDepartment' ref={errDepartment}> </div>
      <input className='save-btn' type='submit' value='Save' />
    </form>
  )
}

export default Create