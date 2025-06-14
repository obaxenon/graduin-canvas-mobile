import { useState, useEffect } from 'react';
import { X, MapPin, Star, Wifi, Car, Shield, Bed } from 'lucide-react';

interface PropertyModalProps {
  property: any;
  onClose: () => void;
}

const PropertyModal = ({ property, onClose }: PropertyModalProps) => {
  const [propertyData, setPropertyData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Simulate fetching property data from the URL
    const fetchPropertyData = async () => {
      try {
        // In a real implementation, you would fetch from the actual URL
        // For now, we'll use the existing property data with enhanced details
        setPropertyData({
          ...property,
          description: `Beautiful student accommodation located in ${property.location}. This property offers excellent amenities and is perfect for students looking for comfortable and affordable housing.`,
          images: [
            property.image,
            'bg-gradient-to-br from-slate-400 to-slate-600',
            'bg-gradient-to-br from-emerald-400 to-emerald-600',
            'bg-gradient-to-br from-rose-400 to-rose-600'
          ],
          address: property.location,
          amenities: property.features || ['Wi-Fi', 'Security', 'Furnished']
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching property data:', error);
        setImageError(true);
        setLoading(false);
      }
    };

    fetchPropertyData();
  }, [property]);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl p-8">
          <div className="animate-pulse">
            <div className="h-8 bg-slate-200 rounded mb-4"></div>
            <div className="h-64 bg-slate-200 rounded mb-4"></div>
            <div className="h-4 bg-slate-200 rounded mb-2"></div>
            <div className="h-4 bg-slate-200 rounded w-3/4"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-slate-200 sticky top-0 bg-white rounded-t-2xl">
          <h2 className="text-2xl font-bold text-slate-800">{propertyData.title}</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X size={24} className="text-slate-600" />
          </button>
        </div>

        <div className="p-6">
          {/* Property Images Gallery */}
          <div className="mb-6">
            {imageError ? (
              <div className="w-full h-64 border border-slate-200 rounded-xl">
                <iframe
                  src={property.url}
                  title={propertyData.title}
                  className="w-full h-full rounded-xl"
                  onError={() => setImageError(true)}
                />
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                <div className={`${propertyData.images[0]} h-64 rounded-xl flex items-center justify-center`}>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl"></div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {propertyData.images.slice(1, 4).map((image: string, index: number) => (
                    <div key={index} className={`${image} h-[calc(8rem-0.25rem)] rounded-lg flex items-center justify-center`}>
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg"></div>
                    </div>
                  ))}
                  {propertyData.images.length > 4 && (
                    <div className="bg-slate-200 h-[calc(8rem-0.25rem)] rounded-lg flex items-center justify-center">
                      <span className="text-slate-600 font-medium">+{propertyData.images.length - 4} more</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Property Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MapPin size={20} className="text-slate-500" />
                <span className="text-slate-600">{propertyData.address}</span>
              </div>
              
              <div className="flex items-center gap-2 mb-4">
                <Star size={20} className="text-yellow-500" fill="currentColor" />
                <span className="font-medium">{propertyData.rating}</span>
                <span className="text-slate-500">rating</span>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-slate-800 mb-2">Price</h3>
                <p className="text-2xl font-bold text-purple-600">{propertyData.price}</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 mb-3">Amenities</h3>
              <div className="grid grid-cols-2 gap-2">
                {propertyData.amenities.map((amenity: string, index: number) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-slate-600">
                    {amenity === 'Wi-Fi' && <Wifi size={16} />}
                    {amenity === 'Security' && <Shield size={16} />}
                    {amenity === 'Parking' && <Car size={16} />}
                    {amenity === 'Furnished' && <Bed size={16} />}
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="font-semibold text-slate-800 mb-3">Description</h3>
            <p className="text-slate-600 leading-relaxed">{propertyData.description}</p>
          </div>

          {/* Google Maps */}
          <div className="mb-6">
            <h3 className="font-semibold text-slate-800 mb-3">Location</h3>
            <div className="w-full h-64 bg-slate-100 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-slate-400 mx-auto mb-2" />
                <p className="text-slate-500">Map view of {propertyData.address}</p>
                <p className="text-xs text-slate-400 mt-1">Interactive map would be integrated here</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-200">
              Contact Property Owner
            </button>
            <button className="px-6 py-3 border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors">
              Save Property
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyModal;