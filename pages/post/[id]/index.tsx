/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image'
import Layout from '@components/Layout'

export default function PostDetail() {
  return (
    <Layout title='Post'>
      <div className='relative py-16 bg-white overflow-hidden'>
        <div className='hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full'>
          <div className='relative h-full text-lg max-w-prose mx-auto'>
            <svg
              className='absolute top-12 left-full transform translate-x-32'
              width='404'
              height='384'
              fill='none'
              viewBox='0 0 404 384'>
              <defs>
                <pattern
                  id='74b3fd99-0a6f-4271-bef2-e80eeafdf357'
                  x='0'
                  y='0'
                  width='20'
                  height='20'
                  patternUnits='userSpaceOnUse'>
                  <rect x='0' y='0' width='4' height='4' className='text-gray-200' fill='currentColor' />
                </pattern>
              </defs>
              <rect width='404' height='384' fill='url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)' />
            </svg>
            <svg
              className='absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32'
              width='404'
              height='384'
              fill='none'
              viewBox='0 0 404 384'>
              <defs>
                <pattern
                  id='f210dbf6-a58d-4871-961e-36d5016a0f49'
                  x='0'
                  y='0'
                  width='20'
                  height='20'
                  patternUnits='userSpaceOnUse'>
                  <rect x='0' y='0' width='4' height='4' className='text-gray-200' fill='currentColor' />
                </pattern>
              </defs>
              <rect width='404' height='384' fill='url(#f210dbf6-a58d-4871-961e-36d5016a0f49)' />
            </svg>
            <svg
              className='absolute bottom-12 left-full transform translate-x-32'
              width='404'
              height='384'
              fill='none'
              viewBox='0 0 404 384'>
              <defs>
                <pattern
                  id='d3eb07ae-5182-43e6-857d-35c643af9034'
                  x='0'
                  y='0'
                  width='20'
                  height='20'
                  patternUnits='userSpaceOnUse'>
                  <rect x='0' y='0' width='4' height='4' className='text-gray-200' fill='currentColor' />
                </pattern>
              </defs>
              <rect width='404' height='384' fill='url(#d3eb07ae-5182-43e6-857d-35c643af9034)' />
            </svg>
          </div>
        </div>
        <div className='relative px-4 sm:px-6 lg:px-8'>
          <div className='text-lg max-w-prose mx-auto mb-6'>
            <p className='text-base text-center leading-6 text-indigo-600 font-semibold tracking-wide uppercase'>
              Food
            </p>
            <h1 className='mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10'>
              Cranberry Orange Bread
            </h1>
            <p className='text-xl text-gray-500 leading-8'>
              This cranberry orange bread is great for breakfast or a snack. You can also make muffins; just spoon the
              batter into greased muffin cups and bake at 375 degrees F (190 C) for 15 to 20 minutes.
            </p>
          </div>
          <div className='prose prose-lg text-gray-500 mx-auto'>
            <figure>
              <Image
                className='w-full rounded-lg'
                src='https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F7515079.jpg&q=85'
                alt=''
                width='1024'
                height='768'
              />
            </figure>
            <p>
              <strong>Ingredients</strong>
            </p>
            <ul>
              <li>1. 2 cups flour</li>
              <li>2. ¾ cup sugar</li>
              <li>3. 1 ½ teaspoons baking powder</li>
              <li>4. ¾ teaspoon salt</li>
              <li>5. ½ teaspoon baking soda</li>
              <li>6. ¼ cup butter, cut into small chunks</li>
              <li>7. ¾ cup orange juice</li>
              <li>7. ¾ cup orange juice</li>
            </ul>
            <strong>Directions</strong>
            <ul>
              <li>Step 1: Preheat oven to 350 degrees F (175 degrees C). Grease a 8 1/2x4 1/2-inch loaf pan.</li>
              <li>
                Step 2: Combine flour, sugar, baking powder, salt, and baking soda in a bowl. Stir butter into flour
                mixture until combined. Add orange juice, orange zest, and egg; mix well. Fold in cranberries and
                walnuts. Spoon batter into the prepared pan.
              </li>
              <li>
                Step 4. Bake in the preheated oven until a toothpick inserted into the center comes out clean, 60 to 75
                minutes. Cool in the pan for 10 minutes before removing to cool completely on a wire rack.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}
