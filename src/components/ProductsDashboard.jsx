import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getproductsData } from "../Redux/actions";

export const Products = () => {
  const products = useSelector((store) => store.products);
  const dispatch = useDispatch();
  console.log("dashboard",products);


  // to get all products list on component mounts
  // useEffect(() => {
  //   //   dispatch an action to the store
  //   // dont make call here
  //   // handle it as thunk call in actions.js
  //   dispatch(getproductsData())
  // }, [dispatch]);

     //sort by price
  const handleSort = (e) => {
    // dispach handle sort action to the store
  };
  return (
    <>

      <button onClick={() => {
        dispatch(getproductsData())
      }}>GET DATA

      </button>
      {/* <h2>Products</h2>
      <select onChange={handleSort}>
        <option>--sort by --</option>
        <option value="asc">low to high</option>
        <option value="desc">high to low</option>
      </select>
      <div className="products-list">
        {data &&
          data.map(() => {
            return <div></div>;
          })}
      </div> */}
    </>
  )
};
