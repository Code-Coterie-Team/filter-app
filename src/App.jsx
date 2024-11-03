import { useState } from "react";

const App = () =>{
  return(
    <div className="flex py-10 px-40 gap-5">
      <div className="flex flex-col gap-4">
        <input type="search" name="search" id="search" placeholder="search..."
         className="bg-gray-200 py-1 px-2 rounded-md" />
         <div className="flex flex-col gap-2">
          <span className="text-sm font-medium">Company</span>
          <ul className="flex flex-col gap-3 text-gray-500 text-sm">
            <li><button>All</button></li>
            <li><button>Ikea</button></li>
            <li><button>Marcos</button></li>
            <li><button>Caressa</button></li>
            <li><button>Liddy</button></li>
          </ul>
         </div>
      </div>
      <div className="grid grid-cols-3 grid-rows-4">
        <div className="flex flex-col gap-2 ">
          <img src="/product-1.jpeg" alt="" className="rounded-sm h-40 w-72"/>
          <footer className="flex flex-col gap-2 text-center">
            <span className="text-gray-500 text-sm">High-back bench</span>
            <span className="text-sm font-bold">9.99</span>

          </footer>
        </div>

      </div>
    </div>

  )
}


export default App;