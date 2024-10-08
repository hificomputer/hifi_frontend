import React from 'react';
import ProductPage from '@/app/components/product_page/ProductPage';
import { getAPIData } from '@/utils/fetchData';
import { api_endpoints, api_suffixes } from '@/lib/data';

export const generateMetadata = async ({ params }) => {
  const product = await getAPIData(`${api_endpoints.view_product}${params.slug}/`, 'no-store');
  return {
    title: `${product.title} | Hi-Fi Computer`,
    description: product.description,
    openGraph: {
      title: `${product.title} | Hi-Fi Computer`,
      images: product.images?.[0]?.url,
      siteName: 'HiFi Computer',
      type: 'website',
    }
  }
}

const ProductPageMain = async ({ params }) => {
  const product = await getAPIData(`${api_endpoints.view_product}${params.slug}/`, 'no-store');
  const related_products = await getAPIData(`${api_endpoints.view_product}${params.slug}${api_suffixes.related_products}`, 'no-store')
    
  return (
    <ProductPage
      product={product}
      related_products={related_products}

    />
  )
}

export default ProductPageMain;