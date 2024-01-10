import Image from "next/image";
import Link from "next/link";
import React from "react";

const dummy = [
  {
    _id: 1,
    title: "Velit egestas dui id ornare arcu odio ut",
  },
  {
    _id: 2,
    title: "Velit egestas dui id ornare arcu odio ut",
  },
  {
    _id: 3,
    title: "Velit egestas dui id ornare arcu odio ut",
  },
  {
    _id: 4,
    title: "Velit egestas dui id ornare arcu odio ut",
  },
  {
    _id: 5,
    title: "Velit egestas dui id ornare arcu odio ut",
  },
];

const RightSidebar = () => {
  return (
    <section className='background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen flex-col  overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden w-[350px]'>
      <div>
        <h3 className='h3-bold text-dark200_light900'>Top Questions</h3>
        <div className='mt-7 flex w-full flex-col gap-[30px]'>
          {dummy.map((item) => (
            <Link
              href={`/questions/${item._id}`}
              key={item._id}
              className='flex cursor-pointer items-center justify-between gap-7'
            >
              <p className='body-medium text-dark500_light700 '>{item.title}</p>
              <Image
                src='/assets/icons/chevron-right.svg'
                alt='arrow'
                width={20}
                height={20}
                className='invert colors'
              />
            </Link>
          ))}
        </div>
      </div>
      <div className='mt-16'>test</div>
    </section>
  );
};

export default RightSidebar;
