import { Disclosure } from '@headlessui/react';
import { HeartIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import parse from 'html-react-parser';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import MyViewProductDetail from './ViewProductDetail';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const accordianContent = [
  {
    id: 1,
    name: 'Size & Fit',
    description: '<ul className="list-disc leading-7"><li>Oversized fit for a baggy, spacious feel</li><li className="cursor-pointer">Size Guide</li></ul>',
  },
  {
    id: 2,
    name: 'Delivery & Returns',
    description: '<ul className="list-disc ml-0 py-1 mr-24 leading-7"><li>All purchases are subjected to delivery fees.</li><li>    Standard delivery 4–9 Working Days</li><li>Orders are processed and delivered Monday–Friday (excluding public holidays).</li><li>Nike Members enjoy free returns.</li></ul>',
  },
  {
    id: 3,
    name: 'How This Was Made',
    description: '<ul className="list-disc ml-0 py-1 mr-28 leading-8"><li>The polyester in this 80% cotton/20% polyester fleece is made with 100% recycled polyester.</li><li>Our recycled polyester is made from plastic bottles which are cleaned, shredded into flakes, converted into pellets and then spun into a high-quality yarn. In addition to reducing waste, recycled poly lowers carbon emissions by up to 30% compared with virgin poly, and diverts an average of 1 billion plastic bottles annually from landfills and waterways.</li><li>Learn more about our <p className="cursor-pointer underline"> Move to Zero </p> journey towards zero carbon and zero waste, including how we are working to design products with sustainability in mind and help protect the future of where we live and play.</li></ul>',
  },
  {
    id: 4,
    name: 'Reviews(0)',
    description: '<ul className="list-disc ml-0 py-1 mr-16"><li>All purchases are subjected to delivery fees.</li><li>    Standard delivery 4–9 Working Days</li><li>Orders are processed and delivered Monday–Friday (excluding public holidays).</li><li>Nike Members enjoy free returns.</li></ul>',
  },
  {
    id: 5,
    name: 'Product Information',
    description: '<p className="ml-0 mr-28 leading-7 mt-4">Declaration of Importer: Direct import by the individual customer</p><p className="ml-0 mr-28 leading-7 mt-8">Marketed by: Nike Global Trading B.V. Singapore Branch, 30 Pasir Panjang Road, #10-31/32, Mapletree Business City, Singapore 117 440</p><p className="ml-0 mr-28 leading-7 mt-2">Net Quantity: 1 Top</p>'
  }
];

export default function ClothingPage() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <MyViewProductDetail
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <div className="grid grid-cols-12">
        <div className="lg:col-span-7 col-span-1">
          <img src="" alt="image" />
          Dasas
        </div>
        <div className="lg:col-span-5 col-span-12 ">
          <div className=''>
            <h1 className="text-left font-semibold text-3xl">Nike Sportswear Phoenix Fleece</h1>
            <h3 className="text-left text-lg">Women's Over-Oversized Crew-Neck Sweatshirt</h3>
            <h3 className="text-left text-lg mt-4">MRP : ₹3,795</h3>
            <h3 className="text-left text-gray-500">incl. of taxes</h3>
            <h3 className="text-left text-gray-500">(Also includes all applicable duties)</h3>
          </div>
          <div className="flex space-x-2 py-10 cursor-pointer flex-wrap">
            <div className="hover:border-black hover:border hover:rounded-md w-20 h-20">
              <Image

                src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/543babe9-f8b7-4356-85d5-9833c5ede24a/sportswear-phoenix-fleece-over-oversized-crew-neck-sweatshirt-gGzPT0.png"
                alt="image"
                style={{
                  borderRadius: '6px',
                }}
                width="80px"
                height="80px"
              />
            </div>
            <div className="hover:border-black hover:border hover:rounded-md w-20 h-20">
              <Image

                src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9cee61d9-f639-4c9e-bad3-9a957c015b23/sportswear-phoenix-fleece-over-oversized-crew-neck-sweatshirt-gGzPT0.png"
                alt="image"
                style={{
                  borderRadius: '6px',
                }}
                width="80px"
                height="80px"
              />
            </div>
            <div className="hover:border-black hover:border hover:rounded-md w-20 h-20">
              <Image
                src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3db42c20-af91-49ea-9b91-da9c2942fec0/sportswear-phoenix-fleece-over-oversized-crew-neck-sweatshirt-gGzPT0.png"
                alt="image"
                style={{
                  borderRadius: '6px',
                }}
                width="80px"
                height="80px"
              />
            </div>
            <div className="hover:border-black hover:border hover:rounded-md w-20 h-20">
              <Image
                src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f67c3da0-3a6f-46bf-a4a3-807650b818bd/sportswear-phoenix-fleece-over-oversized-crew-neck-sweatshirt-gGzPT0.png"
                alt="image"
                style={{
                  borderRadius: '6px',
                }}
                width="80px"
                height="80px"
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-between">
            <p className="text-left">Select Size</p>
            <button type="button" className="text-right pr-10 text-gray-500 cursor-pointer" onClick={() => router.push('/')}>Size Guide</button>
          </div>
          <div className="flex space-x-2">
            <button type="button" className="hover:border-b hover:border-b-black hover:border-t hover:border-t-black hover:border-l hover:border-l-black hover:border-r hover:border-r-black rounded-md p-4 h-14 w-16">XS</button>
            <button type="button" className="hover:border-b hover:border-b-black hover:border-t hover:border-t-black hover:border-l hover:border-l-black hover:border-r hover:border-r-black rounded-md p-4 h-14 w-16">S</button>
            <button type="button" className="hover:border-b hover:border-b-black hover:border-t hover:border-t-black hover:border-l hover:border-l-black hover:border-r hover:border-r-black rounded-md p-4 h-14 w-16">M</button>
            <button type="button" className="hover:border-b hover:border-b-black hover:border-t hover:border-t-black hover:border-l hover:border-l-black hover:border-r hover:border-r-black rounded-md p-4 h-14 w-16">L</button>
            <button type="button" className="hover:border-b hover:border-b-black hover:border-t hover:border-t-black hover:border-l hover:border-l-black hover:border-r hover:border-r-black rounded-md p-4 h-14 w-16">XL</button>
          </div>
          <div className="py-2 space-y-4">
            <button type="button" className="bg-black text-white cursor-pointer rounded-full h-16 w-96 text-lg">Add to Bag</button>
            <button type="button" className="border cursor-pointer border-gray-300 hover:border-black rounded-full h-16 w-96 text-lg space-x-4">
              <div className="flex justify-center">
                <span>Favourite</span>
                <span><HeartIcon className="h-5 w-5 right-2" /></span>
              </div>
            </button>
          </div>
          <div className="py-6 mr-14 leading-8 text-lg">
            <p className="leading-8">
              Rise up and transform your fleece wardrobe with strong cosy vibes. With a voluminous fit and exaggerated ribbing, this Phoenix Fleece sweatshirt gives you a look that's anything but basic.
            </p>
          </div>
          <div className="">
            <ul className="list-disc">
              <li>
                Colour Shown: Light Silver/Sail
              </li>
              <li>
                Style: DQ5762-034
              </li>
            </ul>
          </div>
          <div className="text-lg hover:text-gray-500 py-4">
            <button type="button" className="underline" onClick={() => setShowModal(true)}>
              View Product Details
            </button>
          </div>
          <div className="border-t border-gray-300 mt-3 py-3 w-96" />
          {accordianContent.map((item) => (
            <Disclosure as="div" key={item.id}>
              {({ open }) => (
                <>
                  <dt className="text-lg my-auto">
                    <Disclosure.Button className="flex items-start justify-between text-left text-gray-900 w-96">
                      <span className="text-xl font-semibold cursor-pointer">{item.name}</span>
                      <span className="ml-6 flex h-7 items-center">
                        <ChevronDownIcon
                          className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                          aria-hidden="true"
                        />
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2 pl-12">
                    <p className="text-base text-gray-800">
                      {parse(item.description)}
                    </p>
                  </Disclosure.Panel>
                  <div className="border-t border-gray-300 mt-6 py-2 w-96" />
                </>
              )}
            </Disclosure>
          ))}

        </div>
      </div>
    </div>
  );
}
