import React from 'react';
import Video from './Video';

import '../css/BuildTransform.css'
import img51 from '../Fitnes-images/fit-imgs/img51.jpg'; // Import the image
import img100 from'../Fitnes-images/fit-imgs/img100.jpg'
import img52 from '../Fitnes-images/fit-imgs/img52.jpg'
import img53 from '../Fitnes-images/fit-imgs/img53.jpg'
import img54 from '../Fitnes-images/fit-imgs/img54.jpg'
import img55 from '../Fitnes-images/fit-imgs/img55.jpg'
import img56 from '../Fitnes-images/fit-imgs/img56.jpg'
import img57 from '../Fitnes-images/fit-imgs/img57.jpg'
import img58 from '../Fitnes-images/fit-imgs/img58.jpg'
import img59 from '../Fitnes-images/fit-imgs/img59.jpg'
import img60 from '../Fitnes-images/fit-imgs/img60.jpg'
import img61 from '../Fitnes-images/fit-imgs/img61.jpg'
import img62 from '../Fitnes-images/fit-imgs/img62.jpg'

import NavBar2 from './NavBar2';

const BuildTransform = () => {
  return (
    <div>
        <div>
            <NavBar2/>
        </div>
      <div>
        <Video />
      </div>

      {/* BuildHub Transform contaennt */}
       
      <div className='BuildHub-Transform'> 
       
      <div  style={{padding:'100px'}}>
      <div style={{textAlign:'center', color:'white', fontSize:'40px'}}>
        <h1 style={{fontSize:'40px'}}>Workout Planes </h1> <br /><br />
       </div>
        
        <img  src= {img52} alt=""   style={{height:'auto', width:'100%',}}/>
      </div>
    
      
    <div className='Quiz'>
        <h1 style={{fontSize:'20px'}}>Is BuildHub Transform right for you?  <button> <a href="">TAKE QUIZ</a></button></h1>

    </div>

       <div style={{textAlign:'center', color:'white'}}>

        <h1 style={{fontSize:'40px'}}>With cult Transform, you can <br />
            Get access to
    </h1><br /> <br />
       </div>
    <div className='Get-access'>
        <div style={{display:'grid'}}> 
            <div><img src={img52} alt="" style={{width:'400px'}} /></div>
            <div> <img src={img53} alt="" style={{width:'400px'}}/></div>

        </div>
        <div>
            <img src={img51} alt="" style={{width:'400px'}}/>
        </div>
        <div> 
            <div>
                <img src={img54} alt="" style={{width:'400px'}}/>
            </div><br /><br />
            <div>
                <img src={img55} alt="" style={{width:'400px'}}/>
            </div>
        </div>
    </div>
        
        <div className='Explore'>
            <h1 style={{fontSize:'40px'}}>Join thousands who have lost over 10% of their body weight</h1> <br /><br />
            <button  ><a href="">EXPLORE PLANES</a></button>
        </div>


    <div style={{textAlign:'center', color:'white', fontSize:'30px'}}>

        <h1 style={{fontSize:'40px'}}>Real members, real results</h1> <br /> <br />
    </div>
            
        <div className='Real-members'>
            <div><img src={img56} alt="" style={{width:'400px'}}/></div>
            <div><img src={img57} alt="" style={{width:'400px'}}/></div>
            <div>
                <div> <img src={img58} alt="" style={{width:'400px'}}/></div><br /> <br /><br />
                 <div><img src={img59} alt= "" style={{width:'400px'}}/></div>
                </div>

        </div>

        <div style={{textAlign:'center', color:'white', fontSize:'30px', marginTop:'100px'}}>

        <h1 style={{fontSize:'40px'}}> Choose your membership for</h1> <br /><br />
        </div>

        <div className='Membership-info'>
            <div>    
                <div style={{display:'flex',justifyContent:'space-between', padding:'20px'}}> 
                    <div>
                        <h1>3</h1>
                        <h3>MONTHS</h3>
                        </div>
                    <div>
                        <p style={{textDecoration:'line-through', color:'white'}}>5499</p>
                        <h2>INR4499</h2>
                        <p style={{color:'white'}}>1125/mo</p>
                    </div>
                    </div> 
                    <hr />
               <div style={{padding:'20px'}}>
                <p style={{color:'white'}}>+ Only Today | additional Rs1000 off applied</p>
                <p style={{color:'white'}}>+ Only Today | Free 1 month extenction</p>

                <div className='Button-Buy'>  <button className='Buynow'><a href="">BUY NOW</a></button></div>
                </div> 
            </div>
         
            <div>    
                <div style={{display:'flex',justifyContent:'space-between', padding:'20px'}}> 
                    <div>
                        <h1>3</h1>
                        <h3>MONTHS</h3>
                        </div>
                    <div>
                        <p style={{textDecoration:'line-through', color:'white'}}>5499</p>
                        <h2>INR4499</h2>
                        <p style={{color:'white'}}>1125/mo</p>
                    </div>
                    </div> 
                    <hr />
               <div style={{padding:'20px'}}>
                <p style={{color:'white'}}>+ Only Today | additional Rs1000 off applied</p>
                <p style={{color:'white'}}>+ Only Today | Free 1 month extenction</p>
                  
                  <div className='Button-Buy'>  <button className='Buynow'><a href="">BUY NOW</a></button></div>
                </div> 
            </div>


            <div>    
                <div style={{display:'flex',justifyContent:'space-between', padding:'20px'}}> 
                    <div>
                        <h1>3</h1>
                        <h3>MONTHS</h3>
                        </div>
                    <div>
                        <p style={{textDecoration:'line-through', color:'white'}}>5499</p>
                        <h2>INR4499</h2>
                        <p style={{color:'white'}} >1125/mo</p>
                    </div>
                    </div> 
                    <hr />
               <div style={{padding:'20px'}}>
                <p style={{color:'white'}}>+ Only Today | additional Rs1000 off applied</p>
                <p style={{color:'white'}}p>+ Only Today | Free 1 month extenction</p>

                <div className='Button-Buy'>  <button className='Buynow'><a href="">BUY NOW</a></button></div>
                </div> 
            </div>
        </div>

        <div style={{textAlign:'center', color:'white', fontSize:'25px', marginTop:'100px'}}>

        <h1 style={{fontSize:'40px'}}> Meet our Transform Coaches</h1>
        </div>

        <div className='Coaches'>
            <div><img src={img60} alt="" style={{width:'400px'}}/></div>
            <div><img src={img61} alt="" style={{width:'400px'}}/></div>
            <div><img src={img62} alt="" style={{width:'400px'}}/></div>

        </div>

     </div>
    </div>
  );
};

export default BuildTransform;
