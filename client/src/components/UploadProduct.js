import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import productCategory from "../helpers/productCategory";
import { FaCloudUploadAlt } from "react-icons/fa";
import uploadImage from "../helpers/uploadImage";
import DisplayImage from './Displayimage';


const UploadProduct = ({ onClose }) => {
  const [data, setData] = useState({
    productName: "",
    brandName: "",
    category: "",
    productImage: [],
    description: "",
    price: "",
    sellingPrice: "",
  });
  const [openFullScreenImage,SetOpenFullScreenImage] = useState(false)
  const [fullScreenImage,SetFullScreenImage]=useState("")

  const handleOnChange = (e) => {
   


  };
  const handelUploadProduct= async (e)=>{
    const file = e.target.files[0]
    const uploadImageCloudinary = await uploadImage(file)

    setData((preve)=>{
      return{
        ...preve,
        productImage : [ ...preve.productImage, uploadImageCloudinary.url]
      }
    })
    
  }
  return (
    <div className="fixed w-full h-full bg-slate-200 bg-opacity-35 top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      <div className="bg-white p-4 rounded w-full max-w-2xl h-full max-h-[80%] overflow-hidden">
        <div className="flex justify-between items-center pb-3">
          <h2 className="font-bold text-lg">Upload Product</h2>
          <div
            className="w-fit ml-auto text-2lx hover:text-red-600 cursor-pointer"
            onClick={onClose}
          >
            <CgClose />
          </div>
        </div>
        <form className="grid p-4 gap-2 overflow-y-scroll h-full pb-5">
          <label htmlFor="productName">Product Name : </label>
          <input
            type="text"
            id="productName"
            placeholder="Enter product name"
            name="productName"
            value={data.productName}
            onChange={handleOnChange}
            className="p-2 bg-slate-100 border rounded"
          />

          <label htmlFor="brandName" className="mt-3">
            Brand Name :{" "}
          </label>
          <input
            type="text"
            id="brandName"
            placeholder="Enter brand name"
            name="brandName"
            value={data.brandName}
            onChange={handleOnChange}
            className="p-2 bg-slate-100 border rounded"
          />

          <label htmlFor="category" className="mt-3">
            Category:
          </label>
          <select
            value={data.category}
            className="p-2 bg-slate-100 border rounded"
          >
            {productCategory.map((el, index) => {
              return (
                <option value={el.value} key={el.value + index}>
                  {el.label}
                </option>
              );
            })}
          </select>

          <label htmlFor="productImage" className="mt-3">
            Product Image URL:
          </label>
          <label htmlFor="uploadImageInput">
          <div className="p-2 bg-slate-100 broder rounded h-32 w-full flex justify-center items-center cursor-pointer">
           
              <div className="text-slate-500 flex justify-center items-center flex-col gap-2">
                <span className="text-4xl">
                  <FaCloudUploadAlt />
                </span>
                <p className="text-sm">Upload Product Image</p>
                <input type="file" id="uploadImageInput" className="hidden" onChange={handelUploadProduct}/>
              </div>
          </div>
          </label>
          <div>
            {
              data?.productImage[0] ? (
               <div className='flex items-center gap-2'>
                {
                   data.productImage.map(el=>{
                    return(
                      <img
                      src={el}
                      alt='el'
                      width={80}
                      height={80}
                      className="bg-slate-100 border cursor-pointer"
                      onClick={()=>{
                        SetOpenFullScreenImage(true)
                        SetFullScreenImage(el)
                      }}
                    />
                    )
                  })
                }
                </div>
              ):(
                <p className="text-red-600 text-xs">*Please upload product image</p>
              )
            }
          </div>
          <button className="px-3 py-2 bg-red-600 text-white mb-10 hover:bg-red-700">Upload Product</button>
        </form>


      </div>
      {/*** display image full screen */}
{
  openFullScreenImage && (
  <DisplayImage onClose={()=>SetOpenFullScreenImage(false)} imgUrl={fullScreenImage}/>
  )
}   
    </div>
  );
};

export default UploadProduct;
