import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from "../../../Shared/Loading/Loading";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const imageHostKey = process.env.REACT_APP_imgbb_key;
  const navigate = useNavigate();

  const { data: specialties, isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch(
        "https://doctors-portal-server-seven-tan.vercel.app/appointmentSpecialty"
      );
      const data = await res.json();
      return data;
    },
  });

  const handleAddDoctor = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imgData.data.url,
          };
          // save doctor information to the database
          fetch("https://doctors-portal-server-seven-tan.vercel.app/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} added successfully`);
              navigate("/dashboard/managedoctors");
            });
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="w-2/4 p-10">
      <h3 className="text-3xl">Add A Product</h3>
      <form onSubmit={handleSubmit(handleAddDoctor)} className="text-center">
        <div>
          <label className="label">Product Name</label>
          <input
            type="text"
            {...register("product-name", {
              required: "Product name is required!",
            })}
            className="input input-bordered w-full"
          />
          {errors?.name && (
            <p className="text-red-600">{errors?.name.message}</p>
          )}
        </div>
        <div>
          <label className="label">Price</label>
          <input
            type="text"
            {...register("price", {
              required: "please price is required!",
            })}
            className="input input-bordered w-full"
          />
          {errors?.name && (
            <p className="text-red-600">{errors?.name.message}</p>
          )}
        </div>
        <div>
          <label className="label">Condition Type</label>
          <input
            type="text"
            {...register("condition-type", {
              required: "condition type is required!",
            })}
            className="input input-bordered w-full"
          />
          {errors?.name && (
            <p className="text-red-600">{errors?.name.message}</p>
          )}
        </div>
        <div>
          <label className="label">Contact Number</label>
          <input
            type="text"
            {...register("contact-number", {
              required: "contact number is required!",
            })}
            className="input input-bordered w-full"
          />
          {errors?.name && (
            <p className="text-red-600">{errors?.name.message}</p>
          )}
        </div>
        <div>
          <label className="label">Location</label>
          <input
            type="text"
            {...register("location", {
              required: "location is required!",
            })}
            className="input input-bordered w-full"
          />
          {errors?.name && (
            <p className="text-red-600">{errors?.name.message}</p>
          )}
        </div>

        <div>
          <label className="label">Year Of purchase</label>
          <input
            type="text"
            {...register("year-of-purchase", {
              required: "required!",
            })}
            className="input input-bordered w-full"
          />
          {errors?.name && (
            <p className="text-red-600">{errors?.name.message}</p>
          )}
        </div>

        <div>
          <label className="label">Please Select Category</label>
          <select
            {...register("specialty")}
            className="select select-bordered w-full"
          >
            {specialties?.map((specialty) => (
              <option key={specialty._id} value={specialty.name}>
                {specialty.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="label">Photo</label>
          <input
            type="file"
            {...register("image", {
              required: "image is required!",
            })}
            className="input input-bordered w-full"
          />
          {errors?.image && (
            <p className="text-red-600">{errors?.image.message}</p>
          )}
        </div>
        <div>
          <label className="label">Description</label>

          <textarea
            type="text"
            {...register("description", {
              required: "description is must required!",
            })}
            className="textarea textarea-bordered w-full"
          ></textarea>
          {errors?.name && (
            <p className="text-red-600">{errors?.name.message}</p>
          )}
        </div>
        <input
          type="submit"
          value="Add Product"
          className="btn btn-secondary lg:w-full mt-4 text-white"
        />
      </form>
    </div>
  );
};

export default AddProduct;
