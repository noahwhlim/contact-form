import { useState } from "react";

function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);

  return (
    <div className="bg-mint h-full min-h-screen grid place-items-center">
      <div className="bg-white rounded-md p-8 lg:p-12">
        <h1 className="text-2xl mb-8">Contact Us</h1>

        {/* name */}
        <div className="flex flex-col lg:flex-row lg:space-x-4 pb-2">
          <div className="w-full lg:w-1/2">
            <label>First Name * </label>
            <input
              type="text"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              className='outline outline-medium-grey rounded-sm flex flex-col w-full mt-2 mb-2 lg:mb-0 px-2'
            />
          </div>

          <div className="w-full lg:w-1/2">
            <label>Last Name * </label>
            <input
              type="text"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              className="outline outline-medium-grey rounded-sm flex flex-col w-full mt-2 px-2"
            />
          </div>
        </div>

        {/* email */}
        <div className="py-2">
          <label>Email Address * </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="outline outline-medium-grey rounded-sm flex flex-col w-full mt-2 px-2"
          />
        </div>

        {/* query type */}
        <div className="py-2">
          <label className="">Query Type *</label>
          <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-2 lg:space-y-0 mt-2">
            <div className="flex flex-row outline outline-medium-grey pl-2 rounded-md py-2 w-full lg:w-1/2">
              <input
                type="radio"
                id="general-inquiry"
                name="query-type"
                className="mr-2"
              />
              <label className="" for="general-inquiry">
                General Inquiry
              </label>
            </div>

            <div className="flex flex-row outline outline-medium-grey pl-2 rounded-md py-2 w-full lg:w-1/2">
              <input
                type="radio"
                id="support-request"
                name="query-type"
                className="mr-2"
              />
              <label className="" for="support-request">
                Support Request
              </label>
            </div>
          </div>
        </div>

        {/* message */}
        <div className="flex flex-col py-2">
          <label>Message *</label>
          <textarea
            className="outline outline-medium-grey rounded-sm h-20 resize-none px-2 py-1 mt-2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        {/* consent */}
        <div className="flex flex-row">
          <input type="checkbox" className="mr-2" value={consent} onChange={(e) => setConsent(!consent)}/>
          <label className="text-wrap">
            I consent to being contacted by the team *
          </label>
        </div>

        {/* submit */}
        <button
          type="submit"
          className="flex justify-center items-center w-full h-9 rounded-lg text-white bg-sub-green mt-2"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
