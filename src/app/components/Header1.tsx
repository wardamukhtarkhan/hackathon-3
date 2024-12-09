
import React from 'react';

const Header1: React.FC = () => {
    return (
        <header className="bg-black text-white py-2">
          <div className="container flex justify-center items-center">
            <h1 className="text-xs sm:text-sm md:text-base text-center mx-auto">
              Sign up and get 20% off your first order.
              <a
                href="#shop-now"
                className="text-xs sm:text-sm md:text-base font-normal underline text-white rounded-full ml-2 py-2"
              >
                Sign Up Now
              </a>
            </h1>
          </div>
        </header>
     
  );
};

export default Header1;
