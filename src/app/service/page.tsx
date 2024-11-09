import ServiceComponent from '@/components/ServiceComponent'
import React from 'react'

import { Metadata } from 'next'


export const metadata: Metadata = {
  title: "Services we provide",
  description: "Tecklo offers IT consulting, custom software development, web and mobile app solutions, and digital transformation services to fuel business success.",
};




function page() {
  return (
    <div>
      <ServiceComponent/>
    </div>
  )
}

export default page