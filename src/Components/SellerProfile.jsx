import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Disclosure, Menu, Switch, Transition } from "@headlessui/react";
import Dashboard from "./Dashboard";
import {
    MagnifyingGlassIcon,
    ArrowDownIcon,
    ArrowUpIcon,
} from "@heroicons/react/20/solid";
import {
    Bars3Icon,
    BellIcon,
    CogIcon,
    CreditCardIcon,
    KeyIcon,
    SquaresPlusIcon,
    UserCircleIcon,
    XMarkIcon,
    EnvelopeIcon,
    PhoneIcon,
    CursorArrowRaysIcon,
    EnvelopeOpenIcon,
    UsersIcon,
    ArrowLeftIcon,
} from "@heroicons/react/24/outline";

const stats = [
    {
        id: 1,
        name: "Total Customers",
        stat: "71,897",
        icon: UsersIcon,
        change: "122%",
        changeType: "increase",
    },
    {
        id: 2,
        name: "Avg. Daily Deliveries",
        stat: "58.16%",
        icon: EnvelopeOpenIcon,
        change: "5.4%",
        changeType: "increase",
    },
    {
        id: 3,
        name: "Avg. Income",
        stat: "24.57%",
        icon: CursorArrowRaysIcon,
        change: "3.2%",
        changeType: "increase",
    },
    {
        id: 4,
        name: "Avg. Rating",
        stat: "+87%",
        icon: CursorArrowRaysIcon,
        change: "3.2%",
        changeType: "decrease",
    },
];
const user = {
    name: "Debbie Lewis",
    handle: "deblewis",
    email: "debbielewis@example.com",
    imageUrl:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
function SellerProfile() {
    const [manageSeller, setmanageSeller] = useState(true);
    const [allowCommenting, setAllowCommenting] = useState(true);
    const [offer, setoffer] = useState(true);

    return (
        <Dashboard>
            <main className="profile-a">
                <section className="profile-a1" action="#" method="#!">
                    {/* Profile section */}
                    <section className="profile-a2">
                        <Link to={"/seller"}>
                            <ArrowLeftIcon className="profile-a3" />
                        </Link>
                        <article>
                            <h2 className="profile-a4">Seller Profile</h2>
                            <p className="profile-a5">
                                This information will be displayed publicly so
                                be careful what you share.
                            </p>
                        </article>

                        <section className="profile-a6">
                            <div className="profile-a7">
                                <div className="profile-a8 ">
                                    <img
                                        className=" profile-img"
                                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <article className="profile-flex">
                                <div>
                                    <label
                                        htmlFor="username"
                                        className="profile-block"
                                    >
                                        Username
                                    </label>
                                    <p className="text-sm">Seller User Name</p>
                                </div>

                                <div>
                                    <label
                                        htmlFor="about"
                                        className="profile-about-label"
                                    >
                                        About
                                    </label>
                                    <div className="mt-1">
                                        <p className="profile-about-text">
                                            Et vivamus lorem pulvinar nascetur
                                            non. Pulvinar a sed platea rhoncus
                                            ac mauris amet. Urna, sem pretium
                                            sit pretium urna, senectus vitae.
                                            Scelerisque fermentum, cursus felis
                                            dui suspendisse velit pharetra.
                                            Augue et duis cursus maecenas eget
                                            quam lectus. Accumsan vitae nascetur
                                            pharetra rhoncus praesent dictum
                                            risus suspendisse.
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </section>

                        <section className="info-a">
                            <div className="info-a1">
                                <div>
                                    <label
                                        htmlFor="first-name"
                                        className="info-a2"
                                    >
                                        Full Name
                                    </label>
                                    <p className="text-sm">Seller Full Name</p>
                                </div>
                            </div>

                            <div className="info-a3">
                                <label htmlFor="url" className="info-a2">
                                    Restuarent Name & Address
                                </label>
                                <p className="text-sm"> Address</p>
                            </div>
                            <div className="info-a1">
                                <label htmlFor="company" className="info-a2">
                                    Contact Information
                                </label>
                                <p className="text-sm">Seller Contact</p>
                            </div>
                            <div className="info-a3">
                                <label htmlFor="company" className="info-a2">
                                    Seller Info
                                </label>
                                <p className="text-sm ">
                                    Seller Postion/Experience/Types Of Selling
                                    Things
                                </p>
                            </div>
                            <div className="info-a3">
                                <label htmlFor="company" className="info-a2">
                                    Famous Dishes
                                </label>
                                <p className="text-sm ">Special Dishes</p>
                            </div>
                            <div className="info-a3">
                                <label htmlFor="company" className="info-a2">
                                    Total Number Of Orders Delivered
                                </label>
                                <p className="text-sm ">1234</p>
                            </div>
                            <div className="info-a3">
                                <label htmlFor="company" className="info-a2">
                                    Timing
                                </label>
                                <p className="text-sm ">Timing</p>
                            </div>
                            <div className="info-a3 text-sm hover:text-[1rem]">
                                <Link
                                    to="/cuisines"
                                    className="pt-1 font-semibold text-sky-800"
                                >
                                    Menu Provided By Seller{" "}
                                    <span className="text-2xl ">→</span>
                                </Link>
                            </div>
                        </section>
                    </section>
                    <section className="p-4">
                        <h3 className="profile-a4">Last 30 days</h3>

                        <dl className="profile-a9">
                            {stats.map((item) => (
                                <div key={item.id} className="profile-a10">
                                    <dt>
                                        <div className="profile-a11">
                                            <item.icon
                                                className="profile-a12"
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <p className="profile-a13">
                                            {item.name}
                                        </p>
                                    </dt>
                                    <dd className="profile-a14">
                                        <p className="profile-a15">
                                            {item.stat}
                                        </p>
                                        <p
                                            className={classNames(
                                                item.changeType === "increase"
                                                    ? "text-green-600"
                                                    : "text-red-600",
                                                "profile-a16"
                                            )}
                                        >
                                            {item.changeType === "increase" ? (
                                                <ArrowUpIcon
                                                    className="text-green-500 profile-a17"
                                                    aria-hidden="true"
                                                />
                                            ) : (
                                                <ArrowDownIcon
                                                    className="text-red-500 profile-a17"
                                                    aria-hidden="true"
                                                />
                                            )}

                                            <span className="sr-only">
                                                {" "}
                                                {item.changeType === "increase"
                                                    ? "Increased"
                                                    : "Decreased"}{" "}
                                                by{" "}
                                            </span>
                                            {item.change}
                                        </p>
                                        <div className="profile-a18">
                                            <div className="text-sm">
                                                <a
                                                    href="#"
                                                    className="profile-a19"
                                                >
                                                    {" "}
                                                    View all
                                                    <span className="sr-only">
                                                        {" "}
                                                        {item.name} stats
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </section>
                    {/* Privacy section */}
                    <section className="profile-a20">
                        <div className="px-4 sm:px-6">
                            <div>
                                <a href="#!">
                                    <h2 className="leading-6 profile-a21">
                                        Privacy Management
                                    </h2>
                                </a>
                                <p className="profile-a5">
                                    Ornare eu a volutpat eget vulputate.
                                    Fringilla commodo amet.
                                </p>
                            </div>
                            <ul role="list" className="profile-a22">
                                <Switch.Group as="li" className="profile-a23">
                                    <div className="seller-comm2">
                                        <Switch.Label
                                            as="p"
                                            className=" profile-a21"
                                            passive
                                        >
                                            Manage Seller
                                        </Switch.Label>
                                        <Switch.Description className="seller-comm1">
                                            Nulla amet tempus sit accumsan.
                                            Aliquet turpis sed sit lacinia.
                                        </Switch.Description>
                                    </div>
                                    <Switch
                                        checked={manageSeller}
                                        onChange={setmanageSeller}
                                        className={classNames(
                                            manageSeller
                                                ? "switchon"
                                                : "switchof",
                                            "switch-a1 "
                                        )}
                                    >
                                        <span
                                            aria-hidden="true"
                                            className={classNames(
                                                manageSeller
                                                    ? "switchon1"
                                                    : "switchof1",
                                                "switch-a2"
                                            )}
                                        />
                                    </Switch>
                                </Switch.Group>
                                <Switch.Group as="li" className="profile-a23">
                                    <div className="seller-comm2">
                                        <Switch.Label
                                            as="p"
                                            className=" profile-a21"
                                            passive
                                        >
                                            Enable to upload menu
                                        </Switch.Label>
                                        <Switch.Description className="seller-comm1">
                                            Integer amet, nunc hendrerit
                                            adipiscing nam. Elementum ame
                                        </Switch.Description>
                                    </div>
                                    <Switch
                                        checked={allowCommenting}
                                        onChange={setAllowCommenting}
                                        className={classNames(
                                            allowCommenting
                                                ? "switchon"
                                                : "switchof",
                                            "switch-a1 "
                                        )}
                                    >
                                        <span
                                            aria-hidden="true"
                                            className={classNames(
                                                allowCommenting
                                                    ? "switchon1"
                                                    : "switchof1",
                                                "switch-a2"
                                            )}
                                        />
                                    </Switch>
                                </Switch.Group>
                                <Switch.Group as="li" className="profile-a23">
                                    <div className="seller-comm2">
                                        <Switch.Label
                                            as="p"
                                            className=" profile-a21"
                                            passive
                                        >
                                            Allow commenting
                                        </Switch.Label>
                                        <Switch.Description className="seller-comm1">
                                            Integer amet, nunc hendrerit
                                            adipiscing nam. Elementum ame
                                        </Switch.Description>
                                    </div>
                                    <Switch
                                        checked={allowCommenting}
                                        onChange={setAllowCommenting}
                                        className={classNames(
                                            allowCommenting
                                                ? "switchon"
                                                : "switchof",
                                            "switch-a1 "
                                        )}
                                    >
                                        <span
                                            aria-hidden="true"
                                            className={classNames(
                                                allowCommenting
                                                    ? "switchon1"
                                                    : "switchof1",
                                                "switch-a2"
                                            )}
                                        />
                                    </Switch>
                                </Switch.Group>
                                <Switch.Group as="li" className="profile-a23">
                                    <div className="seller-comm2">
                                        <Switch.Label
                                            as="p"
                                            className=" profile-a21"
                                            passive
                                        >
                                            Allow Offers
                                        </Switch.Label>
                                        <Switch.Description className="seller-comm1">
                                            Adipiscing est venenatis enim
                                            molestie commodo eu gravid
                                        </Switch.Description>
                                    </div>
                                    <Switch
                                        checked={allowCommenting}
                                        onChange={setAllowCommenting}
                                        className={classNames(
                                            allowCommenting
                                                ? "switchon"
                                                : "switchof",
                                            "switch-a1 "
                                        )}
                                    >
                                        <span
                                            aria-hidden="true"
                                            className={classNames(
                                                allowCommenting
                                                    ? "switchon1"
                                                    : "switchof1",
                                                "switch-a2"
                                            )}
                                        />
                                    </Switch>
                                </Switch.Group>
                            </ul>
                        </div>

                        <div className="px-4 pt-5">
                            <div className="seller-comm3">
                                <div className="btn-a1">
                                    <Link to="/verifyuser" type="button">
                                        Manage
                                    </Link>
                                </div>
                                <div className="btn-a2 ">
                                    <button type="button">Block</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </main>
        </Dashboard>
    );
}

export default SellerProfile;
