import React from 'react'
import { useState } from 'react'
import '../assets/css/Search.css'

const Search = ({getInfo ,searchInput,setSearchInput}) => {

    return (
        <>
            <div className='search-form'>

                <form onSubmit={getInfo} className='searchForm'>
                    <input value={searchInput} placeholder={'search for any meal ingredients'}  onChange={(e)=>setSearchInput(e.target.value)}/>
                    <button type="submit">search</button> 
                </form>
            </div>
        </>
  )
}

export default Search