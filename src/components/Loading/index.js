import React from 'react'

const Loading = () => {
  return (
    <p
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#000',
      }}
    >
      Loading
    </p>
  )
}

export default Loading
