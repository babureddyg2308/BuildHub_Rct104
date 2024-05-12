import React from 'react'
import './NavBar2'
import NavBar2 from './NavBar2'
import '../css/Fitnes.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BuildTransform from './BuildTransform';
import video1 from '../Fitnes-images/fitness-video/gym-video1.mp4'
import video2 from '../Fitnes-images/fitness-video/gym-video2.mp4'
import video3 from '../Fitnes-images/fitness-video/gym-video3.mp4'
import video4 from '../Fitnes-images/fitness-video/gym-video4.mp4'
import video5 from '../Fitnes-images/fitness-video/we-are-cult-web-video.mp4'
import img1 from '../Fitnes-images/fit-imgs/imgf1.jpg'
import img2 from '../Fitnes-images/fit-imgs/imgf2.jpg'
import img3 from '../Fitnes-images/fit-imgs/imgf3.jpg'
import img4 from '../Fitnes-images/fit-imgs/imgf4.jpg'
import img5 from '../Fitnes-images/fit-imgs/imgf5.jpg'
import img6 from '../Fitnes-images/fit-imgs/imgf6.jpg'
import img7 from '../Fitnes-images/fit-imgs/imgf7.jpg'
import img8 from '../Fitnes-images/fit-imgs/imgf8.jpg'
import img9 from '../Fitnes-images/fit-imgs/imgf9.jpg'
import img10 from '../Fitnes-images/fit-imgs/imgf10.jpg'
import img11 from '../Fitnes-images/fit-imgs/imgf11.jpg'
import img12 from '../Fitnes-images/fit-imgs/imgf12.jpg'
import img13 from '../Fitnes-images/fit-imgs/imgf13.jpg'
import img14 from '../Fitnes-images/fit-imgs/imgf14.jpg'





const Fitnes = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      const cardsetting={
         
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1
           
      }

      // const settings = {
      //   dots: true,
      //   infinite: true,
      //   speed: 500,
      //   slidesToShow: 1,
      //   slidesToScroll: 1
      // };

      // const settingsforHome = {
      //   dots: true,
      //   infinite: true,
      //   speed: 500,
      //   slidesToShow: 1,
      //   slidesToScroll: 1,
      //   arrows: true // Show arrows
      // };

  return (
    <>
    
    <div>
        <NavBar2/>
      
    </div>
    
    {/* starting page  */}
    <div className='Startingpage' style={{backgroundColor:'#15171C'}}> 
    <div>
        
        <div className='Birthday'>
         
            <div></div>
           <div id='button' > 
            <button> TRY FOR FREE</button>
            </div>

             <div className='navCards'> 
             <a href=""> 
            <div>
                <h3>Unlimited access to</h3>
                <h2>Single center</h2>
                <h3>Pick a center  </h3>
            </div></a>
            <a href=""> <div>
            <h3>Unlimited access to</h3>
                <h2> All Centers</h2>
                <h3>Rs 958/month</h3>
            </div></a>
            <a href=""><div>
            <h3>Unlimited access to</h3>
                <h2>Home Workouts</h2>
                <h3>Rs 102/month  </h3>
            </div></a>
            </div>
        </div>
    </div>

    <div className='video_card' >
    <h1 style={{color:'white', textAlign:'center', marginTop:'100px' }}>Centers Near  BY centers</h1>
    <Slider {...settings}>

        
        <div> 
    <div style={{display:'flex' , justifyContent:'space-around' , flexWrap:'wrap' ,color:'white'}}>
  <div className='video-card' style={{ display: 'flex' , border:'none' , backgroundColor:'#2F3237'}}>
    <div className='video' style={{ width: '700px', border: '1px solid', borderRadius:'10px' }}>
      <div>
        <video controls width="250" style={{ width: '100%',borderRadius:'10px' }} >
        <source src={video1} type="video/mp4" /> 
        </video>
      </div>
      <div style={{ display: 'flex',  alignItems: 'center', justifyContent: 'space-between', padding: '10px', color:'white'}}>
        <div>
          <h4>FUERZA</h4>
          <p>HSR Layout. GYM</p>
        </div>
        <div>
            <button style={{height:'40px ', borderRadius:'10px', backgroundColor:'#595B5F', color:'white', border:'none'}}> TRY FOR FREE</button> 
        </div>
      </div>
      <hr/>
      <p style={{color:'white', padding:'10px'}}>Unlimited access starting at Rs 608 /month</p>
    </div>
  </div>

  <div className='video-card' style={{ display: 'flex' , border:'none' , backgroundColor:'#2F3237'}}>

  <div className='video' style={{ width: '700px', border: '1px solid', borderRadius:'10px' }}>
      <div>
            <video controls width="250" style={{ width: '100%' }} >
        <source src={video2} type="video/mp4" /> 
        </video>  
            </div>
            <div style={{ display: 'flex',  alignItems: 'center', justifyContent: 'space-between', padding: '10px', color:'white' }}>
        <div>
          <h5>FUERZA</h5>
          <p>HSR Layout. GYM</p>
        </div>
        <div>
        <button style={{height:'40px ', borderRadius:'10px', backgroundColor:'#595B5F', color:'white', border:'none'}}> TRY FOR FREE</button> 
        </div>
      </div>
      <hr />
      <div>
      <p style={{color:'white', padding:'10px'}}>Unlimited access starting at Rs 608 /month</p>
      </div>
    </div>
    
  </div>
  
  
</div>
</div>

<div> 
    <div style={{display:'flex' , justifyContent:'space-around' , flexWrap:'wrap'}}>
    <div className='video-card' style={{ display: 'flex' , border:'none' , backgroundColor:'#2F3237'}}>
  <div className='video' style={{ width: '700px', border: '1px solid', borderRadius:'10px' }}>
      <div>
        <video controls width="250" style={{ width: '100%' }} >
        <source src={video1} type="video/mp4" /> 
        </video>
      </div>
      <div style={{ display: 'flex',  alignItems: 'center', justifyContent: 'space-between', padding: '10px', color:'white'}}>
        <div>
          <h5>FUERZA</h5>
          <p>HSR Layout. GYM</p>
        </div>
        <div>
        <button style={{height:'40px ', borderRadius:'10px', backgroundColor:'#595B5F', color:'white', border:'none'}}> TRY FOR FREE</button> 
        </div>
      </div>
      <hr />
      <p style={{color:'white', padding:'10px'}}>Unlimited access starting at Rs 608 /month</p>
    </div>
  </div>

  <div className='video-card' style={{ display: 'flex' , border:'none' , backgroundColor:'#2F3237'}}>
  <div className='video' style={{ width: '700px', border: '1px solid', borderRadius:'10px' }}>
      <div>
            <video controls width="250" style={{ width: '100%' }} >
        <source src={video3} type="video/mp4" /> 
        </video>  
            </div>
            <div style={{ display: 'flex',  alignItems: 'center', justifyContent: 'space-between', padding: '10px', color:'white'}}>
        <div>
          <h5>FUERZA</h5>
          <p>HSR Layout. GYM</p>
        </div>
        <div>
        <button style={{height:'40px ', borderRadius:'10px', backgroundColor:'#595B5F', color:'white', border:'none'}}> TRY FOR FREE</button> 
        </div>
      </div>
      <hr />
      <p style={{color:'white', padding:'10px'}}>Unlimited access starting at Rs 608 /month</p>
    </div>
  </div>
</div>
</div>
<div> 
    <div style={{display:'flex' , justifyContent:'space-around' , flexWrap:'wrap'}}>
    <div className='video-card' style={{ display: 'flex' , border:'none' , backgroundColor:'#2F3237'}}>
  <div className='video' style={{ width: '700px', border: '1px solid', borderRadius:'10px' }}>
      <div>
        <video controls width="250" style={{ width: '100%' }} >
        <source src={video1} type="video/mp4" /> 
        </video>
      </div>
      <div style={{ display: 'flex',  alignItems: 'center', justifyContent: 'space-between', padding: '10px', color:'white'}}>
        <div>
          <h5>FUERZA</h5>
          <p>HSR Layout. GYM</p>
        </div>
        <div>
        <button style={{height:'40px ', borderRadius:'10px', backgroundColor:'#595B5F', color:'white', border:'none'}}> TRY FOR FREE</button>
        </div>
      </div>
      <hr />
      <p style={{color:'white', padding:'10px'}}>Unlimited access starting at Rs 608 /month</p>
    </div>
  </div>

  <div className='video-card' style={{ display: 'flex' , border:'none' , backgroundColor:'#2F3237'}}>
  <div className='video' style={{ width: '700px', border: '1px solid', borderRadius:'10px' }}>
      <div>
            <video controls width="250" style={{ width: '100%' }} >
        <source src={video4} type="video/mp4" /> 
        </video>  
            </div>
            <div style={{ display: 'flex',  alignItems: 'center', justifyContent: 'space-between', padding: '10px', color:'white'}}>
        <div>
          <h5>FUERZA</h5>
          <p>HSR Layout. GYM</p>
        </div>
        <div>
        <button style={{height:'40px ', borderRadius:'10px', backgroundColor:'#595B5F', color:'white', border:'none'}}> TRY FOR FREE</button>
        </div>
      </div>
      <hr />
      <p style={{color:'white', padding:'10px'}}>Unlimited access starting at Rs 608 /month</p>
    </div>
    
  </div>
</div>
</div>
    </Slider>
    </div>

    <br /><br />


    {/* Cards */}
    <div style={{textAlign:'center', color:'white'}}>
        <h4>AT-CENTER</h4>
        <h1>Trainer-led group classes</h1>
    </div>

     
    <div>
    <Slider {...cardsetting}>

        
<div> 
  <div style={{display:'flex', justifyContent:"space-around",flexWrap:'wrap'}}>
    <img src={img1} alt="" />
    <img src={img2} alt="" />

    <img src={img3} alt="" />

    <img src={img4} alt="" />


  </div>
</div>

<div> 
<div style={{display:'flex', justifyContent:"space-around", flexWrap:'wrap',gap:"10px"}}>
    <img src={img5} alt="" />
    <img src={img6} alt="" />

    <img src={img4} alt="" />

    <img src={img3} alt="" />


  </div>
</div>
<div> 
<div style={{display:'flex', justifyContent:"space-around", flexWrap:'wrap', gap:"10px"}}>
<img src={img6} alt="" />

     <img src= {img3} alt="" />

    <img src={img2} alt="" />

    <img src={img4} alt="" />


  </div>
</div>
</Slider>
    </div>

{/* Home workouts */}

<div className='Home-Workouts'>
  <div style={{textAlign:'center',color:'white'}}>
  <h3>AT-HOME</h3>
  <h1>Unlimited home workouts with calorie tracking</h1>
  </div>

  <div>
  <div>
      
      <Slider {...settings} style={{color:'white'}}>
        <div >
          <div className='TrainerInfo'> 
          <div >
            <div> 
          <img src={img7} alt="Slide 1" />
          </div>
          <div style={{textAlign:'center', padding:'20px'}}> 
            <h4>Niran Ponnapa</h4>
            <h1> Fit One; Day12</h1>
            <h4>SNC . Intermediate . 50 Min</h4>
            <button style={{width: '200px',height:'30px', borderRadius:'10px', color:'white', backgroundColor:'#575F6A', border:'none'}}> Join</button>

          </div>
            </div>

            <div >
            <div> 
          <img src={img8} alt="Slide 1"  style={{height:'240px', width:'100%'}}/>
          </div>
          <div style={{textAlign:'center', padding:'20px'}}> 
            <h4>Niran Ponnapa</h4>
            <h1> Fit One; Day12</h1>
            <h4>SNC . Intermediate . 50 Min</h4>
            <button style={{width: '200px',height:'30px', borderRadius:'10px', color:'white', backgroundColor:'#575F6A', border:'none'}}> Join</button>

          </div>
            </div>

            <div> 
              <div> 
             <img src={img9} alt="" />
             </div>
             <div style={{textAlign:'center', padding:'20px'}}>
              <h4>Isheeta Ray</h4>
              <h1>Fusion Express S2; Day6</h1>
              <h4>Dance . Bignner . 40 Min</h4>
              <button style={{width: '200px',height:'30px', borderRadius:'10px', color:'white', backgroundColor:'#575F6A', border:'none'}}> Join</button>
             </div>
          </div>

        </div>
        </div>

        <div >
          <div className='TrainerInfo' style={{flexWrap:''}}> 
          <div >
            <div> 
          <img src={img7} alt="Slide 1" />
          </div>
          <div style={{textAlign:'center', padding:'20px' }}> 
            <h4>Niran Ponnapa</h4>
            <h1> Fit One; Day12</h1>
            <h4>SNC . Intermediate . 50 Min</h4>
            <button style={{width: '200px',height:'30px', borderRadius:'10px', color:'white', backgroundColor:'#575F6A', border:'none'}}> Join</button>

          </div>
            </div>
                
            <div >
            <div> 
          <img src={img9} alt="Slide 1" />
          </div>
          <div style={{textAlign:'center', padding:'20px'}}> 
            <h4>Niran Ponnapa</h4>
            <h1> Fit One; Day12</h1>
            <h4>SNC . Intermediate . 50 Min</h4>
            <button style={{width: '200px',height:'30px', borderRadius:'10px', color:'white', backgroundColor:'#575F6A', border:'none'}}> Join</button>

          </div>
            </div>


            <div> 
              <div> 
             <img src={img10} alt="" />
             </div>
             <div style={{textAlign:'center', padding:'20px'}}>
              <h4>Isheeta Ray</h4>
              <h1>Fusion Express S2; Day6</h1>
              <h4>Dance . Bignner . 40 Min</h4>
              <button style={{width: '200px',height:'30px', borderRadius:'10px', color:'white', backgroundColor:'#575F6A', border:'none'}}> Join</button>
             </div>
          </div>

        </div>
        </div>
         
      </Slider>
    </div>

  </div>

</div>

<br /><br />
  <h1 style={{color:'white' , fontSize:'50px', textAlign:'center'}}>FREE TRIALS</h1>
<div className='subscription'>
  
   <div>
    <h2>BuildHub pass <span style={{fontSize:'40px', color:'#FFD371'}}>ELITE</span></h2>
    <h1>Unlimiteed Access to</h1>
    <h1>everything in your city</h1>
    <h3>Unlimiteed Access to</h3>
    <h4><li>At-center group classes</li></h4>
    <h4><li>All ELITE & PRO gyms</li></h4>
    <h4><li> At-home live workouts</li></h4>
    <h4> Starting at Rs 958 / month + taxes</h4>
    <div className='buttons'>
<button >FRY FOR FREE </button>
<button> BUY NOW</button>
</div>
  </div>
  <div  > 
    <img style={{borderRadius:'20px', width:'700px'}} src={img11} alt="" />
  </div>

</div>
 {/* /////////////////////////// */}
 <div className='subscription'>
  
   
 <div  > 
   <img style={{borderRadius:'20px', width:'700px'}} src={img12} alt="" />
 </div>

 <div>
   <h2>BuildHub pass <span style={{fontSize:'40px', color:'#FFD371'}}>PRO</span></h2>
   <h1>Unlimiteed Access to</h1>
   <h1>everything in your city</h1>
   <h3>Unlimiteed Access to</h3>
   <h4><li>At-center group classes</li></h4>
   <h4><li>All ELITE & PRO gyms</li></h4>
   <h4><li> At-home live workouts</li></h4>
   <h4> Starting at Rs  / month + taxes</h4>
   <div className='buttons'>
<button >FRY FOR FREE </button>
<button> BUY NOW</button>
</div>
 </div>
</div>

{/* ////////////////////////////////// */}
<div className='subscription-home'>
  
   <div>
    <h2>BuildHub pass <span style={{fontSize:'40px', color:'#FFD371'}}>HOME</span></h2>
    <h1>Unlimiteed Access to</h1>
    <h1>everything in your city</h1>
    <h3>Unlimiteed Access to</h3>
    <h4><li>At-center group classes</li></h4>
    <h4><li>All ELITE & PRO gyms</li></h4>
    <h4><li> At-home live workouts</li></h4>
    <h4> Starting at Rs 958 / month + taxes</h4>
    <div className='buttons'>
<button >FRY FOR FREE </button>
<button> BUY NOW</button>
</div>
  </div>
  <div>
      <video autoPlay loop muted style={{ borderRadius: '20px', width: '700px', marginTop:'40px' }}>
        <source  style={{borderRadius:'20px'}} src={video5} type="video/mp4" />
      
      </video>
    </div>
</div>


<div className='LossWeight'>

  <img src={img13} alt="" />
</div>

<div className='community'>
  
   <div>
    <h2>BUILDHUB COMMUNITY</h2>
    <h1>Be a part of the BuildHub community</h1>
    
    <h3> Join the Facebook community today</h3> 
    <div className='buttons'>
<button><a href="" style={{color:'white' , textDecoration:'none'}}>JOIN NOW</a>   </button>
 </div>
  </div>
  <div  > 
    <img style={{borderRadius:'20px', width:'700px'}} src={img14} alt="" />
  </div>

</div>


</div>

{/* <div>
  <video src="https://cdn-images.cure.fit/www-curefit-com/video/upload/c_fill,w_1600,ar_1.77,q_auto:eco,dpr_1,vc_auto,f_auto/video/test/we-are-cult-web.mp4"></video>
</div> */}
    </>
  )
}

export default Fitnes
