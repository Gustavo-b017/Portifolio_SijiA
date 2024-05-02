
const Footer = () => {
    return(
        <div className="w-full bg-[#001b5e] p-5 items-center justify-center">
            <ul className="flex items-center justify-center gap-5">
                <li className="flex items-start justify-space-between gap-2" >
                    <a className="text-white cursor-pointer text-lg">Felipe Ferreira</a>
                    <a href="https://github.com/Defelopers">
                    <img className="w-[35px] rounded-50 cursor-pointer" src='/src/assets/social.png' alt="" />
                    </a>
                </li>
                <li className="flex items-start justify-space-between gap-2">
                    <a className="text-white cursor-pointer text-lg">Gilson Dias</a>
                    <a href="https://github.com/G1lsJn">
                    <img className="w-[35px] rounded-50" src='/src/assets/social.png' alt="" />
                    </a>
                </li>
                <li  className="flex items-start justify-space-between gap-2">
                    <a className="text-white cursor-pointer text-lg">Gustavo Bezerra</a>
                    <a href="https://github.com/Gustavo-b017">
                    <img className="w-[35px] rounded-50" src='/src/assets/social.png' alt="" />
                    </a>
                </li>
            </ul>


            <h1 className=" flex items-center justify-center text-white mt-8">@Copyright Todos os direitos reservados</h1>
        </div>
    );
}
export default Footer