import React from "react";
import { FaPhoneSquareAlt, FaRocketchat } from "react-icons/fa";

const Product = ({ product, setOrder }) => {
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
          <span className="font-bold">Description</span> <br></br>
          <span className="text-sm"> {description.slice(0, 150)}</span>
        </h2>
      </div>
      <div className="card-body lg:w-2/4 relative">
        <div className="card-actions justify-center">
          <div className="lg:flex md:flex justify-center items-center border p-4 lg:w-3/4">
            <p>
              <FaPhoneSquareAlt className="text-3xl text-secondary mr-3"></FaPhoneSquareAlt>{" "}
            </p>
            <p>{number}</p>
          </div>
        </div>
        <div className="card-actions justify-evenly">
          <div className="flex items-center border p-4 lg:w-3/4">
            <FaRocketchat className="text-xl"></FaRocketchat>
            <h3 className="ml-3 font-semibold">Chat</h3>
          </div>
        </div>
        <label
          // disabled={slots.length === 0}
          htmlFor="order-modal"
          onClick={() => setOrder(product)}
          className="btn btn-primary text-white absolute bottom-5 right-10"
        >
          ORDER NOW
        </label>
      </div>
    </div>
  );
};

export default Product;
