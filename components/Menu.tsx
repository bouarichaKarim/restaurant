"use client"

import Image from 'next/image'
import React, { useState } from 'react'

const Menu = () => {
    const [open, setOpen] = useState(false)
  return (
    <div>
        {!open ? (<Image src="/open.png" alt="" width={20} height={20} onClick={()=>setOpen(true)}/>) :
        (<Image src="/close.png" alt="" width={20} height={20} onClick={()=>setOpen(false)} />)
        }
    </div>
  )
}

export default Menu