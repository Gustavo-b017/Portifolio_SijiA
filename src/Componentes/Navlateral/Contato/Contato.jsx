
const Contato = () => {
    return(
        <div id='contato' className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 ">
            <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">Contato</h1>
            <form action="">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className="flex flex-col">
                        <label className="uppercase py-2 text-sm">Nome</label>
                        <input className="border-2 rounded-lg p-3 flex border-gray-400" type="text" name="nome" />
                    </div>
                    <div className="flex flex-col"> 
                        <label className="uppercase py-2 text-sm">Telefone</label>
                        <input className="border-2 rounded-lg p-3 flex border-gray-400"  type="text" name="telefone" />
                    </div>
                </div>
                <div className="flex flex-col py-2">
                    <label className="uppercase py-2 text-sm">E-mail</label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-400"  type="email" name='email' />
                </div>
                <div className="flex flex-col py-2">
                    <label className="uppercase py-2 text-sm">Assunto</label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-400" type="email" name='email' />
                </div>
                <div className="flex flex-col py-2" >
                    <label className="uppercase py-2 text-sm">Mensagem</label>
                    <textarea className="border-2 rounded-lg p-3 flex border-gray-400" rows='10' name='mensagem' />
                </div>
                <button className="border-none py-4 px-2 bg-[#001b5e] text-white text-lg mt-4 w-full rounded-lg ">Enviar mensagem</button>
            </form>
        </div>
    );
}
export default Contato