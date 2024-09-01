import React from 'react'
import { CONTACT } from '../constants'
import { motion } from "framer-motion"

function Contact() {
    return (
        <div className='pb-24'>
            <motion.h1 
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:0.5}}
            className='my-20 text-center text-4xl'>Contact Me</motion.h1>
            <div className="text-center tracking-tighter">
                <motion.p 
                initial={{x:-100,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{duration:1}}
                className="my-4">{CONTACT.address}</motion.p>

                <motion.p 
                initial={{x:100,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{duration:1}}
                className="my-4">{CONTACT.phoneNo}</motion.p>

                <a href="//avadhijain2004@gmail.com" className='border-b' target='_blank'>{CONTACT.email}</a>
            </div>
        </div>
    )
}

export default Contact
