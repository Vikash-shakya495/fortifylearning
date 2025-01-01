import React from "react";
import { NavLink } from "react-router-dom";

function Addmultipleemails() {
  const recentlyViewedArticles = [
    "How to Get Started: Register and Login to Cybrary",
    "How To Get Started! Create a Cybrary account",
    "Cybrary for Teams: New Admin Training Videos",
    "Cyber Risk Impact FAQs",
    "Cybrary for Teams: Assigning Goals",
  ];

  const relatedArticles = [
    "Tech Know-How: Virtual Keyboards",
    "How to Get Started: Register and Login to Cybrary",
    "Cybrary for Teams: Roles & Permissions - User Roles",
    "How To Get Started! Create a Cybrary accounte",
    "Tech Know-How: Cybrary System Requirements",
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col md:flex-row">
      {/* Left Sidebar */}
      <aside className="w-full md:w-2/4 bg-gray-50 border-b md:border-r border-gray-300 px-4 py-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-600 mt-20">
          Articles in this section
        </h2>
        <ul className="space-y-3">
          <li>
            <NavLink
              to="/help.cybrary.it/How-To-Get-Started-Create-a-Cybrary-account"
              className="block text-gray-600 hover:bg-black hover:text-white w-full text-left"
            >
              How To Get Started! Create a Cybrary account
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/help.cybrary.it/How-to-Get-Started-Register-and-Login-to-Cybrary"
              className="block text-gray-600 hover:bg-black hover:text-white w-full text-left"
            >
              How to Get Started: Register and Login to Cybrary
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/help.cybrary.it/How-to-Add-Multiple-Emails-To-an-Account"
              className="block text-gray-600 hover:bg-black hover:text-white w-full text-left"
            >
              How to: Add Multiple Emails To an Account
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/help.cybrary.it/How-to-Get-Started-Account-Profile"
              className="block text-gray-600 hover:bg-black hover:text-white w-full text-left"
            >
              How to Get Started! Account Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="block text-gray-600 hover:bg-black hover:text-white w-full text-left"
            >
              Adding Your Learning Schedule to Your Calendar
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="block text-gray-600 hover:bg-black hover:text-white w-full text-left"
            >
              Canceling Your Cybrary Insider Pro Subscription
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="block text-gray-600 hover:bg-black hover:text-white w-full text-left"
            >
              How to: Delete your Cybrary Account
            </NavLink>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-grow p-6">
        {/* Breadcrumb Navigation */}
        <div className="text-sm text-gray-600 mb-4">
          <NavLink to="/help-center" className="hover:underline">
            Cybrary
          </NavLink>{" "}
          &gt;{" "}
          <NavLink
            to="/help.cybrary.it/How-to-Get-Started"
            className="hover:underline"
          >
            How to Get Started!
          </NavLink>{" "}
          &gt;{" "}
          <NavLink
            to="/help.cybrary.it/Cybrary-Basics"
            className="hover:underline"
          >
            Cybrary Basics
          </NavLink>
        </div>

        <h1 className="text-2xl  w-1/2 font-bold  text-gray-600 mt-16">
          How to: Add Multiple Emails To an Account
        </h1>

        {/* Main Content Header */}
        <div className="text-center mb-6">
          <p className="text-gray-500 text-left text-sm mt-6">
            1 year ago • Updated
          </p>
        </div>
        <div className="text-center mb-6">
          <p className="text-gray-500 text-left  text-sm mt-20 italic ">
            Are you looking to add an additional email(s) to your Cybrary
            account? Follow the directions for a step-by-step guide in the
            article below!
          </p>
        </div>

        {/* Image Section */}

        <div className="mt-4  mr-36 ">
          <p className="text-gray-700 mb-4 text-md   ">
            If you wish to add a second or third set of credentials to your
            existing Cybrary account it can be done via the Account Settings.
            These additional credentials can be:
          </p>
        </div>

        <div className="mt-6">
          <ul className="list-disc pl-6 mt-4 text-gray-700 text-lg  ml-8 space-y-2">
            <li>Email & Password</li>
            <li>SSO</li>
            <li>Social Logins (Gmail, etc)</li>
          </ul>
          <p className="mt-4 text-gray-700 text-md mr-48 ">
            Please note, you are unable to merge multiple accounts that already
            exist. To add an additional set of credentials, an email address
            that is not already in-use must be added. If you would like to add a
            previously used email to a new account, you will need to first
            Delete Your Account.
          </p>
        </div>

        <p className="mt-4 text-gray-700 text-lg mr-48  ">
          Please follow the steps below to add an email:
        </p>

        <p className="mt-5 text-gray-700 text-lg mr-48 ">
          1. Click your profile icon on the upper right-hand corner
        </p>
        <p className="mt-2 text-gray-700 text-lg mr-48 ">2. Click Settings</p>
        <p className="mt-2 text-gray-700 text-lg mr-48 ">
          3. Scroll down to “Email Addresses" (Image 1)
        </p>
        <p className="mt-2 text-gray-700 text-lg mr-48 ">
          4. Select the drop down arrow and click Add Email Address
        </p>
        <p className="mt-2 text-gray-700 text-lg mr-48 ">
          5. Enter in the additional email address you would like to use to
          access your account
        </p>
        <p className="mt-2 text-gray-700 text-lg mr-48 ">
          6. You will receive a message in the platform that an email has been
          sent to your primary email address as a means to verify your account
          (Image 2)
        </p>
        <p className="mt-2 text-gray-700 text-lg mr-48 ">
          7. Open your primary email to find "Verify Add Backup Email - Cybrary"
          in your inbox.
        </p>
        <p className="mt-2 text-gray-700 text-lg mr-48 ">
          8. Click Add Backup Email in the email to move forward (Image 3)
        </p>
        <p className="mt-2 text-gray-700 text-lg mr-48 ">
          9. You will receive confirmation of an Account Change request. You
          will be prompted to reset your password for security purposes. The
          secure reset password link will be sent to your alternate email
          address (Image 4)
        </p>
        <p className="mt-2 text-gray-700 text-lg mr-48 ">
          10. Visit your alternate email address to find an email containing the
          subject “Cybrary Password Reset”
        </p>
        <p className="mt-2 text-gray-700 text-lg mr-48 ">
          11.Click Reset Password in the email to finalize adding an additional
          email address to your Cybrary account! Please note, this step is
          required for security purposes so that a single password can be set
          for all your accounts.
        </p>
        <p className="mt-2 text-gray-700 text-lg mr-48 ">
          12. Should you wish to make any further changes to your Email Address
          settings, such as changing your Primary Account, you can do so via
          Account Settings (Image 5)
        </p>
        <div className="flex justify-center mt-10 mr-10 mb-6">
          <img
            src="https://help.cybrary.it/hc/article_attachments/18412564689683"
            alt="Cybrary for Teams"
            className="rounded shadow-lg w-full max-w-3xl"
          />
        </div>
        <p className="mt-2 text-center text-gray-700 text-lg mr-48 ">Image 1</p>
        <div className="flex justify-center mt-10 mr-10 mb-6">
          <img
            src="https://help.cybrary.it/hc/article_attachments/18412556028435"
            alt="Cybrary for Teams"
            className="rounded shadow-lg w-full max-w-3xl"
          />
        </div>
        <p className="mt-2 text-center text-gray-700 text-lg mr-48 ">Image 2</p>
        <div className="flex justify-center mt-10 mr-10 mb-6">
          <img
            src="https://help.cybrary.it/hc/article_attachments/18412570928531"
            alt="Cybrary for Teams"
            className="rounded shadow-lg w-full max-w-3xl"
          />
        </div>
        <p className="mt-2 text-center text-gray-700 text-lg mr-48 ">Image 3</p>
        <div className="flex justify-center mt-10 mr-10 mb-6">
          <img
            src="https://help.cybrary.it/hc/article_attachments/18412575842451"
            alt="Cybrary for Teams"
            className="rounded shadow-lg w-full max-w-3xl"
          />
        </div>
        <p className="mt-2 text-center text-gray-700 text-lg mr-48 ">Image 4</p>
        <div className="flex justify-center mt-10 mr-10 mb-6">
          <img
            src="https://help.cybrary.it/hc/article_attachments/18412556043027"
            alt="Cybrary for Teams"
            className="rounded shadow-lg w-full max-w-3xl"
          />
        </div>
        <p className="mt-2 text-center text-gray-700 text-lg mr-48 ">Image 5</p>
    
     
        <p className="text-xl text-center  mb-24 text-gray-700">
          If you experience any issues, please reach out to{" "}
          <a
            href="mailto:support@cybrary.it"
            className="text-black hover:underline"
          >
            support@cybrary.it
          </a>{" "}
          for assistance.
        </p>
      
        {/* Details Section */}
        <div>
          <div className="max-w-lg p-4">
            <hr className="my-6" />
            <div className="max-w-lg p-4 ml-48 mx-auto">
              <p className="text-center font-semibold text-gray-600">
                Was this article helpful?
              </p>
              <div className="flex justify-center space-x-4 mb-4">
                <button className="bg-black text-white py-2 px-4 rounded hover:bg-black">
                  Yes
                </button>
                <button className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-black">
                  No
                </button>
              </div>

              <p className="text-center text-gray-600">
                2 out of 4 found this helpful
              </p>
            </div>
            <hr className="my-6" />
          </div>
          <div className="flex justify-between p-4">
            {/* Recently Viewed Articles */}
            <div className="w-1/2 pr-4">
              <h3 className="text-lg font-bold mb-2 text-gray-600">
                Recently Viewed Articles
              </h3>
              <div className="space-y-2">
                {recentlyViewedArticles.map((article, index) => (
                  <button
                    key={index}
                    className="w-full text-left  text-gray-600 p-2 rounded hover:underline"
                  >
                    {article}
                  </button>
                ))}
              </div>
            </div>

            {/* Related Articles */}
            <div className="w-1/2 pl-4 mb-16">
              <h3 className="text-lg font-bold mb-2 text-gray-600">
                Related Articles
              </h3>

              <div className="space-y-2">
                {relatedArticles.map((article, index) => (
                  <button
                    key={index}
                    className="w-full text-left text-gray-600 p-2 rounded hover:underline"
                  >
                    {article}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <footer className="border-t-2 border-gray-300  py-4">
          <div className="container mx-auto">
            <NavLink to="/help-center">
              <button className="text-gray-700 mb-28 hover:underline">
                Cybrary
              </button>
            </NavLink>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Addmultipleemails;
