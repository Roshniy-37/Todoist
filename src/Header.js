import Logo from './Logo.png'
export default function Header(){
    return(
        <>
        <div className='flex justify-center items-center bg-zinc-950'>
            <img src={Logo} className='w-[15vh] h-[15vh]'></img>
            <div className="justify-center items-center flex text-[10vh] px-[25vh] text-white font-bold">ToDoist</div>
            <div className='border-white border-solid'>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold w-20 py-2 rounded font-sans'>Sign In</button>
            </div>
        </div>
        </>
    )
}
