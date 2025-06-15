import { Search, MapPin, Bed, Wifi, Car, Shield, Plus } from 'lucide-react';
import { useState, useEffect } from 'react';
import AccommodationListingModal from './AccommodationListingModal';
import PropertyModal from './PropertyModal';

const Accommodation = () => {
  const [isListingModalOpen, setIsListingModalOpen] = useState(false);
  const [properties, setProperties] = useState<any[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<any>(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Fetch properties from JSON file
    fetch('/graduin-properties.json')
      .then(response => response.json())
      .then(data => setProperties(data))
      .catch(error => console.error('Error fetching properties:', error));
  }, []);

  const amenities = [
    { icon: Wifi, label: 'Wi-Fi' },
    { icon: Car, label: 'Parking' },
    { icon: Shield, label: 'Security' },
    { icon: Bed, label: 'Furnished' },
  ];

  const handlePropertyClick = (property: any) => {
    setSelectedProperty(property);
  };

  const handlePersonalAssistance = () => {
    // Navigate to contact page
    window.dispatchEvent(new CustomEvent('changePage', { detail: 'contact-us' }));
  };

  return (
    <div className="flex-1 md:ml-24 min-h-screen pt-20 md:pt-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Student Accommodation</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
            Search for affordable, safe and comfortable student accommodation in South Africa, Africa and Globally with Graduin
          </p>
          
          {/* List Property Button */}
          <button 
            onClick={() => setIsListingModalOpen(true)}
            className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 flex items-center gap-2 mx-auto"
          >
            <Plus size={20} />
            Submit My Own Listing
          </button>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type="text"
                  placeholder="e.g. Johannesburg, Cape Town"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Price Range</label>
              <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>Any Price</option>
                <option>R2,000 - R4,000</option>
                <option>R4,000 - R6,000</option>
                <option>R6,000 - R8,000</option>
                <option>R8,000+</option>
              </select>
            </div>

            <div className="flex items-end">
              <button className="w-full button-primary">
                <Search size={20} className="mr-2" />
                Search Properties
              </button>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-200">
            <p className="text-sm text-slate-600 mb-3">Filter by amenities:</p>
            <div className="flex flex-wrap gap-3">
              {amenities.map((amenity, index) => (
                <button key={index} className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-purple-100 hover:text-purple-700 rounded-xl transition-colors">
                  <amenity.icon size={16} />
                  <span className="text-sm">{amenity.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Listings */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-800">Available Properties</h2>
            <p className="text-slate-600">{properties.length} properties found</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden card-hover cursor-pointer"
                onClick={() => handlePropertyClick(property)}
              >
                <div className="h-48 bg-cover bg-center relative" style={{backgroundImage: `url(${property.image})`}}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  {property.tag && (
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {property.tag}
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-slate-800 text-sm leading-tight">{property.title}</h3>
                  </div>
                  
                  <p className="text-slate-600 text-sm mb-4">{property.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {property.features?.slice(0, 3).map((feature: string, featureIndex: number) => (
                      <span key={featureIndex} className="bg-purple-100 text-purple-700 px-2 py-1 rounded-lg text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-purple-600">{property.price}</span>
                    <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-200">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          <div className="text-center mt-8">
            <button className="button-primary">
              View All Properties
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-lg mb-8 opacity-90">Let us help you find the perfect accommodation. Our team will match you with suitable properties.</p>
          <button 
            onClick={handlePersonalAssistance}
            className="bg-white text-purple-600 px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
          >
            Get Personal Assistance
          </button>
        </div>
      </div>

      {/* Listing Modal */}
      <AccommodationListingModal 
        isOpen={isListingModalOpen}
        onClose={() => setIsListingModalOpen(false)}
      />

      {/* Property Modal */}
      {selectedProperty && (
        <PropertyModal 
          property={selectedProperty} 
          onClose={() => setSelectedProperty(null)} 
        />
      )}
    </div>
  );
};

export default Accommodation;