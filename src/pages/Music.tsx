import { GuitarIcon, Music as MusicIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Music() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative h-96">
        <img
          src="https://images.unsplash.com/photo-1511379938547-c1f69419868d"
          alt="Music Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Music</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">About My Music</h2>
            <p className="text-gray-600 mb-4">
              As a multi-instrumentalist and composer, I blend traditional and contemporary styles
              to create unique musical experiences. My work spans across various genres, from
              classical guitar to experimental electronic compositions.
            </p>
            <p className="text-gray-600 mb-8">
              With over a decade of performance experience, I've had the privilege of playing at
              venues across the country and collaborating with talented musicians from diverse
              backgrounds.
            </p>
            <Link
              to="/music/lessons"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <GuitarIcon size={20} />
              <span>Guitar Lessons</span>
            </Link>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <MusicIcon className="mr-2" />
                Recent Performances
              </h3>
              <ul className="space-y-4">
                <li>
                  <p className="font-semibold">Summer Music Festival 2024</p>
                  <p className="text-gray-600">Main Stage Performance - June 2024</p>
                </li>
                <li>
                  <p className="font-semibold">City Concert Hall</p>
                  <p className="text-gray-600">Solo Guitar Recital - April 2024</p>
                </li>
                <li>
                  <p className="font-semibold">Art Gallery Opening</p>
                  <p className="text-gray-600">Ambient Music Performance - March 2024</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}