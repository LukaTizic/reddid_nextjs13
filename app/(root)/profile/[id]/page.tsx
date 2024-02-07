import { Button } from "@/components/ui/button";
import { getUserInfo } from "@/lib/actions/user.action";
import { URLProps } from "@/types";
import { SignedIn, auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfileLink from "@/components/shared/ProfileLink";
import Stats from "@/components/shared/Stats";

const Page = async ({ params, searchParams }: URLProps) => {
  const userInfo = await getUserInfo({ userId: params.id });
  const { userId: clerkId } = auth();

  return (
    <>
      <div className='flex flex-col-reverse items-start justify-between sm:flex-row'>
        <div className='flex flex-col items-start gap-4 lg:flex-row'>
          <Image
            src={userInfo?.user.picture}
            alt='profile pic'
            width={140}
            height={140}
            className='rounded object-cover'
          />
          <div className='mt-3 '>
            <h2>{userInfo.user.name}</h2>
            <p>@{userInfo.user.username}</p>

            <div className='mt-5 flex flex-wrap items-center justify-start gap-5'>
              {userInfo.user.location && (
                <ProfileLink
                  imgUrl='/assets/icons/location.svg'
                  title={userInfo.user.location}
                />
              )}{" "}
              {userInfo.user.porfolioWebsite && (
                <ProfileLink
                  imgUrl='/assets/icons/link.svg'
                  href={userInfo.user.porfolioWebsite}
                  title='Porfolio'
                />
              )}
            </div>

            {userInfo.user.bio && (
              <p className='paragraph-regular text-dark400_light800 mt-8'>
                {userInfo.user.bio}
              </p>
            )}
          </div>
        </div>
        <div className='flex justify-end max-sm:mb-5 max-sm:w-full sm:mt-3'>
          <SignedIn>
            {clerkId === userInfo.user.clerkId && (
              <Link href='/profile/edit'>
                <Button className='paragraph-medium btn-secondary text-dark300_light900 min-h-[46px] min-w-[175px] px-4 py-3'>
                  Edit Profile
                </Button>
              </Link>
            )}
          </SignedIn>
        </div>
      </div>

      <Stats />

      <div className='mt-10 flex gap-10'>
        <Tabs defaultValue='top-posts' className='flex-1'>
          <TabsList className='background-light800_dark400 min-h-[42px] p-1'>
            <TabsTrigger value='top-posts' className='tab'>
              Top Posts
            </TabsTrigger>
            <TabsTrigger value='answers' className='tab'>
              Answers
            </TabsTrigger>
          </TabsList>
          <TabsContent value='top-posts'>Posts</TabsContent>
          <TabsContent value='answers'>Answers</TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Page;
