import { Book, BookOpen, PenTool } from 'lucide-react';

export default function Writing() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative h-96">
        <img
          src="https://images.unsplash.com/photo-1455390582262-044cdead277a"
          alt="Writing Desk"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Writing</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">About My Writing</h2>
            <p className="text-gray-600 mb-4">
              As a writer, I explore themes of human connection, nature, and contemporary life
              through various forms including poetry, short stories, and creative non-fiction.
              My work has been published in several literary journals and anthologies.
            </p>
            <div className="flex items-center space-x-4 mt-8">
              <PenTool className="text-gray-400" size={24} />
              <span className="text-gray-600">Published Author & Poet</span>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Book className="mr-2" />
              Latest Publications
            </h3>
            <ul className="space-y-6">
              <li>
                <p className="font-semibold">The Silent Echo</p>
                <p className="text-gray-600">Poetry Collection - 2024</p>
                <p className="text-sm text-gray-500 mt-1">
                  Published by Moonlight Press
                </p>
              </li>
              <li>
                <p className="font-semibold">Urban Tales: Stories from the City</p>
                <p className="text-gray-600">Short Story Collection - 2023</p>
                <p className="text-sm text-gray-500 mt-1">
                  Published by Metropolitan Books
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <BookOpen className="mr-2" />
            Featured Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Poetry</h3>
              <ul className="space-y-4">
                <li>
                  <p className="font-semibold">Morning Light</p>
                  <p className="text-gray-600">Literary Review Quarterly</p>
                </li>
                <li>
                  <p className="font-semibold">City Dreams</p>
                  <p className="text-gray-600">Modern Poetry Anthology</p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Short Stories</h3>
              <ul className="space-y-4">
                <li>
                  <p className="font-semibold">The Last Train</p>
                  <p className="text-gray-600">New Fiction Magazine</p>
                </li>
                <li>
                  <p className="font-semibold">Coffee at Midnight</p>
                  <p className="text-gray-600">Stories of the Year Collection</p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Essays</h3>
              <ul className="space-y-4">
                <li>
                  <p className="font-semibold">The Digital Age of Art</p>
                  <p className="text-gray-600">Arts & Culture Review</p>
                </li>
                <li>
                  <p className="font-semibold">Music in the Modern World</p>
                  <p className="text-gray-600">Contemporary Thoughts Journal</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}