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
    <div onMouseMove={handleMouseMove} className='w-[100vw] h-[100vh] overflow-hidden cursor-none'>
      <NavBar/>
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
      <div className="px-12 py-3 flex flex-col gap-1 mt-16 w-full h-full">
        <p>Hey! My name is Carlota Alves and I'm a graphic designer based in Lisbon, Portugal.</p>
        <p>I'm here and ready to help! </p>
        <p>Together, we're like peanut butter and jelly, an unbeatable combo!</p>
      </div>
      <Footer/>
    </div>
  );
}

