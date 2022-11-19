import Hello from '@/ui/components/Hello';
import Intro from '@/ui/components/Intro';

const Page = () => {
  return (
    <div className="col-span-3 grid place-content-center justify-items-center text-3xl">
      <Hello />
      <Intro />
    </div>
  );
};

export default Page;
