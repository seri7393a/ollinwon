import React, { useState } from "react";
import GoogleMap from "./GoogleMap";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    mobilenumber: "",
    message: "",
  });

  const [serverResponse, setServerResponse] = useState(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("https://nodeapp-r5o9.onrender.com/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      const responseData = await response.json();
      setServerResponse(responseData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="py-12 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-yellow-600 mb-4" data-aos="fade-left">
              Get In Touch
            </h2>
            <p className="text-lg text-white mb-8" data-aos="fade-right">
              Have questions or need assistance? Feel free to contact us.
            </p>
            <div className="flex items-center mb-8" data-aos="fade-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="rgb(202 138 4 / var(--tw-text-opacity))"
                className="w-5 h-5 text-yellow-600"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
                  clip-rule="evenodd"
                />
              </svg>

              <span className="text-lg text-white" style={{cursor:'pointer'}}> +91 8590083588</span>
            </div>

          </div>
          <div>
            <form
              method="POST"
              onSubmit={handleSubmit}
              encType="application/x-www-form-urlencoded"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="fullname"
                  required
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="py-3 px-4 rounded-md bg-gray-800 text-white outline-none"
                />
                <input
                  type="email" 
                  name="email"
                  required
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="py-3 px-4 rounded-md bg-gray-800 text-white outline-none"
                />
              </div>
              <input
                type="text"
                name="mobilenumber"
                required
                onChange={handleChange}
                placeholder="Mobile Number"
                className="py-3 px-4 rounded-md bg-gray-800 text-white outline-none mt-4"
              />
              <textarea
                required
                onChange={handleChange}
                name="message"
                placeholder="Message"
                className="py-3 px-4 rounded-md bg-gray-800 text-white outline-none mt-4 w-full"
              ></textarea>
              <button
                type="submit"
                className="bg-yellow-600 text-white py-3 px-6 mt-4 rounded-md hover:bg-yellow-700 transition duration-300" style={{cursor:'pointer'}}
              >
                Submit
              </button>
            </form>
            {serverResponse && <p>{JSON.stringify(serverResponse)}</p>}
          </div>
        </div>
      </div>
      <GoogleMap />
    </div>
  );
};

export default Contact;
