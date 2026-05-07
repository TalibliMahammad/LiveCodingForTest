import React, { useEffect, useState } from "react";

export default function DataFetch() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // useEffect(() => {
  //   setLoading(true);

  //   setTimeout(() => {
  //     fetch("https://dummyjson.com/products")
  //       .then((res) => {
  //         if (!res.ok) throw new Error("Network response was not ok");
  //         return res.json();
  //       })
  //       .then(({ products }) => {
  //         setData(products);
  //         setLoading(false);
  //       })
  //       .catch((err) => {
  //         setError(err.message);
  //         setLoading(false);
  //       });
  //   }, 2000)
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://dummyjson.com/products");
        if (!res.ok) throw new Error("Network response was not ok");
        const { products } = await res.json();
        setData(products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
            }
    };

    fetchData();
  },[]);

  return (
    <div className="bg-gray-800 text-white flex flex-col gap-10 min-h-screen p-10 ">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        data.map((item) => (
          <div key={item.id} className="flex gap-10 mt-10">
            <img
              src={item.thumbnail}
              alt=""
              className="w-40 h-40 object-cover rounded-md"
            />
            <div>
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p>{item.description}</p>
              <p className="font-bold text-lg">${item.price}</p>
            </div>
          </div>
        ))
      )}{" "}
      {error && <h1 className="text-red-500 text-xl">{error}</h1>}
    </div>
  );
}
