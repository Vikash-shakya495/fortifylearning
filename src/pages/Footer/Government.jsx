import React from "react";
import { NavLink } from 'react-router-dom';
import { GrCertificate } from "react-icons/gr";
import { PiBooks } from "react-icons/pi";
import { FaLaptop } from "react-icons/fa";
import SignupComponent from "../../components/home/SignupComponent";
import { useDispatch } from 'react-redux';
import { togglePopup } from '../../store/signupPopupSlice';
import SignupPopup from '../../loginSystem/SignupPopup';
const Government = () => {
  const dispatch = useDispatch();
  return (
    <div className="bg-black text-white py-16 px-0 ">
      <section className="relative w-full h-full">
        <div
          className="absolute inset-0 bg-cover bg-center h-full w-full"
          style={{
            backgroundImage:
              "url('https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646fa67c814367f7b0fd5b29_Teams_Left_4.webp')",
            height: "80vh",
          }}
        ></div>

        <div className="w-full bg-black mt-20 shadow-xl mb-10"></div>
        <section className="relative left-0 sm:left-32 z-10 text-left px-4">
          <span className="inline-block px-4 py-1 bg-pink-500 text-xs font-semibold uppercase rounded-full mb-10">
            CYBRARY FOR GOVERNMENT
          </span>
          <h1 className="text-3xl md:w-2/4 sm:text-5xl md:text-7xl text-white font-light leading-snug tracking-tight">
            Salesforce Training for Military and Government Personnel
          </h1>
          <p className="mt-14 text-gray-400 leading-relaxed w-full sm:w-1/2">
            FortifyLearning offers comprehensive Salesforce training designed to meet the unique needs of
            government and military organizations. Our curriculum is tailored to enhance efficiency, improve
            data management, and support mission-critical operations.
            By providing a blend of hands-on exercises and in-depth instruction, our training programs
            empower your workforce to:
            ● Modernize operations: Leverage Salesforce to streamline processes and optimize
            resource allocation.
            ● Enhance data-driven decision making: Utilize Salesforce analytics for informed
            strategic planning.
            ● Strengthen security and compliance: Ensure data protection and adherence to
            government regulations.
          </p>
          <button className="bg-gradient-to-r mt-4 from-red-500 via-pink-500 to-fuchsia-500 px-8 py-3 rounded-md text-white hover:shadow-lg hover:shadow-pink-500/50 transition-shadow duration-300"
            onClick={() => dispatch(togglePopup())}>
            Fortify Learning for Business
          </button>
        </section>
      </section>


      <div className="bg-black text-white py-16 px-0 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
          {/* Left: Image */}
          <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
            <img
              src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64425d404b3bb868a68f6d4b_Frame%2096015.webp"// Replace with the actual image path
              alt="On-demand courses preview"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Right: Text Content */}
          <div className="lg:w-1/2 w-full text-left">
            <h1 className="text-3xl md:text-4xl  leading-tight mb-4">
              Master Salesforce with FortifyLearning's Comprehensive Training
            </h1>
            <p className="text-gray-400  mb-6">
              SkillAdvance offers a one-stop solution for Salesforce learning and development. Our platform
              includes:

            </p>

            {/* Bullet Points */}
            <ul className="text-gray-200 space-y-4 mb-6">
              <li className="flex gap-2">
                <GrCertificate size={44} className="rounded-full p-2" />
                On-demand Salesforce courses: Learn at your own pace with our video tutorials
                covering every aspect of Salesforce
              </li>
              <li className="flex gap-2">
                <PiBooks size={44} className="rounded-full p-2" />
                Hands-on Salesforce labs: Practice new skills in real-world scenarios with our
                interactive labs
              </li>
              <li className="flex gap-2">
                <FaLaptop size={44} className="rounded-full p-2" />
                Salesforce certification prep: Prepare for Salesforce certifications with targeted
                practice tests and study guides.
              </li>
            </ul>

            <p className="text-gray-400 mb-6">
              Beyond core Salesforce skills, we offer specialized training modules to help you excel in specific
              roles and industries.
              Unlock your team's full potential with SkillAdvance.

            </p>

            {/* CTA Button */}
            <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold text-lg rounded-lg hover:opacity-90 transition-opacity">
              <NavLink to='/demo-request'>
                Schedule a Demo
              </NavLink>
            </button>
          </div>
        </div>
      </div>


      <div className="bg-gradient-to-b from-gray-900 to-black text-white py-16 px-0 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
          {/* Left: Text Content */}
          <div className="lg:w-1/2 w-full text-left mb-8 lg:mb-0">
            <h1 className="text-3xl md:text-4xl leading-tight mb-4">
              Training Mapped to Industry Standards for Salesforce and ServiceMax
            </h1>
            <p className="text-gray-400 mb-6">
              Align and prioritize your Salesforce and ServiceMax training to established professional
              development frameworks. SkillAdvance has mapped all content to key Salesforce clouds and
              ServiceMax modules, covering various roles and responsibilities across these platforms.
            </p>
            <p className="text-gray-400 mb-6">
              Exclusive to SkillAdvance for Teams, professionals can customize training paths aligned with
              industry standards, focusing on the specific knowledge areas, skills, abilities, and tasks
              associated with each role. Maximize your training budget, get new hires up to speed, develop IT
              leaders, and empower your team with cutting-edge Salesforce and ServiceMax expertise.
            </p>

            {/* CTA Button */}
            <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold text-lg rounded-lg hover:opacity-90 transition-opacity">
              <NavLink to='/demo-request'>
                Schedule a Demo
              </NavLink>
            </button>
          </div>

          {/* Right: Image */}
          <div className="lg:w-1/2 w-full flex justify-center">
            <img
              src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64426c473d142e5701b34d33_Group%20314.webp" // Replace with the actual image URL
              alt="NICE Workforce Framework"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>


      <div className="bg-black text-white py-16 px-0 sm:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Header */}
          <h1 className="text-3xl md:text-5xl md:w-2/4 mx-auto leading-tight mb-4">
            Salesforce & ServiceMax Mastery
          </h1>
          <p className="text-gray-400 mx-auto md:w-2/3 text-center mb-6">
            Access more than 230 in-browser virtual labs to get hands-on experience with Salesforce and
            ServiceMax technologies. Learn key concepts across different Salesforce clouds and
            ServiceMax modules to enhance your skills and efficiency in managing customer relationships
            and field service operations.

          </p>
          {/* CTA Button */}
          <button className="px-6 py-3 mb-12 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold text-lg rounded-lg hover:opacity-90 transition-opacity">
            <NavLink to='/demo-request'>
              Schedule a Demo
            </NavLink>  
          </button>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Salesforce Certifications Card */}
          <div className="bg-gradient-to-b from-gray-900 to-black border rounded-3xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center border-b pb-4 border-gray-600">
              <img
                src="data:image/jpeg;base64,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ex1HKfg0r6/Spo3/ADWX+Sn/ALFnVfgF0dLQGzWm08+O43Z0dXdAMsDeMVOfs55u+0fADjnk2s6Qk1DamV1uj37lQglrBzmjPzmd/WPEdanqI6zvcLGS6Klqa+rZR0MElRUyO3Wwxty4nr4dWOsnl1q8tmGgJtMyyXW6ytNwmhMTYYzlsLCQSCf2nHdby4DHXzU8ipKaGeSeKnhZNL9JI1gDn9561zJnK5ijYIiJBj8IBBBGQeYKy3qyzv03f6y2zsMUccjjTl3APiJywgnnwwD6QQtSr5fGyQYexrgO0ZTRlYxq5kTpY/3jPxBXHsHs8scNxvU0ZbHOGQUziMbwGS8jtBJaM9rSrV8ng/cx/gC5Rw4Ba53RijYIiJBgs3bULU6zazr9+Po6eskNTA48A/e4vx3PLuHd2rSK+ZI2St3ZWNe3scMhbF2MauZF6WP67fWrK2H2R9Zfpb0+Mmlo4nMikI4Oldw80+hu8D94K6/IqT/Cw/6YXM1oa0NaAAOQA5JnO6MUT9RESDBQrabouXVtFTS0MzI66j3+jEmdyRrsZaSOR80EHj1jryJqi1OwGVbzZLrY5DHd7fUUhzgOkb5hPoePNPgV561w9jZGFkjQ5p4FrhkFRy46B0rcd41FkpmOccl1ODCSe3LCMp1MTqmakV+TbItLyfRiuh+5UZ/7gVw/oc03/irp/rM/sW9dB1WWIiIpDhERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERAEZvOpHRSvp6AAOaS10rhnj6B+ZXgG51xJJrajj2SuH5qeGgozIZDSQF5OS4xjJK5egh/dR/hC8SvluKxE3Kda3gl/09OljKFKNo0zkRQ2l1TWRYFRHHOO35rvZw9i9im1Nb5sCUyQu+23I9YXVRzXCVdpWfx09iFTAV6fdv5HtIuKCpgqBmCaOQfYcCuVegmpK6ORpp2YREWmBERABERABERABERABERABERABEXy97I2l0jmtaOZccBGwH0i8upv8AbafP6/pXdkQ3s+PL2ryKrVkjsikp2tH1pDk+of1XDWzLC0eKfpqdVPBV6m0fXQla65rqMEg1cAI5gyBQOruVZWZFRUPc0/sg4b6guovJq9IVf8OGnxO+GU6ffl6BFJK7SsjcuoZg8fUk4H18vgvBqqSopH7tTC+M/aHA9x614WIwWIw/5kdPHsPTpYmlV4GcIJBBBwRyIXegvFxp/o6uQjsed74rooo06tSm7wk15FJQjPSSue9DqqsZ9NDDIPRlpXeh1ZAR+upZWn7Dg744UTRd1PN8ZDv387HNPAYeXdJxHqS2P+dK9n3oz+S7TLvbn8q2AfeeB8VXqLrj0gxC4op+pzyyqk9myyWVVO/5lRE7ueCuUEHkQVWK/MDsV10ifbT5+xJ5QuyfL3LQRVkHvHJzh3FOlk/eO/En/uKP7fP2M+yH+vl7lmr4dLGz58jG97gFWZOefHvX5gdiV9IvCnz9jVlHjPl7ljPuVCz59ZTg9nSDK60l/tkfA1IcfsscfyUDRRl0grPhgl6lI5VS7ZMmMuqqJuRHFO89uAB8V0ZtWTn6CljZ6XuLv6KOIuSpnOMn3reSLxy/Dx7Lnpz3+5TZHlHRtPVG0D28158sskzt6aR8ju17iT7V8IuGpiKtXjk3/J1QpQhwpIIvRorJX1mCyExs+vL5o/qVIaDTFLBh1U41D+zk31da6sNleJxGqjZeL0IVsbRpbu7+BFqGgqq5+7TROcM8XcmjvK9oaSmwN6rjB6wGE/mpUxjI2BkbWtaOAa0YAX0voKGRYeEfxPvP0PJq5pVk/uaIL5exsjS17Q5p5hwyCvpF7Z5p5FXpy31GSxjoHdsRwPVyXj1WlapmTTTRyjsd5p/opei8+vleFrauNn8NDrp46vT2lfzK7qLZXU301LKB2hu8PWOC6is9cM9JTVH09PFJ6XMBXl1ej0f8c/Vf78juhmz78fQrZFOpdPWyTJ6AsPax5Hs5LqSaUpD9HUTt78H8lwzyLFR2s/5+p0xzOg97oiCKTO0if2K0dxi/+ridpOp/ZqYj3ghQeUY1dzmvqVWPwz73zI8i97/8pW9U1P63f0X6NKVnXPAO4n+iT7Lxn7bG/rcP+o8BFI26SmPzquMdzCfzXPHpKMfSVjnfdjA/Mqkcnxr7nNfUR5hhl3vmRVFNItL29nzzNJ95+PgAu7DZ7dD8yjiP3xvfFdMMgxD4mkRlmlFbJsgMUUkzt2GN8juxjST7F6NNp+5T4/UiJp65XY9nP2KdNa1jd1jQ0DqAwv1d9Lo/SX5k2+X1OWebTfBGxGqXSbBg1dS532Yxj2lezSWyio8Gnp2NcP2zxd6yu4i9WhgcNQ4IK/M4auKrVeKQREXWc4REQB//2Q==" // Replace with Salesforce logo URL
                alt="Salesforce"
                className="w-6 h-6 mr-2"
              />
              Salesforce Certifications
            </h2>
            <ul className="space-y-2 text-gray-300">
              <li className="flex justify-between items-center border-b border-gray-700 pb-4">
                <NavLink
                  to="/course/aws-cloud-practitioner-2021-10-12/"
                  className="hover:text-pink-500 transition-colors duration-300 w-full"
                >
                  Salesforce Certified Administrator
                  <span className="text-gray-500 float-right">›</span>
                </NavLink>
              </li>
              <li className="flex justify-between items-center border-b border-gray-700 pb-4">
                <NavLink
                  to="/course/aws-certified-solutions-architect-associate"
                  className="hover:text-pink-500 transition-colors duration-300 w-full"
                >
                  Salesforce Certified Platform App Builder
                  <span className="text-gray-500 float-right">›</span>
                </NavLink>
              </li>
              <li className="flex justify-between items-center border-b border-gray-700 pb-4">
                <NavLink
                  to="/courses/aws-certified-security-specialty"
                  className="hover:text-pink-500 transition-colors duration-300 w-full"
                >
                  Salesforce Certified Service Cloud Consultant
                  <span className="text-gray-500 float-right">›</span>
                </NavLink>
              </li>
            </ul>
          </div>

          {/* ServiceMax Certifications Card */}
          <div className="bg-gradient-to-b from-gray-900 to-black border rounded-3xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center border-b pb-4 border-gray-600">
              <img
                src="data:image/jpeg;base64,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" // Replace with ServiceMax logo URL
                alt="ServiceMax"
                className="w-6 h-6 mr-2"
              />
              ServiceMax Certifications
            </h2>
            <ul className="space-y-2 text-gray-300">
              <li className="flex justify-between items-center border-b pb-4 border-gray-700">
                <NavLink
                  to="/certification-prep-courses/microsoft-azure-fundamentals"
                  className="hover:text-pink-500 transition-colors duration-300 w-full"
                >
                  ServiceMax Certified Administrator
                  <span className="text-gray-500 float-right">›</span>
                </NavLink>
              </li>
              <li className="flex justify-between items-center border-b pb-4 border-gray-700">
                <NavLink
                  to="/course/az-104-microsoft-azure-administrator"
                  className="hover:text-pink-500 transition-colors duration-300 w-full"
                >
                  ServiceMax Certified Field Service Consultant
                  <span className="text-gray-500 float-right">›</span>
                </NavLink>
              </li>
              <li className="flex justify-between items-center border-b pb-4 border-gray-700">
                <NavLink
                  to="/certification-prep-courses/designing-microsoft-azure-infrastructure-solutions"
                  className="hover:text-pink-500 transition-colors duration-300 w-full"
                >
                  ServiceMax Certified Developer
                  <span className="text-gray-500 float-right">›</span>
                </NavLink>
              </li>
              <li className="flex justify-between items-center border-b pb-4 border-gray-700">
                <NavLink
                  to="course/az-500-microsoft-azure-security-technologies"
                  className="hover:text-pink-500 transition-colors duration-300 w-full"
                >
                  ServiceMax Certified Implementation Specialist
                  <span className="text-gray-500 float-right">›</span>
                </NavLink>
              </li>
              <li className="flex justify-between items-center">
                <NavLink
                  to="course/az-500-microsoft-azure-security-technologies"
                  className="hover:text-pink-500 transition-colors duration-300 w-full"
                >
                  ServiceMax Certified Data Migration Specialist
                  <span className="text-gray-500 float-right">›</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

      </div>
      <div className="w-full mt-24 flex justify-center">
        <SignupComponent />
      </div>
    </div>
  );
};

export default Government;