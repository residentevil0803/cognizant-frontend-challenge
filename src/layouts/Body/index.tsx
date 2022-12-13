import React from "react";
import ImageHerokDesktop from "assets/images/image-hero-desktop.png";
import ImageHerokMobile from "assets/images/image-hero-mobile.png";
import IconClientAudiophile from "assets/images/client-audiophile.svg";
import IconClientDatabiz from "assets/images/client-databiz.svg";
import IconClientMaker from "assets/images/client-maker.svg";
import IconClientMeet from "assets/images/client-meet.svg";

const Body: React.FC = () => {
  return (
    <main className='w-full max-w-[1440px] flex md:flex-row flex-col-reverse md:p-16 p-0 '>
      <div className='md:w-6/12 w-full flex flex-col items-center'>
        <div className='h-full flex flex-col justify-between'>
          <div className='md:block flex flex-col items-center'>
            <div className='font-black xl:text-[4.75rem] lg:text-6xl md:text-5xl text-4xl xl:leading-[5rem] lg:leading-[4rem] leading-[3rem] text-specialBlack md:whitespace-nowrap whitespace-normal md:text-left text-center  lg:pt-24 pt-16 lg:pb-8 pb-3'>
              Make <br className='md:block hidden' />
              remote work
            </div>
            <div className='xl:max-w-lg lg:max-w-sm max-w-none md:p-0 p-2 xl:text-xl lg:text-md md:text-xs text-lg text-specialGray md:text-left text-center lg:py-8 py-4'>
              Get you team in sync, no matter your location. Streamline processes, create team
              rituals, and watch your productivity soar.
            </div>
            <div className='lg:py-8 py-3'>
              <button className='border-2 border-specialBlack xl:rounded-2xl lg:rounded-xl md:rounded-lg rounded-2xl xl:text-xl lg:text-md md:text-xs text-xl text-specialWhite hover:text-specialBlack bg-specialBlack hover:bg-specialWhite xl:px-6 xl:py-3 lg:px-4 lg:py-2 md:px-2 md:py-1 px-6 py-2'>
                Learn more
              </button>
            </div>
          </div>
          <div className='xl:max-w-lg lg:max-w-sm md:max-w-xs max-w-none md:p-0 p-6 flex flex-row justify-between items-center'>
            <img className='lg:h-5 lg:max-w-none max-w-[4rem]' src={IconClientDatabiz} alt='' />
            <img className='lg:h-9 lg:max-w-none max-w-[4rem]' src={IconClientAudiophile} alt='' />
            <img className='lg:h-5 lg:max-w-none max-w-[4rem]' src={IconClientMeet} />
            <img className='lg:h-5 lg:max-w-none max-w-[4rem]' src={IconClientMaker} alt='' />
          </div>
        </div>
      </div>
      <div className='md:w-6/12 w-full'>
        <img
          className='md:block hidden max-w-full max-h-[calc(100vh-30vh)]'
          src={ImageHerokDesktop}
          alt=''
        />
        <img className='md:hidden block max-w-full' src={ImageHerokMobile} alt='' />
      </div>
    </main>
  );
};

export default Body;
