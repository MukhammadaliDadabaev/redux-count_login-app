import React from "react";
import { useSelector } from "react-redux";

const News_2 = () => {
  const counter = useSelector((state) => state.counter);

  return (
    <div>
      <h3>NEWS-2 usul</h3>
      <h4>Canoqni ko'rish👉 {counter} </h4>
    </div>
  );
};

export default News_2;
