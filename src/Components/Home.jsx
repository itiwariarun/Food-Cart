/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Animation from "./Animation";
import Footer from "./Footer";
import HomeComp1 from "./subassets/HomeComp1";
import FeaturedMain from "./subassets/FeaturedMain";
import Testimonials from "./subassets/Testimonials";
import Cta from "./subassets/Cta";

import fresh from "../images.jpg";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  CloudArrowUpIcon,
  CogIcon,
  LockClosedIcon,
  ServerIcon,
  ShieldCheckIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { features, blogPosts } from "./Objects/Home";
function Home() {
  return (
    <>
      <Animation>
        <div className="bg-white">
          <div className="relative overflow-hidden">
            <main>
              <HomeComp1 />
              {/* Feature section with screenshot */}
              <FeaturedMain />
              {/* Feature section with grid */}
              <div className="relative py-16 bg-white sm:py-24 lg:py-32">
                <div className="max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                  <h2 className="text-lg font-semibold text-cyan-600">
                    Order faster
                  </h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Everything you want
                  </p>
                  <p className="mx-auto mt-5 text-xl text-gray-500 max-w-prose">
                    Phasellus lorem quam molestie id quisque diam aenean nulla
                    in. Accumsan in quis quis nunc, ullamcorper malesuada.
                    Eleifend condimentum id viverra nulla.
                  </p>
                  <div className="mt-12">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                      {features.map((feature) => (
                        <div key={feature.name} className="pt-6">
                          <div className="flow-root px-6 pb-8 rounded-lg bg-gray-50">
                            <div className="-mt-6">
                              <div>
                                <span className="inline-flex items-center justify-center p-3 rounded-md shadow-lg bg-gradient-to-r from-slate-500 to-cyan-500">
                                  <feature.icon
                                    className="w-6 h-6 text-white"
                                    aria-hidden="true"
                                  />
                                </span>
                              </div>
                              <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                                {feature.name}
                              </h3>
                              <p className="mt-5 text-base text-gray-500">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial section */}
              <Testimonials />

              {/* Blog section */}
              <div className="relative py-16 bg-gray-50 sm:py-24 lg:py-32">
                <div className="relative">
                  <div className="max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-lg font-semibold text-cyan-600">
                      For Customers and Chefs
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      Helpful Resources
                    </p>
                    <p className="mx-auto mt-5 text-xl text-gray-500 max-w-prose">
                      Phasellus lorem quam molestie id quisque diam aenean nulla
                      in. Accumsan in quis quis nunc, ullamcorper malesuada.
                      Eleifend condimentum id viverra nulla.
                    </p>
                  </div>
                  <div className="grid max-w-md gap-8 px-4 mx-auto mt-12 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:grid-cols-3 lg:px-8">
                    {blogPosts.map((post) => (
                      <div
                        key={post.id}
                        className="flex flex-col overflow-hidden rounded-lg shadow-lg"
                      >
                        <div className="flex-shrink-0">
                          <img
                            className="object-cover w-full h-48"
                            src={post.imageUrl}
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                          <div className="flex-1">
                            <p className="text-sm font-medium text-cyan-600">
                              <a
                                href={post.category.href}
                                className="hover:underline"
                              >
                                {post.category.name}
                              </a>
                            </p>
                            <a href={post.href} className="block mt-2">
                              <p className="text-xl font-semibold text-gray-900">
                                {post.title}
                              </p>
                              <p className="mt-3 text-base text-gray-500">
                                {post.preview}
                              </p>
                            </a>
                          </div>
                          <div className="flex items-center mt-6">
                            <div className="flex-shrink-0">
                              <a href={post.author.href}>
                                <img
                                  className="w-10 h-10 rounded-full"
                                  src={post.author.imageUrl}
                                  alt={post.author.name}
                                />
                              </a>
                            </div>
                            <div className="ml-3">
                              <p className="text-sm font-medium text-gray-900">
                                <a
                                  href={post.author.href}
                                  className="hover:underline"
                                >
                                  {post.author.name}
                                </a>
                              </p>
                              <div className="flex space-x-1 text-sm text-gray-500">
                                <time dateTime={post.datetime}>
                                  {post.date}
                                </time>
                                <span aria-hidden="true">&middot;</span>
                                <span>{post.readingLength} read</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <Cta />
            </main>
          </div>
        </div>
      </Animation>{" "}
      <Footer />
    </>
  );
}

export default Home;
