import React from 'react'
import './UserCard.css'

const UserCard = ({user}) => {
    return (
      <div className='card-element'>
          <div className='id'>{user.ID}</div>
          <table>
            <tr style={{textAlign: 'left'}}>
              <th>Name</th>
              <td>  </td>
              <td style={{marginLeft: '10px'}}>{user.FirstNameLastName}</td>
            </tr>
            <tr style={{textAlign: 'left'}}>
              <th>Email</th>
              <td>  </td>
              <td>{user.Email}</td>
            </tr>
            <tr style={{textAlign: 'left'}}>
              <th>Company</th>
              <td>  </td>
              <td>{user.Company}</td>
            </tr>
          </table>
      </div>
    )
}

export default UserCard