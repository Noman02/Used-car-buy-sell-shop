import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <h3 className="text-xl font">Frequently Asked Questions </h3>
      <div className="bg-white mt-12 border border-primary rounded">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
          <div className="flex items-center justify-between">
            <span className="text-sm dark:text-gray-400">
              Posted Jun 1, 2020
            </span>
            <Link
              rel="noopener noreferrer"
              href="#"
              className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900"
            >
              React
            </Link>
          </div>
          <div className="mt-3">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="text-2xl font-bold hover:underline"
            >
              What are the different ways to manage a state in a React
              application?
            </Link>
            <p className="mt-2">
              There are four main types of state you need to properly manage in
              your React apps: Local state Global state Server state URL state
              Tamquam ita veritas res equidem. Ea in ad expertus paulatim
              poterunt. Imo volo aspi novi tur. Ferre hic neque vulgo hae athei
              spero. Tantumdem naturales excaecant notaverim etc cau perfacile
              occurrere. Loco visa to du huic at in dixi aër.
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="hover:underline dark:text-violet-400"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white mt-12 border border-primary rounded">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
          <div className="flex items-center justify-between">
            <span className="text-sm dark:text-gray-400">
              Posted Jun 1, 2020
            </span>
            <Link
              rel="noopener noreferrer"
              href="#"
              className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900"
            >
              prototypical
            </Link>
          </div>
          <div className="mt-3">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="text-2xl font-bold hover:underline"
            >
              How does prototypical inheritance work?
            </Link>
            <p className="mt-2">
              The Prototypal Inheritance is a feature in javascript used to add
              methods and properties in objects. It is a method by which an
              object can inherit the properties and methods of another object.
              Traditionally, in order to get and set the [[Prototype]] of an
              object, we use Object. getPrototypeOf and Object
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="hover:underline dark:text-violet-400"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white mt-12 border border-primary rounded">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
          <div className="flex items-center justify-between">
            <span className="text-sm dark:text-gray-400">
              Posted Jun 1, 2020
            </span>
            <Link
              rel="noopener noreferrer"
              href="#"
              className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900"
            >
              Unit Test
            </Link>
          </div>
          <div className="mt-3">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="text-2xl font-bold hover:underline"
            >
              What is a unit test? Why should we write unit tests?
            </Link>
            <p className="mt-2">
              Unit Testing is a method where JavaScript test code is written for
              a web page or web application module. It is then combined with
              HTML as an inline event handler and executed in the browser to
              test if all functionalities are working as desired. These unit
              tests are then organized in the test suite
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="hover:underline dark:text-violet-400"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white mt-12 border border-primary rounded">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
          <div className="flex items-center justify-between">
            <span className="text-sm dark:text-gray-400">
              Posted Jun 1, 2020
            </span>
            <Link
              rel="noopener noreferrer"
              href="#"
              className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900"
            >
              React vs. Angular vs. Vue
            </Link>
          </div>
          <div className="mt-3">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="text-2xl font-bold hover:underline"
            >
              React vs. Angular vs. Vue?
            </Link>
            <p className="mt-2">
              Vue provides higher customizability and hence is easier to learn
              than Angular or React. Further, Vue has an overlap with Angular
              and React with respect to their functionality like the use of
              components. Hence, the transition to Vue from either of the two is
              an easy option
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="hover:underline dark:text-violet-400"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
