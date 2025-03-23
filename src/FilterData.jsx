import { useState } from 'react'

function FilterData() {
    const [filterValue,setFilterValue] = useState("All")
    const [search,setSearch] = useState("")
    const [product,setProduct] = useState( [
      {
        id: 'rec43w3ipXvP28vog',
        title: 'high-back bench',
        company: 'ikea',
        image: 'https://course-api.com/images/store/product-1.jpeg',
        price: 9.99,
      },
      {
        id: 'rec4f2RIftFCb7aHh',
        title: 'albany table',
        company: 'marcos',
        image: 'https://course-api.com/images/store/product-2.jpeg',
        price: 79.99,
      },
      {
        id: 'rec8kkCmSiMkbkiko',
        title: 'accent chair',
        company: 'caressa',
        image: 'https://course-api.com/images/store/product-3.jpeg',
        price: 25.99,
      },
      {
        id: 'recBohCqQsot4Q4II',
        title: 'wooden table',
        company: 'caressa',
        image: 'https://course-api.com/images/store/product-4.jpeg',
    
        price: 45.99,
      },
      {
        id: 'recDG1JRZnbpRHpoy',
        title: 'dining table',
        company: 'caressa',
        image: 'https://course-api.com/images/store/product-5.jpeg',
    
        price: 6.99,
      },
      {
        id: 'recNWGyP7kjFhSqw3',
        title: 'sofa set',
        company: 'liddy',
        image: 'https://course-api.com/images/store/product-6.jpeg',
        price: 69.99,
      },
      {
        id: 'recZEougL5bbY4AEx',
        title: 'modern bookshelf',
        company: 'marcos',
        image: 'https://course-api.com/images/store/product-7.jpeg',
        price: 8.99,
      },
      {
        id: 'recjMK1jgTb2ld7sv',
        title: 'emperor bed',
        company: 'liddy',
        image: 'https://course-api.com/images/store/product-8.jpeg',
        price: 21.99,
      },
      {
        id: 'recmg2a1ctaEJNZhu',
        title: 'utopia sofa',
        company: 'marcos',
        image: 'https://course-api.com/images/store/product-9.jpeg',
        price: 39.95,
      },
      {
        id: 'recvKMNR3YFw0bEt3',
        title: 'entertainment center',
        company: 'liddy',
        image: 'https://course-api.com/images/store/product-10.jpeg',
        price: 29.98,
      },
      {
        id: 'recxaXFy5IW539sgM',
        title: 'albany sectional',
        company: 'ikea',
        image: 'https://course-api.com/images/store/product-11.jpeg',
        price: 10.99,
      },
      {
        id: 'recyqtRglGNGtO4Q5',
        title: 'leather sofa',
        company: 'liddy',
        image: 'https://course-api.com/images/store/product-12.jpeg',
        price: 9.99,
      },
    ]
    )
    
    const handleClick = (value) => {   
      setFilterValue(value);  
    };
  
  
    return(
      <div className="flex p-4 justify-center gap-7">
        <div className="w-10/12 py-4 flex gap-6 justify-center">
        <div className="flex flex-col gap-6">
          <input type="text" name="search" id="search" placeholder="search..."
          className="bg-gray-200 py-1 px-2 rounded-md" value={search} 
          onChange={(e) => {setSearch(e.target.value)}} />
           <div className="flex flex-col gap-2">
            <span className="text-sm font-medium">Company</span>
            <ul className="flex flex-col gap-3 text-gray-500 text-sm">
              <li><button  onClick={() => {handleClick("All")}}>All</button></li>
              <li><button  onClick={() => {handleClick("Ikea")}}>Ikea</button></li>
              <li><button  onClick={() => {handleClick("Marcos")}}>Marcos</button></li>
              <li><button  onClick={() => {handleClick("Caressa")}}>Caressa</button></li>
              <li><button  onClick={() => {handleClick("Liddy")}}>Liddy</button></li>
            </ul>
           </div>
        </div>
        <div className="grid grid-cols-3 grid-rows-4 gap-4">
            {product.filter((product) => {
            if (filterValue == "All" ) return product;
            return product.company === filterValue.toLowerCase();
          }).filter((product)=>{
            if (search.length == 0 ) return product
            else if (product.title.includes(search)) return product
  
          }).map((product,index) => (
            <div className="flex flex-col gap-3 " key={index}>
            <img src={product.image} alt="" className="w-72 h-40 rounded-[4px]"/>
            <footer className="flex flex-col gap-2 text-center">
              <span className="text-gray-500 text-sm">{product.title}</span>
              <span className="text-sm font-bold">{product.price}</span>
            </footer>
          </div>
          ))
        }
        </div>
        </div>
     
      </div>
  
    )
}

export default FilterData