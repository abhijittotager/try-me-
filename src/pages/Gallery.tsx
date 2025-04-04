import React from 'react';

const photos = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80",
    caption: "College Campus Life"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80",
    caption: "Student Workshop"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80",
    caption: "Digital Safety Training"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80",
    caption: "Community Engagement"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80",
    caption: "Group Discussion"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
    caption: "Team Collaboration"
  }
];

export function Gallery() {
  return (
    <div className="min-h-screen bg-purple-50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 text-center">Photo Gallery</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div key={photo.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-gray-800 font-medium text-center">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}