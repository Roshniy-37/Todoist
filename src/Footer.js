export default function Footer(){
    return(
        <>
    <div class="container" className="bg-black relative flex items-center min-h-[40vh] w-[100%]">
      <div>
        <div>
          <div>
            <div>
              <h3 className='font-sans text-[2.3rem]'>Get updates of all your ToDos.</h3>
              <form action="" classname='flex items-center justify-between'>
                <input className="px-[0.75rem]" type="text" placeholder="Email Address" />
                <button>
                </button>
              </form>
            </div>
          </div>

          <div>
            <nav >
              <h4>Resources</h4>
              <ul classname='list-none p-0'>
                <li>
                  <a href="" className='text-white inline-flex my-0.5'>Download Apps</a>
                </li>

                <li>
                  <a href="" className='text-white inline-flex my-0.5'>Productivity Methods</a>
                </li>

                <li>
                  <a href="" className='text-white inline-flex my-0.5'>Help Center</a>
                </li>
    
              </ul>
            </nav>

          </div>

          <div>
            <nav>
              <h4>Company</h4>
              <ul>

                <li>
                  <a href=" " className='text-white inline-flex my-0.5'>About US</a>
                </li>

                <li>
                  <a href=" " className='text-white inline-flex my-0.5'>Careers</a>
                </li>

                <li>
                  <a href=" " className='text-white inline-flex my-0.5'>Inspiration Hub</a>
                </li>

              </ul>
            </nav>

          </div>
        </div>
        <div>
          <div>
            <ul>
              <li>
                <a href="#" className='text-white inline-flex my-0.5'>
                  
                </a>
              </li>
              <li>
                <a href="#" className='text-white inline-flex my-0.5'>
                 
                </a>
              </li>
              <li>
                <a href="#" className='text-white inline-flex my-0.5'>
                 
                </a>
              </li>
            </ul>
          </div>
          <div class="layout_item w-25" className='justify-center items-center flex'>
            
          </div>
        </div>
      </div>
    <div className="text-white">
      <p>&copy; 2024 Todoist</p>
    </div>
  </div>
  </>
    )
}