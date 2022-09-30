import React from 'react'
import { AiFillLike, AiFillDislike } from 'react-icons/ai'

const Cards = ({ value, categories, like, action }) => {
  return (
    <div className="full">
      <div className="wrap">
        <div className="flex">
          <div className="opacity bold"> Category: {categories}</div>
          <div className="opacity bold">Likes:{like}</div>
        </div>
        <div className="marginTop  ">{value}</div>

        <div className="flex-1">
          <div onClick={() => action} className="rounded" title="Dislike this joke">
            <div>
              <AiFillDislike size={26} color="red" />
            </div>
          </div>
          <div onClick={() => action} className="rounded" title="like this joke">
            <div>
              <AiFillLike size={26} color="greenyellow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
