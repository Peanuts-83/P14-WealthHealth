import '../style/create.css'

const Create = () => {
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
            <label htmlFor='birthDate'>Date of Birth</label>
            <input name='birthDate' type='text' placeholder=' - ' />
          </div>
          <div className='form-part-pair'>
            <label htmlFor='startDate'>Start Date</label>
            <input name='startDate' type='text' placeholder=' - ' />
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
              <label htmlFor='state'>State</label>
              <select name='state'>
                    <option>Please choose a State </option>
                    <option>Alabama</option>
                    <option>Arkansas</option>
              </select>
            </div>
            <div className='form-part-pair'>
              <label htmlFor='code'>Zip code</label>
              <input name='code' type='text' placeholder=' - ' />
            </div>
          </fieldset>
        </div>
      </div>
        <div className='department form-part-pair'>
          <label htmlFor='department'>Department</label>
          <select name='department'>
                    <option>Please choose a department </option>
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>
        </div>
      <input className='save-btn' type='button' value='Save' />
    </form>
  )
}

export default Create