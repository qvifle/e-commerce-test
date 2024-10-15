import Products from "@/widgets/Products";

const Catalog = () => {
  return (
    <>
      <div className="container bg-gray-50 py-2">
        <h1 className="text-3xl font-bold mb-2">Catalog</h1>
        <Products />
      </div>
    </>
  );
};

export default Catalog;
