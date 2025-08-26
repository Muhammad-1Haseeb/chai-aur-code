import React from 'react'

const Card = ({username}) => {
    
  return (
    <>
        {/* Image Card Below */}
      <div className="relative h-[300px] w-[300px] rounded-md">
        <img
          className="h-full w-full rounded-md object-cover"
          src="https://images.unsplash.com/photo-1547721064-da6cfb341d50?ixlib=rb-4.0.3&ixid=M3w5fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Unsplash Photo"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent rounded-md">
          <div className="absolute bottom-1 left-4 text-xs">
            <h1 className="font-semibold text-white">{username}</h1>
            <p className="text-white text-[10px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis!
            </p>
            <button className="inline-flex cursor-pointer items-center text-xs font-semibold text-white">
              View Profile →
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card