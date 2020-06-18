'use strict'

import React from 'react'

const UserInfo = () =>(
    <div className="user-info">
      <img src="https://avatars3.githubusercontent.com/u/44399537?v=4" />
      <h1>
        <a href="#">Rodrigo Nogueira</a>
      </h1>

      <ul className="repos-info">
        <li>Repositórios: 23</li>
        <li>Seguidores: 10</li>
        <li>Seguindo: 10</li>
      </ul>
    </div>
)

export default UserInfo