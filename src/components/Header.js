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
        <p style={{ fontSize: '1.5rem' }}>
          สถิติการใช้งานคอมพิวเตอร์ โครงการคอมพิวเตอร์มือสองเพื่อน้องในชนบท
          (COM2KIDS)
        </p>
      </div>
    )
  }
}

export default Header
