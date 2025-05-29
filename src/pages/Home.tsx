import cursor from '../assets/cursor.jpeg'
import { Footer } from '../components/footer';
import { NavBar } from '../components/navBar';
export function Home() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const cursor = document.getElementById('custom-cursor');
    if (cursor) {
      const x = e.clientX;
      const y = e.clientY;
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
    }
  };
  return (
    <div onMouseMove={handleMouseMove} className='w-full min-h-screen h-full cursor-none flex flex-col justify-between'>
      <NavBar />
      <div
        id="custom-cursor"
        style={{
          position: 'absolute',
          width: '40px',
          height: '40px',
          backgroundImage: `url(${cursor})`,
          backgroundSize: 'cover',
          pointerEvents: 'none',
          zIndex: "999"
        }}
      />
      <div className="pt-20 w-full h-full min-h-[50vh] container mx-auto max-w-5xl lg:px-0 px-[8vw] flex justify-center items-center flex-col">
        <div className='w-full flex justify-start'>
          <p className='text-[3rem] sm:text-[4rem] lg:text-[7rem]'>HELLO, I'M</p>
        </div>
        <div className='flex items-end w-full flex-col lg:leading-[7rem] leading-[5rem]'>
          <p className='text-[3rem] sm:text-[4rem] lg:text-[7rem]'>CARLOTA</p>
          <p className='sm:tracking-[5px] tracking-[2px] text-sm lg:text-md lg:tracking-[14px]'>I'M JUST THE DESIGNER</p>
        </div>
        <div className='flex justify-center text-center'>
          <p className='text-[3rem] sm:text-[4rem] lg:text-[7rem]'>ALVES</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

