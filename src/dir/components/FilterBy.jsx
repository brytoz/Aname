import React from 'react'

function FilterBy({ uncat, cat }) {
  return (
    <div className="flexDisplay">
      <div>Filter by:</div>
      <div className="wrap marginTop">
        <div onClick={uncat} className="theButton">
          uncategorized
        </div>
        <div className="theButton">Categorzied</div>
      </div>
    </div>
  )
}

export default FilterBy
