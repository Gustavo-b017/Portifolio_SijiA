import ProjetoItem from "../ProjetoItem/ProjetoItem"
import icrImg from "/src/assets/icr-img.jpg"
import airbnbImg from "/src/assets/airbnb.png"

const Projetos = () => {
    return(
      <div id='projeto' className="max-w-[1040] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl font-bold text-center text-[black]">Projetos</h1>
        <p className=" py-8 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            In at sequi quos laudantium error quam repellendus cum doloremque, 
            minima iure veniam distinctio? 
            Consequatur quas eum laborum placeat ab nisi temporibus!</p>
        
        <div className="grid sm:grid-cols-2 gap-12">
            <ProjetoItem img={icrImg} title='Solução web para o Icr'/>
            <ProjetoItem img={airbnbImg} title=' Página web do Airbnb'/>
        </div>

      </div>
    );
}
export default Projetos