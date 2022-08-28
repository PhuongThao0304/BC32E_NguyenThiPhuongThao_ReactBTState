import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className='w-100' style={{position: 'absolute', top: '0', left: '0', height: '100px', backgroundColor: '#000', opacity:'0.7'}}>
          <h2 className='text-center mt-4' style={{opacity:'1', color:'#fff'}}>TRY GLASSES APP ONLINE</h2>
        </div>
    )
  }
}
