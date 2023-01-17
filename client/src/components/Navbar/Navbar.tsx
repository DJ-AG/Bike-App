import Wrapper from './Navbar_Wrapper'

//import { FaAlignLeft } from 'react-icons/fa'
import { useState } from 'react'
const Navbar = () => {
  const [showLogout, setShowLogout] = useState(true)
  return (
    <Wrapper>
      <div className='nav-center'>
        <button type='button' className='toggle-btn'>
         LOGO#
        </button>
        <div>
          <h3 className='logo-text'>dashboard</h3>
        </div>
        <div className='btn-container'>
          <button
            type='button'
            className='btn'
            onClick={() => setShowLogout(!showLogout)}
          >Register/Login
          </button>
          <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
            <button type='button' className='dropdown-btn'>
              Logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar