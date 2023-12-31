"use client";

import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Fragment } from "react";

import { BsChevronDown } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { loggin } from "../login/redux/login.slice";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const TopBar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-20 justify-between w-[100%]">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:justify-between">
                <div className="flex flex-shrink-0 items-center hidden md:block">
                  <Image
                    width={200}
                    height={90}
                    src="/logo.svg"
                    alt="remebered-and-missed"
                  />
                </div>
                <div className="hidden sm:ml-6 md:flex sm:space-x-8">
                  <a
                    href="/"
                    className={classNames(
                      pathname === "/"
                        ? "border-indigo-500"
                        : "border-transparent",
                      "inline-flex items-center border-b-2 px-2 pt-1 pb-1 text-xs sm:text-xs md:text-xs lg:text-sm xl:text-[14px] font-medium text-[#5C5470] tracking-wider"
                    )}
                  >
                    HOME
                  </a>
                  <a
                    href="/createMemorial"
                    className={classNames(
                      pathname === "/createMemorial"
                        ? "border-indigo-500"
                        : "border-transparent",
                      "inline-flex items-center border-b-2 px-2 pt-1 pb-1 text-xs sm:text-xs md:text-xs lg:text-sm xl:text-[14px] font-medium text-[#5C5470] tracking-wider"
                    )}
                  >
                    CREATE A MEMORIAL
                  </a>
                  <a
                    href="/pricing"
                    className={classNames(
                      pathname === "/pricing"
                        ? "border-indigo-500"
                        : "border-transparent",
                      "inline-flex items-center border-b-2 px-2 pt-1 pb-1 text-xs sm:text-xs md:text-xs lg:text-sm xl:text-[14px] font-medium text-[#5C5470] tracking-wider"
                    )}
                  >
                    PRICING
                  </a>
                  <a
                    href="#"
                    className={classNames(
                      pathname === "/pricing"
                        ? "border-indigo-500"
                        : "border-transparent",
                      "inline-flex items-center border-b-2 px-2 pt-1 pb-1 text-xs sm:text-xs md:text-xs lg:text-sm xl:text-[14px] font-medium text-[#5C5470] tracking-wider"
                    )}
                  >
                    ABOUT
                  </a>
                  <a
                    href="/contact"
                    className={classNames(
                      pathname === "/contact"
                        ? "border-indigo-500"
                        : "border-transparent",
                      "inline-flex items-center border-b-2 px-2 pt-1 pb-1 text-xs sm:text-xs md:text-xs lg:text-sm xl:text-[14px] font-medium text-[#5C5470] tracking-wider"
                    )}
                  >
                    CONTACT
                  </a>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  {!loggedIn ? (
                    <div>
                      <Menu.Button
                        onClick={() => {
                          router.push("/login");
                        }}
                        className="text-white w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-[#5C5470]"
                      >
                        Login
                      </Menu.Button>
                    </div>
                  ) : (
                    <Menu.Button className="inline-flex items-center border-b-2 border-indigo-500 px-2 pt-1 pb-1 text-xs sm:text-xs md:text-xs lg:text-sm xl:text-[14px] font-medium text-[#5C5470] tracking-wider">
                      <div className="flex gap-2 items-center">
                        MY ACCOUNT
                        <BsChevronDown color="#5C5470" size={"22px"} />
                      </div>
                    </Menu.Button>
                  )}
                  {loggedIn && (
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/account"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                              onClick={() => {
                                dispatch(loggin(false));
                                document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                              }}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  )}
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-4 pt-2">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
              >
                Dashboard
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Team
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Calendar
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default TopBar;
