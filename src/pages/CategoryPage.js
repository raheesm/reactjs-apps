import React from "react";
import { useParams } from "react-router-dom";
import PageBanner from "../components/layout/PageBanner";
import ProductGrid from "../components/products/ProductGrid";
import SideBar from "../components/products/SideBar";
function CategoryPage() {
  const params = useParams();
  const { category } = params;
  console.log(category);
  return (
    <main>
      <PageBanner title={category} />
      <div id="product-section-wrapper">
        <div className="container">
          <SideBar />
          <ProductGrid category={category} />
        </div>
      </div>
    </main>
  );
}

export default CategoryPage;
