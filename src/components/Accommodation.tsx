
import { Search, MapPin, Bed, Wifi, Car, Shield, Star, Plus } from 'lucide-react';
import { useState } from 'react';
import AccommodationListingModal from './AccommodationListingModal';

const Accommodation = () => {
  const [isListingModalOpen, setIsListingModalOpen] = useState(false);

  const listings = [
    {
      title: '9 Guildford Street Brixton Johannesburg 2092',
      description: 'Minutes from UJ APK and Brixton Shopping Centre.',
      price: 'R3,500/month',
      features: ['Furnished', 'Wi-Fi', 'Security'],
      rating: 4.2,
      image: 'bg-gradient-to-br from-blue-400 to-blue-600'
    },
    {
      title: '40A Fulham road Brixton Johannesburg 2092',
      description: 'Student commune, single or sharing room options.',
      price: 'R2,800/month',
      features: ['Shared Kitchen', 'Study Area', 'Laundry'],
      rating: 4.5,
      image: 'bg-gradient-to-br from-green-400 to-green-600'
    },
    {
      title: '18 Bernard Street Sophiatown Johannesburg',
      description: 'Double-storey fully furnished with reception area.',
      price: 'R4,200/month',
      features: ['Fully Furnished', 'Reception', '24/7 Security'],
      rating: 4.8,
      image: 'bg-gradient-to-br from-purple-400 to-purple-600'
    },
    {
      title: 'North cliff Terrace Complex',
      description: '3 BR/2 BA, R8 300 p/m; includes parking, pool, entertainment area.',
      price: 'R8,300/month',
      features: ['3 Bedroom', 'Pool', 'Parking', 'Entertainment Area'],
      rating: 4.6,
      image: 'bg-gradient-to-br from-orange-400 to-orange-600'
    },
    {
      title: '89 Collins Street Brixton Johannesburg 2092',
      description: 'Fully furnished, secured commune.',
      price: 'R3,200/month',
      features: ['Fully Furnished', 'Security', 'Shared Facilities'],
      rating: 4.3,
      image: 'bg-gradient-to-br from-red-400 to-red-600'
    },
    {
      title: 'Westedene Property',
      description: '3 BR house, R12k incl. utilities & Wi-Fi.',
      price: 'R12,000/month',
      features: ['3 Bedroom', 'Utilities Included', 'Wi-Fi', 'House'],
      rating: 4.7,
      image: 'bg-gradient-to-br from-indigo-400 to-indigo-600'
    },
    {
      title: 'Auckland Johannesburg Property 1',
      description: 'Safe accommodation near UJ, WITS, Rosbank College, Boston City.',
      price: 'R3,800/month',
      features: ['Near Universities', 'Safe Area', 'Transport Links'],
      rating: 4.4,
      image: 'bg-gradient-to-br from-pink-400 to-pink-600'
    },
    {
      title: 'Johannesburg Property',
      description: 'Furnished, uncapped Wi-Fi, parking, utilities, caretaker, weekly cleaning.',
      price: 'R4,500/month',
      features: ['Furnished', 'Uncapped Wi-Fi', 'Parking', 'Cleaning Service'],
      rating: 4.9,
      image: 'bg-gradient-to-br from-teal-400 to-teal-600'
    },
    {
      title: 'Melody Complex Property',
      description: '2 BR apt, built-in cupboards.',
      price: 'R5,200/month',
      features: ['2 Bedroom', 'Built-in Cupboards', 'Apartment'],
      rating: 4.1,
      image: 'bg-gradient-to-br from-yellow-400 to-yellow-600'
    },
  ];

  const amenities = [
    { icon: Wifi, label: 'Wi-Fi' },
    { icon: Car, label: 'Parking' },
    { icon: Shield, label: 'Security' },
    { icon: Bed, label: 'Furnished' },
  ];

  return (
    <div className="flex-1 md:ml-24 min-h-screen pt-20 md:pt-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Student Accommodation</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
            Search for affordable student accommodation near your university or college with Graduin. Find safe, comfortable, and convenient housing options.
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
            <p className="text-slate-600">{listings.length} properties found</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((listing, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden card-hover">
                <div className={`h-48 ${listing.image} flex items-center justify-center`}>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-slate-800 text-sm leading-tight">{listing.title}</h3>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star size={14} fill="currentColor" />
                      <span className="text-xs text-slate-600">{listing.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 text-sm mb-4">{listing.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {listing.features.slice(0, 3).map((feature, featureIndex) => (
                      <span key={featureIndex} className="bg-purple-100 text-purple-700 px-2 py-1 rounded-lg text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-purple-600">{listing.price}</span>
                    <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-200">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Properties */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 mb-12">
          <h3 className="text-xl font-semibold text-slate-800 mb-4">More Properties Available</h3>
          <div className="space-y-3 text-slate-600">
            <p>• Auckland Johannesburg Property 2</p>
            <p>• Auckland Johannesburg Property 3</p>
            <p>• Doornfontein Property – Near UJ, WITS, Braamfontein; reliable & secure</p>
            <p>• Doornfontein / Braamfontein Property – Stylish apartments, walkable to campus</p>
            <p>• Braamfontein / Doornfontein Property 2 – Smart living solutions</p>
            <p>• Auckland Park Rooms To-Let – Quiet house, professional/student choice</p>
            <p>• Auckland Property (Sunbury House) – Fully equipped accommodation</p>
            <p>• Auckland Park Johannesburg Property III – Central Auckland Park location</p>
            <p>• Brixton Johannesburg Property II – Newly renovated, affordable</p>
            <p>• Pritchard Place Listing – Bachelor home with open living, modern kitchen</p>
            <p>• The Hunstanton Residence – Bachelor home, bathtub included</p>
          </div>
          <button className="mt-6 button-primary">
            View All Properties
          </button>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-lg mb-8 opacity-90">Let us help you find the perfect accommodation. Our team will match you with suitable properties.</p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200">
            Get Personal Assistance
          </button>
        </div>
      </div>

      {/* Listing Modal */}
      <AccommodationListingModal 
        isOpen={isListingModalOpen}
        onClose={() => setIsListingModalOpen(false)}
      />
    </div>
  );
};

export default Accommodation;
