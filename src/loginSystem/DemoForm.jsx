import React from 'react';  
import SignupComponent from '../components/home/SignupComponent';

function DemoForm() {
  return (
    <div className="mt-40">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl lg:text-4xl text-center text-white leading-tight mb-6">
        Get a Demo of <span className="text-pink-500">Cybrary for<br /> Teams</span>
      </h1>

      {/* Subheading */}
      <p className="text-sm text-center text-gray-300 mb-6">
        See the platform 96% of Fortune 1000 companies use to empower employees with<br />
        cybersecurity skills to effectively defend their organizations. Complete the form below to<br />
        schedule a demo of Cybrary for Teams and our sales team will contact you shortly.
      </p>

      {/* Form */}
      <div className="text-center text-white">
      <div className="bg-black p-6 sm:p-10 rounded-lg border border-red-500 md:w-2/5 mx-auto">
          <form className="space-y-4">
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name*"
                className="w-full p-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <input
                type="text"
                placeholder="Last name*"
                className="w-full p-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Email and Phone Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email*"
                className="w-full p-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <div className="grid grid-cols-2 gap-2">
                <select
                  className="w-full p-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
                >
                  <option>India</option>
                  <option>USA</option>
                  <option>UK</option>
                </select>
                <input
                  type="text"
                  placeholder="+91"
                  className="w-full p-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
            </div>

            {/* Company and Country Dropdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Company name*"
                className="w-full p-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <select
                className="w-full p-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <option value="Country Dropdown">Country Dropdown</option>
                <option value="United Arab Emirates">AE</option>
                <option value="Afghanistan">AF</option>
                <option value="Antigua and Barbuda">AG</option>
                <option value="Anguilla">AI</option>
                <option value="Albania">AL</option>
                <option value="Armenia">AM</option>
                <option value="Angola">AO</option>
                <option value="Antarctica">AQ</option>
                <option value="Argentina">AR</option>
                <option value="Austria">AT</option>
                <option value="Australia">AU</option>
                <option value="Aruba">AW</option>
                <option value="Aland Islands">AX</option>
                <option value="Azerbaijan">AZ</option>
                <option value="Bosnia and Herzegovina">BA</option>
                <option value="Barbados">BB</option>
              </select>
            </div>

            {/* Role and Department Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <select
                className="w-full p-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <option>I am a...*</option>
                <option value="Student/Intern">Student/Intern</option>
                <option value="Practitioner">Practitioner</option>
                <option value="Job Seeker">Job Seeker</option>
                <option value="C-Suite Executive">C-Suite Executive</option>
                <option value="SVP, VP, Department Head">SVP, VP, Department Head</option>
                <option value="Director, Sr. Director">Director, Sr. Director</option>
                <option value="Manager, Sr. Manager">Manager, Sr. Manager</option>
                <option value="Infosec Generalist">Infosec Generalist</option>
                <option value="Architect">Architect</option>
                <option value="Analyst">Analyst</option>
                <option value="Engineer">Engineer</option>
                <option value="Developer">Developer</option>
                <option value="Other">Other</option>
              </select>
              <select
                className="w-full p-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <option>Department*</option>
                <option value="Compliance">Compliance</option>
                <option value="Data Science">Data Science</option>
                <option value="Data Engineering">Data Engineering</option>
                <option value="IT">IT</option>
                <option value="Operations">Operations</option>
                <option value="QA/Testing">QA/Testing</option>
                <option value="Sales Engineering">Sales Engineering</option>
                <option value="Sales Operations">Sales Operations</option>
                <option value="Security">Security</option>
                <option value="Support/Help Desk">Support/Help Desk</option>
                <option value="Technical Marketing">Technical Marketing</option>
                <option value="Learning & Development">Learning & Development</option>
              </select>
            </div>

            {/* Team Size */}
            <select
              className="w-full p-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              <option>Team Size*</option>
              <option disabled="" value="">Please Select</option>
              <option value="5 - 9">5 - 9</option>
              <option value="10 - 49">10 - 49</option>
              <option value="50 - 99">50 - 99</option>
              <option value="100 - 499">100 - 499</option>
              <option value="500+">500+</option>
            </select>

            {/* Interest */}
            <input
              type="text"
              placeholder="What most interests you about our product?"
              className="w-full p-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />

            {/* Source */}
            <select
              className="w-full p-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              <option>How did you hear about Cybrary?</option>
            </select>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full p-3 bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white font-semibold rounded-md hover:shadow-lg hover:shadow-pink-500/50"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="w-full mt-24 flex justify-center">
      <SignupComponent/>
      </div>
    </div>
  );
}

export default DemoForm;