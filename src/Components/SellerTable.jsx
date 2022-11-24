/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactPaginate from "react-paginate";
import PageHead from "./subassets/components/PageHead";

import TableLayout from "./TableLayout";

const sellerhead = [
  { id: 1, name: "Seller Info" },
  { id: 2, name: "Popular Dish" },
  { id: 3, name: "Active Status" },
  { id: 4, name: "Today Delivered" },
  { id: 5, name: "Total Delivered" },
];
function SellerTable() {
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);

  const getData = async () => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/comments`
    );
    const data = res.data;
    const sellers = data.slice(offset, offset + perPage);
    const postData = sellers.map((seller) => (
      <tr key={seller.id} className="table-comm">
        <td className="Ts1">
          <Link to={"/sellerprofile"}>
            <div className="Ts2">
              <div className="Ts3">
                <img
                  className="Ts4"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="Ts5">
                <div className="Ts6">{seller.name}</div>
                <div className="text-gray-500">{seller.email}</div>
              </div>
            </div>
          </Link>
        </td>
        <td className="Ts7">
          <div className="text-gray-900">Chineese</div>
          <div className="text-gray-500">Noodles</div>
        </td>
        <td className="Ts7">
          <span className="Ts8">Active</span>
        </td>
        <td className="Ts7">183</td>
        <td className="Ts7">1830</td>
      </tr>
    ));
    setData(postData);
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
    <TableLayout>
      <main>
        <PageHead>
          <h2>Our Sellers</h2>
        </PageHead>
        <section className="Ts14">
          <div className="Ts15">
            <div className="Ts16">
              <table className="Ts17">
                <thead className="bg-gray-50">
                  <tr>
                    {sellerhead.map((item) => (
                      <th key={item.id} scope="col" className="Ts18">
                        {item.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="Ts20 ">{data}</tbody>
              </table>
            </div>
          </div>
        </section>

        <ReactPaginate
          subContainerClassName={"pages pagination"}
          nextLabel="next→"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
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
      </main>
    </TableLayout>
  );
}

export default SellerTable;
