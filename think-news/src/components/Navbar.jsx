import React from 'react';
export default function Navbar() {
    return (
      <div>
        <div>
          <nav className="flex fixed bg-white navbar navbar-expand-lg shadow-md py- items-center w-full justify-between">
            <div className="px-6 w-full flex flex-wrap items-center justify-between">
              <div className="flex items-center">
                <button className="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out mr-2" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContentY" aria-controls="navbarSupportedContentY" aria-expanded="false" aria-label="Toggle navigation">
                </button>
                <a className="navbar-brand font-bold text-xl" href="/">
                  <span className="text-gray-800">Think</span><span className="text-blue-600">News</span>
                </a>
                <ul className="mx-4 flex flex-wrap justify-center">
                  <li className="mr-6">
                    <a className="text-blue-500 hover:text-blue-800" href="/business">Business</a>
                  </li>
                  <li className="mr-6">
                    <a className="text-blue-500 hover:text-blue-800" href="/entertainment">Entertainment</a>
                  </li>
                  <li className="mr-6">
                    <a className="text-blue-500 hover:text-blue-800" href="/health">Health</a>
                  </li>
                  <li className="mr-6">
                    <a className="text-blue-500 hover:text-blue-800" href="/science">Science</a>
                  </li>
                  <li className="mr-6">
                    <a className="text-blue-500 hover:text-blue-800" href="/sports">Sports</a>
                  </li>
                  <li className="mr-6">
                    <a className="text-blue-500 hover:text-blue-800" href="/technology">Technology</a>
                  </li>
                </ul>
              </div>
              <div className="items-center lg:ml-auto my-2">
                <a className="inline-block px-6 py-2.5 mr-2 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="https://newsapi.org" target="_blank" rel="noreferrer">SOURCE</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    )
  }