
import './App.css';
import Background from './BTGlasses/Background';
import Header from './BTGlasses/Header';

import Tryglasses from './BTGlasses/Tryglasses';

function App() {

  return (
    <div className="App">
      
      <Tryglasses/>
      {/* Try glasses */}
      {/* <div style={{ position: 'absolute', top: '200px', left: '0', width: '100%' }}
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
              <img style={{ position: 'absolute', top: '18%', left: '38%', width: '180px', height: '69px', opacity: '0.9', display: 'block' }} src="./glassesImage/v1.png" alt="..." />
            </div>
          </div>
        </div>



      </div>
      <div style={{ position: 'absolute', bottom: '350px', left: '150px', width: '80%', height: '200px', backgroundColor: '#fff' }}>
      <div className='row mt-3' >
        {
          data.map((glasses => {
            return (
            
              <div className='col-2' key={glasses.id} style={{ height: '100px' }}>
                <img style={{ height: '50%' }} src={glasses.url} alt="..." />
              </div>
              
    
           

            )
          }))
        }
       </div>

      </div> */}




    </div>
  );
}

export default App;
