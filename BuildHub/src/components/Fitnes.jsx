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
    <h1 style={{color:'white', textAlign:'center' }}>Centers Near  BY</h1>
    <Slider {...settings}>

        
        <div> 
    <div style={{display:'flex' , justifyContent:'space-around' , flexWrap:'wrap' ,color:'white'}}>
  <div className='video-card' style={{ display: 'flex' , border:'none' , backgroundColor:'#2F3237'}}>
    <div className='video' style={{ width: '700px', border: '1px solid', borderRadius:'10px' }}>
      <div>
        <video controls width="250" style={{ width: '100%',borderRadius:'10px' }} >
        <source src="https://cdn-videos.cure.fit/www-curefit-com/video/upload/cult-media/v2web/centers/center_70_VIDEO_2cb13c89-62fe-4f90-8044-370ff57fc928.mp4" type="video/mp4" /> 
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
        <source src="https://cdn-media.cure.fit/image/gymfit/centers/prod/CENTER45/video/gymfit/4218c45e-f0e5-453a-8eef-d58e7b715fabZest.mp4" type="video/mp4" /> 
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
        <source src="https://cdn-videos.cure.fit/www-curefit-com/video/upload/cult-media/v2web/centers/center_70_VIDEO_2cb13c89-62fe-4f90-8044-370ff57fc928.mp4" type="video/mp4" /> 
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
        <source src="https://cdn-videos.cure.fit/www-curefit-com/video/upload/cult-media/v2web/centers/center_3_VIDEO_faa28da3-5f1f-40d2-b0d0-e1851f76fe31.mp4" type="video/mp4" /> 
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
        <source src="https://cdn-videos.cure.fit/www-curefit-com/video/upload/cult-media/v2web/centers/center_70_VIDEO_2cb13c89-62fe-4f90-8044-370ff57fc928.mp4" type="video/mp4" /> 
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
        <source src="https://cdn-media.cure.fit/image/gymfit/centers/prod/CENTER134/video/gymfit/2230f06b-9d68-4fae-a820-72043b75396ePlay_on_Fitness_-_HSR.mp4" type="video/mp4" /> 
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
<img src=" https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/70616b89-0271-49e4-b22d-5752599023a4.jpeg" alt="" />

     <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/09e63111-d407-4d09-89e5-96d978edf2b1.png" alt="" />

    <img src=" https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/8009b1d0-4f5e-49e1-bc94-c41da6a5bcc1.png" alt="" />

    <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/09e63111-d407-4d09-89e5-96d978edf2b1.png" alt="" />


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
          <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_400,q_auto:eco,dpr_1,f_auto,fl_progressive//image/diy/62a444f9-96ae-45a4-8e0d-099d295b6209" alt="Slide 1" />
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
          <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_400,q_auto:eco,dpr_1,f_auto,fl_progressive//image/diy/b2b62810-c605-44b3-861c-b6d0b48efc22" alt="Slide 1"  style={{height:'240px', width:'100%'}}/>
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
             <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_400,q_auto:eco,dpr_1,f_auto,fl_progressive//image/diy/3364a177-b6a1-48bd-a3c8-c3771467ae65" alt="" />
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
          <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_400,q_auto:eco,dpr_1,f_auto,fl_progressive//image/diy/62a444f9-96ae-45a4-8e0d-099d295b6209" alt="Slide 1" />
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
          <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_400,q_auto:eco,dpr_1,f_auto,fl_progressive//image/diy/3364a177-b6a1-48bd-a3c8-c3771467ae65" alt="Slide 1" />
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
             <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_400,q_auto:eco,dpr_1,f_auto,fl_progressive//image/diy/16de7c89-93ec-4867-8aa8-061559d858c9" alt="" />
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

<div className='subscription'>
   <div>
    <h2>BuildHub pass</h2>
    <h1>Unlimiteed Access to</h1>
    <h1>everything in your city</h1>
    <h3>Unlimiteed Access to</h3>
    <h4><li>At-center group classes</li></h4>
    <h4><li>All ELITE & PRO gyms</li></h4>
    <h4><li> At-home live workouts</li></h4>
    <h4> Starting at Rs 958 / month + taxes</h4>
    <div >
<button >FRY FOR FREE </button>
<button> BUY NOW</button>
</div>
  </div>
  <div> 
    <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/sku-card-widget/black2.png" alt="" />
  </div>

</div>
 



</div>
    </>
  )
}

export default Fitnes
