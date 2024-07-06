import React from 'react'

function Container({children}:any) {
  return (
    <div className='mobile_wrapper xl:max-w-6xl mx-auto'>
        {children}
    </div>
  )
}

export default Container