import Filter from "@/components/shared/Filter";
import LocalSearchBar from "@/components/shared/navbar/search/LocalSearchBar";
import { UserFilters } from "@/constants/filters";

const page = () => {
  return (
    <>
      <h1 className='h1-bold text-dark100_light900'>All Users</h1>

      <div className='mt-11 flex justify-between gap-5 max-sm:flex-col items-center'>
        <LocalSearchBar
          route='/community'
          iconPosition='left'
          imgSrc='/assets/icons/search.svg'
          placeholder='Search for amazing minds'
          otherClasses='flex-1'
        />
        <Filter
          filters={UserFilters}
          otherClasses='min-h-[56px] sm:min-w-[170px]'
          containerClasses='hidden max-md:flex'
        />
      </div>
    </>
  );
};

export default page;
