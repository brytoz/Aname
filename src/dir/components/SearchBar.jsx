import React, { useState } from 'react'

const SearchBar = ({ infos, getSearcresults }) => {
  const [query, setQuery] = useState('')

  const preventReload = (e) => e.preventDefault()

  const handleFastRefresh = (e) => {
    if (!e.target.value) return setQuery(infos)

    const getResults = infos.filter(info => info.value.toLowerCase().includes(query))
    setQuery(getResults)
  }
  return (
    <div
     className='forms'
    >
      <form onSubmit={preventReload}>
        <input
          type="text"
          className='input light'
          placeholder="Enter text here"
          onChange={handleFastRefresh}
        />
        <button className='button light'>Search</button>
      </form>
      {query}

    </div>
  )
}

export default SearchBar
