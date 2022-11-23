import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Disclosure, Menu, Switch, Transition } from "@headlessui/react";
import Dashboard from "./Dashboard";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
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
function UserProfile() {
const[open,setopen]=useState(false);
    const [userManage, setuserManage] = useState(true);
    const [allowCommenting, setAllowCommenting] = useState(true);
    return (
        <Dashboard>
            <main className="py-10 user">
                {/* Replace with your content */}
                <div className="user-a1">
                    <div className="rounded-lg ">
                        <div>
                            <section>
                                <Disclosure as="div" className="user-a2">
                                    {" "}
                                    <>
                                        <div
                                            aria-hidden="true"
                                            className={classNames(
                                                open ? "bottom-0" : "inset-y-0",
                                                "user-a3"
                                            )}
                                        >
                                            <div className="user-a4">
                                                <div
                                                    className="w-1/2 h-full"
                                                    style={{
                                                        backgroundColor:
                                                            "#0a527b",
                                                    }}
                                                />

                                                <div
                                                    className="w-1/2 h-full"
                                                    style={{
                                                        backgroundColor:
                                                            "#065d8c",
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </>
                                    <header className="header1">
                                        <div className=" header">
                                            <h1 className="user-a5">
                                                User Name
                                            </h1>
                                        </div>
                                    </header>
                                </Disclosure>
                            </section>
                            <section className="main1">
                                <div>
                                    {" "}
                                    <div className="main2 max-w-screen-3xl">
                                        <div className="main3">
                                            <div className="main4 ">
                                                <section className="main5">
                                                    <Link to={"/user"}>
                                                        <ArrowLeftIcon className="profile-a3" />
                                                    </Link>
                                                    <article>
                                                        <h2 className="profile-a4">
                                                            User Profile
                                                        </h2>
                                                        <p className="profile-a5">
                                                            This information
                                                            will be displayed
                                                            publicly so be
                                                            careful what you
                                                            share.
                                                        </p>
                                                    </article>

                                                    <article className="profile-a6">
                                                        <div className="profile-a7">
                                                            <div className="profile-a8 ">
                                                                <img
                                                                    className="profile-img"
                                                                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                                    alt=""
                                                                />
                                                                <div></div>
                                                            </div>
                                                        </div>
                                                        <div className="profile-flex">
                                                            <div>
                                                                <label
                                                                    htmlFor="username"
                                                                    className="profile-block"
                                                                >
                                                                    Username
                                                                </label>
                                                                <p className="text-sm">
                                                                    User User
                                                                    Name
                                                                </p>
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
                                                                        Et
                                                                        vivamus
                                                                        lorem
                                                                        pulvinar
                                                                        nascetur
                                                                        non.
                                                                        Pulvinar
                                                                        a sed
                                                                        platea
                                                                        rhoncus
                                                                        ac
                                                                        mauris
                                                                        amet.
                                                                        Urna,
                                                                        sem
                                                                        pretium
                                                                        sit
                                                                        pretium
                                                                        urna,
                                                                        senectus
                                                                        vitae.
                                                                        Scelerisque
                                                                        fermentum,
                                                                        cursus
                                                                        felis
                                                                        dui
                                                                        suspendisse
                                                                        velit
                                                                        pharetra.
                                                                        Augue et
                                                                        duis
                                                                        cursus
                                                                        maecenas
                                                                        eget
                                                                        quam
                                                                        lectus.
                                                                        Accumsan
                                                                        vitae
                                                                        nascetur
                                                                        pharetra
                                                                        rhoncus
                                                                        praesent
                                                                        dictum
                                                                        risus
                                                                        suspendisse.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </article>

                                                    <section className="info-a">
                                                        <div className="info-a3">
                                                            <div>
                                                                <label
                                                                    htmlFor="first-name"
                                                                    className="info-a2"
                                                                >
                                                                    Full Name
                                                                </label>
                                                                <p className="text-sm">
                                                                    User Full
                                                                    Name
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <div className="info-a3">
                                                            <label
                                                                htmlFor="url"
                                                                className="info-a2"
                                                            >
                                                                User Address
                                                            </label>
                                                            <p className="text-sm">
                                                                {" "}
                                                                Address
                                                            </p>
                                                        </div>
                                                        <div className="info-a3">
                                                            <label
                                                                htmlFor="company"
                                                                className="info-a2"
                                                            >
                                                                Contact
                                                                Information
                                                            </label>
                                                            <p className="text-sm">
                                                                User Contact
                                                            </p>
                                                        </div>
                                                        <div className="info-a3">
                                                            <label
                                                                htmlFor="company"
                                                                className="info-a2"
                                                            >
                                                                User Info
                                                            </label>
                                                            <p className="text-sm ">
                                                                Time of
                                                                joinning/other
                                                                things about
                                                                user
                                                            </p>
                                                        </div>

                                                        <div className="info-a3">
                                                            <label
                                                                htmlFor="company"
                                                                className="info-a2"
                                                            >
                                                                Total No. Of
                                                                Times Ordered
                                                            </label>
                                                            <p className="text-sm ">
                                                                1234
                                                            </p>
                                                        </div>
                                                        <div className="info-a3">
                                                            <label
                                                                htmlFor="company"
                                                                className="info-a2"
                                                            >
                                                                Favourite Dishes
                                                            </label>
                                                            <p className="text-sm ">
                                                                {" "}
                                                                Dishes
                                                            </p>
                                                        </div>
                                                    </section>
                                                </section>

                                                {/* Privacy section */}
                                                <section className="profile-a20">
                                                    <div className="px-4 sm:px-6">
                                                        <div>
                                                            <a href="#!">
                                                                <h2 className="leading-6 profile-a21">
                                                                    Privacy
                                                                    Management
                                                                </h2>
                                                            </a>
                                                            <p className="profile-a5">
                                                                Ornare eu a
                                                                volutpat eget
                                                                vulputate.
                                                                Fringilla
                                                                commodo amet.
                                                            </p>
                                                        </div>
                                                        <ul
                                                            role="list"
                                                            className="profile-a22"
                                                        >
                                                            <Switch.Group
                                                                as="li"
                                                                className="profile-a23"
                                                            >
                                                                <div className="seller-comm2">
                                                                    <Switch.Label
                                                                        as="p"
                                                                        className="profile-a21"
                                                                        passive
                                                                    >
                                                                        Manage
                                                                        User
                                                                    </Switch.Label>
                                                                    <Switch.Description className="seller-comm1">
                                                                        Nulla
                                                                        amet
                                                                        tempus
                                                                        sit
                                                                        accumsan.
                                                                        Aliquet
                                                                        turpis
                                                                        sed sit
                                                                        lacinia.
                                                                    </Switch.Description>
                                                                </div>
                                                                <Switch
                                                                    checked={
                                                                        userManage
                                                                    }
                                                                    onChange={
                                                                        setuserManage
                                                                    }
                                                                    className={classNames(
                                                                        userManage
                                                                            ? "switchon"
                                                                            : "switchof",
                                                                        "switch-a1"
                                                                    )}
                                                                >
                                                                    <span
                                                                        aria-hidden="true"
                                                                        className={classNames(
                                                                            userManage
                                                                                ? "switchon1"
                                                                                : "switchof1",
                                                                            "switch-a2"
                                                                        )}
                                                                    />
                                                                </Switch>
                                                            </Switch.Group>
                                                            <Switch.Group
                                                                as="li"
                                                                className="profile-a23"
                                                            >
                                                                <div className="seller-comm2">
                                                                    <Switch.Label
                                                                        as="p"
                                                                        className="profile-a21"
                                                                        passive
                                                                    >
                                                                        Make
                                                                        User a
                                                                        Seller
                                                                    </Switch.Label>
                                                                    <Switch.Description className="seller-comm1">
                                                                        Integer
                                                                        amet,
                                                                        nunc
                                                                        hendrerit
                                                                        adipiscing
                                                                        nam.
                                                                        Elementum
                                                                        ame
                                                                    </Switch.Description>
                                                                </div>
                                                                <Switch
                                                                    checked={
                                                                        allowCommenting
                                                                    }
                                                                    onChange={
                                                                        setAllowCommenting
                                                                    }
                                                                    className={classNames(
                                                                        allowCommenting
                                                                            ? "switchon"
                                                                            : "switchof",
                                                                        "switch-a1"
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
                                                            <Switch.Group
                                                                as="li"
                                                                className="profile-a23"
                                                            >
                                                                <div className="seller-comm2">
                                                                    <Switch.Label
                                                                        as="p"
                                                                        className="profile-a21"
                                                                        passive
                                                                    >
                                                                        Allow
                                                                        commenting
                                                                    </Switch.Label>
                                                                    <Switch.Description className="seller-comm1">
                                                                        Integer
                                                                        amet,
                                                                        nunc
                                                                        hendrerit
                                                                        adipiscing
                                                                        nam.
                                                                        Elementum
                                                                        ame
                                                                    </Switch.Description>
                                                                </div>
                                                                <Switch
                                                                    checked={
                                                                        allowCommenting
                                                                    }
                                                                    onChange={
                                                                        setAllowCommenting
                                                                    }
                                                                    className={classNames(
                                                                        allowCommenting
                                                                            ? "switchon"
                                                                            : "switchof",
                                                                        "switch-a1"
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
                                                                <button type="button">
                                                                    <Link
                                                                        to={
                                                                            "/verifyuser"
                                                                        }
                                                                    >
                                                                        {" "}
                                                                        Manage
                                                                    </Link>
                                                                </button>
                                                            </div>
                                                            <div className="btn-a2">
                                                                <button type="button">
                                                                    Block
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                {/* /End replace */}
            </main>
        </Dashboard>
    );
}

export default UserProfile;
