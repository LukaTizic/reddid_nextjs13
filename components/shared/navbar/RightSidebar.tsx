import React from "react";

const dummy = [
  {
    _id: 1,
    title: "velit egestas dui id ornare arcu odio ut",
  },
  {
    _id: 2,
    title: "velit egestas dui id ornare arcu odio ut",
  },
  {
    _id: 3,
    title: "velit egestas dui id ornare arcu odio ut",
  },
  {
    _id: 4,
    title: "velit egestas dui id ornare arcu odio ut",
  },
  {
    _id: 5,
    title: "velit egestas dui id ornare arcu odio ut",
  },
];

const RightSidebar = () => {
  return (
    <section className='background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen flex-col  overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden w-[350px]'>
      <div>
        <h3 className='h3-bold text-dark200_light900'>Top Questions</h3>
        <div className='mt-7 flex w-full flex-col gap-[30px]'></div>
      </div>
      <div className='mt-16'>test</div>
    </section>
  );
};

export default RightSidebar;
