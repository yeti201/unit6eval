import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getproductsData, sortProducts } from "../Redux/actions";
import styles from "./products.module.css";
export const Products = () => {
  // const data = useSelector((state) => state.products);
  const data = useSelector((state) => state.sortedProds);

  const nav = useNavigate();
  // to get all products list on component mounts
  const dispatch = useDispatch();
  useEffect(() => {
    //   dispatch an action to the store
    // dont make call here
    // handle it as thunk call in actions.js
    dispatch(getproductsData());
  }, [dispatch]);

  //    sort by price
  const handleSort = (e) => {
    // dispach handle sort action to the store
    // console.log(e.target.value)
    dispatch(sortProducts(e.target.value.trim()));
  };
  return (
    <>
      <h2>Products</h2>
      <select id={styles.productsSelector }onChange={handleSort}>
        <option>--sort by --</option>
        <option value="asc">low to high</option>
        <option value="desc">high to low</option>
      </select>
      {console.log(data)}
      <div id={styles.container} className="products-list">
        {/* map throught th products  list and display the results */}
        {data &&
          data.map((e) => {
            return (
              <div
                className={styles.card}
                key={e.id}
                onClick={() => nav(`/products/${e.id}`)}
              >
                <img src={e.image} alt="" height="80%" width="100%" />
                {/* display the results here */
                
                  e.title}
              </div>
            );
          })}
      </div>
    </>
  );
};
