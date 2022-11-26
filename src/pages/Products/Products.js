import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import OrderModal from "./OrderModal/OrderModal";
import Product from "./Product";

const Products = () => {
  const { products } = useLoaderData();
  const [order, setOrder] = useState(null);

  return (
    <section>
      <div className="grid gap-8">
        <h3>from products</h3>
        {products?.map((product) => (
          <Product
            key={product._id}
            product={product}
            setOrder={setOrder}
          ></Product>
        ))}
      </div>
      <div>
        {order && <OrderModal order={order} setOrder={setOrder}></OrderModal>}
      </div>
    </section>
  );
};

export default Products;
