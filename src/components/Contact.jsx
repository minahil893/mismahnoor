import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="col-lg-7">
  <form className="row g-3 mt-3 "style={{marginLeft:"40%"}}>
  <h2 className='mx-5 fs-1'>Contact us</h2>
  <p className='mx-5'>0333 0529002</p>

    <div className="col-md-6">
      <label htmlFor="inputName4" className="form-label ">Name</label>
      <input type="Name" className="form-control" id="inputName4" style={{borderColor:"black",borderStyle:"-moz-initial"}} />
    </div>
    <div className="col-md-6">
      <label htmlFor="i " className="form-label">Email</label>
      <input type="Email" className="form-control" id="Email4"style={{borderColor:"black",borderStyle:"-moz-initial"}} />
    </div>
    <div className="col-12">
      <label htmlFor="inputNumber" className="form-label">Phone Number</label>
      <input type="text" className="form-control" id="inputNumber" style={{borderColor:"black",borderStyle:"-moz-initial",width:"100%"}}/>
    </div>
    <div className="col-8">
      <label htmlFor="inputAddress2" className="form-label">Comment</label>
      <input type="text " style={{height: '150%', width: '150%',borderColor:"black",borderStyle:"-moz-initial"}} className="form-control" id="inputAddress2" />
    </div>

  </form>
</div>
<button type='Send ' className=' bg-black text-white border 'style={{width:"9%",padding:"12px",marginTop:"9%",marginLeft:"24%",}}>Send</button>

    </div>
  )
}

export default Contact
