"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

function Home() {
  const state: any = useSelector((state) => state);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const router = useRouter();

  const handleSearch = async (value: any) => {
    if (value) {
      const filteredData = state.filter((data: any) =>
        data.title.toLowerCase().includes(value.toLowerCase())
      );
      setData(filteredData);
    } else {
      setData(state);
    }
  };

  const dataFetch = async () => {
    const res = await axios.get("http://localhost:8000/tasks");
    setData(res.data);
    res?.data &&
      dispatch({
        type: "Data",
        payload: res.data,
      });
  };

  const handleLogout = () => {
    window.localStorage.clear();
    router.push("/");
  };
  useEffect(() => {
    // const token = window.localStorage.getItem("token");
    // if (token === "12345") {
    //   router.push("/");
    // } else {
    dataFetch();
    // }
    // dataFetch();
  }, []);
  return (
    <div className="min-h-screen justify-center">
      <div className="p-10">
        <label htmlFor="search" className="mr-10 text-lg">
          Search:
        </label>
        <input
          type="text"
          id="search"
          className="w-96 p-2 text-black"
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        />
        <button
          className="bg-red-200 p-2 ml-2 rounded-full"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <div className="">
        <table>
          <thead>
            <tr>
              <th className="p-10">Title</th>
              <th className="p-10">Description</th>
              <th className="p-10">Status</th>
            </tr>
          </thead>
          <tbody>
            {data
              ? data.map((data: any) => (
                  <tr key={data._id}>
                    <td className="p-10">{data.title}</td>
                    <td className="p-10">{data.description}</td>
                    <td className="p-10">{data.status}</td>
                  </tr>
                ))
              : "Data Not Available"}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
