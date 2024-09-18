import Deals from '@/components/pages/Products/Deals';
import Header from '@/components/pages/Singleproductpage/Header';
import Relatableproducts from '@/components/pages/Singleproductpage/Relatableproducts';
import Specification from '@/components/pages/Singleproductpage/Specification';
import Superdeals from '@/components/pages/Singleproductpage/Superdeals';
import Variation from '@/components/pages/Singleproductpage/Variation';
import React from 'react';

// Assuming you're passing the product ID manually for now
export default function Page({ params }) {
  const { id } = params; // Or however you're fetching the ID
  return (
    <div>
      <Header />
      {/* Pass the ID as a prop */}
      <Variation productId={id} />
      <Specification />
      <Superdeals />
      <Relatableproducts />
    </div>
  );
}
