import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const ContactUs = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+27 11 123 4567', '+27 21 987 6543'],
      description: 'Call us during business hours'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['support@graduin.com', 'info@graduin.com'],
      description: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: ['123 University Street', 'Johannesburg, 2000'],
      description: 'Visit us for in-person support'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon - Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 2:00 PM'],
      description: 'Closed on Sundays and public holidays'
    }
  ];

  return (
    <div className="flex-1 md:ml-16 min-h-screen pt-20 md:pt-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <span className="hover:text-purple-600 cursor-pointer">Home</span>
          <span>/</span>
          <span className="text-slate-800">Contact Us</span>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Get Support for Your University Application Journey Today!</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Have questions or need assistance? Contact the Graduin team today for support. We're here to help you navigate your path to higher education.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 card-hover">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center mb-4">
                <info.icon className="text-purple-600" size={24} />
              </div>
              <h3 className="font-semibold text-slate-800 mb-3">{info.title}</h3>
              <div className="space-y-1 mb-3">
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-slate-600 text-sm">{detail}</p>
                ))}
              </div>
              <p className="text-xs text-slate-500">{info.description}</p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option>Select a topic</option>
                  <option>Application Support</option>
                  <option>Technical Issues</option>
                  <option>Account Help</option>
                  <option>General Inquiry</option>
                  <option>Accommodation</option>
                  <option>Course Information</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button type="submit" className="w-full button-primary">
                <Send size={20} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;