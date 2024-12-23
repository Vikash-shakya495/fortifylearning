import React from "react";
import SignupComponent from "../components/home/SignupComponent";

const DemoForm = () => {
    return (
        <div className="mt-40 flex w-full flex-col items-center justify-center p-6 ">
            <h2 className="text-5xl md:w-1/3 text-center text-white mb-2">
                Get a Demo of <span className=" text-pink-500 ">Cybrary for Teams</span>
            </h2>
            <p className="text-center md:w-2/3 text-gray-300 mb-20">
                See the platform 96% of Fortune 1000 companies use to empower employees with cybersecurity skills. Complete the form below to schedule a demo of Cybrary for Teams, and our sales team will contact you shortly.
            </p>
            <div className="w-full max-w-3xl mb-40 bg-gray-800 text-white p-8 rounded-lg border border-pink-600">
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="First name*"
                            className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-pink-500 focus:ring focus:ring-pink-500"
                        />
                        <input
                            type="text"
                            placeholder="Last name*"
                            className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-pink-500 focus:ring focus:ring-pink-500"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="email"
                            placeholder="Email*"
                            className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-pink-500 focus:ring focus:ring-pink-500"
                        />
                        <div className="flex gap-2 items-center">
                            <select
                                className="p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-pink-500 focus:ring focus:ring-pink-500"
                            >
                                <option>+91</option>
                                <option>+1</option>
                                <option>+44</option>
                            </select>
                            <input
                                type="tel"
                                placeholder="Phone number*"
                                className="flex-1 p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-pink-500 focus:ring focus:ring-pink-500"
                            />
                        </div>
                    </div>
                    <input
                        type="text"
                        placeholder="Company name*"
                        className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-pink-500 focus:ring focus:ring-pink-500"
                    />
                    <select
                        className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-pink-500 focus:ring focus:ring-pink-500"
                    >
                        <option>Country Dropdown*</option>
                        <option>India</option>
                        <option>USA</option>
                        <option>UK</option>
                    </select>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <select
                            className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-pink-500 focus:ring focus:ring-pink-500"
                        >
                            <option>I am a... *</option>
                            <option>Manager</option>
                            <option>Employee</option>
                        </select>
                        <select
                            className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-pink-500 focus:ring focus:ring-pink-500"
                        >
                            <option>Department*</option>
                            <option>IT</option>
                            <option>HR</option>
                        </select>
                    </div>
                    <select
                        className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-pink-500 focus:ring focus:ring-pink-500"
                    >
                        <option>Team Size*</option>
                        <option>1-10</option>
                        <option>11-50</option>
                    </select>
                    <input
                        type="text"
                        placeholder="What most interests you about our product?"
                        className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-pink-500 focus:ring focus:ring-pink-500"
                    />
                    <select
                        className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-pink-500 focus:ring focus:ring-pink-500"
                    >
                        <option>How did you hear about Cybrary?</option>
                        <option>Social Media</option>
                        <option>Referral</option>
                    </select>
                    <button
                        type="submit"
                        className="w-full p-3 rounded-lg bg-pink-600 hover:bg-pink-700 text-white font-bold transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
            <div className="w-full mt-24 flex justify-center">
        <SignupComponent />
      </div>
        </div>
    );
};

export default DemoForm;
