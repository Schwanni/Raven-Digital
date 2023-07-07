import React from 'react'
import { ClientPics } from '../constants'

const Clients = () => {
  return (
    <section className='section bg-[#0A0F14]'>
        <div className='flex flex-col mx-8 sm:mx-12 md:mx-32 py-8'>
            <h2 className='h2Heading mb-8'>Clients</h2>
            <div className='flex justify-between'>
                {ClientPics.map((client) => (
                    <div key={client.id}>
                    <img src={client.imgSrc} alt={client.imgAlt} loading='lazy' />
                    </div>
                ))}
            </div>
        </div>       
    </section>
  )
}

export default Clients