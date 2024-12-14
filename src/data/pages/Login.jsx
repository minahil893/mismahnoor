import React,{useState} from 'react'

const Login = () => {
    const[name ,setName] =useState("")
    const[password, setPassword] =useState("")
    const submitformhandler =(e) => {
        e.preventDefault()
        if(name&& email && password){
            alert("form submited successfully")
        }else{alert("please fill all fields")
        }
    
    }
  return (
    <div>
<form  onSubmit={submitformhandler}  className='  m-auto  ' style={{marginLeft:"",width:"20%",color:"black"}}>
  <div className="form-group mt-3  " >
    <label htmlFor="exampleInputEmail1 "></label>
    {/* <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"onChange={(e)=>setName(e.target.value)} /> */}
    <input id="newsletter1" type="text"style={{width:"150%",height:"6vh"}} placeholder="Email " />
  </div>
  <div className="form-group mt-1 ">
  <label htmlFor="exampleInputEmail1 "></label>
  {/* <input type="password" className="form-control" placeholder="password" id="exampleInputPassword1"onChange={(e)=>setPassword(e.target.value)}  /> */}
  <input id="newsletter1" type="text" style={{width:"150%",height:"6vh"}} placeholder="Password"/>

    <small id="emailHelp" className="form-text  my-3 text-white ">We'll never share your personal info</small>

  </div>
  <div className=" ">
    <label className="form-check-label text-body-secondary"style={{textDecoration:"underline"}} htmlFor="exampleCheck1">Forgot your password?</label>
  </div>
  <button type="submit" className=" bg-dark text-white my-2 mt-4 " style={{height:"6vh",width:"40%",marginLeft:"34%"}}>Signin</button>
  <p style={{textAlign:"center",textDecoration:"underline"}}> Create Account</p>
</form>

    </div>
  )
}

export default Login
