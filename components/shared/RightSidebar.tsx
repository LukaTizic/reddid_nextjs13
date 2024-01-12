import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./RenderTag";

const dummy = [
  {
    _id: "1",
    title: "Velit egestas dui id ornare arcu odio ut?",
  },
  {
    _id: "2",
    title: "Velit egestas dui id ornare arcu odio ut?",
  },
  {
    _id: "3",
    title: "Velit egestas dui id ornare arcu odio ut?",
  },
  {
    _id: "4",
    title: "Velit egestas dui id ornare arcu odio ut?",
  },
  {
    _id: "5",
    title: "Velit egestas dui id ornare arcu odio ut?",
  },
];

const dummyTags = [
  { _id: "1", name: "javascript", totalQuestions: 5 },
  { _id: "2", name: "react", totalQuestions: 2 },
  { _id: "3", name: "CSS" },
  { _id: "4", name: "HTML", totalQuestions: 7 },
  { _id: "5", name: "nextjs", totalQuestions: 11 },
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
      <div className='mt-16'>
        <h3 className='h3-bold text-dark200_light900'>Popular Tags</h3>
        <div className='mt-7 flex flex-col gap-4'>
          {dummyTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
