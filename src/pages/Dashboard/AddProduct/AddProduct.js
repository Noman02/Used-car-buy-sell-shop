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

  const { data: category, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await fetch(
        "https://used-cars-buy-sell-server.vercel.app/category"
      );
      const data = await res.json();
      return data;
    },
  });

  const handleAddProduct = (data) => {
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
        console.log(imgData);
        if (imgData.success) {
          const product = {
            productName: data.product_name,
            model: data.model,
            price: data.price,
            conditionType: data.condition_type,
            yearOfPurchase: data.year_of_purchase,
            category: data.category,
            image: imgData.data.url,
            description: data.description,
          };

          fetch("https://used-cars-buy-sell-server.vercel.app/addproducts", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success("Product added successfully");
              navigate("/dashboard/myproducts");
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
      <form onSubmit={handleSubmit(handleAddProduct)} className="text-center">
        <div>
          <label className="label">Product Name</label>
          <input
            type="text"
            {...register("product_name", {
              required: "Product name is required!",
            })}
            className="input input-bordered w-full"
          />
          {errors?.name && (
            <p className="text-red-600">{errors?.name.message}</p>
          )}
        </div>
        <div>
          <label className="label">Model</label>
          <input
            type="text"
            {...register("model", {
              required: "model is required!",
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
            {...register("condition_type", {
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
            {...register("contact_number", {
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
            {...register("year_of_purchase", {
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
            {...register("category")}
            className="select select-bordered w-full"
          >
            {category?.map((cat) => (
              <option key={cat._id} value={cat.category}>
                {cat.category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="label">Photo</label>
          <input
            type="file"
            {...register("image")}
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
