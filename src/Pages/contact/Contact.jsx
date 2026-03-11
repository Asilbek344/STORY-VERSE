import React, { useState } from 'react'
import "./Contact.css"

const Contact = () => {

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [comment,setComment] = useState("")
const [phone,setPhone] = useState("")
const [number,setNumber] = useState("")

const send = () => {

if(!email || !password || !comment || !phone || !number){
alert("Iltimos barcha maydonlarni to'ldiring ❗")
return
}

alert("So'rovingiz qabul qilindi ✅")

}

return (
<main>
<section id='put'>
<div className="container">

<div className='put'>

<input
placeholder='Email'
type="email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input
placeholder='Password'
type="password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<input
placeholder='Comment'
type="text"
value={comment}
onChange={(e)=>setComment(e.target.value)}
/>

<input
placeholder='Phone'
type="tel"
value={phone}
onChange={(e)=>setPhone(e.target.value)}
/>

<input
placeholder='Number'
type="number"
value={number}
onChange={(e)=>setNumber(e.target.value)}
/>

<button onClick={send}>Jo'natish</button>

</div>

</div>
</section>
</main>
)
}

export default Contact