import PageBanner from '../components/PageBanner';
import { FaAmbulance, FaPhoneAlt, FaFirstAid, FaHospital, FaUserMd, FaExclamationTriangle } from 'react-icons/fa';

export default function EmergencyInfo() {
  const emergencyContacts = [
    { 
      name: 'Ambulance Service', 
      number: '102', 
      description: '24/7 emergency ambulance service',
      icon: <FaAmbulance className="text-3xl text-pink-600" />
    },
    { 
      name: 'Local Hospital', 
      number: '+977-23-XXXXXX', 
      description: 'Nearest emergency medical facility',
      icon: <FaHospital className="text-3xl text-green-600" />
    },
    { 
      name: 'Clinic Emergency', 
      number: '+977-23-XXXXXX', 
      description: '24/7 clinic emergency line',
      icon: <FaUserMd className="text-3xl text-purple-600" />
    },
  ];

  const emergencyProcedures = [
    {
      title: 'Medical Emergency',
      steps: [
        'Stay calm and assess the situation',
        'Call emergency services immediately',
        'Provide clear information about the emergency',
        'Follow any first aid instructions given by the operator',
        'Do not move the patient unless in immediate danger',
        'Wait for emergency services to arrive'
      ]
    },
    {
      title: 'First Aid Basics',
      steps: [
        'Check for danger to yourself and others',
        'Check if the person is responsive',
        'Call for help if needed',
        'Control any bleeding with direct pressure',
        'If unresponsive and not breathing normally, begin CPR if trained',
        'Place in recovery position if breathing normally but unconscious'
      ]
    },
    {
      title: 'What to Bring to the Emergency Room',
      steps: [
        'Identification and insurance information',
        'List of current medications and allergies',
        'Medical history summary',
        'Emergency contact information',
        'Any relevant medical records or test results'
      ]
    }
  ];

  return (
    <div className="bg-white">
      <PageBanner 
        title="Emergency Information"
        description="Important emergency contacts and procedures for your safety"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Emergency Info' }
        ]}
        bgImage="/assets/home/slider/1.jpg"
      />

      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Emergency Contacts Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Emergency Contacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    {contact.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">{contact.name}</h3>
                    <a 
                      href={`tel:${contact.number}`} 
                      className="text-2xl font-bold text-pink-600 hover:text-pink-700 transition-colors block my-2"
                    >
                      {contact.number}
                    </a>
                    <p className="text-slate-600">{contact.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What to Do in an Emergency Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">What to Do in an Emergency</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emergencyProcedures.map((procedure, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                  <FaFirstAid className="text-pink-600 mr-2" />
                  {procedure.title}
                </h3>
                <ul className="space-y-2">
                  {procedure.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start">
                      <span className="text-pink-500 mr-2">•</span>
                      <span className="text-slate-700">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Important Notes Section */}
        <section className="bg-pink-50 p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
            <FaExclamationTriangle className="text-pink-600 mr-2" />
            Important Notes
          </h3>
          <ul className="space-y-2 text-slate-700">
            <li>• Always call emergency services first in case of serious injury or illness</li>
            <li>• Keep important medical information easily accessible</li>
            <li>• Know the location of the nearest hospital or emergency facility</li>
            <li>• Teach family members basic first aid and emergency procedures</li>
            <li>• Keep emergency numbers saved in your phone and posted in visible locations</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
