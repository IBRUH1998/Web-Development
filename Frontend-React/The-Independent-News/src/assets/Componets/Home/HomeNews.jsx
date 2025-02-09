import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../../../Provider/AuthProvider'
import newsData from '../../../data/news.json'
import categoriesData from '../../../data/categories.json'
import RightSideNav from './RightSideNav'
import { CiBookmarkCheck } from 'react-icons/ci'
import { IoMdShare } from 'react-icons/io'

const HomeNews = () => {
  const [visibleCount, setVisibleCount] = useState(5) // First 5 news
  const [loading, setLoading] = useState(false) // Loader state

  // See More button handler
  const handleSeeMore = () => {
    setLoading(true)
    setTimeout(() => {
      setVisibleCount((prevCount) => prevCount + 5) // Load 5 more news
      setLoading(false)
    }, 1000) // 1 sec loader effect
  }

  // See Less button handler
  const handleSeeLess = () => {
    setVisibleCount(5) // Reset to initial 5 news
  }

  return (
    <div className="container mx-auto p-5 grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* First Section: All Categories */}
      <div className="lg:col-span-1 hidden lg:block border-r border-gray-300 pr-5">
        <h2 className="text-xl font-semibold mb-4">All Categories</h2>
        <ul className="space-y-3">
          {categoriesData.map((category) => (
            <li
              key={category.id}
              className="p-2 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition"
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Middle Section: News Cards */}
      <div className="lg:col-span-2">
        <h2 className="text-xl font-semibold mb-4">Dragon News Home</h2>
        <div className="grid grid-cols-1 gap-5">
          {newsData.slice(0, visibleCount).map((news) => (
            <NewsCard key={news._id} news={news} />
          ))}
        </div>

        {/* See More & See Less Buttons */}
        <div className="flex justify-center mt-5 space-x-4">
          {visibleCount < newsData.length && (
            <button
              onClick={handleSeeMore}
              className="flex items-center bg-blue-600 text-white py-2 px-5 rounded-full shadow-lg hover:bg-blue-700 transition"
            >
              {loading ? 'Loading...' : 'See More'}
            </button>
          )}

          {visibleCount > 5 && (
            <button
              onClick={handleSeeLess}
              className="bg-red-500 text-white py-2 px-5 rounded-full shadow-lg hover:bg-red-600 transition"
            >
              See Less
            </button>
          )}
        </div>
      </div>

      {/* Third Section: Login With Us */}
      <div className="lg:col-span-1 hidden lg:block border-l border-gray-300 pl-5">
        <RightSideNav />
      </div>
    </div>
  )
}

const NewsCard = ({ news }) => {
  const { user } = useAuth()
  const navigate = useNavigate()

  const handleReadMore = () => {
    if (user) {
      // If user is logged in, go to NewsDetails page
      navigate(`/news/${news._id}`)
    } else {
      // If user is not logged in, redirect to login page and save previous page
      navigate('/login', { state: { from: `/news/${news._id}` } })
    }
  }

  return (
    <div className="border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition">
      <img
        src={news.image_url}
        alt={news.title}
        className="w-full h-60 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-xl mb-2">{news.title}</h3>
        <p className="text-gray-700 mb-4">
          {news.details.substring(0, 200)}...
          <button
            onClick={handleReadMore}
            className="text-blue-700 underline px-3"
          >
            Read More
          </button>
        </p>

        <div className="flex items-center space-x-4">
          <img
            src={news.author.img}
            alt="Image"
            className="w-12 h-12 object-cover rounded-full"
          />
          <div>
            <h3 className="text-lg font-semibold">{news.author.name}</h3>
            <p className="text-sm text-gray-500">
              Published: {news.author.published_date}
            </p>
          </div>
          <div className="flex space-x-4">
            <button className="text-gray-500 text-xl hover:text-blue-500">
              <IoMdShare />
            </button>
            <button className="text-gray-500 text-xl hover:text-yellow-500">
              <CiBookmarkCheck />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeNews
