# simple-select-menu - REACT

*Create a select menu providing options to select. It can take a placeholder as desired, returns value and can be set back to default state once form has been sent.*

## Installation

```bash
npm install simple-select-menu
```

## Usage

### Six parameters shall be implemented

---

* **label** {string} - The text to display in front of the select menu. *Optional*
* **options** {array} - Options MUST BE an array. *Required*
  * **case 1** : {string} - Strings used as-is for displayed text, value returned is a lower case version of the string with white spaces converted to underscore ('_').
  * **case 2** : {object} - {name: 'optionText', value: 'returnedValue'}
    * **name** {string} - Displayed text.
    * **value** {string} - Returned value on select.

* **placeholder** {string} - Text displayed at start when no selection has been done. *Optional. Can be either unset or set to false.*
* **log** {boolean} - Displays nodeElement and returned value in console. *Optional. Default to true*.
* **setvalue** {function} - Setter to return the selected value to parent Component. *Required*
* **initComponent** {object} - Init getter/setter to set menu back to default. *Required*
  * **init** {boolean} - Getter to init action state.
  * **setInit** {function} - Setter to set init action to false once menu has gone back too default state.

### Get selected value

---

Set a getter/setter variable using useState() hook and pass the setter function to the component.

### CSS selectors

---
These class selectors allow you to change the menu appearance :

**.simple-select-menu-label** {class} - Label part. *Padding default to 10px.*

**.simple-select-menu-select** {class} - Menu part. *Padding default to 10px and margin default to 5px.*

**.simple-select-menu-option** {class} - Each option of the menu. *No default.*

## Example

This code will help you experiment this simple lib.
Import it and create getter/setter variables in order to give the menus a way to send back the selected values, and to set the select menu back to default state once the form is sent.

Please refer to [usage chapter](#usage) for further explanations.

```javascript
import { render } from 'react-dom'
import { SimpleSelectMenu } from 'simple-select-menu'
import { useEffect, useState } from 'react'
import './index.css'

const App = () => {
  const [menu1Value, setMenu1Value] = useState()
  const [menu2Value, setMenu2Value] = useState()
  const [init, setInit] = useState(false)
  const initComponent = {init, setInit}

  useEffect(() => console.log('INIT MENUS -', init), [init])

  function resetMenu(e) {
    e.preventDefault()
    setInit(true)
  }

  return (
    <form className="container" onSubmit={resetMenu}>
      <h1>Simple select menu</h1>

      <SimpleSelectMenu
        label="Select menu with strings (log = false)"
        options={["Option 1", "Option 2"]}
        placeholder="Please choose an option"
        log={false}
        setvalue={setMenu1Value}
        initComponent={initComponent}
      />
      {menu1Value !== '' && menu1Value !== undefined && <span><em>returned value: {menu1Value}</em></span>}
      <br />

      <SimpleSelectMenu
        label="Select menu with objects (log = true)"
        options={[{ name: 'Option 1', value: 'opt1' }, { name: 'Option 2', value: 'opt2' }]}
        placeholder="Please choose an option"
        initComponent={initComponent}
        setvalue={setMenu2Value}
      />
      {menu2Value !== '' && menu2Value !== undefined && <span><em>returned value: {menu2Value}</em></span>}

      <SimpleSelectMenu
        label="Select menu with objects & no placeholder"
        options={[{ name: 'Option 1', value: 'opt1' }, { name: 'Option 2', value: 'opt2' }]}
        log={false}
        placeholder={false}
        setvalue={setMenu2Value}
        initComponent={initComponent}
      />
      {menu2Value !== '' && menu2Value !== undefined && <span><em>returned value: {menu2Value}</em></span>}

      <button type='submit'>SEND</button>
    </form>
  );
}


render(<App />, document.getElementById('root'))
```
