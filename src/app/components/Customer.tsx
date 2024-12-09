
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";


export default function Customer(){
    return(
<div>

<div className="ml-24 mb-6">
        <h1 className="font-IntegralCF text-4xl font-extrabold leading-[57.6px] my-12">
          OUR HAPPY CUSTOMERS
        </h1> 
        <div className="flex justify-between items-center gap-2 my-auto ">
            <FaArrowLeft className="w-[24px] h-[24px] text-2xl text-gray-700"/>
            <FaArrowRight className="w-[24px] h-[24px] text-2xl text-gray-700"/>
            </div>
        </div>
      <div className="flex flex-1 gap-2">
        <img src="c1.png" alt="Brand" className="w-50  h-50" />
      
        <img src="c2.png" alt="Brand" className="w-100 h-50" />
      
        <img src="c3.png" alt="Brand" className="w-100 h-50" />
      
        <img src="c4.png" alt="Brand" className="w-100 h-50" />
     
        <img src="c5.png" alt="Brand" className="w-50 h-50" />
      </div>


        {/*<div className="  flex flex-col justify-start items-center m-auto gap-0">
          <div className="w-[1239px] h-[60px] flex justify-between items-center mx-auto">
            <h4 className="font-bold sm:h-[58px] sm:w-[654px] w-[286px] h-[72px] left-4 text-[#000000] lg:left-[100px] top-[150px] text-[32px] sm:text-[48px] sm:mt-[50px] leading-[57.px] ">OUR HAPPY CUSTOMERS</h4>
            <div className="flex justify-between items-center gap-2 my-auto ">
            <FaArrowLeft className="w-[24px] h-[24px] text-2xl text-gray-700"/>
            <FaArrowRight className="w-[24px] h-[24px] text-2xl text-gray-700"/>
            </div>
           </div>
            <div className="lg:ml-[90px] mt-[200px] flex  lg:gap-6 sm:gap-1 ">
            <Card text={"Sarah M."} p={"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”"}/>
            <Card text={"Alex K."} p={"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”"}/>
            <Card text={"James L."} p={"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”"}/>
            </div>*/}
        </div>
    )
}