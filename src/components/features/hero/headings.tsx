import Button from '@/element/button';
import Heading1 from '@/element/heading1';
import Heading2 from '@/element/heading2';

const Headings = () => {
  return (
    <div className="flex flex-col items-start gap-5 pl-16 pt-16">
      <Heading2>Lukas Laudrain • Full-Stack Developer</Heading2>
      <Heading1 className="w-5/6">
        Streamlining operations with custom web apps tailored to your business needs
      </Heading1>
      <Button className="mt-3">Let&apos;s talk</Button>
    </div>
  );
};

export default Headings;
