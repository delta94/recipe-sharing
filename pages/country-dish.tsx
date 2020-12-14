/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Layout from '../components/Layout';
import React, { useState } from 'react';
export default function Type() {
  const type_dish = ['Viet Nam', 'Japan', 'Korea', 'Thailand'];
  const [display, setDisplay] = useState(false);
  const [value, setValue] = useState('Select country');

  return (
    <Layout title="List of post by country">
      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className="flex justify-between w-56  rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700  focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-gray-100 focus:ring-indigo-100"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
            onClick={() => {
              setDisplay(!display);
            }}
          >
            {value}
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>

        {display && (
          <div className="origin-top-right  mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {type_dish.map(type => (
                <a
                  href={`/type-dish/${type}`}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  onClick = {()=>{
                    setValue(type);
                    setDisplay(false);
                  }}
                >
                  {type}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div className="flex-shrink-0">
            <img
              className="h-48 w-full object-cover"
              src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F7407466.jpg&q=85"
              alt=""
            />
          </div>
          <div className="flex-1 bg-white p-6 flex flex-col justify-between">
            <div className="flex-1">
              <p className="text-sm leading-5 font-medium text-indigo-600">
                <a href="#" className="hover:underline">
                  Food
                </a>
              </p>
              <a href="#" className="block">
                <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                  Skillet Lasagna
                </h3>
                <p className="mt-3 text-base leading-6 text-gray-500">
                  This no-bake skillet lasagna is made right on your stovetop
                  and is a fast and easy alternative to store-bought hamburger
                  mixes!
                </p>
              </a>
            </div>
            <div className="mt-6 flex items-center">
              <div className="flex-shrink-0">
                <a href="#">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </a>
              </div>
              <div className="ml-3">
                <p className="text-sm leading-5 font-medium text-gray-900">
                  <a href="#" className="hover:underline">
                    Manh Hung
                  </a>
                </p>
                <div className="flex text-sm leading-5 text-gray-500">
                  <time dateTime="2020-03-16">Dec 2, 2020</time>
                  <span className="mx-1">&middot;</span>
                  <span>6 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div className="flex-shrink-0">
            <img
              className="h-48 w-full object-cover"
              src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4847147.jpg"
              alt=""
            />
          </div>
          <div className="flex-1 bg-white p-6 flex flex-col justify-between">
            <div className="flex-1">
              <p className="text-sm leading-5 font-medium text-indigo-600">
                <a href="#" className="hover:underline">
                  Food
                </a>
              </p>
              <a href="#" className="block">
                <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                  Cranberry Orange Bread
                </h3>
                <p className="mt-3 text-base leading-6 text-gray-500">
                  This cranberry orange bread is great for breakfast or a snack.
                  You can also make muffins; just spoon the batter into greased
                  muffin cups and bake at 375 degrees F (190 C) for 15 to 20
                  minutes.
                </p>
              </a>
            </div>
            <div className="mt-6 flex items-center">
              <div className="flex-shrink-0">
                <a href="#">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </a>
              </div>
              <div className="ml-3">
                <p className="text-sm leading-5 font-medium text-gray-900">
                  <a href="#" className="hover:underline">
                    Duc Minh
                  </a>
                </p>
                <div className="flex text-sm leading-5 text-gray-500">
                  <time dateTime="2020-03-16">Dec 2, 2020</time>
                  <span className="mx-1">&middot;</span>
                  <span>6 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div className="flex-shrink-0">
            <img
              className="h-48 w-full object-cover"
              src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8746641.jpg"
              alt=""
            />
          </div>
          <div className="flex-1 bg-white p-6 flex flex-col justify-between">
            <div className="flex-1">
              <p className="text-sm leading-5 font-medium text-indigo-600">
                <a href="#" className="hover:underline">
                  {' '}
                  Food
                </a>
              </p>
              <a href="#" className="block">
                <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                  Slow Cooker Sweet and Sour Chicken Thighs
                </h3>
                <p className="mt-3 text-base leading-6 text-gray-500">
                  This family-friendly dinner is just as good as takeout but
                  made really easily in your slow cooker. We like to serve it
                  with rice.
                </p>
              </a>
            </div>
            <div className="mt-6 flex items-center">
              <div className="flex-shrink-0">
                <a href="#">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </a>
              </div>
              <div className="ml-3">
                <p className="text-sm leading-5 font-medium text-gray-900">
                  <a href="#" className="hover:underline">
                    Huong Tra
                  </a>
                </p>
                <div className="flex text-sm leading-5 text-gray-500">
                  <time dateTime="2020-03-16">Dec 2, 2020</time>
                  <span className="mx-1">&middot;</span>
                  <span>6 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div className="flex-shrink-0">
            <img
              className="h-48 w-full object-cover"
              src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F7407466.jpg&q=85"
              alt=""
            />
          </div>
          <div className="flex-1 bg-white p-6 flex flex-col justify-between">
            <div className="flex-1">
              <p className="text-sm leading-5 font-medium text-indigo-600">
                <a href="#" className="hover:underline">
                  Food
                </a>
              </p>
              <a href="#" className="block">
                <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                  Skillet Lasagna
                </h3>
                <p className="mt-3 text-base leading-6 text-gray-500">
                  This no-bake skillet lasagna is made right on your stovetop
                  and is a fast and easy alternative to store-bought hamburger
                  mixes!
                </p>
              </a>
            </div>
            <div className="mt-6 flex items-center">
              <div className="flex-shrink-0">
                <a href="#">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </a>
              </div>
              <div className="ml-3">
                <p className="text-sm leading-5 font-medium text-gray-900">
                  <a href="#" className="hover:underline">
                    Manh Hung
                  </a>
                </p>
                <div className="flex text-sm leading-5 text-gray-500">
                  <time dateTime="2020-03-16">Dec 2, 2020</time>
                  <span className="mx-1">&middot;</span>
                  <span>6 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div className="flex-shrink-0">
            <img
              className="h-48 w-full object-cover"
              src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4847147.jpg"
              alt=""
            />
          </div>
          <div className="flex-1 bg-white p-6 flex flex-col justify-between">
            <div className="flex-1">
              <p className="text-sm leading-5 font-medium text-indigo-600">
                <a href="#" className="hover:underline">
                  Food
                </a>
              </p>
              <a href="#" className="block">
                <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                  Cranberry Orange Bread
                </h3>
                <p className="mt-3 text-base leading-6 text-gray-500">
                  This cranberry orange bread is great for breakfast or a snack.
                  You can also make muffins; just spoon the batter into greased
                  muffin cups and bake at 375 degrees F (190 C) for 15 to 20
                  minutes.
                </p>
              </a>
            </div>
            <div className="mt-6 flex items-center">
              <div className="flex-shrink-0">
                <a href="#">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </a>
              </div>
              <div className="ml-3">
                <p className="text-sm leading-5 font-medium text-gray-900">
                  <a href="#" className="hover:underline">
                    Duc Minh
                  </a>
                </p>
                <div className="flex text-sm leading-5 text-gray-500">
                  <time dateTime="2020-03-16">Dec 2, 2020</time>
                  <span className="mx-1">&middot;</span>
                  <span>6 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div className="flex-shrink-0">
            <img
              className="h-48 w-full object-cover"
              src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8746641.jpg"
              alt=""
            />
          </div>
          <div className="flex-1 bg-white p-6 flex flex-col justify-between">
            <div className="flex-1">
              <p className="text-sm leading-5 font-medium text-indigo-600">
                <a href="#" className="hover:underline">
                  {' '}
                  Food
                </a>
              </p>
              <a href="#" className="block">
                <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                  Slow Cooker Sweet and Sour Chicken Thighs
                </h3>
                <p className="mt-3 text-base leading-6 text-gray-500">
                  This family-friendly dinner is just as good as takeout but
                  made really easily in your slow cooker. We like to serve it
                  with rice.
                </p>
              </a>
            </div>
            <div className="mt-6 flex items-center">
              <div className="flex-shrink-0">
                <a href="#">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </a>
              </div>
              <div className="ml-3">
                <p className="text-sm leading-5 font-medium text-gray-900">
                  <a href="#" className="hover:underline">
                    Huong Tra
                  </a>
                </p>
                <div className="flex text-sm leading-5 text-gray-500">
                  <time dateTime="2020-03-16">Dec 2, 2020</time>
                  <span className="mx-1">&middot;</span>
                  <span>6 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
