'use strict'

import React from 'react'
import axios from 'axios'

const Search = () =>(
    <div className="search">
      <input 
        type="search" 
        placeholder="Digite o nome do usuário no github" 
        onKeyUp={(e)=>{
          const value = e.target.value
          const keyCode = e.which || e.keyCode
          const ENTER = 13
          if(keyCode === ENTER){
            axios.get(`https://api.github.com/users/${value}`)
              .then((result) => {
                console.log(result.data)
              })
          }
        }}
      />
    </div>
)

export default Search