import React, { Fragment, useState } from 'react'
import Cards from '../components/Cards'
import { useQuery } from 'react-query'
import { API } from '../api/defineCall'
import LoadingState from '../components/LoadingState'
import FilterBy from '../components/FilterBy'

export default function Home() {
  const myApi = API()

  const [showAll, setShowAll] = useState(true)
  const [showUnCat, setShowUnCat] = useState(false)

  const [query, setQuery] = useState('killed the')

  const { data, isLoading, isError } = useQuery(['jokes'], () => myApi)

  const filterUnCategorized = async () => {
    console.log('clicked me')
    const info = await data.find((datas) => datas.categories === [undefined])

    if (info) console.log('yes', info)
    else console.log('no')
    return info
  }

  const UnCat = () => {
    const { info } = filterUnCategorized()

    if (info) {
      setShowAll(false)
      setShowUnCat(true)
    }
    return (
      <Cards
        categories={info.categories}
        // action
        // like
        value={info.value}
        key={info.id}
      />
    )
  }

  const preventReload = (e) => e.preventDefault()

  if (data) {
    data
      .filter((newJokes) => {
        const newJoke = newJokes.value
          .toLowerCase()
          .includes(query.toLowerCase())
        if (newJoke) {
          return newJoke
        } else return newJokes
      })
      .map((newJoke) => {
        ;<></>
        // console.log(newJoke)
      })
  }

  return (
    <Fragment>
      <div className="home">
        <div className="text-big bold">
          <center>Morris Jokes</center>
        </div>

        <div className="search regular">
          <div className="forms">
            <form onSubmit={preventReload}>
              <input
                type="text"
                className="input light"
                placeholder="Enter text here"
                onChange={(e) => setQuery(e.target.value)}
              />
              <button className="button light">Search</button>
            </form>

            <div className="wrap"></div>
          </div>
        </div>

        <div className="search regular">
          <FilterBy uncat={() => filterUnCategorized()} />
        </div>

        <hr style={{ marginTop: '20px', opacity: 0.2 }} />

        {/* if data is being fetched, show this data  */}
        {isLoading && (
          <div className="search regular  ">
            <LoadingState info="Loading data..." />
          </div>
        )}

        {/* if isError.message === Network display this network erro */}
        {isError && (
          <div className="search regular red">
            <LoadingState info="Error loading  data. Please check you internet connection" />
          </div>
        )}

        {/* display uncategorized data */}
        {showUnCat && <UnCat />}

        {/* display this data && also display searched jokes */}
        {showAll &&
          data &&
          (data.length > 0 ? (
            data
              .filter((newJokes) => {
                const newJoke = newJokes.value
                  .toLowerCase()
                  .includes(query.toLowerCase())
                if (newJoke) {
                  return newJoke
                } else return newJokes
              })
              .map((newJoke) => (
                <Cards
                  categories={newJoke.categories}
                  value={newJoke.value}
                  key={newJoke.id}
                  action
                  like
                />
              ))
          ) : (
            <LoadingState info="Checking your data..." />
          ))}
      </div>
    </Fragment>
  )
}
