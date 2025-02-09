import logo from '../../../images/logo.png'

const Header = () => {
  // Date Calculation
  const today = new Date()
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  const currentDate = today.toLocaleDateString('en-US', options)

  return (
    <header className="w-full bg-white py-2 text-center flex flex-col items-center justify-center shadow-md mx-auto container pb-4">
      {/* Logo */}
      <img src={logo} alt="Logo" className="w-60 h-10 object-contain mb-1" />
      {/* Tagline */}
      <p className="text-lg font-semibold text-gray-800">
        Journalism Without Fear or Favour
      </p>
      {/* Date */}
      <p className="text-xs text-gray-800 mt-1 font-bold">{currentDate}</p>
    </header>
  )
}

export default Header
