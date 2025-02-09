import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../../Provider/AuthProvider'

const Registration = () => {
  const { signUp, login } = useAuth()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSignUp = async (email, password) => {
    try {
      setLoading(true)
      await signUp(email, password)
      await login(email, password) // Automatically log in the user after registration
      setSuccess(true)
      setTimeout(() => {
        navigate('/') // Redirect to home page after 1.5s
      }, 1500)
    } catch (error) {
      console.error('Sign up failed:', error)
      setError('Registration failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await handleSignUp(formData.email, formData.password)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md"
      >
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Register Now
        </h2>
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-pink-300 transition duration-300"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-pink-300 transition duration-300"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-pink-300 transition duration-300"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className={`cursor-pointer w-full py-3 rounded-lg font-semibold shadow-lg transition-all transform ${
              success
                ? 'bg-green-600 text-white cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center space-x-2">
                <div className="w-5 h-5 border-4 border-white border-dashed rounded-full animate-spin"></div>
                <span>Registering...</span>
              </span>
            ) : success ? (
              'Registration Success 🎉'
            ) : (
              'Register Now'
            )}
          </motion.button>
          <p className="text-sm text-center mt-4">
            Already have an account?{' '}
            <Link
              to={'/login'}
              className="text-blue-600 font-semibold hover:underline"
            >
              Login here
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
  )
}

export default Registration
