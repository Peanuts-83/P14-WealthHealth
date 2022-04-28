import '../style/create.css'
import React, { useState } from 'react'
import { SimpleSelectMenu } from 'simple-select-menu'
import Datepicker from '../components/Datepicker'
import { states } from '../utils/states'

const Create = () => {
  const [stateName, setStateName] = useState('')
  const [department, setDepartment] = useState('')
  const [startDate, setStartDate] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const departmentOptions = ["Sales", "Marketing", "Engineering", "Human Resources", "Legal"]

  return (
    <form className='form'>
      <div className='form-parts'>
        <div className='form-part-left'>
          <div className='form-part-pair'>
            <label htmlFor='firstName'>First Name</label>
            <input name='firstName' type='text' placeholder=' - ' />
          </div>
          <div className='form-part-pair'>
            <label htmlFor='lastName'>Last Name</label>
            <input name='lastName' type='text' placeholder=' - ' />
          </div>
          <div className='form-part-pair'>
            <Datepicker label="Birth date" setvalue={setBirthDate} />
          </div>
          <div className='form-part-pair'>
            <Datepicker label="Start date" setvalue={setStartDate} />
          </div>
        </div>

        <div className='form-part-right'>
          <fieldset className='legend'>
            <legend>Address</legend>
            <div className='form-part-pair'>
              <label htmlFor='street'>Street</label>
              <input name='street' type='text' placeholder=' - ' />
            </div>
            <div className='form-part-pair'>
              <label htmlFor='city'>City</label>
              <input name='city' type='text' placeholder=' - ' />
            </div>
            <div className='form-part-pair'>
              <SimpleSelectMenu label="State" options={states} placeholder="Please choose a State" setvalue={setStateName} />
            </div>
            <div className='form-part-pair'>
              <label htmlFor='code'>Zip code</label>
              <input name='code' type='text' placeholder=' - ' />
            </div>
          </fieldset>
        </div>
      </div>
      <div className='department form-part-pair'>
        <SimpleSelectMenu label="Department" options={departmentOptions} placeholder="Please choose a Department" setvalue={setDepartment} />
      </div>
      <input className='save-btn' type='button' value='Save' />
    </form>
  )
}

export default Create