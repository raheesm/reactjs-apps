import React from 'react'

function ContactDetailCard() {
  return (
    <section id="contact-top-sec">
    <div className="container">
        <div className="contact-top-div">
            
            <div className="box">
                <h2>Mobile</h2>

                <a href="tel:+917025223883">7025 223 883</a>
                <a href="tel:04962964883">0495 296 4883</a>
            </div>
            <div className="box">
              <h2>Our Location</h2>
              <p>Mukkam Mill Stores Private Limited 14/341a, Ellora Building, Kuttipala Junction, Mukkam, Kozhikode, Kerala- 673602</p>
          </div>
            <div className="box">
                <h2>Email</h2>
                <p>
                <a href="mailto:mumis@elloragroupwll.com">mumis@elloragroupwll.com</a></p>
            </div>
        </div>
    </div>
</section>
  )
}

export default ContactDetailCard