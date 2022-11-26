import React from "react";
import { FaPhoneSquareAlt, FaRocketchat } from "react-icons/fa";

const MyProduct = ({ addProduct }) => {
  const {
    _id,
    productName,
    model,
    price,
    conditionType,
    yearOfPurchase,
    category,
    image,
    description,
  } = addProduct;

  return (
    <div className="my-12 lg:flex justify-around lg:w-3/4 mx-auto bg-white shadow-xl">
      <div className=" m-4">
        <h3 className="font-semibold text-2xl">Brand: {productName}</h3>
        <figure className="p-4">
          <img className="w-60" src={image} alt="" />
        </figure>
        <p>
          <span className="text-xl font-semibold text-primary mr-2">
            Current Price ${price},
          </span>
        </p>
        <h2 className="">
          Model <span className="font-medium text-lg">{model}</span>
        </h2>

        <h2 className="">
          Condition
          <span className="font-medium text-lg"> {conditionType}</span>
        </h2>
        <h2 className="">
          Year Of Purchase
          <span className="font-medium text-lg"> {yearOfPurchase}</span>
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
          </div>
        </div>
        <div className="card-actions justify-evenly">
          <div className="flex items-center border p-4 lg:w-3/4">
            <FaRocketchat className="text-xl"></FaRocketchat>
            <h3 className="ml-3 font-semibold">Chat</h3>
          </div>
        </div>
        {/* <label
          // disabled={slots.length === 0}
          htmlFor="order-modal"
          onClick={() => setOrder(product)}
          className="btn btn-primary text-white absolute bottom-5 right-10"
        >
          ORDER NOW
        </label> */}
      </div>
    </div>
  );
};

export default MyProduct;
