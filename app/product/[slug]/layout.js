import NavBar from '@/app/components/navigation/NavBar'
export const metadata = {
  title: "Product Title",
  description: "Product description"
}

import React from 'react'

const ProductLayout = ({ children }) => {
  return (
    <>
    <NavBar />
      <section>
        {children}
      </section>
    </>
  )
}

export default ProductLayout