import { render } from "react-dom";
import { SimpleSelectMenu } from "./lib";
import { useState } from 'react'
import './index.css'

const App = () => {
  const [menu1Value, setMenu1Value] = useState()
  const [menu2Value, setMenu2Value] = useState()

  return (
    <div className="container">
      <h1>Simple select menu</h1>

      <SimpleSelectMenu
        label="Select menu with strings (log = false)"
        options={["Option 1", "Option 2"]}
        placeholder="Please choose an option"
        log={false}
        setvalue={setMenu1Value}
      />
      {menu1Value !== '' && menu1Value !== undefined && <span><em>returned value: {menu1Value}</em></span>}
      <br />

      <SimpleSelectMenu
        label="Select menu with objects (log = true)"
        options={[{ name: 'Option 1', value: 'opt1' }, { name: 'Option 2', value: 'opt2' }]}
        placeholder="Please choose an option"
        setvalue={setMenu2Value}
      />
      {menu2Value !== '' && menu2Value !== undefined && <span><em>returned value: {menu2Value}</em></span>}

      <SimpleSelectMenu
        label="Select menu with objects & no placeholder"
        options={[{ name: 'Option 1', value: 'opt1' }, { name: 'Option 2', value: 'opt2' }]}
        log={false}
        placeholder={false}
        setvalue={setMenu2Value}
      />
      {menu2Value !== '' && menu2Value !== undefined && <span><em>returned value: {menu2Value}</em></span>}
    </div>


  );
}

render(<App />, document.getElementById("root"));
