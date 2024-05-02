import SobreItens from "../SobreItens/SobreItens"

const Sobre = () => {
         
    // criando array de objetos
        const data = [
            {
                idade: 21 + ' anos',
                nome: 'Felipe Ferreira',
                instituicao:'FIAP',
                detalhes: '  Sou fascinado pelo universo da tecnologia. O que eu mais gosto é a área de Front-End Development. Trabalhar com a criatividade, diversidade de pensamento e em equipe faz parte do meu perfil profissional.'
            },
            {
                idade: 20 + ' anos',
                nome: 'Gilson Dias',
                instituicao:'FIAP',
                detalhes: '  Estudante de engenharia de software na FIAP. Amo tecnologia, principalmente aquelas que causam impacto por serem diferentes e inusitadas. Sou organizado e dedicado no que proponho fazer, além de responsável e empático.'
            },
            {
                idade: 18 + ' anos',
                nome: 'Gustavo Bezerra',
                instituicao:'FIAP',
                detalhes: '  Estudante de engenharia de software na FIAP. Entusiasta da tecnologia, amo e gosto de aprender tudo relacionado a tecnologia. Além disso, sou dedicado em tudo em que faço, principalmente ligado ao que amo!'
            },

        ]

    return(
        <div id='sobre' className=" flex flex-col items-center justify-center m-w-[1040px] m:auto md:pl-20 p-4 py-16"> 
            <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-8 ">Quem somos</h1>

            {data.map((item,id) => (
                <SobreItens key={id} idade={item.idade} nome={item.nome} instituicao={item.instituicao} detalhes={item.detalhes}/>
        ))}
        </div>
       
    );
}
export default Sobre