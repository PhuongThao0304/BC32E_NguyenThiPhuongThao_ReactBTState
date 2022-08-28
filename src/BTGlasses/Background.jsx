import React, { Component } from 'react'

export default class Background extends Component {
  render() {
    return (
        <div className='w-100 h-50' style={{position: 'relative'}}>
        <img src="./glassesImage/background.jpg"  className='img-fluid' style={{width:'100%'}}/> 
        <div className='w-100 h-100' style={{position: 'absolute', top: '0', left: '0', backgroundColor:'#000', opacity:'0.2'}}> </div>
        </div>
    )
  }
}
