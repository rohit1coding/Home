import React,{useState,useEffect} from 'react'
import { Link,useHistory } from 'react-router-dom'
import Axios from 'axios'
import M from 'materialize-css'
const Form = () => {
    const [name,setName]=useState("")
    const [contact,setContact]=useState("")
    const [email,setEmail]=useState("")
    const [textArea,setTextArea]=useState("")
    const uploadField=()=>{
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
        {
            M.toast({html: "Invalid Email", classes:"#c62828 red darken-3"})
              return
        }
        fetch("/SignUp",{
            method:"post",
            headers:{
                "Content-Type":"application/json"    
            },
            body:JSON.stringify({
                name,
                password,
                email,
                pic:url,
                contact
            })
        })
        .then(res=>res.json())
            .then(data=>{
                if(data.error)
                    M.toast({html:data.error,classes:"#e53935 red darken-1"})
                else{ 
                    M.toast({html:data.message,classes:"#43a047 green darken-1"})
                    history.push("/Login")
                }
            })
            .catch(err=>{console.log(err);})
    }
    return (
        <div className="myCard">
            <div className="card auth-card">
                <h2 className="fame">InternTest</h2>
                    <input type="text" placeholder="* Full Name" 
                        value={name} onChange={(e)=>setName(e.target.value)} /> 
                    <input type="email" placeholder="* email" 
                        value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="number" placeholder="Mob Number"
                        value={contact} onChange={(e)=>setContact(e.target.value)} />
                    <input type="textarea" placeholder="Text Area"
                        value={textArea} onChange={(e)=>setTextArea(e.target.value)} />
                    <button className="#7e57c2 deep-purple lighten-1 btn" type="submit"
                        onClick={()=>{postData()}}
                        >Submit</button>
            </div>
        </div>
    )
}

export default Form
