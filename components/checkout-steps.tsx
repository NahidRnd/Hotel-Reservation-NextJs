import React from "react";

const CheckoutSteps = ({ current = 0 }) => {
    return ( 
       <div className='container flex justify-center items-center flex-col md:flex-row space-x-2 space-y-2 mb-10'>
            {['User Login', 'Booking', 'Checkout', 'Confirmation'].map(
                (step, index) => (
                <React.Fragment key={step}>
                    <div className={`p-2 w-44 rounded-full text-center text-sm ${index === current ? 'bg-gray-200 text-gray-900' : ''}`}>
                        {step}
                    </div>
                    {step !== 'Confirmation' && (
                    <hr className='w-32 border-t border-gray-300 mx-4' />
                    )}
                </React.Fragment>
                )
            )}
        </div>
     );
}
 
export default CheckoutSteps;