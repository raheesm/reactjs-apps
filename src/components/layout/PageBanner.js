import React from 'react'

function PageBanner({title}) {
  return (
    <section id="page-banner-sec">
        <div className="container">
            <div className="page-banner-div">
                <h1>{title}</h1>
            </div>
        </div>
    </section>
  )
}

export default PageBanner