import { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';

interface ApplicationTrackingModalProps {
  onClose: () => void;
}

const ApplicationTrackingModal = ({ onClose }: ApplicationTrackingModalProps) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    idOrPassport: '',
    phoneNumber: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (showSuccess) {
    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <CheckCircle className="text-green-500" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Checking Progress...</h3>
            <p className="text-slate-600 mb-6">You will be notified via Email when results are ready!</p>
            <button
              onClick={onClose}
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800">Track Your Application</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X size={24} className="text-slate-600" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">First Name *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">ID or Passport Number *</label>
            <input
              type="text"
              name="idOrPassport"
              value={formData.idOrPassport}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-200"
            >
              Track Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationTrackingModal;