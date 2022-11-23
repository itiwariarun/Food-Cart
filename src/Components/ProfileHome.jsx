import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import { Disclosure, Menu, Switch, Transition } from "@headlessui/react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
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
function ProfileHome() {
    const [open, setOpen] = useState(true);
    const [availableToHire, setAvailableToHire] = useState(true);
    const [privateAccount, setPrivateAccount] = useState(false);
    const [allowCommenting, setAllowCommenting] = useState(true);
    const [allowMentions, setAllowMentions] = useState(true);
    return (
        <Profile>
            {" "}
            <section className="main4 lg:col-span-9" action="#" method="#!">
                {/* Profile section */}
                <section className="main5">
                    <article>
                        <h2 className="profile-a4">Admin Profile</h2>
                        <p className="profile-a5">
                            This information will be displayed publicly so be
                            careful what you share.
                        </p>
                    </article>

                    <section className="profile-a6">
                        <div className="profile-a7">
                            <div className="profile-a8 ">
                                <img
                                    className="profile-img"
                                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                                <button className="btn-admin">
                                    Change Photo
                                </button>
                                <Link to={"/editadmin"}>
                                    <div className="btn-admin2">
                                        Edit Profile
                                    </div>
                                </Link>
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
                                <p className="text-sm">Admin User Name</p>
                            </div>

                            <article>
                                <label
                                    htmlFor="about"
                                    className="profile-about-label"
                                >
                                    About
                                </label>
                                <div className="mt-1">
                                    <p className="profile-about-text">
                                        Et vivamus lorem pulvinar nascetur non.
                                        Pulvinar a sed platea rhoncus ac mauris
                                        amet. Urna, sem pretium sit pretium
                                        urna, senectus vitae. Scelerisque
                                        fermentum, cursus felis dui suspendisse
                                        velit pharetra. Augue et duis cursus
                                        maecenas eget quam lectus. Accumsan
                                        vitae nascetur pharetra rhoncus praesent
                                        dictum risus suspendisse.
                                    </p>
                                </div>
                            </article>
                        </div>
                    </section>

                    <section className="info-a">
                        <div className="col-span-12 ">
                            <div>
                                <label htmlFor="first-name" className="info-a2">
                                    Full Name
                                </label>
                                <p className="text-sm">Admin Full Name</p>
                            </div>
                        </div>

                        <div className="info-admin3">
                            <label htmlFor="url" className="info-a2">
                                Social Links
                            </label>
                            <p className="text-sm">
                                {" "}
                                Admin Social Website Contact Links
                            </p>
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                            <label htmlFor="company" className="info-a2">
                                Contact Information
                            </label>
                            <p className="text-sm">Admin Contact</p>
                        </div>
                        <div className="info-admin3">
                            <label htmlFor="company" className="info-a2">
                                Position
                            </label>
                            <p className="text-sm ">
                                Admin Postion/Experience/No. of Year With
                                Company
                            </p>
                        </div>
                    </section>
                </section>

                {/* Privacy section */}
                <section className="profile-a20">
                    <div className="px-4 sm:px-6">
                        <div>
                            <h2 className="leading-6 profile-a21">
                                Privacy Management
                            </h2>
                            <p className="privacy-admin">
                                Ornare eu a volutpat eget vulputate. Fringilla
                                commodo amet.
                            </p>
                        </div>
                        <ul role="list" className="profile-a22">
                            <Switch.Group as="li" className="profile-a23">
                                <div className="flex flex-col">
                                    <Switch.Label
                                        as="p"
                                        className="profile-a21"
                                        passive
                                    >
                                        Manage Seller
                                    </Switch.Label>
                                    <Switch.Description className="contact-a4">
                                        Nulla amet tempus sit accumsan. Aliquet
                                        turpis sed sit lacinia.
                                    </Switch.Description>
                                </div>
                                <Switch
                                    checked={availableToHire}
                                    onChange={setAvailableToHire}
                                    className={classNames(
                                        availableToHire
                                            ? "switchon"
                                            : "switchof",
                                        "switch-a1"
                                    )}
                                >
                                    <span
                                        aria-hidden="true"
                                        className={classNames(
                                            availableToHire
                                                ? "switchon1"
                                                : "switchof1",
                                            "switch-a2"
                                        )}
                                    />
                                </Switch>
                            </Switch.Group>
                            <Switch.Group as="li" className="profile-a23">
                                <div className="flex flex-col">
                                    <Switch.Label
                                        as="p"
                                        className="profile-a21"
                                        passive
                                    >
                                        Manage User
                                    </Switch.Label>
                                    <Switch.Description className="contact-a4">
                                        Pharetra morbi dui mi mattis tellus
                                        sollicitudin cursus pharetra.
                                    </Switch.Description>
                                </div>
                                <Switch
                                    checked={privateAccount}
                                    onChange={setPrivateAccount}
                                    className={classNames(
                                        privateAccount
                                            ? "switchon"
                                            : "switchof",
                                        "switch-a1"
                                    )}
                                >
                                    <span
                                        aria-hidden="true"
                                        className={classNames(
                                            privateAccount
                                                ? "switchon1"
                                                : "switchof1",
                                            "switch-a2"
                                        )}
                                    />
                                </Switch>
                            </Switch.Group>
                            <Switch.Group as="li" className="profile-a23">
                                <div className="flex flex-col">
                                    <Switch.Label
                                        as="p"
                                        className="profile-a21"
                                        passive
                                    >
                                        Allow commenting
                                    </Switch.Label>
                                    <Switch.Description className="contact-a4">
                                        Integer amet, nunc hendrerit adipiscing
                                        nam. Elementum ame
                                    </Switch.Description>
                                </div>
                                <Switch
                                    checked={allowCommenting}
                                    onChange={setAllowCommenting}
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
                            <Switch.Group as="li" className="profile-a23">
                                <div className="flex flex-col">
                                    <Switch.Label
                                        as="p"
                                        className="profile-a21"
                                        passive
                                    >
                                        Allow Offers
                                    </Switch.Label>
                                    <Switch.Description className="contact-a4">
                                        Adipiscing est venenatis enim molestie
                                        commodo eu gravid
                                    </Switch.Description>
                                </div>
                            </Switch.Group>
                        </ul>
                    </div>
                </section>
                {/* contanct details */}
                <section className="bg-white">
                    <div className="contact-a1">
                        <div className="contact-a2">
                            <article>
                                <h2 className="contact-a3">Sales Support</h2>
                                <div className="mt-3">
                                    <p className="contact-a4">
                                        Nullam risus blandit ac aliquam justo
                                        ipsum. Quam mauris volutpat massa
                                        dictumst amet. Sapien tortor lacus arcu.
                                    </p>
                                </div>
                                <div className="mt-9">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <PhoneIcon
                                                className="contact-a5"
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <div className="contact-a6">
                                            <p>+1 (555) 123 4567</p>
                                            <p className="mt-1">
                                                Mon-Fri 8am to 6pm PST
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex mt-6">
                                        <div className="flex-shrink-0">
                                            <EnvelopeIcon
                                                className="contact-a5"
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <div className="contact-a6">
                                            <p>support@example.com</p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="mt-12 md:mt-0">
                                <h2 className="contact-a3">
                                    Technical Support
                                </h2>
                                <div className="mt-3">
                                    <p className="contact-a4">
                                        Lorem, ipsum dolor sit amet consectetur
                                        adipisicing elit. Magni, repellat error
                                        corporis doloribus similique,
                                        voluptatibus numquam quam, quae officiis
                                        facilis.
                                    </p>
                                </div>
                                <div className="mt-9">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <PhoneIcon
                                                className="contact-a5"
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <div className="contact-a6">
                                            <p>+1 (555) 123 4567</p>
                                            <p className="mt-1">
                                                Mon-Fri 8am to 6pm PST
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex mt-6">
                                        <div className="flex-shrink-0">
                                            <EnvelopeIcon
                                                className="contact-a5"
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <div className="contact-a6">
                                            <p>support@example.com</p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>
            </section>
        </Profile>
    );
}

export default ProfileHome;
