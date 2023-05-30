import React from 'react'
import ContactDetailCard from '../components/contact/ContactDetailCard'
import PageBanner from '../components/layout/PageBanner'

function Contact() {
  return (
    <main>
      <PageBanner title="Contact Us"/>
      <ContactDetailCard/>
    </main>
  )
}

export default Contact