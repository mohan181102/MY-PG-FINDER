import React, { useState } from 'react'
import authservice from '../Appwrite/appwrite'

export default function Authstatus() {
    const [status, setstatus] = useState(false);

    // async function checkstatus(){
    //     await authservice.getcurrentuser().then((res)=>res.jso)
    // }
  return (
    <div></div>
  )
}
