import React from 'react'

const Users = ({ users }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap'}}>
    {users.map(user => (
      <a key={user.id} href={`https://github.com/${user.id}`} target="_blank">
        <div
        style={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
            padding: '20px'
        }}>
          <img style={{ width: 100, height: 100, borderRadius: 100 }} src={user.avatar_url} alt="avatar" />
          <span style={{ color: 'white' }}>{user.login}</span>
          <span>{user.type}</span>
          <span>{user.score}</span>
        </div>
      </a>
    ))}
  </div>
)

export default Users;