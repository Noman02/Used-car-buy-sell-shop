import React from "react";

const Product = ({ product }) => {
  const {
    condition,
    description,
    location,
    manufacture_year,
    model,
    name,
    number,
    original_price,
    picture,
    posted_time,
    resale_price,
    used_time,
    _id,
  } = product;
  return (
    <div className="flex justify-around lg:w-3/4 mx-auto bg-white shadow-xl">
      <div className=" m-4">
        <h3 className="font-semibold text-2xl">Brand: {name}</h3>
        <small className="text-lg">
          Posted: {posted_time},{location}
        </small>
        <figure className="p-4">
          <img src={picture} alt="" />
        </figure>
        <p>
          <span className="text-xl font-semibold text-primary mr-2">
            Current Price ${resale_price},
          </span>
          <span className="text-xl opacity-60">
            Original Price ${original_price}
          </span>
        </p>
        <h2 className="">
          Model <span className="font-medium text-lg">{model}</span>
        </h2>
        <h2 className="">Used {used_time}</h2>
        <h2 className="">
          Condition
          <span className="font-medium text-lg"> {condition}</span>
        </h2>
        <h2 className="">
          Year Of Manufacture
          <span className="font-medium text-lg"> {manufacture_year}</span>
        </h2>
        <h2 className="">
          Description:
          <span className="text-sm"> {description.slice(0, 100)}</span>
        </h2>
      </div>
      <div className="card-body">
        <h2 className="">
          Model <span className="font-medium">{model}</span>
        </h2>
        <h2 className="">Used {used_time}</h2>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
