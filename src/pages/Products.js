import React from 'react'
import PageBanner from '../components/layout/PageBanner'
import CategoryCards from '../components/products/CategoryCards'

function Products() {
  return (
    <main >
      <PageBanner title="Our Products" />
      <CategoryCards/>
      
    </main>
  )
}

export default Products