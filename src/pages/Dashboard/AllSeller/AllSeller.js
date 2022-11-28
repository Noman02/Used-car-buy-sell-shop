import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";

const AllSeller = () => {
  const [Users, setUsers] = useState([]);
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();
      return data;
    },
  });

  const handleDeleteSeller = (id) => {
    const agree = window.confirm("do you want to delete it?");
    if (agree) {
      fetch(`http://localhost:5000/users/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged > 0) {
            toast.success("User deleted successfully");
            const remainingUsers = Users.filter((user) => user._id !== id);
            setUsers(remainingUsers);
            console.log(data);
          }
        });
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold">All Seller</h2>
      <div className="overflow-x-auto mt-12">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Verify</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>
                  <button className="btn btn-sm btn-secondary text-white">
                    Verify
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteSeller(user?._id)}
                    className="btn btn-sm btn-info"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSeller;
