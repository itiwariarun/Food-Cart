/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import PageHead from "./subassets/components/PageHead";
import Animation from "./Animation";
const HeadStat = [
  { id: "1", head: "Price" },
  { id: "2", head: "Quantity" },
  { id: "3", head: "Date/Time" },
];
const HeadInfo = [
  { id: "1", head: "User Name" },
  { id: "2", head: "Seller Name" },
  { id: "3", head: "User Email" },
];
function OrderSummary() {
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(22);
  const [pageCount, setPageCount] = useState(0);

  const getData = async () => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/comments`
    );
    const data = res.data;
    const orders = data.slice(offset, offset + perPage);
    const orderData = orders.map((order) => (
      <tr key={order.id} className="order-data-a1">
        <td className="order-data-a2 ">{order.id}</td>
        <td className="order-data-a3">{order.name}</td>
        <td className="order-data-a3">{order.name}</td>
        <td className="order-data-a4">{order.email}</td>
        <td className="order-data-a5">$100</td>
        <td className="order-data-a5">2</td>
        <td className="order-data-a5">28-sep-2022 / 17:30pm</td>
      </tr>
    ));
    setData(orderData);
    setPageCount(Math.ceil(data.length / perPage));
  };
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  useEffect(() => {
    getData();
  }, [offset]);

  return (
    <Animation>
      <section className="order-body-a1 ">
        <div className="order-body-a2 ">
          <PageHead>
            <h2 className="text-center">Order Information</h2>
          </PageHead>
          <div className="overflow-x-auto ">
            <div className="order-body-a3 ">
              <div className="order-body-a4">
                <table className="order-head-a1">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="order-head-a3">
                        Order Id
                      </th>
                      {HeadInfo.map((item) => (
                        <th scope="col" key={item.id} className="order-head-a4">
                          {item.head}
                        </th>
                      ))}
                      {HeadStat.map((item) => (
                        <th
                          scope="col"
                          key={item.id}
                          className="text-center order-head-a4"
                        >
                          {item.head}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="order-head-a5">{data}</tbody>
                </table>
              </div>
            </div>
          </div>
          <ReactPaginate
            subContainerClassName={"pages pagination"}
            nextLabel="next→"
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="←prev"
            pageClassName="page-item"
            pageLinkClassName="page-plink"
            previousClassName="page-prev"
            previousLinkClassName="page-prlink"
            nextClassName="page-next"
            nextLinkClassName="page-nelink"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-blink"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          ></ReactPaginate>
        </div>
      </section>
    </Animation>
  );
}

export default OrderSummary;
