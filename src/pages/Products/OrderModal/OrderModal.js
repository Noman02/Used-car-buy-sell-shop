import React, { useContext } from "react";
import toast from "react-hot-toast";
import { authContext } from "../../../contexts/AuthProvider/AuthProvider";

const OrderModal = ({ order, setOrder }) => {
  const { user } = useContext(authContext);
  const { name, location, model } = order;

  console.log(order);

  const handleOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const fullname = form.fullname.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const order = {
      treatment: name,
      patient: fullname,
      email,
      phone,
    };

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setOrder(null);
          toast.success("Order Placed");
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="order-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="order-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handleOrder} className="grid grid-cols-1 gap-4 mt-10">
            <input
              type="text"
              value={model}
              disabled
              className="input input-bordered w-full"
            />

            <input
              defaultValue={user?.displayName}
              name="fullname"
              type="text"
              disabled
              placeholder="Full Name"
              className="input input-bordered w-full"
              required
            />
            <input
              defaultValue={user?.email}
              name="email"
              type="email"
              placeholder="Email"
              disabled
              className="input input-bordered w-full"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full"
            />
            <input
              defaultValue={location}
              name="location"
              type="text"
              disabled
              placeholder="Location"
              className="input input-bordered w-full"
            />
            <input
              type="submit"
              value="Place Order"
              className="btn btn-secondary text-white"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default OrderModal;
