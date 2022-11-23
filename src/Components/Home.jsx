/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Animation from "./Animation";
import Footer from "./Footer";
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
import {
  ArrowTopRightOnSquareIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Push your recipe",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi vitae lobortis.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Secured Payment",
    description:
      "Qui aut temporibus nesciunt vitae dicta repellat sit dolores pariatur. Temporibus qui illum aut.",
    icon: LockClosedIcon,
  },
  {
    name: "Simple Methods",
    description:
      "Rerum quas incidunt deleniti quaerat suscipit mollitia. Amet repellendus ut odit dolores qui.",
    icon: ArrowPathIcon,
  },
  {
    name: "Advanced Security",
    description:
      "Ullam laboriosam est voluptatem maxime ut mollitia commodi. Et dignissimos suscipit perspiciatis.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Customize Your account and needs",
    description:
      "Ab a facere voluptatem in quia corrupti veritatis aliquam. Veritatis labore quaerat ipsum quaerat id.",
    icon: CogIcon,
  },
  {
    name: "Open Your Cloud Kitchen",
    description:
      "Quia qui et est officia cupiditate qui consectetur. Ratione similique et impedit ea ipsum et.",
    icon: ServerIcon,
  },
];
const blogPosts = [
  {
    id: 1,
    title: "Boost your order",
    href: "#",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { name: "Article", href: "#" },
    imageUrl:
      "https://www.listchallenges.com/f/items/8828a399-234b-46af-a3a5-abaf93635721.jpg",
    preview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    author: {
      name: "Roel Aufderehar",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      href: "#",
    },
    readingLength: "6 min",
  },
  {
    id: 2,
    title: "How to use your cloud kitchen",
    href: "#",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    category: { name: "Video", href: "#" },
    imageUrl:
      "https://www.listchallenges.com/f/items/b6643b59-643f-4922-b863-dae1ce2cdd88.jpg",
    preview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
    author: {
      name: "Brenna Goyette",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      href: "#",
    },
    readingLength: "4 min",
  },
  {
    id: 3,
    title: "Customize Your needs",
    href: "#",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    category: { name: "Case Study", href: "#" },
    imageUrl:
      "https://www.listchallenges.com/f/items/70e3ef46-846d-40ba-ab86-fce67a37d3b7.jpg",
    preview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    author: {
      name: "Daniela Metz",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      href: "#",
    },
    readingLength: "11 min",
  },
];

function Home() {
  return (
    <>
      <Animation>
        <div className="bg-white">
          <div className="relative overflow-hidden">
            <main>
              <div className="pt-10 bg-[#373737] pb-5  sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
                <div className="mx-auto max-w-7xl lg:px-8">
                  <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                    <div className="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                      <div className="lg:py-24">
                        <a
                          href="#"
                          className="inline-flex items-center p-1 pr-2 text-white bg-black rounded-full hover:text-gray-200 sm:text-base lg:text-sm xl:text-base"
                        >
                          <span className="rounded-full bg-gradient-to-r from-teal-500 to-cyan-600 px-3 py-0.5 text-sm font-semibold leading-5 text-white">
                            We're delievring
                          </span>
                          <span className="ml-4 text-sm">Delicious Taste</span>
                          <ChevronRightIcon
                            className="w-5 h-5 ml-2 text-gray-500"
                            aria-hidden="true"
                          />
                        </a>
                        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                          <span className="block">A better way to</span>
                          <span className="block pb-3 text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 bg-clip-text sm:pb-5">
                            Order Food
                          </span>
                        </h1>
                        <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                          Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                          irure qui Lorem cupidatat commodo. Elit sunt amet
                          fugiat veniam occaecat fugiat.
                        </p>
                        <div className="mt-10 sm:mt-12">
                          <form
                            action="#"
                            className="sm:mx-auto sm:max-w-xl lg:mx-0"
                          >
                            <div className="sm:flex">
                              <div className="flex-1 min-w-0">
                                <label htmlFor="email" className="sr-only">
                                  Email address
                                </label>
                                <input
                                  id="email"
                                  type="email"
                                  placeholder="Enter your email"
                                  className="block w-full px-4 py-3 text-base text-gray-900 placeholder-gray-500 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                                />
                              </div>
                              <div className="mt-3 sm:mt-0 sm:ml-3">
                                <button
                                  type="submit"
                                  className="block w-full px-4 py-3 font-medium text-white rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                                >
                                  Connect With Us
                                </button>
                              </div>
                            </div>
                            <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                              Start your free 14-day premium for free delievry,
                              no credit card necessary. By providing your email,
                              you agree to our{" "}
                              <a href="#" className="font-medium text-white">
                                terms of service
                              </a>
                              .
                            </p>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="mt-12 lg:relative lg:m-0">
                      <div className="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                        {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                        <img
                          className="w-full md:my-auto lg:absolute lg:inset-y-0 lg:left-0 lg:h-4/5 lg:w-auto lg:max-w-3xl"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Pq7NX9VHvrZEAwz5mz66rLcV1eA1V0VWkA&usqp=CAU"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature section with screenshot */}
              <div className="relative pt-16 bg-gray-50 sm:pt-24 lg:pt-32">
                <div className="max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                  <div>
                    <h2 className="text-lg font-semibold text-cyan-600">
                      Fresh to eat
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      Don't want to go out? No problem.
                    </p>
                    <p className="mx-auto mt-5 text-xl text-gray-500 max-w-prose">
                      Phasellus lorem quam molestie id quisque diam aenean nulla
                      in. Accumsan in quis quis nunc, ullamcorper malesuada.
                      Eleifend condimentum id viverra nulla.
                    </p>
                  </div>
                  <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-80">
                    <img
                      className="rounded-lg shadow-xl md:h-[60rem] h-[30rem] w-screen md:w-[80rem] ring-1 ring-black ring-opacity-5"
                      src="https://www.wbcsd.org/var/site/storage/images/media/images/fresh_pa/80809-2-eng-GB/FRESH_PA_i1140.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>

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
              <div className="pb-16 bg-gradient-to-l from-slate-500 to-cyan-800 lg:relative lg:z-10 lg:pb-0">
                <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
                  <div className="relative lg:-my-8">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 bg-white h-1/2 lg:hidden"
                    />
                    <div className="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
                      <div className="overflow-hidden shadow-xl aspect-w-10 aspect-h-6 rounded-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                        <img
                          className="object-cover lg:h-full lg:w-full"
                          src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
                    <div className="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
                      <blockquote>
                        <div>
                          <svg
                            className="w-12 h-12 text-white opacity-25"
                            fill="currentColor"
                            viewBox="0 0 32 32"
                            aria-hidden="true"
                          >
                            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                          </svg>
                          <p className="mt-6 text-2xl font-medium text-white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed urna nulla vitae laoreet augue. Amet
                            feugiat est integer dolor auctor adipiscing nunc
                            urna, sit.
                          </p>
                        </div>
                        <footer className="mt-6">
                          <p className="text-base font-medium text-white">
                            Judith Black
                          </p>
                          <p className="text-base font-medium text-cyan-100">
                            CEO at PureInsights
                          </p>
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>

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
              <div className="relative bg-gray-900">
                <div className="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
                  <img
                    className="object-cover w-full h-full"
                    src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&sat=-100"
                    alt=""
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-r from-gray-500 to-cyan-400 mix-blend-multiply"
                  />
                </div>
                <div className="relative max-w-md px-4 py-12 mx-auto sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
                  <div className="md:ml-auto md:w-1/2 md:pl-10">
                    <h2 className="text-lg font-semibold text-gray-300">
                      Award winning support
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      We’re here to help
                    </p>
                    <p className="mt-3 text-lg text-gray-300">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Et, egestas tempus tellus etiam sed. Quam a scelerisque
                      amet ullamcorper eu enim et fermentum, augue. Aliquet amet
                      volutpat quisque ut interdum tincidunt duis.
                    </p>
                    <div className="mt-8">
                      <div className="inline-flex rounded-md shadow">
                        <a
                          href="#"
                          className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-gray-900 bg-white border border-transparent rounded-md hover:bg-gray-50"
                        >
                          Visit the help center
                          <ArrowTopRightOnSquareIcon
                            className="w-5 h-5 ml-3 -mr-1 text-gray-400"
                            aria-hidden="true"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </Animation>{" "}
      <Footer />
    </>
  );
}

export default Home;