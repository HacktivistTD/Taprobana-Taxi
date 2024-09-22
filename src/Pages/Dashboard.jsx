import { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import ESTD2009 from '../Images/ESTD2009.png';

export default function Dashboard() {
  const [selectedExperience, setSelectedExperience] = useState('Driver');
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [fullName, setFullName] = useState('');
  const [title, setTitle] = useState(''); // New state for Title
  const [experience, setExperience] = useState('');

  const handleSelect = (event) => {
    setSelectedExperience(event.target.textContent);
    setDropdownOpen(false); // Close dropdown after selection
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const db = getFirestore(); // Initialize Firestore
    try {
      await addDoc(collection(db, 'experiences'), {
        fullName: fullName,
        title: title, // Saving the title
        experience: experience,
        experienceAs: selectedExperience,
        timestamp: new Date(),
      });
      alert("Experience submitted successfully!");
    } catch (error) {
      console.error("Error submitting experience: ", error);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            src={ESTD2009}
            alt="TAPROBANA TAXI"
            className="mx-auto h-10 w-auto rounded-full"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Write Your Experience Here ..
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Title Section */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                Title
              </label>
              <div className="mt-2">
                <input
                  id="title"
                  name="Title"
                  type="text"
                  required
                  autoComplete="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Full Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="FullName"
                  type="text"
                  required
                  autoComplete="name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="experience" className="block text-sm font-medium leading-6 text-gray-900">
                Write Your Experience Here
              </label>
              <div className="mt-2">
                <input
                  id="experience"
                  name="Experience"
                  type="text"
                  required
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="relative">
              <button
                type="button"
                className="flex w-full justify-between rounded-md bg-gray-100 border border-gray-300 px-4 py-2 text-sm font-semibold leading-6 text-gray-900 shadow-sm hover:bg-gray-200 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                onClick={() => setDropdownOpen(!isDropdownOpen)}
              >
                Experience As: {selectedExperience}
                <svg
                  className="h-5 w-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <ul className="absolute right-0 z-10 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                  <li>
                    <button
                      type="button"
                      className="block w-full px-4 py-2 text-gray-900 hover:bg-gray-100"
                      onClick={handleSelect}
                    >
                      Driver
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="block w-full px-4 py-2 text-gray-900 hover:bg-gray-100"
                      onClick={handleSelect}
                    >
                      Passenger
                    </button>
                  </li>
                </ul>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Share Your Experience
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
