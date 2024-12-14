import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { product6 } from '../data/mist';

const MistDetail = () => {
    const [data,setData] =useState(1);
  
    const {id} =useParams();
    const detail = product6.find((x)=>x.id==id)
    const[img , setImg]=useState(detail.image);
    console.log(detail)
  return (
    <div>
     <div className="container bootdey my-5">
  <div className="row">
    <section className="panel">
      <div className="row">
        <div className="col-md-6">
          {/* <div className="pro-img-details">
            <img src={detail.images} alt style={{border:"1px solid grey"}}/>
          </div> */}
          <img src={img} alt="product"className='img-fluid'style={{aspectRatio:"3/2",objectFit:"contain",border:"1px solid gray"}} />

          <div className="pro-img-list">
                                    {detail.images.map((x, index) => (
                                        <a href="#" key={index}>
                                            <img
                                                src={x}
                                                alt={`Thumbnail ${index}`}
                                                style={{ width: "300px", cursor: "pointer",height:"50%",border:"1px solid gray"}}
                                                onClick={() => setImg(x)}
                                            />
                                        </a>
                                    ))}
                                </div>
        </div>
        <div className="col-md-6">
        <h5 className="card-title fs-2"style={{marginLeft:"20%"}}>{detail.title}</h5>

          {/* <h4 className=""style={{marginLeft:"20%"}}>
            <a href="#" className="text-black" style={{textDecoration:"none"}}>
            Miss Rose Silk Flawless Foundation
            </a>
          </h4> */}
          <div className="">
         </div>
          <div className="m-bot15" style={{marginLeft:"20%"}}> <strong>Rs: </strong> <span className="amount-old">699 PKR</span>  <span className=""> Rs.499 PKR</span></div>
          <div className="col-12 my-5" style={{marginLeft:"20%"}}>
      <label htmlFor="inputNumber" className="form-label">Color</label>
      <input type="text" className="form-control" id="inputNumber" placeholder="Fair"style={{borderColor:"black",borderStyle:"-moz-initial",width:"50%"}}/>
      {/* <input id="newsletter1" type="text" className="" placeholder="Email" /> */}

    </div>
    <div className="d-flex"style={{marginLeft:"20%" ,marginTop:"10px",border:"1px solid black",width:"20%",height:"3.5%"}}>

<label htmlFor='inputQuantity'  className= "fs-5 mt-1 me-1 mx-4"onClick={()=>setData(data+1)}>+</label>
<p className=' mt-2 me-2 mx-2 fs-5'>{data}</p>
<label htmlFor='inputQuantity'className='fs-3 me-5 mx-1' onClick={()=>setData(data-1)}>-</label>
</div>
          <p>
            <button className=" btn-round btn-danger fs-5 my-4" type="button" style={{width:"60%",marginLeft:"20%"}}> Add to Cart</button>
            <button className=" btn-round  bg-black  text-white fs-5" type="button " style={{width:"60%",marginLeft:"20%"}}> Buy it now</button>

          </p>
          <div className=''style={{marginLeft:"20%"}}>
          <p className='fs-6 fw-bold'style={{}}>What it is:</p>
          <p>A weightless and virtually invisible liquid foundation that creates a luminous, demi matte finish that is undetectable under any light but has medium, build-able coverage. It leaves a natural, radiant finish. Skin looks noticeably smooth.</p>
          <p className='fs-6 fw-bold'style={{}}>What it does:</p>
          A light perfecting, radiance inducing foundation with traceless coverage. Giving you perfectly flawless skin that lasts all day long. Undetectable and seamless for that everyday lightweight feel. Excellent waterproof, nourish the skin, smooth wrinkles and fine lines , make skin delicate and makeup long-lasting.
          <ul className='my-4'>
            <li className='my-1'>Light weight</li>
            <li className='my-2'>Smooth texture </li>
            <li className='my-2'>Flawless skin</li>
            <li className='my-2'>Water proof</li>
            <li className='my-2'>Nourish the skin </li>
            <li className='my-2'>Long lasting </li>
            <li className='my-2'>Best for normal to dry skin  </li>
          </ul>
         <p>How to Use:</p>
         <p>Apply to the face and blend with fingertips, beauty sponge, or foundation brush.</p>
     
          </div>
        </div>
      </div>
    </section>
  </div>
</div>

    </div>
  )
}

export default MistDetail
