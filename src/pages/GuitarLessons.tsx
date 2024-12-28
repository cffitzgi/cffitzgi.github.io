import { GuitarIcon, Clock, Users, BookOpen } from 'lucide-react';
import { useState } from 'react';

export default function GuitarLessons() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    experience: 'beginner',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative h-72">
        <img
          src="https://images.unsplash.com/photo-1525201548942-d8732f6617a0"
          alt="Guitar Lesson"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Guitar Lessons</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Learn Guitar with Cashel Fox</h2>
            <p className="text-gray-600 mb-8">
              Whether you're a complete beginner or an advanced player looking to refine your
              skills, I offer personalized guitar lessons tailored to your goals and interests.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <Clock className="text-blue-500" />
                <div>
                  <h3 className="font-semibold">Flexible Schedule</h3>
                  <p className="text-sm text-gray-600">30, 45, or 60-minute lessons</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="text-blue-500" />
                <div>
                  <h3 className="font-semibold">All Levels Welcome</h3>
                  <p className="text-sm text-gray-600">Beginner to Advanced</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <BookOpen className="text-blue-500" />
                <div>
                  <h3 className="font-semibold">Comprehensive Learning</h3>
                  <p className="text-sm text-gray-600">Theory and Practice</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <GuitarIcon className="text-blue-500" />
                <div>
                  <h3 className="font-semibold">Multiple Styles</h3>
                  <p className="text-sm text-gray-600">Classical to Contemporary</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6">Sign Up for Lessons</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                  Experience Level
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Request Lesson Information
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}