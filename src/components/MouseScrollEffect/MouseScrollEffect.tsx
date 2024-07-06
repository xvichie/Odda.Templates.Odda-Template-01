import React from 'react'

function MouseScrollEffect() {
  return (
    <div className="relative h-16 hover:cursor-pointer group">
      <div className="absolute left-1/2 bottom-10 -ml-5 w-7.5 h-12.5 border-2 border-white rounded-full 
      group-hover:border-blue-500">
        <div className="absolute left-1/2 -ml-1 w-2 h-2 bg-white top-2 rounded-full animate-scroll
        group-hover:bg-blue-500"></div>
      </div>
    </div>
  )
}

export default MouseScrollEffect