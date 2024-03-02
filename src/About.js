import todo from './To-do.jpeg'
export default function About(){
    return(
        <>
       <div className=" flex-col justify-center items-center text-white">
       <div className="bg-cover bg-center h-[80vh] w-100 backdrop-brightness-0" style={{backgroundImage: "url('https://images.unsplash.com/photo-1517404215738-15263e9f9178')"}}>
            <div className="text-[5vh] font-bold px-[20vh]">About My To-do</div>
            <div className="text-[3vh] font-bold px-[20vh]">Organize your work and life, finally.</div>
            <div className="text-[2vh] font-bold px-[20vh]">Become focused, organized, and calm with Todoist. The world’s #1 task manager and to-do list app.</div>
       </div>
       </div>
        </>
    )
}