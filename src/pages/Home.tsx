import cursor from '../assets/cursor.png'
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
    <div onMouseMove={handleMouseMove} className='relative w-full min-h-screen h-full cursor-none flex flex-col justify-between'>
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
      <div className='absolute bottom-32 sm:bottom-auto top-auto sm:top-16 left-4 sm:left-1/2 sm:-translate-1/2'>
        <p className='sm:max-w-[35rem] max-w-full text-[.55rem] sm:text-[.65rem] uppercase'>
          Hey there! I’m Carlota Alves, a graphic designer based in Lisbon, Portugal. I’m specialized in branding, identity design, social media and visual communication. I’ve developed a strong passion for creating innovative and meaningful designs through my studies at ESAD and my experience. Whether it’s logo creation, print production, or digital design, I’m here to help bring your ideas to life. Feel free to check out some of my work and let’s collaborate to create something crazy!
        </p>
      </div>
      <div className="pt-28 w-full h-full min-h-[50vh] container mx-auto max-w-5xl lg:px-0 px-[8vw] flex justify-center items-center flex-col">
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

