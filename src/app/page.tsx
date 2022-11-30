import Hello from '@/src/ui/components/Hello';
import Intro from '@/src/ui/components/Intro';

const Page = () => {
  return (
    <div className="grid place-content-center justify-items-center text-3xl">
      <Hello />
      <Intro />
    </div>
  );
};

export default Page;
