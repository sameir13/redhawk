import React from 'react'

const Heading = ({heading}) => {
  return (
    <div>
      <div className=" flex items-center justify-center mb-20">
        <h2 className=" text-4xl text-center font-semibold">{heading}</h2>
      </div>
    </div>
  )
}

export default Heading
