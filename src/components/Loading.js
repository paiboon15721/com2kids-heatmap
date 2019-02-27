import React from 'react'

class Loading extends React.PureComponent {
  render() {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#2b765d',
        }}
      >
        <h1>Loading...</h1>
      </div>
    )
  }
}

export default Loading
