import Image from 'next/image';
import dog from './image.jpg';
export default function LocalMain() {
  return (
    <main>
      <Image
        src={dog}
        width={500}
        placeholder="empty"
        quality={100}
        priority
        alt="dog"
      />
    </main>
  );
}
