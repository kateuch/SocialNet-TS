import React from 'react';
import preloader from './../pics/balls.svg';

const Preloader = (props) => {
    return <div className='Preloader'>
     <img src={preloader} style={{height:'50px', width:'50px', position: 'absolute'} }/>
     </div>
}
 export default Preloader;