import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo2a.png'
import logobas from '../assets/logo2b.png'
import '../style/header.css'

const Header = () => {
    const create = useRef(null)
    const view = useRef(null)
    const [createClicked, setCreateClick] = useState(true)
    const [viewClicked, setViewClick] = useState(false)
    const { pathname } = useLocation()

    // Check for url.pathname to set right button nav color
    useEffect(() => {
        if (pathname.split('/')[1] === 'view') {
            setViewClick(true)
            setCreateClick(false)
        }
    }, [pathname])

    // Set clicked button nav white, the other pass to green
    function setBtnBackground(e) {
        if (e.target.className.includes('create')) {
            setCreateClick(true)
            setViewClick(false)
        } else {
            setViewClick(true)
            setCreateClick(false)
        }
    }

    return (
        <nav className='App-header'>
            <img className='logo' src={logo} alt='logo' />
            <img className='logobas' src={logobas} alt='logobas' />
            <div className='nav-btns'>
                <Link to='/' className={`create ${createClicked && 'active'}`} onClick={setBtnBackground} ref={create}>CREATE EMPLOYEE</Link>
                <Link to='/view' className={`view ${viewClicked && 'active'}`} onClick={setBtnBackground} ref={view}>VIEW CURRENT EMPLOYEES</Link>
            </div>
        </nav>
    )
}

export default Header
