/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Layout from '../components/Layout';
import React, { useState } from 'react';
export default function Home() {
  const countries = [
    { name: 'Viet Nam', link: 'https://i.ibb.co/wWcJRkb/vietnam.png' },
    { name: 'Japan', link: 'https://i.ibb.co/TWpSdCj/japan.png' },
    { name: 'Thailand', link: 'https://i.ibb.co/RNNKgdb/thailand.jpg' },
    { name: 'Korea', link: 'https://i.ibb.co/m9NnKPW/korea.png' },
  ];
  const food = [
    {
      name: 'Pho',
      link:
        'https://regevelya.com/wp-content/uploads/2015/10/vietnamese-pho-ga.jpg',
    },
    {
      name: 'Pizza',
      link: 'https://regevelya.com/wp-content/uploads/2015/10/pizza-italy.jpg',
    },
    {
      name: 'Beef',
      link:
        'https://regevelya.com/wp-content/uploads/2015/10/food-montenegro.jpg',
    },
    {
      name: 'Salad',
      link: 'https://regevelya.com/wp-content/uploads/2013/11/greek-salad.jpg',
    },
  ];
  return (
    <Layout title="Home">
      <div className="relative mb-8">
        <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
          Food
        </h2>
        <ul className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {food.map(data => (
            <li className="col-span-1 flex items-center bg-white border border-gray-200 rounded-md shadow-sm overflow-hidden">
              <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 text-white text-center text-sm leading-5 font-medium bg-pink-600">
                <img
                  src={data.link}
                  alt={data.name}
                  className="h-full object-cover"
                />
              </div>
              <div className="flex-1 px-4 py-2 truncate">
                <a
                  href="#"
                  className="text-gray-900 text-sm leading-5 font-medium hover:text-gray-600 transition ease-in-out duration-150"
                >
                  {data.name}
                </a>
              </div>
              <div className="flex-shrink-0 pr-2">
                <button className="w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition ease-in-out duration-150">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mb-20">
        <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
          Country
        </h2>
        <ul className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {countries.map(data => (
            <li className="col-span-1 flex items-center bg-white border border-gray-200 rounded-md shadow-sm overflow-hidden">
              <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 text-white text-center text-sm leading-5 font-medium bg-pink-600">
                <img
                  src={data.link}
                  alt={data.name}
                  className="h-full object-cover"
                />
              </div>
              <div className="flex-1 px-4 py-2 truncate">
                <a
                  href="#"
                  className="text-gray-900 text-sm leading-5 font-medium hover:text-gray-600 transition ease-in-out duration-150"
                >
                  {data.name}
                </a>
              </div>
              <div className="flex-shrink-0 pr-2">
                <button className="w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition ease-in-out duration-150">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
            Recent publications
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            libero labore natus atque, ducimus sed.
          </p>
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
                    This cranberry orange bread is great for breakfast or a
                    snack. You can also make muffins; just spoon the batter into
                    greased muffin cups and bake at 375 degrees F (190 C) for 15
                    to 20 minutes.
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
      </div>
    </Layout>
  );
}
