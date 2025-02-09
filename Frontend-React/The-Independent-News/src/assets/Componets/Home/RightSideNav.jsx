import qZone1 from '../../../images/qZone1.png'
import qZone2 from '../../../images/qZone2.png'
import qZone3 from '../../../images/qZone3.png'
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa'

export default function RightSideNav() {
  return (
    <div className="w-full max-w-sm p-5 bg-white shadow-lg rounded-lg">
      {/* Login Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Login With
        </h2>
        <button className="w-full flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition">
          <FaGoogle className="text-red-500" />
          Login with Google
        </button>
        <button className="w-full flex items-center justify-center gap-2 py-2 mt-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition">
          <FaGithub className="text-gray-800" />
          Login with GitHub
        </button>
      </div>

      {/* Find Us Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Find Us On
        </h2>
        <div className="rounded-lg bg-gray-50 p-3 space-y-2 shadow-sm">
          <a
            href="#"
            className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-blue-100 transition duration-300"
          >
            <FaFacebook className="text-blue-600" size={24} />
            <span className="font-medium">Facebook</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-blue-200 transition duration-300"
          >
            <FaTwitter className="text-blue-400" size={24} />
            <span className="font-medium">Twitter</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-pink-100 transition duration-300"
          >
            <FaInstagram className="text-pink-500" size={24} />
            <span className="font-medium">Instagram</span>
          </a>
        </div>
      </div>

      {/* Q-Zone Section */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Q-Zone</h2>
        <div className="grid grid-cols-1 gap-4">
          <img src={qZone1} alt="Q-Zone 1" className="rounded-lg shadow-md" />
          <img src={qZone2} alt="Q-Zone 2" className="rounded-lg shadow-md" />
          <img src={qZone3} alt="Q-Zone 3" className="rounded-lg shadow-md" />
        </div>
      </div>
    </div>
  )
}
