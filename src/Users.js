import React from 'react'
import StackGrid, { transitions, easings } from 'react-stack-grid'

const transition = transitions.scaleDown

const User = ({ user }) => (
  <a
    href={`https://github.com/${user.login}`}
    target="_blank"
    rel="noopener noreferrer"
  >
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
)

const renderUsers = (users) => (
  users.map(user => (
    <User user={user} key={user.id} />
  ))
)

const Users = ({ users }) => (
  <section style={{ marginTop: 50, width: '100%' }}>
    <StackGrid
      monitorImagesLoaded
      columnWidth={300}
      duration={600}
      gutterWidth={15}
      gutterHeight={15}
      easing={easings.cubicOut}
      appearDelay={60}
      appear={transition.appear}
      appeared={transition.appeared}
      enter={transition.enter}
      entered={transition.entered}
      leaved={transition.leaved}
    >
      {renderUsers(users)}
    </StackGrid>
  </section>
)

export default Users