import React from 'react'

export default function NewsItem(props) {
        return (
            <div className="p-4 md:w-1/3">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{props.source}</span>
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={props.image} alt="news" />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{props.category.toUpperCase()}</h2>
            <h1 className="title-font text-gray-900 text-lg  font-medium mb-3">{props.title}</h1>
            <p className="leading-relaxed mb-3">{props.description}</p>
            <p className="leading-relaxed mb-1">Published at {props.publishedAt}</p>
            <p className="leading-relaxed mb-3">{!props.author?'':`by ${props.author}`}</p>
            <div className="flex items-center flex-wrap ">
              <a href={props.url} target="_blank" rel="noreferrer" className="text-indigo-500 flex items-center md:mb-2 lg:mb-0"><button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"> Read More &rarr;
</button>
              </a>
            </div>
          </div>
        </div>
      </div>
)
}