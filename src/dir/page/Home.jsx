import React, { Fragment, useState } from 'react'
import Cards from '../components/Cards'
import SearchBar from '../components/SearchBar'
import { useQuery } from 'react-query'
import { API } from '../api/defineCall'
import LoadingState from '../components/LoadingState'
import Tes from '../reducer/Tes'
import FilterBy from '../components/FilterBy'

export default function Home() {
  const myApi = API()

  const [showAll, setShowAll] = useState(true)
  const [showUnCat, setShowUnCat] = useState(false)

  const { data, isLoading, isError } = useQuery(['jokes'], () => myApi)

  const filterUnCategorized = async () => {
    console.log("clicked me")
    const info = await data.find((datas) => datas.categories === [undefined])

    if(info) console.log('yes', info)
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

  return (
    <Fragment>
      <div className="home">
        <div className="text-big bold">
          <center>Morris Jokes</center>
        </div>

        <div className="search regular">
          <SearchBar infos />
        </div>

        <div className="search regular">
          <FilterBy uncat={() => filterUnCategorized()} />
        </div>

        <hr style={{ marginTop: '20px', opacity: 0.2 }} />

        {isLoading && (
          <div className="search regular  ">
            <LoadingState info="Loading data..." />
          </div>
        )}

        {isError && (
          <div className="search regular red">
            <LoadingState info="Error loading  data. Please check you internet connection" />
          </div>
        )}

        {showUnCat && <UnCat />}


        {showAll &&
          data &&
          (data.length > 0 ? (
            data.map((datas) => (
              <div className="search regular">
                <Cards
                  categories={datas.categories}
                  action
                  like
                  value={datas.value}
                  key={datas.id}
                />
              </div>
            ))
          ) : (
            <div>Checking your Data </div>
          ))}
      </div>
    </Fragment>
  )
}
