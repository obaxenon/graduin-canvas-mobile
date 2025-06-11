
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';

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

  const quickLinks = [
    'Student Accommodation',
    'Course Finder', 
    'Private Institutions',
    'Traditional Universities',
    'Universities Of Technology'
  ];

  const faqs = [
    {
      question: 'How do I apply to multiple universities?',
      answer: 'Simply create your profile on Graduin, select your preferred institutions, and submit your application. Our platform allows you to apply to multiple universities with one application.'
    },
    {
      question: 'What documents do I need?',
      answer: 'You will need your ID document, matric certificate, academic transcripts, and a motivational letter. Some courses may require additional documents.'
    },
    {
      question: 'How long does the application process take?',
      answer: 'The initial application takes about 30 minutes to complete. Universities typically respond within 2-6 weeks depending on their admission cycles.'
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

        {/* Contact Form and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Send us a Message</h2>
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

          {/* Map and Additional Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="text-slate-500 mx-auto mb-2" size={48} />
                  <p className="text-slate-600">Interactive Map</p>
                  <p className="text-sm text-slate-500">Find our office location</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-slate-800 mb-2">Visit Our Office</h3>
                <p className="text-slate-600 text-sm">
                  123 University Street, Johannesburg, 2000<br />
                  Near major universities and transport links
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <MessageSquare size={20} />
                Live Chat Support
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                Need immediate help? Our live chat support is available during business hours to assist you with urgent queries.
              </p>
              <button className="w-full bg-green-500 text-white py-3 rounded-xl font-medium hover:bg-green-600 transition-colors">
                Start Live Chat
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 mb-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-slate-200 pb-6 last:border-b-0">
                <h3 className="font-semibold text-slate-800 mb-2">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 mb-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Quick Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {quickLinks.map((link, index) => (
              <button key={index} className="p-4 text-center hover:bg-slate-50 rounded-xl transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl mx-auto mb-2"></div>
                <span className="text-sm text-slate-600 font-medium">{link}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="text-center bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Need Urgent Help?</h2>
          <p className="text-lg mb-8 opacity-90">For urgent application deadline assistance or technical emergencies, contact our priority support line.</p>
          <button className="bg-white text-red-600 px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200">
            Call Emergency Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
