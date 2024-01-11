import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <h1 className='h1-bold text-dark100_light900'>All Questions</h1>
      </div>
      <Link href='/ask-question'>
        <Button className='primary-gradient min-h-[46px] px-4 py-3 !text-light-900'>
          Ask a Question
        </Button>
      </Link>
    </>
  );
}
