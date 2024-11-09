import AboutPageComponent from '@/components/AboutPageComponent'
import React from 'react'


import { Metadata } from 'next'


export const metadata: Metadata = {
  title: "About Us | Tecklo",
  description: "Tecklo is a forward-thinking IT consulting and solutions company, dedicated to empowering businesses with custom software, app development, and digital transformation services.",
};




function page() {
  return (
    <div>
      <AboutPageComponent/>
    </div>
  )
}

export default page