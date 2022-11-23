import React from "react";
import {
    EnvelopeIcon,
    PhoneIcon,
    ArrowLeftIcon,
} from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import { Cuisine } from "./Objects/Cuisines";
function Menu() {
    return (
        <div className="min-h-screen bg-slate-300">
            <Dashboard>
                <section className="menux-div-main">
                    <Link to={"/sellerprofile"}>
                        <ArrowLeftIcon className="profile-a3 " />
                    </Link>
                    <div className="menux-div-head">
                        <h3 className="menux-main-heading">
                            Cuisines Provided By Seller
                        </h3>
                    </div>
                    <ul role="list" className="menux-list">
                        {Cuisine.map((Cuisines) => (
                            <li key={Cuisines.id} className="menux-id">
                                <Link to={Cuisines.to}>
                                    {" "}
                                    <div className="menux-card">
                                        <img
                                            className="menux-img"
                                            src={Cuisines.imageUrl}
                                            alt=""
                                        />
                                        <h3 className="menux-name">
                                            {Cuisines.name}
                                        </h3>
                                        <dl className="menux-dl">
                                            <dt className=".menux-title">
                                                Title
                                            </dt>
                                            <dd className="menux-cuisines-title">
                                                {Cuisines.title}
                                            </dd>
                                        </dl>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            </Dashboard>
        </div>
    );
}

export default Menu;
