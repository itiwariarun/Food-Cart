import React from "react";
import { createPopper } from "@popperjs/core";
import { Link } from "react-router-dom";
import { Popover } from "@headlessui/react";
import {
    CheckIcon,
    HandThumbUpIcon,
    UserIcon,
} from "@heroicons/react/20/solid";
import { timeline } from "./Objects/PopNoti";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
function NotificationPopup() {
    return (
        <>
            <Popover className="flex ">
                <Popover.Button className="pt-1">
                    {" "}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 "
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M10.5 8.25h3l-3 4.5h3"
                        />
                    </svg>
                </Popover.Button>

                <Popover.Panel className="pop-absolute pop-scroll pop-scroll2">
                    <div className="pop-root">
                        <ul role="list" className="-mb-8">
                            <div className="py-2">
                                <div className="pop-sticky text-md">
                                    <h2>Today</h2>
                                </div>
                                <div className="p-4 ">
                                    {timeline.map((event, eventIdx) => (
                                        <li key={event.id}>
                                            <div className="pop-relative">
                                                {/* {eventIdx !== timeline.length - 1 ? (
                                            <span
                                                className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                                                aria-hidden="true"
                                            />
                                        ) : null} */}
                                                <div className="pop-flex">
                                                    <div>
                                                        <span
                                                            className={classNames(
                                                                event.iconBackground,
                                                                "pop-icon"
                                                            )}
                                                        >
                                                            <event.icon
                                                                className="pop-event"
                                                                aria-hidden="true"
                                                            />
                                                        </span>
                                                    </div>
                                                    <div className="pop-flex1">
                                                        <div>
                                                            <p className="pop-text">
                                                                {event.content}{" "}
                                                                <a
                                                                    href={
                                                                        event.href
                                                                    }
                                                                    className="pop-font"
                                                                >
                                                                    {
                                                                        event.target
                                                                    }
                                                                </a>
                                                            </p>
                                                        </div>
                                                        <div className="pop-time">
                                                            <time
                                                                dateTime={
                                                                    event.datetime
                                                                }
                                                            >
                                                                {event.date}
                                                            </time>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </div>
                            </div>
                            <div className="py-2">
                                <div className="pop-sticky text-md">
                                    <h2>Older</h2>
                                </div>
                                <div className="p-4 ">
                                    {timeline.map((event, eventIdx) => (
                                        <li key={event.id}>
                                            <div className="pop-relative">
                                                {/* {eventIdx !== timeline.length - 1 ? (
                                            <span
                                                className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                                                aria-hidden="true"
                                            />
                                        ) : null} */}
                                                <div className="pop-flex">
                                                    <div>
                                                        <span
                                                            className={classNames(
                                                                event.iconBackground,
                                                                "pop-icon"
                                                            )}
                                                        >
                                                            <event.icon
                                                                className="pop-event"
                                                                aria-hidden="true"
                                                            />
                                                        </span>
                                                    </div>
                                                    <div className="pop-flex1">
                                                        <div>
                                                            <p className="pop-text">
                                                                {event.content}{" "}
                                                                <a
                                                                    href={
                                                                        event.href
                                                                    }
                                                                    className="pop-font"
                                                                >
                                                                    {
                                                                        event.target
                                                                    }
                                                                </a>
                                                            </p>
                                                        </div>
                                                        <div className="pop-time">
                                                            <time
                                                                dateTime={
                                                                    event.datetime
                                                                }
                                                            >
                                                                {event.date}
                                                            </time>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </div>
                            </div>
                        </ul>

                        <div className="pop-all">
                            <Link to={"/notification"}>
                                {" "}
                                See All Notifications
                            </Link>
                        </div>
                    </div>
                </Popover.Panel>
            </Popover>
        </>
    );
}

export default NotificationPopup;
