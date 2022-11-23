import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import TableLayout from "./TableLayout";
const userhead = [
    { id: 1, name: "User Info" },
    { id: 2, name: "Region" },
    { id: 3, name: "Active Status" },
    { id: 4, name: "Last Ordered" },
    { id: 5, name: "Today Ordered" },
];
function UserTable() {
    const [offset, setOffset] = useState(0);
    const [data, setData] = useState([]);
    const [perPage] = useState(10);
    const [pageCount, setPageCount] = useState(0);

    const getData = async () => {
        const res = await axios.get(
            `https://jsonplaceholder.typicode.com/comments`
        );
        const data = res.data;
        const users = data.slice(offset, offset + perPage);
        const postData = users.map((user) => (
            <tr key={user.id} className="table-comm">
                <td className="Ts1">
                    <Link to={"/userprofile"}>
                        <div className="Ts2">
                            <div className="Ts3">
                                <img
                                    className="Ts4"
                                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                            </div>
                            <div className="Ts5">
                                <div className="Ts6">{user.name}</div>
                                <div className="text-gray-500">
                                    {user.email}
                                </div>
                            </div>
                        </div>
                    </Link>
                </td>
                <td className="Ts7">
                    <div className="text-gray-900">India</div>
                    <div className="text-gray-500">Delhi</div>
                </td>
                <td className="Ts7">
                    <span className="Ts8">Active</span>
                </td>
                <td className="Ts7">18/10/2022</td>
                <td className="Ts7">183</td>
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
                <h2 className="Ts13">Our Users</h2>
                <section className="Ts14">
                    <div className="Ts15">
                        <div className="Ts16">
                            <table className="Ts17">
                                <thead className="bg-gray-50">
                                    <tr>
                                        {userhead.map((item) => (
                                            <th
                                                key={item.id}
                                                scope="col"
                                                className="Ts18"
                                            >
                                                {item.name}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="Ts20">{data}</tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <ReactPaginate
                    subContainerClassName={"pages pagination"}
                    nextLabel={"next→"}
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

export default UserTable;
