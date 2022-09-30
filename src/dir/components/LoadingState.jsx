import React from 'react'

function LoadingState({ info }) {
  return (
    <div className="full">
      <div className="wrap">
        <div className=" center regular">
         {info}
        </div>
      </div>
    </div>
  )
}

export default LoadingState
