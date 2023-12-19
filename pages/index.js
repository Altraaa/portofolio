import Image from 'next/image'
import profile from '../pages/source/gntg.png'
import prj1 from '../pages/source/cdg1.jpg'
import prj2 from '../pages/source/osis.jpg'
import prj3 from '../pages/source/paskib.jpg'
import pp1 from '../pages/source/web1.png'
import pp2 from '../pages/source/web2.png'
import pp3 from '../pages/source/figma1.png'
import pp4 from '../pages/source/crazycars.png'
import ft1 from '../pages/source/phoneicon.svg'
import ft2 from '../pages/source/gmailicon.svg'
import ft3 from '../pages/source/schoolicon.svg'
import ft4 from '../pages/source/townhallicon.svg'
import ft5 from '../pages/source/eduicon.svg'
import ft6 from '../pages/source/instagram.svg'
import ft7 from '../pages/source/github.svg'
import ft8 from '../public/vercel.svg'
import ft9 from '../pages/source/twitter.svg'
import ft10 from '../pages/source/facebook.svg'
import cpy from '../pages/source/copyright.svg'
import Navbar from '../pages/Navbar'


export default function Home() {
  return (
    <>
    <title>Altraa - Portofolio Website</title>
    <Navbar />
      <main>
      {/* HEADER START */}
      <section id="home" className="pt-36 lg:py-24 bg-primarybg">
        <div className="container">
            <div className="flex flex-wrap">
                <div className="w-full self-center xl:px-0 lg:px-8 lg:w-1/2 ">
                    <h1 className="text-base font-semibold text-icon md:text-xl">Hello Everyone, i am 
                        <span className="block font-bold text-slate-950 text-3xl lg:text-4xl mt-1"> Aldiansah Saputra</span></h1>
                    <h2 className="font-medium mt-2 text-slate-500 text-lg mb-5 lg:text-xl">Students and 
                        <span className="text-slate-950"> Beginner Programmers</span></h2>
                    <p className="font-medium text-prf mb-10 leading-relaxed max-w-xl"> 
                        Studying at SMK Negeri 1 Denpasar by taking
                        a major engaged in the IT field precisely in the Engineering section of 
                        a software, with the name of the department
                        <a href="#" className="underline italic hover:text-hover transition duration-300 ease-in-out"> "Rekayasa Perangkat Lunak"</a> (RPL).</p>

                    <button className='text-base font-semibold text-white py-3 px-8 border-solid bg-icon rounded-lg
                    hover:bg-violet-700 transition duration-300 ease-in-out hover:shadow-lg'>
                      <a href="#about" className='flex items-center'>Read More</a>
                    </button>
                </div>
                <div className="w-full self-end max-w-full lg:w-1/2">
                    <div className="lg:mt-9 lg:right-0 mt-10">
                        <Image src={profile} className="max-w-full mx-auto size w-9/12" alt={'yyy'}/>
                    </div>
                </div>    
            </div>
        </div>
      </section>
      {/* END OF HEADER */}

      {/* ABOUT START */}
      <section id='about' className='mt-20 md:mt-0 py-10 bg-purple-100'>
        <div className="container">
          <div className=''>
              <div className='w-full md:ml-1 lg:ml-8 xl:ml-0'>
                <h3 className='text-xl md:text-2xl text-slate-600'>--About:</h3>
                <h1 className='text-3xl md:text-4xl mb-8'>My Activity</h1>
              </div>
          </div>
          <div className="flex-wrap flex w-full ring-0 items-center">
            <div className="w-full lg:mx-8 xl:mx-0 md:w-1/2 lg:w-1/3">
              <div className="bg-white rounded-xl px-4 overflow-hidden shadow-lg mb-10 transition duration-300 ease-in-out hover:shadow-2xl md:w-80 xl:w-96">
                <Image src={prj2} alt={'osis'} className='mt-8 rounded-xl'></Image>
                <div className='py-8 px-2'>
                  <h3>
                    <a href="#" className='block mb-3 font-semibold text-xl text-slate-950
                    hover:text-hover transition duration-300 truncate'>Organisasi Intra Sekolah (OSIS)</a>
                  </h3>
                  <p className='font-medium text-base text-prf mb-6 '>
                    While at school, besides studying, I also participate in organizational 
                    activities to increase my knowledge, and other external things that 
                    can be learned besides class.
                  </p>
                  <button className='text-base font-medium text-white py-2 px-4 border-solid bg-icon rounded-lg
                    hover:bg-violet-700 transition duration-300 ease-in-out hover:shadow-lg'><a href="" className='flex items-center'>Find out more</a></button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3">
              <div className="bg-white rounded-xl px-4 overflow-hidden shadow-lg mb-10 transition duration-300 ease-in-out hover:shadow-2xl md:w-80 xl:w-96">
                <Image src={prj3} alt='pass' className='rounded-xl mt-8'></Image>
                <div className='py-8 px-2'>
                  <h3>
                    <a href="#" className='block mb-3 font-semibold text-xl text-slate-950
                    hover:text-hover transition duration-300 truncate'>Paskibra KANSA</a>
                  </h3>
                  <p className='font-medium text-base text-prf mb-6 '>
                    Apart from organizations, I also participated in extracurricular activities, 
                    namely Paskibra KANSA. With the hope of adding knowledge for me.
                  </p>
                  <button className='text-base font-medium text-white py-2 px-4 border-solid bg-icon rounded-lg
                    hover:bg-violet-700 transition duration-300 ease-in-out hover:shadow-lg'><a href="" className='flex items-center'>Find out more</a></button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 lg:ml-8 xl:ml-0">
              <div className="bg-white rounded-xl px-4 overflow-hidden shadow-lg mb-10 transition duration-300 ease-in-out hover:shadow-2xl md:w-80 xl:w-96">
                <Image src={prj1} alt='coding' className='mt-8 rounded-xl'></Image>
                <div className='py-8 px-6'>
                  <h3>
                    <a href="#" className='block mb-3 font-semibold text-xl text-slate-950
                    hover:text-hover transition duration-300 truncate'>Basic Programming</a>
                  </h3>
                  <p className='font-medium text-base text-prf mb-6 '>
                    Programming is my main activity at the moment, because I feel that I need to 
                    improve my skills for my future job needs.
                  </p>
                  <button className='text-base font-medium text-white py-2 px-4 border-solid bg-icon rounded-lg
                    hover:bg-violet-700 transition duration-300 ease-in-out hover:shadow-lg'><a href="" className='flex items-center'>Find out more</a></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END OF ABOUT */}

      {/* SKILLS START */}
        <section id="skills" className='mt-20 md:mt-0 md:mb-16 md:py-10'>
          <div className="container "> 
            <div className='flex flex-wrap justify-center items-center'>
              <div className='w-full md:ml-1 lg:ml-8 xl:ml-0'>
                <h3 className='text-xl md:text-2xl text-slate-600'>--Skills:</h3>
                <h1 className='text-3xl md:text-4xl'>My Specialized</h1>
              </div>
            </div>
            <div className='md:grid md:grid-cols-3 md:gap-4 mt-16 md:mx-1 md:h-96 lg:h-36 lg:gap-8 lg:mx-8 lg:mr-12 xl:mx-0 lg:pb-96'>
              <div className='py-12 px-7 mb-8 md:mb-0 text-center rounded-xl bg-purple-100 transition duration-300 ease-in-out hover:shadow-2xl'>
                  <div className='w-fit my-0 mx-auto py-4 px-5 rounded-lg bg-purple-200'>
                    <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" width="27" height="27" xmlns="http://www.w3.org/2000/svg">
                      <path d="m11.25 6c.398 0 .75.352.75.75 0 .414-.336.75-.75.75-1.505 0-7.75 0-7.75 0v12h17v-8.749c0-.414.336-.75.75-.75s.75.336.75.75v9.249c0 .621-.522 1-1 1h-18c-.48 0-1-.379-1-1v-13c0-.481.38-1 1-1zm1.521 9.689 9.012-9.012c.133-.133.217-.329.217-.532 0-.179-.065-.363-.218-.515l-2.423-2.415c-.143-.143-.333-.215-.522-.215s-.378.072-.523.215l-9.027 8.996c-.442 1.371-1.158 3.586-1.264 3.952-.126.433.198.834.572.834.41 0 .696-.099 4.176-1.308zm-2.258-2.392 1.17 1.171c-.704.232-1.274.418-1.729.566zm.968-1.154 7.356-7.331 1.347 1.342-7.346 7.347z" fill-rule="nonzero"/>
                    </svg>
                  </div>
                  <h4 className='my-6 mx-0 font-semibold text-base'>Figma</h4>
                  <p>
                    Quite adept at using an application / software called "Figma" to 
                    create or design a website or application software that I will create.
                  </p>
              </div>
              <div className='py-12 px-10 mb-8 md:mb-0 text-center rounded-xl bg-purple-100 transition duration-300 ease-in-out hover:shadow-2xl'>
                  <div className='w-fit my-0 mx-auto py-4 px-5 rounded-lg bg-purple-200'>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                          <path d="M24 19h-1v-2.2c-1.853 4.237-6.083 7.2-11 7.2-6.623 0-12-5.377-12-12h1c0 6.071 4.929 11 11 11 4.66 0 8.647-2.904 10.249-7h-2.249v-1h4v4zm-10.772 0h-2.457c-.448-1.286-.489-1.599-.931-1.781-.468-.193-.77.044-1.922.598l-1.736-1.735c.587-1.217.786-1.473.6-1.922-.188-.451-.528-.495-1.782-.932v-2.457c1.285-.448 1.598-.488 1.782-.932.192-.465-.04-.758-.6-1.921l1.736-1.736c1.163.561 1.467.792 1.921.6.46-.191.505-.556.932-1.782h2.457c.449 1.287.49 1.599.932 1.781.466.194.776-.045 1.922-.599l1.735 1.736c-.581 1.208-.784 1.473-.599 1.921.191.46.556.505 1.782.932v2.457c-1.27.442-1.597.487-1.782.933-.187.452.022.722.599 1.921l-1.735 1.735c-1.096-.526-1.452-.798-1.916-.601-.465.193-.508.553-.938 1.784zm-.71-13h-1.036c-.243.722-.462 1.375-1.26 1.705-.744.31-1.383.032-2.098-.314l-.733.733c.363.74.644 1.303.315 2.098-.343.827-.969.991-1.706 1.259v1.046c.723.244 1.375.453 1.706 1.25.332.802.033 1.378-.315 2.1l.733.731c.711-.348 1.355-.622 2.098-.314.757.314 1.011.909 1.259 1.706h1.029c.244-.723.471-1.375 1.272-1.708.773-.32 1.4-.01 2.094.316l.731-.732c-.336-.724-.656-1.268-.313-2.098.344-.828.963-.985 1.706-1.26v-1.036c-.724-.243-1.375-.463-1.706-1.26-.33-.798-.044-1.367.315-2.098l-.732-.733c-.715.344-1.345.627-2.099.315-.789-.327-.994-.922-1.26-1.706zm-.539 8.5c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5 2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5zm0-4c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zm-7.979-1.5h-4v-4h1v2.2c1.853-4.237 6.083-7.2 11-7.2 6.623 0 12 5.377 12 12h-1c0-6.071-4.929-11-11-11-4.66 0-8.647 2.904-10.249 7h2.249v1z"/></svg>
                  </div>
                  <h4 className='my-6 mx-0 font-semibold text-base'>HTML</h4>
                  <p>
                    Can use the basic programming language, HTML (Hypertext Markup Language) to create a website that is still static.
                  </p>
              </div>
                <div className='py-12 px-7 text-center rounded-xl bg-purple-100 transition duration-300 ease-in-out hover:shadow-2xl'>
                  <div className='w-fit my-0 mx-auto py-4 px-5 rounded-lg bg-purple-200'>
                    <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" width="27" height="27" xmlns="http://www.w3.org/2000/svg">
                      <path d="m21 4c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-16.5.5h15v15h-15zm13.5 9c0-.276-.224-.5-.5-.5h-4c-.276 0-.5.224-.5.5v4c0 .276.224.5.5.5h4c.276 0 .5-.224.5-.5zm-10.061 1.99-1.218-1.218c-.281-.281-.282-.779 0-1.061s.78-.281 1.061 0l1.218 1.218 1.218-1.218c.281-.281.779-.282 1.061 0s.281.78 0 1.061l-1.218 1.218 1.218 1.218c.281.281.282.779 0 1.061s-.78.281-1.061 0l-1.218-1.218-1.218 1.218c-.281.281-.779.282-1.061 0s-.281-.78 0-1.061zm8.561-.99v2h-2v-2zm-7.5-8.5c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zm9 5.25c0-.399-.353-.75-.75-.75-1.153 0-2.347 0-3.5 0-.397 0-.75.351-.75.75s.353.75.75.75h3.5c.397 0 .75-.351.75-.75zm-9-3.75c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm9 1.5c0-.399-.353-.75-.75-.75-1.153 0-2.347 0-3.5 0-.397 0-.75.351-.75.75s.353.75.75.75h3.5c.397 0 .75-.351.75-.75zm0-2.25c0-.399-.353-.75-.75-.75-1.153 0-2.347 0-3.5 0-.397 0-.75.351-.75.75s.353.75.75.75h3.5c.397 0 .75-.351.75-.75z" fill-rule="nonzero"/></svg>
                  </div>
                  <h4 className='my-6 mx-0 font-semibold text-base'>CSS</h4>
                  <p>
                    When creating a static website I also use CSS as a supporting tool to design 
                    my website so that it has a good appearance, I am quite good at this.
                  </p>
              </div>
              <div className='py-12 px-7 mt-8 md:mt-0 mb-8 md:mb-0 text-center rounded-xl bg-purple-100 transition duration-300 ease-in-out hover:shadow-2xl'>
                  <div className='w-fit my-0 mx-auto py-4 px-5 rounded-lg bg-purple-200'>
                    <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" width="27" height="27" xmlns="http://www.w3.org/2000/svg"><path d="m21 4c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-1.5 5.505v9.995h-15v-9.995zm0-1.5h-15v-3.505h15zm-2.3-2.527c.442 0 .8.359.8.8 0 .442-.358.8-.8.8s-.8-.358-.8-.8c0-.441.358-.8.8-.8zm-1.65.777c0-.397-.352-.75-.75-.75-1.695 0-6.355 0-8.05 0-.399 0-.75.353-.75.75s.351.75.75.75h8.05c.398 0 .75-.353.75-.75z" fill-rule="nonzero"/>
                    </svg>
                  </div>
                  <h4 className='my-6 mx-0 font-semibold text-base'>TailwindCSS</h4>
                  <p>
                    To shorten the time of making a website, I also learned the framework of CSS, 
                    namely TailwindCSS and have been quite proficient in using some of the utilities provided.
                  </p>
              </div>
              <div className='py-12 px-7 mb-8 md:mb-0 text-center rounded-xl bg-purple-100 transition duration-300 ease-in-out hover:shadow-2xl'>
                  <div className='w-fit my-0 mx-auto py-4 px-5 rounded-lg bg-purple-200'>
                    <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" width="27" height="27" xmlns="http://www.w3.org/2000/svg">
                      <path d="m21.011 8.498h-18.009c-.569 0-1.001.464-1.001.999 0 .118-.105-.582 1.694 10.659.077.486.496.842.988.842h14.635c.492 0 .911-.356.988-.842 1.801-11.25 1.693-10.54 1.693-10.66 0-.553-.449-.991-.988-.998zm-.92 3.5-1.2 7.5h-13.782l-1.2-7.5zm-.076-6.517h-16.029c-.524 0-1.001.422-1.001 1.007 0 .081-.011.016.139 1.01h17.752c.152-1.012.139-.931.139-1.009 0-.58-.469-1.008-1-1.008zm-15.973-1h15.917c.057-.436.054-.426.054-.482 0-.671-.575-1.001-1.001-1.001h-14.023c-.536 0-1.001.433-1.001 1 0 .056-.004.043.054.483z" fill-rule="nonzero"/>
                    </svg>
                  </div>
                  <h4 className='my-6 mx-0 font-semibold text-base'>JavaScript</h4>
                  <p>
                    A little understanding of Javascript language for the needs of the website 
                    that I will run in the future, I am still in the learning stage for this.
                  </p>
              </div>
                <div className='py-12 px-7 text-center rounded-xl bg-purple-100 transition duration-300 ease-in-out hover:shadow-2xl'>
                  <div className='w-fit my-0 mx-auto py-4 px-5 rounded-lg bg-purple-200'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24">
                      <path d="M16.896 10l-4.896-8-4.896 8-7.104-4 3 11v5h18v-5l3-11-7.104 
                              4zm-11.896 10v-2h14v2h-14zm14.2-4h-14.4l-1.612-5.909 4.615 2.598 4.197-6.857 
                              4.197 6.857 4.615-2.598-1.612 5.909z" />
                    </svg>
                  </div>
                  <h4 className='my-6 mx-0 font-semibold text-base'>Bootstrap</h4>
                  <p>
                    In addition to TailwindCSS, I also understand a little bit about using another Framework, 
                    namely bootstrap, to make it easier for me to work on several projects.
                  </p>
              </div>
            </div>
          </div>
        </section>
        {/* END OF SKILLS */}

      {/* PORTOFOLIO START */}
        <section id="portofolio" className=' bg-purple-100 mt-20 md:mt-[30rem] lg:mt-96 md:py-10'>
          <div className="container"> 
            <div className='flex justify-center items-center'>
              <div className='w-full mt-10 md:mt-0 md:ml-1 lg:ml-8 xl:ml-0'>
                <h3 className='text-xl md:text-2xl text-slate-600'>--Portofolio:</h3>
                <h1 className='text-3xl md:text-4xl'>My Projects</h1>
              </div>
            </div>
            <div className="md:flex">
              <div className="w-full mt-10 lg:mx-8 xl:mx-0 md:w-1/2">
                <div className="bg-white rounded-xl px-4 overflow-hidden shadow-lg mb-10 transition duration-300 ease-in-out hover:shadow-2x">
                  <Image src={pp2} alt={'osis'} className='my-8 rounded-xl'></Image>
                </div>
            </div>
            <div className='w-full flex text-center md:text-left md:w-1/2'>
              <div className='flex-col md:w-[300px] lg:w-[400px] my-auto xl:w-full md:ml-6 xl:ml-12'>
                <h2 className="font-bold text-slate-950 text-2xl md:mb-[0.9rem] max-w-md justify-center lg:text-4xl">First Try Portofolio Website</h2>

                <p className="font-medium text-base mt-4 text-prf md:mb-[0.4rem] max-w-xl lg:text-lg"> 
                  This is my first website project, where this static website only uses 2 tools, namely HTML and CSS 
                  and also this website still uses the basic syntax syntax of the two tools I mentioned.
                </p>
                <button className='text-base mt-6 font-medium text-white py-2 px-5 border-solid bg-icon rounded-lg
                    hover:bg-violet-700 transition duration-300 ease-in-out hover:shadow-lg'><a href="" target="_blank" className='flex items-center'>See Project</a></button>
              </div>
              </div>
            </div>
            <div className="md:flex">
              <div className="w-full mt-10 lg:mx-8 xl:mx-0 md:w-1/2">
                <div className="bg-white rounded-xl px-4 overflow-hidden shadow-lg mb-10 transition duration-300 ease-in-out hover:shadow-2x">
                  <Image src={pp1} alt={'osis'} className='my-8 rounded-xl'></Image>
                </div>
            </div>
            <div className='w-full flex text-center md:text-left md:w-1/2'>
              <div className='flex-col md:w-[300px] lg:w-[400px] my-auto xl:w-full md:ml-6 xl:ml-12'>
                <h2 className="font-bold text-slate-950 text-2xl md:mb-[0.9rem] max-w-md justify-center lg:text-4xl">Second Website Portfolio</h2>

                <p className="font-medium text-base mt-4 text-prf md:mb-[0.4rem] max-w-xl lg:text-lg"> 
                  In my second project, I have started using advanced syntax in the process of making it, and 
                  in this project I made a case like making a website for my client and had to match his request.
                </p>
                <button className='text-base mt-6 font-medium text-white py-2 px-5 border-solid bg-icon rounded-lg
                    hover:bg-violet-700 transition duration-300 ease-in-out hover:shadow-lg'><a href="" target="_blank" className='flex items-center'>See Project</a></button>
              </div>
              </div>
            </div>
            <div className="md:flex">
              <div className="w-full mt-10 lg:mx-8 xl:mx-0 md:w-1/2">
                <div className="bg-white rounded-xl px-4 overflow-hidden shadow-lg mb-10 transition duration-300 ease-in-out hover:shadow-2x">
                  <Image src={pp4} alt={'osis'} className='my-8 rounded-xl'></Image>
                </div>
            </div>
            <div className='w-full flex text-center md:text-left md:w-1/2'>
              <div className='flex-col md:w-[300px] lg:w-[400px] my-auto xl:w-full md:ml-6 xl:ml-12'>
                <h2 className="font-bold text-slate-950 text-2xl md:mb-[0.9rem] max-w-md justify-center lg:text-4xl">Mini Game Projects</h2>

                <p className="font-medium text-base mt-4 text-prf md:mb-[0.4rem] max-w-xl lg:text-lg"> 
                  In this project, I took part in making a game using scratch to hone 
                  basic logic and learn to face problems and come up with solutions to these problems.
                </p>
                <button className='text-base mt-6 font-medium text-white py-2 px-5 border-solid bg-icon rounded-lg
                    hover:bg-violet-700 transition duration-300 ease-in-out hover:shadow-lg'><a href="https://scratch.mit.edu/projects/939327427" target="_blank" className='flex items-center'>See Project</a></button>
              </div>
              </div>
            </div>
            <div className="md:flex">
              <div className="w-full mt-10 lg:mx-8 xl:mx-0 md:w-1/2">
                <div className="bg-white rounded-xl px-4 overflow-hidden shadow-lg mb-10 transition duration-300 ease-in-out hover:shadow-2x">
                  <Image src={pp3} alt={'osis'} className='my-8 rounded-xl'></Image>
                </div>
            </div>
            <div className='w-full flex text-center md:text-left md:mt-6 lg:mt-11 xl:mt-20 md:w-1/2'>
              <div className='flex-col md:w-[300px] lg:w-[400px] my-auto xl:w-full md:ml-6 xl:ml-12'>
                <h2 className="font-bold text-slate-950 text-2xl md:mb-[0.9rem] max-w-md justify-center lg:text-4xl">Designing UI/UX with Figma</h2>

                <p className="font-medium text-base mt-4 text-prf md:mb-[0.4rem] max-w-xl lg:text-lg"> 
                  After the previous 2 projects, I also stepped into a more complex thing, where before I revised
                  my website portfolio, I first made the ui/ux design on an application software called figma.
                </p>
                <button className='text-base mt-6 font-medium text-white py-2 px-5 border-solid bg-icon rounded-lg
                    hover:bg-violet-700 transition duration-300 ease-in-out hover:shadow-lg mb-20'><a href="https://www.figma.com/file/64MSERMHKkzzvPWHYNuLUQ/Untitled?type=design&node-id=1%3A2&mode=design&t=u5hVcG0MOQ3iIkaA-1" target="_blank" className='flex items-center'>See Project</a></button>
              </div>
              </div>
            </div>
          </div> 
        </section>
      </main>
      <footer className='pt-8 pb-6 bg-ftrbg'>
        <div className="container">
          <div className="max-w-6xl">
            <div className="md:space-x-16 justify-between items-start md:flex w-full">
              <div className='w-full md:w-72 lg:w-1/2'>
                <h1 className="text-white text-[26px] w-full mb-1 font-bold">Altraa - Portofolio</h1>
                <hr className='mt-2 w-full'></hr>
                <nav className='flex mt-5 mb-8'>
                  <ul className='flex w-full lg:w-1/2 text-white md:justify-between space-x-6'>
                    <li className='hover:text-hover transition duration-300
                      ease-in-out'><a href="#">Home</a></li>
                    <li className='hover:text-hover transition duration-300
                      ease-in-out'><a href="#about">About</a></li>
                    <li className='hover:text-hover transition duration-300
                      ease-in-out'><a href="#skills">Skills</a></li>
                    <li className='hover:text-hover transition duration-300
                      ease-in-out'><a href="#portofolio">Portfolio</a></li>
                  </ul>
                </nav>
                <p className='text-secbg'>
                  Introducing, my name is Aldiansah Saputra, I am 17 years old, Muslim, born in Denpasar, 
                  November 26, 2006, and currently still living in Denpasar. I study at SMK Negeri 1 Denpasar 
                  majoring in Software Engineering, besides that I also take several other activities such 
                  as Paskibra and student council.
                </p>
                <br></br>
                <p className='text-secbg hidden lg:flex'>
                  This is my Portotfolio Website, i created this website with the aim of making it easier 
                  for website visitors to find out things about me, starting from my activities and projects.
                  Want to know more? visit my social media!!
                </p>
              </div>
              <div className="w-full mt-5 space-y-8 md:space-y-0 md:justify-between md:flex md:w-[400px] md:mt-16">
                <div className="info">
                  <h6 className='text-xl text-white font-semibold mb-6'>Information</h6>
                    <ul className='text-gray mt-[30px] space-y-5'>
                      <li className='hover:underline flex space-x-2 text-secbg'>
                      <Image src={ft1} width={25} height={25} /> <a href="https://wa.me/+6289680854445" target='_blank'>+6289680854445</a></li>
                      <li className='hover:underline flex space-x-3 text-secbg'>
                      <Image src={ft2} width={25} height={25} /> <a target='_blank'>aldimks7464@gmail.com</a> </li>
                      <li className='hover:underline flex space-x-3 text-secbg'>
                      <Image src={ft5} width={25} height={25} /> <a href="https://www.smkn1denpasar.sch.id/" target='_blank'>SMK Negeri 1 Denpasar</a> </li>
                      <li className='hover:underline flex space-x-3 text-secbg'>
                      <Image src={ft3} width={25} height={25} /> <a target='_blank'>Jln. A. Yani Utara</a> </li>
                      <li className='hover:underline flex space-x-3 text-secbg'>
                      <Image src={ft4} width={25} height={25} /> <a target='_blank'>Denpasar - Bali, Indonesia </a></li>
                    </ul>
                </div>
                <div className="social">
                  <h6 className='text-xl text-white font-semibold mb-6'>Social Media</h6>
                    <ul className='text-gray space-y-5'>
                      <li className='hover:underline flex space-x-4 text-secbg'>
                      <Image src={ft6} width={25} height={25} /> <a href="https://www.instagram.com/sputra712._?igshid=YzAwZjE1ZTI0Zg==" target='_blank'>Instagram </a></li>
                      <li className='hover:underline flex space-x-4 text-secbg'>
                      <Image src={ft7} width={25} height={25} /> <a href="https://github.com/Altraaa" target='_blank'>Github</a></li>
                      <li className='hover:underline flex space-x-4 text-secbg' target='_blank'>
                      <Image src={ft8} width={25} height={25} /> <a href="#">Vercel</a></li>
                      <li className='hover:underline flex space-x-4 text-secbg' target='_blank'>
                      <Image src={ft9} width={25} height={25} /> <a href="https://x.com/Karlfreyy_?t=1WBSWFtOCylOr4m63bLTqw&s=08" target='_blank'>Twitter</a></li>
                      <li className='hover:underline flex space-x-4 text-secbg'>
                      <Image src={ft10} width={25} height={25} /> <a href="https://www.facebook.com/aldiansah.saputra.353?mibextid=ZbWKwL" target='_blank'>Fcebook</a></li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className='h-[2px] w-full bg-g mt-16'/>
          <div className="flex mt-5 justify-between items-start text-base text-white">
            <small>Design and develop by <span className='text-hover'>Altraa</span></small>
            <small className='flex space-x-2 items-center'>Copyright - 2023</small>
          </div>
        </div>
      </footer>
    </>
  )
}
