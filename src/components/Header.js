import React from 'react'

class Header extends React.PureComponent {
  render() {
    return (
      <div
        style={{
          backgroundColor: '#50dfb7',
          padding: 10,
        }}
      >
        <p style={{ fontSize: '2vw' }}>
          สถิติการใช้งานคอมพิวเตอร์ โครงการคอมพิวเตอร์มือสองเพื่อน้องในชนบท
          (COM2KIDS)
        </p>
      </div>
    )
  }
}

export default Header
