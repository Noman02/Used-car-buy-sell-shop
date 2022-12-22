import React from "react";
import { FaPhoneSquareAlt, FaRocketchat } from "react-icons/fa";

const AdvertisedItem = ({ add }) => {
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
  } = add;
  return (
    <div className="my-12 lg:flex justify-around lg:w-3/4 mx-auto bg-white shadow-xl rounded-md">
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
      <div className="card-body lg:w-full relative">
        <h2 className="text-primary font-bold text-xl mb-6">
          Product Added As A Advertised
        </h2>
        <div className="card-actions justify-center">
          <div className="lg:flex md:flex justify-center items-center border p-4 lg:w-3/4">
            <p className="flex">
              <FaPhoneSquareAlt className="text-3xl text-secondary mr-3"></FaPhoneSquareAlt>
              <span>+99 333 4444</span>
            </p>
          </div>
        </div>
        <div className="card-actions justify-evenly">
          <div className="flex items-center border p-4 lg:w-3/4">
            <p>
              <FaRocketchat className="text-xl"></FaRocketchat>
            </p>
            <h3 className="ml-3 font-semibold">Chat</h3>
          </div>
        </div>
        {/* <div className="absolute bottom-5 right-5 flex justify-between lg:w-3/4">
          <button
            onClick={() => handleAvailable(_id)}
            className="btn btn-sm btn-secondary text-white"
          >
            Available
          </button>
          <button className="btn btn-sm btn-info text-white">Delete</button>
        </div> */}
      </div>
    </div>
  );
};

export default AdvertisedItem;
