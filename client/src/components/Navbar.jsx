import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { UserButton, SignInButton, useUser} from '@clerk/clerk-react'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {

  const { user } = useUser()
  const navigate=useNavigate()

  const {setShowRecruiterLogin} = useContext(AppContext)

  return (
    <div className='shadow py-4'>
      <div className='container px-4 2xl:px-20 mx-auto flex justify-between items-center'>
        
        <Link
        to="/"
        onClick={() => window.scrollTo(0, 0)}
        className="inline-block">
            <img src={assets.logo} alt="InsideJobs Logo" />
        </Link>
        {/* ✅ IF USER LOGGED IN */}
        {user ? (
          <div className='flex items-center gap-4'>
            
            <Link to='/applications' className='text-gray-700'>
              Applied Jobs
            </Link>

            <p className='max-sm:hidden'>
              Hi, {user.firstName} {user.lastName}
            </p>

            <UserButton afterSignOutUrl="/" />

          </div>
        ) : (
          /* ❌ IF NOT LOGGED IN */
          <div className='flex gap-4 max-sm:text-xs items-center'>
            
            <button onClick={e=> setShowRecruiterLogin(true)} className='text-gray-600'>Recruiter Login</button>
            <SignInButton mode="modal">
              <button className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-full'>
                Login
              </button>
            </SignInButton>

          </div>
        )}

      </div>
    </div>
  )
}

export default Navbar