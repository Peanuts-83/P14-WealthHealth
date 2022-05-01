import React, { useEffect, useRef, useState } from 'react'
import { Fragment } from "react"
import PropTypes from 'prop-types'
import './simpleSelectMenu.css'

/**
 Simple select menu Library
 @param {string} label - Label for the select menu. Optional
 @param {array} options - Array of all the options. Required
    @param {string} elt - Option 1 : array of strings. Value returned is the value.toLowerCase() with white spaces converted to underscore
    @param {object} elt - Option 2 : array of objects. Value returned is the value property of object
        @param {string} name - Text to display in select menu.
        @param {string} value - Value returned when selected.
@param {string} placeholder - Text to display at start. Optional.
@param {boolean} log - Displays nodeElement & value returned in console. Optional. Default to true.
@param {function} setvalue - Setter to return the selected value to parent Component. Required
@param {object} initComponent - Init getter/setter. Required
    @param {boolean} init - Getter to init action state.
    @param {function} setInit - Setter to set init action to false.
@returns SimpleSelectMenu component.
*/
const SimpleSelectMenu = ({ label = 'Label', options = ['Option 1', 'Option 2'], placeholder, log = true, setvalue, initComponent }) => {

    const selectMenu = useRef()
    const {init, setInit} = initComponent
    useEffect(() => {
        if (init === true) {
            if (placeholder !== undefined && placeholder !== false) {
                setVal('')
            } else {
                if (typeof options[0] === 'string') {
                    setVal(options[0])
                } else {
                    setVal(options[0].value)
                }
            }
        }
        setInit(false)
    }, [init])

    const [val, setVal] = useState('')

    function _returnValue(e) {
        log === true && console.log(e.target, `Value : ${e.target.value}`)
        setVal(e.target.value)
        setvalue(e.target.value)
    }

    return (
        <Fragment>
            <label name={label.toLowerCase()} className="simple-select-menu-label">{label}</label>
            <select
                ref={selectMenu}
                className="simple-select-menu-select"
                value={val}
                onChange={_returnValue}
            >
                {placeholder !== undefined && placeholder !== false && (
                    <option className="simple-select-menu-option" value="">{placeholder}</option>

                )}
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
        ]).isRequired
    ),
    placeholder: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ]),
    log: PropTypes.bool,
    setvalue: PropTypes.func.isRequired,
    initComponent: PropTypes.objectOf(
        PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.func,
        ]).isRequired
    )
}
