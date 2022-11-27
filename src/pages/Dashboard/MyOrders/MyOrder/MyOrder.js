import React from "react";

const MyOrder = ({ order }) => {
  const { image, model, price } = order;
  return (
    <div className="card card-side bg-white">
      <figure>
        <img className="w-40 p-4" src={image} alt="car" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{model}</h2>
        <p className="text-primary font-bold">${price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-secondary btn-sm text-white">Pay</button>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
