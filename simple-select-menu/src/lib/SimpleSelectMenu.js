import React from 'react'
import { Fragment } from "react"
import PropTypes from 'prop-types'
import './simpleSelectMenu.css'

/**
 Simple select menu Library
 @param {string} label - Label for the select menu
 @param {array} options - Array of all the options.
    @param {string} elt - Option 1 : array of strings. Value returned is the value.toLowerCase() with white spaces converted to underscore
    @param {object} elt - Option 2 : array of objects. Value returned is the value property of object
        @param {string} name - Text to display in select menu.
        @param {string} value - Value returned when selected.
@param {string} placeholder - Text to display at start.
@param {boolean} log - Displays nodeElement & value returned in console. Default to true.
@param {function} setvalue - Setter to return the selected value to parent Component.
@returns SimpleSelectMenu component.
*/
const SimpleSelectMenu = ({ label = 'Label', options = ['Option 1', 'Option 2'], placeholder = 'placeholder', log=true, setvalue }) => {
    function _returnValue(e) {
        log === true && console.log(e.target, `Value : ${e.target.value}`)
        setvalue(e.target.value)
    }

    return (
        <Fragment>
            <label name={label.toLowerCase()} className="simple-select-menu-label">{label}</label>
            <select
                className="simple-select-menu-select"
                onChange={_returnValue}
                >
                <option className="simple-select-menu-option" value="">{placeholder}</option>
                {options && typeof options[0] === 'string' && options.map((option, i) =>
                    (<option className="simple-select-menu-option" value={option.toLowerCase().replace(' ', '_')} key={`ssm-${i}`}>{option}</option>)
                )
                }
                {options && typeof options[0] === 'object' && options.map((option, i) =>
                    (<option className="simple-select-menu-option" value={option.value} key={`ssm-${i}`}>{option.name}</option>)
                )
                }
            </select>
        </Fragment>
    )
}

export default SimpleSelectMenu

SimpleSelectMenu.propTypes = {
    label: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.objectOf(PropTypes.string)
        ])
    ),
    placeholder: PropTypes.string,
    log: PropTypes.bool,
    setvalue: PropTypes.func
}
