import { useParams, useNavigate } from 'react-router-dom'
import newsData from '../../../data/news.json'
import Header from '../Header/Header' // Header Component
import RightSide from '../../Componets/Home/RightSideNav' // Right Side Component

const NewsDetail = () => {
  const { id } = useParams() // Get the ID from the URL
  const navigate = useNavigate() // Hook to navigate to previous page

  // Find the news item with the corresponding ID
  const news = newsData.find((news) => news._id === id)

  if (!news) {
    return <div>News not found</div>
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header /> {/* Header Component */}
      <div className="container mx-auto p-5 flex flex-col md:flex-row gap-6">
        {/* News Card Section */}
        <div className="md:w-2/3 bg-white shadow-lg rounded-lg p-6">
          <div className="py-5">
            {/* Author, published date, and share */}
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img
                  src={news.author.img}
                  alt="Image"
                  className="w-16 h-16 object-cover rounded-full border border-gray-300"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{news.author.name}</h3>
                <p className="text-sm text-gray-500">
                  Published on: <span>{news.author.published_date}</span>
                </p>
              </div>
              <div className="flex space-x-4">
                <button className="text-gray-500 hover:text-blue-500">
                  <i className="fas fa-share-alt"></i>
                </button>
                <button className="text-gray-500 hover:text-yellow-500">
                  <i className="fas fa-bookmark"></i>
                </button>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            {news.title}
          </h2>

          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src={news.image_url}
              alt={news.title}
              className="w-full max-w-lg h-auto rounded-lg shadow-md"
            />
          </div>

          <p className="text-gray-700 mt-4 leading-relaxed">{news.details}</p>

          <div className="flex items-center justify-center mt-6">
            {/* Stylish "Back" button */}
            <button
              onClick={() => navigate(-1)}
              className="bg-[#D72050] text-white py-3 px-6 rounded-full shadow-lg cursor-pointer"
            >
              All news in the category
            </button>
          </div>
        </div>

        {/* Right Side Component */}
        <div className="md:w-1/3 w-full">
          <RightSide />
        </div>
      </div>
    </div>
  )
}

export default NewsDetail
