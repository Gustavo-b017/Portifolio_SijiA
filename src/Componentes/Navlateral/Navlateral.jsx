import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from 'react-icons/ai'
import {BsPerson } from 'react-icons/bs'
import { Link } from 'react-router-dom'




const Navlateral = () => {

    const [nav,setNav] = useState(false)
     // função para mudar o estado da barra de navegação
    const handleNav = () => {
        setNav(!nav) // mudar a nav para o oposto do valor atual
        console.log('Estado mudado')
    }

    return(
        <div>
            {/*Ícone do menu de navegação*/} {/*estilo para mudar a posição do icone do menu . md - media query for mobile*/}
            <AiOutlineMenu size={30} onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden cursor-pointer'/>
            {   
                // Se o estado é true , vai mostrar na tela
                nav ? (
                    // h-screen é a mesma coisa de 100vh . Background white com 90 de opacidade
                    <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                                                                                           {/*Border-radius, shadow-large, margin:8px , padding: 16px*/}
                        <a onClick={handleNav} href="#main" className ='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineHome size={20}/>
                            <span className='pl-4'>Home</span>
                        </a>
                        
                        <a onClick={handleNav} href="#sobre" className ='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <BsPerson size={20}/>
                            <span className='pl-4'>Sobre</span>
                        </a>
                        <a onClick={handleNav} href="#projeto" className ='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineProject size={20}/>
                            <span className='pl-4'>Projetos</span>
                        </a>
                        <a onClick={handleNav} href="#contato" className ='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineMail size={20}/>
                            <span className='pl-4'>Contato</span>
                        </a>
                    </div>
                )
                // Se o estado não for true não mostrará na tela
                : (
                    ''
                )
            }

            <div className='md:block hidden fixed top-[25%] z-10'>
                <div className='flex flex-col '>
                    <Link to='/'>
                        <a href="#main" className=' flex items-center gap-5 justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-90 ease-in duration-300 '>
                            <AiOutlineHome size={20} className=''/>
                            <h1>Home</h1>
                        </a>
                    </Link>
                    
                    <Link to='/Projetos'>     
                        <a href="#" className='  flex items-center gap-5 rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-90 ease-in duration-300 '>
                            <BsPerson size={20} className=''/>
                            <h1>Sobre</h1>
                        </a>
                    </Link>
                    
                    <Link to='/Contato'>
                        <a href="#" className='  flex items-center gap-5 rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-90 ease-in duration-300 '>
                            <AiOutlineMail size={20} className=''/>
                            <h1>Contato</h1>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Navlateral