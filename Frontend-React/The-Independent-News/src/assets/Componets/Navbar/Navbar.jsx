import { Link } from 'react-router-dom'
import { useAuth } from '../../../Provider/AuthProvider'
import userIcon from '../../../images/user.png'

const Navbar = () => {
  const { user, logout } = useAuth()

  const handleLogout = async () => {
    await logout()
  }

  return (
    <nav className="w-full bg-white shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Navigation Links */}
        <ul className="flex-1 flex justify-center space-x-6 text-gray-800 font-medium">
          <li>
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-600">
              About
            </Link>
          </li>
          <li>
            <Link to="/career" className="hover:text-blue-600">
              Career
            </Link>
          </li>
        </ul>

        {/* User Profile & Auth Buttons */}
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <img
                className="w-10 h-10 cursor-pointer"
                src={userIcon}
                alt="User Icon"
              />
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
              >
                Sign out
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
