import React, { useState } from 'react'
import {  product } from '../data/api'
import { Link } from 'react-router-dom'
import Carazole from './Carazole'
const Home = () => {
  
  return (
    <div className=''>
   <Carazole/>
      <div className='container'>
<div className='row'>
  <h3 className=''style={{textAlign:"center"}}>AFFORDABLE MAKEUP FOR EVERYDAY USE</h3>
  <p className=''style={{textAlign:"center",color:"gray"}}>Official Miss Rose Website</p>
  <p className='fs-6 fw-bold'style={{textAlign:"center",color:"#8D8D8D"}}>Missrose.com.pk</p>
  <p className=''style={{textAlign:"center",color:"gray"}}>100% Authentic Miss Rose Cosmetics in Pakistan</p>
  <h4 className='fw-bold'style={{textAlign:"center"}}>Best Seller</h4>
  {
    product.map((x)=> {
      const[hoverproduct,setHoverProduct]=useState(x.images)
      return(
       
        <div className='col-md-4 col-lg-3 col-sm-6 col-12 '>
<div className="card " style={{width: '80%',border:"none",marginTop:"40px"}}>
  <Link to={`/Product/${x.id}`}>
  <img src={hoverproduct} 
  onMouseEnter={()=>setHoverProduct(x.onhover)}
  onMouseLeave={()=>setHoverProduct(x.images)}
  className="card-img-top img-fluid" alt="..." />
  </Link>
  <div className="card-body">
    <h5 className="card-title fs-6"style={{textWrap:"nowrap",}}>{x.title.slice(0,)}</h5>
    <p className="card-text">{x.description}</p>
    <div className='d-flex justify-content-between'>
<p>
<span className='price'>Rs:{x.price}</span>
</p>
<p>
  <span><strong>Rs:{x.discountprice}</strong></span>
</p>

    </div>
  </div>
</div>

        </div>
      )
    })
  }


</div>
</div>


<div  className='design   '>
<h1 className=''style={{textAlign:"center",marginTop:"20px"}}>#missrose.com.pk</h1>

<div className=' justify-content-between'style={{marginLeft:"10%",}}>
<img src="./images/stat.webp" alt="" className='' style={{width:"25%",objectFit:"contain",}}/>
<img src="./images/stat2.webp" alt="" style={{width:"25%",objectFit:"contain",marginLeft:"10%"}}/>
<img src="./images/stat.webp" alt="" style={{width:"25%",objectFit:"contain",marginLeft:"10%"}}/>
<img src="./images/stat4.webp" alt="" style={{width:"25%",objectFit:"contain",marginTop:"20px",}}/>
<img src="./images/stat5.webp" alt="" style={{width:"25%",objectFit:"contain",marginTop:"20px",marginLeft:"10%"}}/>
<img src="./images/stat6.webp" alt="" style={{width:"25%",objectFit:"contain",marginTop:"20px",marginLeft:"10%"}}/>

</div>

</div>
<h4 className='my-5 fw-bold'style={{textAlign:"center"}}>WHY MISSROSE?</h4>
<div className='my-5'>
<img src="./images/carder.webp" alt=""style={{width:"40%"}} />
<div className='fort'>
<h1 className=''>STAND OUT IN THE CROWD</h1>
<p>Take the lead with JUST-RELEASED New makeup from MISS ROSE Professional Makeup.</p>
</div>
</div>
<div className='my-5'>
<img src="./images/carder1.webp" alt=""style={{width:"40%",float:"right"}} />
</div>
<div className=''style={{marginLeft:"10px",marginTop:"20%"}}>
<h1 className=''>MORE COLORS MEAN MORE POWER</h1>
<p className=''>Our Dual Use 5 color eye shadow palettes can also be used as highlighters, which means less hustle to carry along and more fun!</p>
</div>


<div className=''style={{marginTop:"20%"}}>
<img src="./images/Capture.PNG" alt=" "style={{width:"100%"}} />
<h5 className='my-5 fw-bold fs-3'style={{textAlign:"center"}}>STAY IN THE LOOP</h5>
<p className=''style={{textAlign:"center"}}>Be the first to know about new collections and exclusive offers.</p>
<div className="col-md-6" style={{marginLeft:"39%",width:"20%",marginTop:"2%"}}>
<label htmlFor="newsletter1" className="visually-hidden">Email </label>
<input id="newsletter1" type="text" className="form-control" placeholder="Email" />
    </div>
</div>
</div>
   
  )
}

export default Home
