import { Music, Palette, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Cashel Fox</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Musician, Artist, and Writer exploring the intersections of creativity
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Link to="/music" className="group">
            <div className="bg-gray-800 p-8 rounded-lg transition-transform transform hover:scale-105">
              <Music className="w-12 h-12 mb-4 text-blue-400 group-hover:text-blue-300" />
              <h2 className="text-2xl font-bold mb-2">Music</h2>
              <p className="text-gray-400">Composer, performer, and guitar instructor bringing melodies to life</p>
            </div>
          </Link>

          <Link to="/art" className="group">
            <div className="bg-gray-800 p-8 rounded-lg transition-transform transform hover:scale-105">
              <Palette className="w-12 h-12 mb-4 text-purple-400 group-hover:text-purple-300" />
              <h2 className="text-2xl font-bold mb-2">Art</h2>
              <p className="text-gray-400">Visual storyteller working across multiple mediums</p>
            </div>
          </Link>

          <Link to="/writing" className="group">
            <div className="bg-gray-800 p-8 rounded-lg transition-transform transform hover:scale-105">
              <PenTool className="w-12 h-12 mb-4 text-green-400 group-hover:text-green-300" />
              <h2 className="text-2xl font-bold mb-2">Writing</h2>
              <p className="text-gray-400">Author and poet crafting narratives that resonate</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}