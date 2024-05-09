import React from 'react'
import './NavBar2'
import NavBar2 from './NavBar2'
import '../css/Fitnes.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


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

  return (
    <>
    <div>
        <NavBar2/>
      
    </div>
    {/* starting page  */}
    
    <div>
        
        <div className='Birthday'>
        {/* <div className='Startingpage'>  */}
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
    <h1>Centers Near</h1>
    <Slider {...settings}>

        
        <div> 
    <div style={{display:'flex' , justifyContent:'space-around' , flexWrap:'wrap'}}>
  <div className='video-card' style={{ display: 'flex' }}>
    <div className='video' style={{ width: '600px', border: '1px solid' }}>
      <div>
        <video controls width="250" style={{ width: '100%' }} >
        <source src="https://cdn-videos.cure.fit/www-curefit-com/video/upload/cult-media/v2web/centers/center_70_VIDEO_2cb13c89-62fe-4f90-8044-370ff57fc928.mp4" type="video/mp4" /> 
        </video>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', padding: '10px' }}>
        <div>
          <h5>FUERZA</h5>
          <p>HSR Layout. GYM</p>
        </div>
        <div>
          <button>TRY FOR FREE</button>
        </div>
      </div>
    </div>
  </div>

  <div className='video-card' style={{ display: 'flex' }}>
    <div className='video' style={{ width: '600px', border: '1px solid' }}>
      <div>
            <video controls width="250" style={{ width: '100%' }} >
        <source src="https://cdn-videos.cure.fit/www-curefit-com/video/upload/cult-media/v2web/centers/center_70_VIDEO_2cb13c89-62fe-4f90-8044-370ff57fc928.mp4" type="video/mp4" /> 
        </video>  
            </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', padding: '10px' }}>
        <div>
          <h5>FUERZA</h5>
          <p>HSR Layout. GYM</p>
        </div>
        <div>
          <button>TRY FOR FREE</button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

<div> 
    <div style={{display:'flex' , justifyContent:'space-around' , flexWrap:'wrap'}}>
  <div className='video-card' style={{ display: 'flex' }}>
    <div className='video' style={{ width: '600px', border: '1px solid' }}>
      <div>
        <video controls width="250" style={{ width: '100%' }} >
        <source src="https://cdn-videos.cure.fit/www-curefit-com/video/upload/cult-media/v2web/centers/center_70_VIDEO_2cb13c89-62fe-4f90-8044-370ff57fc928.mp4" type="video/mp4" /> 
        </video>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', padding: '10px' }}>
        <div>
          <h5>FUERZA</h5>
          <p>HSR Layout. GYM</p>
        </div>
        <div>
          <button>TRY FOR FREE</button>
        </div>
      </div>
    </div>
  </div>

  <div className='video-card' style={{ display: 'flex' }}>
    <div className='video' style={{ width: '600px', border: '1px solid' }}>
      <div>
            <video controls width="250" style={{ width: '100%' }} >
        <source src="https://cdn-videos.cure.fit/www-curefit-com/video/upload/cult-media/v2web/centers/center_70_VIDEO_2cb13c89-62fe-4f90-8044-370ff57fc928.mp4" type="video/mp4" /> 
        </video>  
            </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', padding: '10px' }}>
        <div>
          <h5>FUERZA</h5>
          <p>HSR Layout. GYM</p>
        </div>
        <div>
          <button>TRY FOR FREE</button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<div> 
    <div style={{display:'flex' , justifyContent:'space-around' , flexWrap:'wrap'}}>
  <div className='video-card' style={{ display: 'flex' }}>
    <div className='video' style={{ width: '600px', border: '1px solid' }}>
      <div>
        <video controls width="250" style={{ width: '100%' }} >
        <source src="https://cdn-videos.cure.fit/www-curefit-com/video/upload/cult-media/v2web/centers/center_70_VIDEO_2cb13c89-62fe-4f90-8044-370ff57fc928.mp4" type="video/mp4" /> 
        </video>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', padding: '10px' }}>
        <div>
          <h5>FUERZA</h5>
          <p>HSR Layout. GYM</p>
        </div>
        <div>
          <button>TRY FOR FREE</button>
        </div>
      </div>
    </div>
  </div>

  <div className='video-card' style={{ display: 'flex' }}>
    <div className='video' style={{ width: '600px', border: '1px solid' }}>
      <div>
            <video controls width="250" style={{ width: '100%' }} >
        <source src="https://cdn-videos.cure.fit/www-curefit-com/video/upload/cult-media/v2web/centers/center_70_VIDEO_2cb13c89-62fe-4f90-8044-370ff57fc928.mp4" type="video/mp4" /> 
        </video>  
            </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', padding: '10px' }}>
        <div>
          <h5>FUERZA</h5>
          <p>HSR Layout. GYM</p>
        </div>
        <div>
          <button>TRY FOR FREE</button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
    </Slider>
    </div>

    <br /><br />


    {/* Cards */}
    <div>
        <h4>AT-CENTER</h4>
        <h1>Trainer-led group classes</h1>
    </div>

     
    <div>
    <Slider {...cardsetting}>

        
<div> 
  <div style={{display:'flex', justifyContent:"space-around",flexWrap:'wrap'}}>
    <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/09e63111-d407-4d09-89e5-96d978edf2b1.png" alt="" />
    <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/5ff5b229-b562-428f-94a9-98da451ed367.png" alt="" />

    <img src=" https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/8009b1d0-4f5e-49e1-bc94-c41da6a5bcc1.png" alt="" />

    <img src=" https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/70616b89-0271-49e4-b22d-5752599023a4.jpeg" alt="" />


  </div>
</div>

<div> 
<div style={{display:'flex', justifyContent:"space-around", flexWrap:'wrap',gap:"10px"}}>
    <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/7bf136db-7217-4733-af9f-1bb8a4155a83.png" alt="" />
    <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/09e63111-d407-4d09-89e5-96d978edf2b1.png" alt="" />

    <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/70616b89-0271-49e4-b22d-5752599023a4.jpeg" alt="" />

    <img src=" https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/7bf136db-7217-4733-af9f-1bb8a4155a83.png" alt="" />


  </div>
</div>
<div> 
<div style={{display:'flex', justifyContent:"space-around", flexWrap:'wrap', gap:"10px"}}>
    <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/09e63111-d407-4d09-89e5-96d978edf2b1.png" alt="" />
    <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/09e63111-d407-4d09-89e5-96d978edf2b1.png" alt="" />

    <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/09e63111-d407-4d09-89e5-96d978edf2b1.png" alt="" />

    <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/09e63111-d407-4d09-89e5-96d978edf2b1.png" alt="" />


  </div>
</div>
</Slider>
    </div>





{/* </div> */}
    </>
  )
}

export default Fitnes
