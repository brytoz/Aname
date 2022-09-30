import axios from 'axios'
import React, { useState } from 'react'
import { useQuery } from 'react-query'



// const LINK = "https://random.dog/woof.json"

// export const API = axios(LINK)


export const API_SEARCH = async (number =1 ) => {
    const LINK = "https://api.chucknorris.io/jokes/search?query="
    const { data } = await axios.get(LINK);
    
    return data.result;
}



export const API = async (number =1 ) => {
    const LINK = "https://api.chucknorris.io/jokes/search?query=all"
    const { data } = await axios.get(LINK);
    
    return data.result;
}