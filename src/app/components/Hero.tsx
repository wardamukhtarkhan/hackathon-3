import React from 'react';

const Hero= () => {
  return (
<div className='max-w-[1440] max-auto'>
    <div className='h-[500px] w-full bg-[#F2F0F1] bg-cover flex items-center relative ' style={{
        backgroundImage:"url(/hero.png)"
    }}>
        <div className='ml-[40px] sm:ml-[60px] md:ml-[100px] w-[600px] flex flex-col gap-[32px] '>
            <h1 className='text-[20px] sm:text-[40px] md:text-[64px] font-bold font-intregral leading-[64px]'>
                FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <h3 className='text-[16px] text-[rgba(0,0,0,0.6)]'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style</h3>
        <button className='w-[210px] h-[52px] bg-black flex items-center justify-center font-medium text-white text-[16px] rounded-[62px]'>Shop Now</button>
        <div className='flex items-center gap-8 h-[19px]'>
            <div className='text-[16px] sm: hidden'>
                <span className='text-[40px] font-bold'>200+</span> <br />
                <p className='text-[16px] text-[rgba(0,0,0,0.6)]'>International Brands</p>
            </div>
            <div className='text-[16px] sm: hidden'>
                <span className='text-[40px] font-bold'>2000+</span> <br />
                <p className='text-[16px] text-[rgba(0,0,0,0.6)]'>High-Quality Product</p>
            </div>
            <div className='text-[16px] sm: hidden'>
                <span className='text-[40px] font-bold'>30,000+</span> <br />
                <p className='text-[16px] text-[rgba(0,0,0,0.6)]'>Happy Customers</p>
            </div>
        </div>
        </div>
        <img src="/star2.png" alt="star" className='w-[96px] h-[96px] absolute right-[81px] top-[86px] ' />
        <img src="/star1.png" alt="star" className='w-10 h-10 absolute top-[164px] right-[600px] m-10' />
    </div>
<div className='h-[112px] w-full bg-black flex items-center justify-evenly'>
<img src="/versace.png" alt="brandlogo" className='w-[166px] h-[33px] ' />
<img src="/zara.png" alt="brandlogo" className='w-[91px] h-[38px] ' />
<img src="/gucci.png" alt="brandlogo" className='w-[156px] h-[36px] ' />
<img src="/prada.png" alt="brandlogo" className='w-[194px] h-[32px] ' />
<img src="/calvinklein.png" alt="brandlogo" className='w-[206px] h-[33.35px] ' />
</div>
{/*<div className="flex items-center justify-center bg-white text-black font-bold py-6">
          <div className="container flex justify-center items-center">
          <img src="/NEW ARRIVALS.png" alt="NEW ARRIVALS" className='w-[200px] h-[33px] ' />
           </div></div>
              <div>
                <div className='grid grid-col-4 gap-2 mt-16'>
                <div className='h-[112px] w-full bg-white flex items-center justify-evenly'>
<img src="/shirt1.png" alt="shirt1" className='w-[200px] h-[200px] ' />
<img src="/pent2.png" alt="pent2" className='w-[200px] h-[200px] ' />
<img src="/shirt3.png" alt="shirt3" className='w-[200px] h-[200px] ' />
<img src="/shirt4.png" alt="shirt4" className='w-[200px] h-[200px] ' />
                </div></div>
             </div>   */}
                
   
              
</div>
  )
}
export default Hero;
   