import React from 'react';

//CODE FOR POSSIBLE FUTURE EASTER EGG

/*  const [counter, setCounter] = useState(0);
 
  function handleClick(e) {
    const isH2 =
      e.target ===
      document.querySelector(
        '.text-4xl.text-white.font-medium.text-center.z-20'
      );
    const isEnd = e.y > 419 && e.y < 440;
    if (isH2 && isEnd) {
      setCounter((c) => c + 1);
    }
  }

  useEffect(() => {
    window.addEventListener('click', (e) => handleClick(e));

    return () => {
      window.removeEventListener('click', (e) => handleClick(e));
    };
  }, []);

  useEffect(() => {
    if (counter === 7) {
      window.location.href = '/home';
    }
  }, [counter]); */

export default function ComingSoon() {
  return (
    <div className="bg-black flex flex-col items-center justify-center h-screen">
      <div className="lg:w-3/12 md:w-2/4 bg-black z-10 absolute m-8 flex flex-col items-center justify-center border-white border-solid border-8 rounded-sm py-8 px-8">
        {/* <h1 className="text-6xl z-20">👷🏽‍♂️</h1> */}
        <h2 className="text-4xl text-white font-medium text-center z-20">
          We're working for you, pretty soon everything will be finished.
        </h2>
      </div>
    </div>
  );
}
