"use client";
import ProductCard from "@/components/cards/ProductCard";
import FilterByCategoryCheckboxGroup from "@/components/inputs/FilterByCategoryCheckboxGroup";
import PaginationButtonGroup from "@/components/inputs/PaginationButtonGroup";
import SortByPriceSelect from "@/components/inputs/SortByPriceSelect";
import { PRODUCT_CATEGORIES } from "@/lib/constants";
import useProducts from "@/lib/hooks/useProducts";
import { Product, ProductCategory } from "@/lib/types/Product.types";
import { SortPrice } from "@/lib/types/ProductFilters.types";
import applyProductsFilters from "@/lib/utils/applyProductsFilters";
import getPaginatedProducts from "@/lib/utils/getPaginatedProducts";
import SearchInput from "@/ui/inputs/SearchInput";
import React, { useEffect, useState } from "react";

const Products = () => {
  const { data: products, isLoading, isError } = useProducts();
  const [modifiedData, setModifiedData] = useState<Product[]>([]);

  const [page, setPage] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [sort, setSort] = useState<SortPrice>(null);

  useEffect(() => {
    if (!products) {
      return;
    }

    const newData = applyProductsFilters({
      categories,
      products,
      searchValue,
      sortBy: sort,
    });

    setModifiedData(newData);
  }, [products, searchValue, categories, sort]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!products || isError) {
    return <div>Error</div>;
  }

  if (products.length === 0) {
    return <div>No products found</div>;
  }

  return (
    <div className="sm:grid sm:grid-cols-[250px,1fr] sm:gap-4">
      <div >
        <SearchInput onChange={(e) => setSearchValue(e.target.value)} />

        <div className="flex w-full justify-between mb-4">
          <FilterByCategoryCheckboxGroup
            categories={PRODUCT_CATEGORIES}
            handleChangeCategories={setCategories}
          />

          <div className="flex w-full h-full justify-end">
            <SortByPriceSelect setSort={setSort} />
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col gap-1 mb-4 min-[400px]:grid min-[400px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {getPaginatedProducts(modifiedData, page).map((product, key) => (
            <ProductCard product={product} key={key} />
          ))}
        </div>

        <PaginationButtonGroup
          currentPage={page}
          products={modifiedData}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
};

export default Products;
