import {
    Container
} from '@chakra-ui/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useRef } from 'react';
import Bg1 from '../../../assets/1.webp';
import Bg2 from '../../../assets/2.webp';
import Bg3 from '../../../assets/3.webp';
import Bg4 from '../../../assets/4.webp';
import Bg5 from '../../../assets/5.webp';
import Bg6 from '../../../assets/6.webp';
import Bg7 from '../../../assets/7.webp';
import Bg8 from '../../../assets/8.webp';
import BgHome from '../../../assets/bgHome.png';
import ScrollToTopButton from '../../../layouts/ScrollToTo';
import { FooterApp } from '../../footer/Fotter';
import { Navbar } from '../../navBar/Navbar';

export const HomePage = () => {
    const divStyle = {
        width: '100%',
        height: '600px',
        backgroundImage: `url(${BgHome})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };

    useEffect(() => {
        AOS.init({
            duration: 2000, // Durée des animations en ms
        });
    }, []);

    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);

    const scrollToSection = (sectionId) => {
        const sectionRefs = {
            section1: section1Ref,
            section2: section2Ref,
            section3: section3Ref,
        };

        sectionRefs[sectionId].current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <Navbar scrollToSection={scrollToSection} />
            <Container fluid sx={{ height: 100 }} centerContent>
                <div className=" p-2 lg:grid grid-cols-2 grid-rows-1 gap-2" style={divStyle}>
                    {/* <img src={BgHome} alt='toto' /> */}
                    <div className=" text-center text-5xl py-4 rounded-1g col-2">
                        <img data-aos="fade-right" className="w-full sm:w-100" src='https://www.adobe.com/fr/express/feature/image/remove-background/media_1a81fd77c25237c3aaaca8cf61e3a2ade6adc271e.png?width=750&format=png&optimize=medium' alt='toto' />
                    </div>
                    <div className="flex flex-col space-y-5  text-black text-center text-4xl py-4 rounded-1g col-2  items-center justify-center">
                        <p data-aos="fade-left" className="text-4xl text-gray-900">
                            <span>C'ommuniquer. <br /> Collaborer. Créer.</span><br />
                            {/* <span className='mt-20'>C'est Nou fournit un moyen efficace et<br /> puissant de gérer vos projets.</span> */}
                        </p>
                        <p data-aos="fade-right">C'est nous fournir un moyen efficace et <br /> puissant de gérer vos projets.</p>
                        <button data-aos="fade-down" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Bien Commencer
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </button>
                        <div>
                            <div className="flex space-x-4 ...">

                                <div>
                                    <div className='bg-violet-500 justify-center rounded-lg py-2'>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-bag-dash text-white text-center" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5" />
                                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                                        </svg>
                                    </div>
                                    <div data-aos="fade-down">01</div>
                                </div>
                                <div>
                                    <div className='bg-violet-500 justify-center rounded-lg py-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-clipboard2-pulse  text-white text-center" viewBox="0 0 16 16">
                                            <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5z" />
                                            <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z" />
                                            <path d="M9.979 5.356a.5.5 0 0 0-.968.04L7.92 10.49l-.94-3.135a.5.5 0 0 0-.926-.08L4.69 10H4.5a.5.5 0 0 0 0 1H5a.5.5 0 0 0 .447-.276l.936-1.873 1.138 3.793a.5.5 0 0 0 .968-.04L9.58 7.51l.94 3.135A.5.5 0 0 0 11 11h.5a.5.5 0 0 0 0-1h-.128z" />
                                        </svg>
                                    </div>
                                    <div data-aos="fade-down">02</div>
                                </div>
                                <div>
                                    <div className='bg-violet-500 justify-center rounded-lg py-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-headset text-white text-center" viewBox="0 0 16 16">
                                            <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5" />
                                        </svg>
                                    </div>
                                    <div data-aos="fade-down">03</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/**section detail */}
                <Container fluid className='container mx-auto bg-amber-400 mt-60'>
                    <div className="lg:grid grid-cols-2 grid-rows-1 gap-2 " ref={section1Ref}>
                        {/* <img src={BgHome} alt='toto' /> */}
                        <div className=" text-center text-justify-end text-5xl py-24 rounded-1g col-2">
                            <p data-aos="fade-right">
                                Avec le bon logiciel, <br />de grandes choses <br /> peuvent se produire.
                            </p>
                        </div>

                        <div className="flex flex-col space-y-5  text-black text-center text-4xl py-4 rounded-1g col-2  items-center justify-center">
                            <p data-aos="fade-left" style={{ width: '80%' }} className="text-base text-justify text-gray-900 dark:text-white">
                                <span >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel error optio ab atque autem labore necessitatibus rerum dolore praesentium quos doloribus pariatur blanditiis, esse maiores libero repudiandae, non ullam ipsum!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel error optio ab atque autem labore necessitatibus rerum dolore praesentium quos doloribus pariatur blanditiis, esse maiores libero repudiandae, non ullam ipsum!
                                </span>
                            </p>

                        </div>
                    </div>
                </Container>

                {/**section offre */}
                <Container fluid className='container mx-auto'>
                    <div ref={section2Ref} className=" mt-6 lg:grid grid-cols-1 grid-rows-1 gap-0 ml-50" style={{ marginLeft: '10%', width: '50%' }}>
                        <div className="  text-base py-24 rounded-1g col-1" >
                            <h2 className='text-5xl' data-aos='fade-right'>Notre offre</h2>
                            <p className='mt-6'>
                                Paragraphe. Vous pouvez le modifier et ajouter votre texte. <br /> Double-cliquez ici ou cliquez sur « Modifier le texte » pour ajouter votre<br /> contenu et personnaliser la police.
                            </p>
                        </div>
                    </div>
                </Container>

                {/**section offre */}
                <Container fluid className='container mx-auto '>
                    <div className=" p-2 lg:grid grid-cols-4 grid-rows-1 gap-2 " style={{ marginLeft: '10%', width: '80%' }}>
                        <div className=" text-center text-5xl py-4 rounded-1g col-2">
                            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                                </a>
                                <div class="p-5">
                                    <a href="#">
                                        <h5 class="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                    </a>
                                    <p class="mb-3 text-base font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    <a data-aos="fade-down-left" href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Read more
                                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className=" text-center text-5xl py-4 rounded-1g col-2">
                            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                                </a>
                                <div class="p-5">
                                    <a href="#">
                                        <h5 class="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                    </a>
                                    <p class="mb-3 text-base font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    <a href="#" data-aos="fade-down-left" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Read more
                                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className=" text-center text-5xl py-4 rounded-1g col-2">
                            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                                </a>
                                <div class="p-5">
                                    <a href="#">
                                        <h5 class="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                    </a>
                                    <p class="mb-3 text-base font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    <a href="#" data-aos="fade-down-left" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Read more
                                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className=" text-center text-5xl py-4 rounded-1g col-2">
                            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                                </a>
                                <div class="p-5">
                                    <a href="#">
                                        <h5 class="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                    </a>
                                    <p class="mb-3 text-base font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    <a href="#" data-aos="fade-down-left" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Read more
                                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </Container>

                <Container fluid className='container mx-auto '>
                    <div className=" p-2 lg:grid grid-cols-2 grid-rows-1 gap-2" >
                        {/* <img src={BgHome} alt='toto' /> */}
                        <div className=" text-center text-5xl py-4 rounded-1g col-2">
                            <img data-aos="fade-right" className="w-full sm:w-100" src='https://img.freepik.com/free-vector/woman-working-using-laptop-flat-design_1308-96714.jpg' alt='toto' />
                        </div>
                        <div className="flex flex-col space-y-5  text-black text-center text-4xl py-4 rounded-1g col-2  items-center justify-center">
                            <p data-aos="fade-left" className="text-4xl text-gray-900 dark:text-white">
                                <span> Construit pour et par les créatifs</span><br />
                                {/* <span className='mt-20'>C'est Nou fournit un moyen efficace et<br /> puissant de gérer vos projets.</span> */}
                            </p>
                            <p data-aos="fade-right" className='text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel error optio ab atque autem labore necessitatibus rerum dolore praesentium quos doloribus pariatur blanditiis, esse maiores libero repudiandae, non ullam ipsum!</p>
                            <button data-aos="fade-down" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Decouvir
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </Container>

                <Container fluid className='container mx-auto  bg-pink-50'>
                    <div className='grid justify-center py-20'>
                        <h2 className='text-3xl'>Leadership établi dans l'industrie</h2>
                        <div>
                            <p className='justify-center py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel error optio ab atque autem labore necessitatibus rerum<br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel error optio ab atque autem labore necessitatibus rerum</p>
                        </div>
                    </div>
                    <div className=" p-2 lg:grid grid-cols-4 grid-rows-1 gap-2 " style={{ marginLeft: '15%', width: '80%' }}>
                        <div data-aos='fade-down' className=" text-center text-5xl py-4 rounded-1g col-2">
                            <img class="rounded-t-lg" src={Bg1} alt="" />
                        </div>
                        <div data-aos='fade-down' className=" text-center text-5xl py-4 rounded-1g col-2">
                            <img class="rounded-t-lg" src={Bg2} alt="" />
                        </div>

                        <div data-aos='fade-down' className=" text-center text-5xl py-4 rounded-1g col-2">
                            <img class="rounded-t-lg" src={Bg3} alt="" />
                        </div>

                        <div data-aos='fade-down' className=" text-center text-5xl py-4 rounded-1g col-2">
                            <img class="rounded-t-lg" src={Bg4} alt="" />
                        </div>
                    </div>
                    <div className=" p-2 lg:grid grid-cols-4 grid-rows-1 gap-2 " style={{ marginLeft: '15%', width: '80%' }}>
                        <div data-aos='fade-up' className=" text-center text-5xl py-4 rounded-1g col-2">
                            <img class="rounded-t-lg" src={Bg5} alt="" />
                        </div>
                        <div data-aos='fade-up' className=" text-center text-5xl py-4 rounded-1g col-2">
                            <img class="rounded-t-lg" src={Bg6} alt="" />
                        </div>
                        <div data-aos='fade-up' className=" text-center text-5xl py-4 rounded-1g col-2">
                            <img class="rounded-t-lg" src={Bg7} alt="" />
                        </div>
                        <div data-aos='fade-up' className=" text-center text-5xl py-4 rounded-1g col-2">
                            <img class="rounded-t-lg" src={Bg8} alt="" />
                        </div>

                    </div>
                </Container>

                <Container fluid className='container mx-auto  bg-white'>
                    <div className='grid justify-center py-20'>
                        <h2 data-aos='fade-down-right' className='text-3xl'>
                            Témoignages de nos clients</h2>
                    </div>
                    <div className=" p-2 lg:grid grid-cols-4 grid-rows-1 gap-2 " style={{ marginLeft: '10%', width: '80%' }}>
                        <div data-aos='fade-down' className=" text-center text-5xl py-4 rounded-1g col-2">
                            <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div class="flex flex-col items-center pb-10 py-9 ">
                                    <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" />
                                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                                    <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                                    <blockquote class="text-xl italic font-semibold text-gray-900 text-base">
                                        <p>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard."</p>
                                    </blockquote>
                                    <div class="flex mt-4 md:mt-6">
                                        <a href="#" class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Message</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-aos='fade-up' className=" text-center text-5xl py-4 rounded-1g col-2">
                            <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div class="flex flex-col items-center pb-10 py-9 ">
                                    <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://images.unsplash.com/photo-1623230590824-f39e31a0a608?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwYm95fGVufDB8fDB8fHww" alt="Bonnie image" />
                                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                                    <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                                    <blockquote class="text-xl italic font-semibold text-gray-900 text-base">
                                        <p>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard."</p>
                                    </blockquote>
                                    <div class="flex mt-4 md:mt-6">
                                        <a href="#" class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Message</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-aos='fade-down' className=" text-center text-5xl py-4 rounded-1g col-2">
                            <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div class="flex flex-col items-center pb-10 py-9 ">
                                    <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://flowbite.com/docs/images/people/profile-picture-4.jpg" alt="Bonnie image" />
                                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                                    <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                                    <blockquote class="text-xl italic font-semibold text-gray-900 text-base">
                                        <p>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard."</p>
                                    </blockquote>
                                    <div class="flex mt-4 md:mt-6">
                                        <a href="#" class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Message</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-aos='fade-up' className=" text-center text-5xl py-4 rounded-1g col-2">
                            <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div class="flex flex-col items-center pb-10 py-9 ">
                                    <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://w0.peakpx.com/wallpaper/349/544/HD-wallpaper-anime-boy-japan.jpg" alt="Bonnie image" />
                                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                                    <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                                    <blockquote class="text-xl italic font-semibold text-gray-900 text-base">
                                        <p>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard."</p>
                                    </blockquote>
                                    <div class="flex mt-4 md:mt-6">
                                        <a href="#" class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Message</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>

                <Container fluid className='container mx-auto  bg-zinc-100'>
                    <div className=" p-2 lg:grid grid-cols-2 grid-rows-1 gap-2  " style={{ marginLeft: '10%', width: '80%' }}>
                        <div className=" text-center text-5xl py-14 rounded-1g col-2">
                            <div className='flex flex-col space-y-5 py-6 mt-20'>
                                <h2 data-aos="fade-up" className='text-3xl justify-end'>Explorez nos plans tarifaires</h2>
                                <div>
                                    <p className='text-base'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel error optio ab atque autem labore necessitatibus rerum dolore praesentium quos doloribus pariatur blanditiis, esse maiores libero repudiandae, non ullam ipsum!
                                    </p>
                                    <button data-aos="fade-down" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Bien Commencer
                                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className=" text-center text-5xl py-4 rounded-1g col-2">
                            <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                                <h5 data-aos="fade-down" class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Standard plan</h5>
                                <div class="flex items-baseline text-gray-900 dark:text-white">
                                    <span class="text-3xl font-semibold">$</span>
                                    <span class="text-5xl font-extrabold tracking-tight">49</span>
                                    <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                                </div>
                                <ul role="list" class="space-y-5 my-7">
                                    <li class="flex items-center">
                                        <svg class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">2 team members</span>
                                    </li>
                                    <li class="flex">
                                        <svg class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">20GB Cloud storage</span>
                                    </li>
                                    <li class="flex">
                                        <svg class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Integration help</span>
                                    </li>
                                    <li class="flex line-through decoration-gray-500">
                                        <svg class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">Sketch Files</span>
                                    </li>
                                    <li class="flex line-through decoration-gray-500">
                                        <svg class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">API Access</span>
                                    </li>
                                    <li class="flex line-through decoration-gray-500">
                                        <svg class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">Complete documentation</span>
                                    </li>
                                    <li class="flex line-through decoration-gray-500">
                                        <svg class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">24×7 phone & email support</span>
                                    </li>
                                </ul>
                                <button data-aos="fade-up" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-full text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
                            </div>
                        </div>
                    </div>
                </Container>

                <Container fluid className='container mx-auto  bg-white'>
                    <div className=" lg:grid grid-cols-1 grid-rows-1 gap-2  " style={{ marginLeft: '10%', width: '80%' }}>
                        <div className=" text-center text-5xl py-3 rounded-1g col-1">
                            <div className='flex flex-col space-y-5 py-3 mt-20'>
                                <h2 data-aos="fade-up" className='text-3xl justify-end'>
                                    Maximisez votre productivité grâce à <br />nos solutions de flux de travail
                                </h2>
                                <div>
                                    <p className='text-base'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel error optio ab atque autem labore necessitatibus rerum dolore praesentium quos doloribus pariatur blanditiis, esse maiores libero repudiandae, non ullam ipsum!
                                    </p>
                                    <button data-aos="fade-down" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Bien Commencer
                                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>

                <Container fluid className='container mx-auto  bg-white'>
                    <div className=" lg:grid grid-cols-1 grid-rows-1 gap-2  " style={{ marginLeft: '20%', width: '80%' }}>
                        <div className=" text-center  text-5xl py-3 rounded-1g col-1">
                            <img className='justify-center' src='https://miro.medium.com/v2/resize:fit:828/format:webp/1*dAUQyduWpIm9OKTtPCqAAA.jpeg' alt='..' />
                        </div>
                    </div>
                </Container>

                <Container fluid className='container mx-auto  bg-white'>
                    <div ref={section3Ref}>
                        <FooterApp />
                    </div>
                </Container>
            </Container >

            < ScrollToTopButton />
        </>
    );
};