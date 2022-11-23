import React from "react";
import {
    EnvelopeIcon,
    PhoneIcon,
    XCircleIcon,
    ArrowLeftIcon,
} from "@heroicons/react/20/solid";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";
import { Popular, Dinner, BreakFast, Lunch, Dessert } from "./Objects/SubMenu";

function SubMenu() {
    return (
        <main className="min-h-screen bg-slate-300">
            <Dashboard>
                <section className="menux-div-main">
                    <header className="px-4 pt-2">
                        <div className="flex justify-between ">
                            <Link to={"/cuisines"}>
                                <ArrowLeftIcon className="profile-a3 " />
                            </Link>
                            <div className="btn-a2">
                                <button type="button" className="">
                                    Save Menu
                                </button>
                            </div>
                        </div>
                    </header>
                    <header className="menux-div-head">
                        <h3 className="menux-main-heading">
                            Dishes Provided Here
                        </h3>
                    </header>
                    <section>
                        <div className="menux-div-subhead">
                            <h3 className="menux-main-subheading">
                                Famous Dishes
                            </h3>
                        </div>{" "}
                        <ul role="Dinner" className="menux-list">
                            {Popular.map((Populars) => (
                                <li key={Populars.id} className="menux-id">
                                    {" "}
                                    <div className="flex justify-between veg-nonveg">
                                        <div>
                                            <p>Veg/Non-veg</p>
                                        </div>
                                        <div>
                                            <XCircleIcon className="w-5 h-5" />
                                        </div>
                                    </div>
                                    <div className="menux-card2">
                                        <img
                                            className="menux-img2"
                                            src={Populars.imageUrl}
                                            alt=""
                                        />
                                        <h3 className="menux-name">
                                            {Populars.name}
                                        </h3>
                                        <dl className="menux-dl">
                                            <dt className="menux-title">
                                                Rating
                                            </dt>
                                            <dd className="menux-cuisines-title">
                                                {Populars.Rating}
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="menux-add">
                                        <div>Price</div>
                                        <div>Timing</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>
                    <section>
                        <div className="menux-div-subhead">
                            <h3 className="menux-main-subheading">Dinner</h3>
                        </div>{" "}
                        <ul role="Dinner" className="menux-list">
                            {Dinner.map((Dinners) => (
                                <li key={Dinners.id} className="menux-id">
                                    {" "}
                                    <div className="veg-nonveg">
                                        Veg/Non-veg
                                    </div>
                                    <div className="menux-card2">
                                        <img
                                            className="menux-img2"
                                            src={Dinners.imageUrl}
                                            alt=""
                                        />
                                        <h3 className="menux-name">
                                            {Dinners.name}
                                        </h3>
                                        <dl className="menux-dl">
                                            <dt className="menux-title">
                                                Rating
                                            </dt>
                                            <dd className="menux-cuisines-title">
                                                {Dinners.Rating}
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="menux-add">
                                        <div>Price</div>
                                        <div>Timing</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>
                    <section>
                        <div className="menux-div-subhead">
                            <h3 className="menux-main-subheading">Lunch</h3>
                        </div>{" "}
                        <ul role="Lunch" className="menux-list">
                            {Lunch.map((Lunchs) => (
                                <li key={Lunchs.id} className="menux-id">
                                    {" "}
                                    <div className="veg-nonveg">
                                        Veg/Non-veg
                                    </div>
                                    <div className="menux-card2">
                                        <img
                                            className="menux-img2"
                                            src={Lunchs.imageUrl}
                                            alt=""
                                        />
                                        <h3 className="menux-name">
                                            {Lunchs.name}
                                        </h3>
                                        <dl className="menux-dl">
                                            <dt className="menux-title">
                                                Rating
                                            </dt>
                                            <dd className="menux-cuisines-title">
                                                {Lunchs.Rating}
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="menux-add">
                                        <div>Price</div>
                                        <div>Timing</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>
                    <section>
                        <div className="menux-div-subhead">
                            <h3 className="menux-main-subheading">BreakFast</h3>
                        </div>{" "}
                        <ul role="BreakFast" className="menux-list">
                            {BreakFast.map((BreakFasts) => (
                                <li key={BreakFasts.id} className="menux-id">
                                    {" "}
                                    <div className="veg-nonveg">
                                        Veg/Non-veg
                                    </div>
                                    <div className="menux-card2">
                                        <img
                                            className="menux-img2"
                                            src={BreakFasts.imageUrl}
                                            alt=""
                                        />
                                        <h3 className="menux-name">
                                            {BreakFasts.name}
                                        </h3>
                                        <dl className="menux-dl">
                                            <dt className="menux-title">
                                                Rating
                                            </dt>
                                            <dd className="menux-cuisines-title">
                                                {BreakFasts.Rating}
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="menux-add">
                                        <div>Price</div>
                                        <div>Timing</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>
                    <section>
                        <div className="menux-div-subhead">
                            <h3 className="menux-main-subheading">Dessert</h3>
                        </div>{" "}
                        <ul role="Dessert" className="menux-list">
                            {Dessert.map((Desserts) => (
                                <li key={Desserts.id} className="menux-id">
                                    {" "}
                                    <div className="veg-nonveg">
                                        Veg/Non-veg
                                    </div>
                                    <div className="menux-card2">
                                        <img
                                            className="menux-img2"
                                            src={Desserts.imageUrl}
                                            alt=""
                                        />
                                        <h3 className="menux-name">
                                            {Desserts.name}
                                        </h3>
                                        <dl className="menux-dl">
                                            <dt className="menux-title">
                                                Rating
                                            </dt>
                                            <dd className="menux-cuisines-title">
                                                {Desserts.Rating}
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="menux-add">
                                        <div>Price</div>
                                        <div>Timing</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>
                </section>
            </Dashboard>
        </main>
    );
}

export default SubMenu;
