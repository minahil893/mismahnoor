import React, { useState } from 'react'
import {  product1 } from '../data/new'
import { Link } from 'react-router-dom'

const Newarrival = () => {
  return (
    <div className=''>
      <div className='container'>
        <div className='row'>
          <h1 className='my-2'>NEW ARRIVAL</h1>
     {
      product1.map((x)=>{
        const[hoverproduct,setHoverProduct]=useState(x.image)

        return(
          <div className='col-md-4 col-lg-3 col-sm-6 col-12 '>
          <div className="card me-5" style={{width: '18rem',marginTop:"70px",border:"none" }}>
          <Link to={`/product1/${x.id}`}>
  <img src={hoverproduct} 
  onMouseEnter={()=>setHoverProduct(x.onhover)}
  onMouseLeave={()=>setHoverProduct(x.image)}
  className="card-img-top img-fluid" alt="..." />
  </Link>
          {/* <img src="" className="card-img-top" alt="..." /> */}
          <div className="card-body">
          <h5 className="card-title fs-6"style={{textWrap:"nowrap",}}>{x.title.slice(0,29)}</h5>

            <p className="card-text">{}</p>
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
      }
         
        
      )
     }
     </div>
     </div>
    </div>
       

  )
}

export default Newarrival
