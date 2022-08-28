import React, { Component } from 'react'
import data from '../BTGlasses/dataGlasses.json'
import Background from './Background'
import Header from './Header'

export default class Tryglasses extends Component {
  state = {
    glasses: {
      "id": 1,
      "price": 30,
      "name": "GUCCI G8850U",
      "url": "./glassesImage/v1.png ",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    display: 'none'
      
       

  }

  changeGlasses = (item) => {
    this.setState(
      {
        glasses: {
          "id": 1,
          "price": 30,
          "name": "GUCCI G8850U",
          "url": item.url,
          "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        display: 'block'
        
      }
      
    )
  }
  render() {
    return (
      <div style={{ position: 'relative' }}>
      <Background/>
      <Header/>
      <div>
        <div style={{ position: 'absolute', top: '200px', left: '0', width: '100%' }}
      >
        <div className='row'>
          <div className='col-lg-6' style={{ position: 'relative' }} >
            <img style={{ height: '70%' }} src="./glassesImage/model.jpg" alt="..." />
            <div className='glass_img' >
              <img style={{ position: 'absolute', top: '18%', left: '38%', width: '180px', height: '69px', opacity: '0.9', display: 'block' }} src="./glassesImage/v1.png" alt="..." />
            </div>


          </div>
          <div className='col-lg-6' style={{ position: 'relative' }} >
            <img style={{ height: '70%' }} src="./glassesImage/model.jpg" alt="..." />
            <div className='glass_img' >
              <img style={{ position: 'absolute', top: '18%', left: '38%', width: '180px', height: '69px', opacity: '0.9', display:`${this.state.display}`}}  src={this.state.glasses.url} alt="..." />
            </div>
          </div>
        </div>



      </div>
      <div style={{ position: 'absolute', bottom: '350px', left: '150px', width: '80%', height: '200px', backgroundColor: '#fff' }}>
      <div className='row mt-3' >
        {
          data.map((glasses => {
            return (
            
              <div className='col-2' key={glasses.id} style={{ height: '100px' }} onClick={()=>this.changeGlasses(glasses)}>
                <img style={{ height: '50%' }} src={glasses.url} alt="..." />
              </div>
              
    
           

            )
          }))
        }
       </div>

      </div>
      </div>
     


      </div>
   
    )
  }
}
