/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import Image from "next/image";
import bka from '../pages/source/bars-solid.svg'
import ttp from '../pages/source/xmark-solid.svg'
import icon1 from '../pages/source/homeicon.svg'
import icon2 from '../pages/source/skillsicon.svg'
import icon3 from '../pages/source/projectsicon.svg'


const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const clickNavbar = () => {
    setNavbar(!navbar)
  }

  return (
    <>
      <header className='absolute w-full bg-transparent'>
        <div className='container'>
          <div className='py-3 h-24 md:py-4 max-w-6xl flex flex-row justify-between 
            items-center md:max-w-2xl lg:mx-8 xl:mx-0 lg:max-w-6xl'>
          <div className='flex'>
            <a href='#home' className='flex py-2'>
              <h2 className='font-semibold leading-[160%]'>Altraaa</h2>
            </a>
            <nav className='hidden md:flex'>
              <ul className='flex items-center ml-10 space-x-5'>
                <li className='hover:text-hover transition duration-300
                  ease-in-out'><a href="#about">About</a></li>
                <li className='hover:text-hover transition duration-300
                  ease-in-out'><a href="#skills">Skills</a></li>
                <li className='hover:text-hover transition duration-300
                  ease-in-out'><a href="#portofolio">Portfolio</a></li>
              </ul>
            </nav>
          </div>
          <div className='hidden ml-9 mr-2 md:mr-4 xl:mr-0 right-16 md:flex items-center'>
            {/* Instagram */}
            <a href="https://www.instagram.com/sputra712._?igshid=YzAwZjE1ZTI0Zg==" target="_blank" className='mr-6 flex justify-center items-center hover:text-hover transition duration-300 ease-in-out'>
              <svg role="img" width="23px" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
              </a>
            {/* Twitter */}
            <a href="https://x.com/Karlfreyy_?t=1WBSWFtOCylOr4m63bLTqw&s=08" target="_blank" className='mr-6 flex justify-center items-center hover:text-hover transition duration-300 ease-in-out'>
              <svg role="img" width="23px" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148 13.98 13.98 0 0 0 11.82 8.292a4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z"/></svg>
              </a>
            {/* Youtube */}
            <a href="https://youtube.com/@20aldiansahsaputra39?si=WGV3lewNib2pL56p" target="_blank" className='mr-6 flex justify-center items-center hover:text-hover transition duration-300 ease-in-out'>
              <svg role="img" width="23px" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            {/* Facebook */}
            <a href="https://www.facebook.com/aldiansah.saputra.353?mibextid=ZbWKwL" target="_blank" className='mr-6 flex justify-center items-center hover:text-hover transition duration-300 ease-in-out'>
              <svg role="img" width="23px" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/></svg>
              </a>
            {/* Github */}
            <a href="https://github.com/Altraaa" target="_blank" className='mr-2flex justify-center items-center hover:text-hover transition duration-300 ease-in-out'>
              <svg role="img" className='fill-current'viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/></svg>
              </a>
          </div>
          <div className='flex xl:mr-0 lg:mr-6'>
            <button className='py-2 px-5 text-sm leading[160%] border border-icon 
              rounded hover:bg-hover hover:text-white transition duration-300 ease-in-out'>
              <a href="https://drive.google.com/u/0/uc?id=1f8pQfZkiyOXd7ykC6uOAFFCn3cPlCxha&export=download">Download CV</a>
            </button>
            <div className="flex items-center md:hidden px-4 ">
              <button id='burger' name='burger' type='button' className='block absolute right-4 delay-500 duration-700 ease-in-out' onClick={clickNavbar}>
                {navbar ? (
                  <Image src={ttp} width={24} height={24} alt="close"/>
                ) : (
                  <Image src={bka} width={24} height={24} alt="open"/>
                )}
              </button>
            </div> 
          </div>
        </div>
        </div>
        {navbar && (
          <div className="h-80 flex md:hidden justify-end transition animate-blur duration-700 ease-in-out">
            <div className="md:hidden flex animate-geser items-center justify-center w-52 bg-secbg/75 backdrop-blur-sm text-center rounded-xl">
              
              <ul className='flex flex-col space-y-10 text-xl font-normal text-center align-middle'>
                <li className='hover:text-hover transition duration-300
                  ease-in-out flex space-x-4'> <Image src={icon1} width={25} height={25} /> 
                  <a onClick={() => setNavbar(!navbar)} href="#about">About</a></li>
                <li className='hover:text-hover transition duration-300
                  ease-in-out flex space-x-4'> <Image src={icon2} width={25} height={25} /> 
                  <a onClick={() => setNavbar(!navbar)} href="#skills">Skills</a></li>
                <li className='hover:text-hover transition duration-300
                  ease-in-out flex space-x-4'> <Image src={icon3} width={25} height={25} /> 
                  <a onClick={() => setNavbar(!navbar)} href="#portofolio">Portfolio</a></li>
              </ul>
            </div>
        </div>
      )}
      </header>
    </>
  )
}

export default Navbar;