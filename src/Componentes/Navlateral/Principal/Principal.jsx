import { TypeAnimation } from 'react-type-animation'
import Sobre from '../Sobre/Sobre';
const Principal = () => {
    return (
        <div>
            
        <div id='main'>
            <img className="  w-full h-screen object-cover" src="/public/imagens/main-img.jpg" alt="" />
            <div className=" flex items-center justify-center w-full h-screen absolute top-0 left-0 bg-white/55  ">
                <div className='max-w-[700px] m:auto h-full w-full flex flex-col justify-center items-center'>
                    <h1 className='sm:text-7xl text-6xl font-bold text-gray-800'>Sijia</h1>
                    <h2 className='flex gap-5 sm:text-3xl text-2xl pt-8 text-gray-700 '>
                    
                    <TypeAnimation
                        sequence={[
                           
                            'Somos Engenheiros',
                            1000, 
                            'Designers',
                            1000,
                            'Gestores',
                            1000,
                            'Storytellers',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '2em', display: 'flex' }}
                        repeat={Infinity}
                    />
                    </h2>
                
                </div>
            </div>
        </div>

        <Sobre/>
        </div>
    );
}
export default Principal