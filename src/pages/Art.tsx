import { Frame, Image as ImageIcon } from 'lucide-react';

export default function Art() {
  const artworks = [
    {
      title: "Urban Landscapes",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5",
      description: "A series exploring city architecture and human interaction"
    },
    {
      title: "Abstract Expressions",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262",
      description: "Contemporary abstract paintings focusing on emotion and color"
    },
    {
      title: "Digital Art Collection",
      image: "https://images.unsplash.com/photo-1549490349-8643362247b5",
      description: "Modern digital artworks combining traditional and digital techniques"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative h-96">
        <img
          src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b"
          alt="Art Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Art</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Artist Statement</h2>
          <p className="text-gray-600 max-w-3xl">
            My artistic practice explores the intersection of traditional and digital mediums,
            seeking to bridge the gap between classical techniques and contemporary expression.
            Through various mediums including painting, digital art, and mixed media, I create
            works that reflect on modern society and human experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src={artwork.image}
                alt={artwork.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{artwork.title}</h3>
                <p className="text-gray-600">{artwork.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Frame className="mr-2" />
            Exhibitions & Recognition
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Recent Exhibitions</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ImageIcon className="mr-2 mt-1 text-gray-400" size={18} />
                  <div>
                    <p className="font-semibold">Contemporary Art Museum</p>
                    <p className="text-gray-600">Solo Exhibition - Winter 2024</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ImageIcon className="mr-2 mt-1 text-gray-400" size={18} />
                  <div>
                    <p className="font-semibold">City Gallery</p>
                    <p className="text-gray-600">Group Show - Fall 2023</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Awards</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ImageIcon className="mr-2 mt-1 text-gray-400" size={18} />
                  <div>
                    <p className="font-semibold">Emerging Artist Award</p>
                    <p className="text-gray-600">Regional Arts Council - 2023</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ImageIcon className="mr-2 mt-1 text-gray-400" size={18} />
                  <div>
                    <p className="font-semibold">Digital Art Excellence</p>
                    <p className="text-gray-600">International Digital Art Fair - 2023</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}