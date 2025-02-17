import React from 'react';

function DistributionCriteria({}) {
    return (
        <div className="bg-[#FFFDED] shadow-lg flex  gap-2 p-4 rounded-lg mt-6">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M21.5099 7.85L15.5699 4.42C14.5999 3.86 13.3999 3.86 12.4199 4.42L6.48992 7.85C5.51992 8.41 4.91992 9.45 4.91992 10.58V17.42C4.91992 18.54 5.51992 19.58 6.48992 20.15L12.4299 23.58C13.3999 24.14 14.5999 24.14 15.5799 23.58L21.5199 20.15C22.4899 19.59 23.0899 18.55 23.0899 17.42V10.58C23.0799 9.45 22.4799 8.42 21.5099 7.85ZM13.2499 9.75C13.2499 9.34 13.5899 9 13.9999 9C14.4099 9 14.7499 9.34 14.7499 9.75V15C14.7499 15.41 14.4099 15.75 13.9999 15.75C13.5899 15.75 13.2499 15.41 13.2499 15V9.75ZM14.9199 18.63C14.8699 18.75 14.7999 18.86 14.7099 18.96C14.5199 19.15 14.2699 19.25 13.9999 19.25C13.8699 19.25 13.7399 19.22 13.6199 19.17C13.4899 19.12 13.3899 19.05 13.2899 18.96C13.1999 18.86 13.1299 18.75 13.0699 18.63C13.0199 18.51 12.9999 18.38 12.9999 18.25C12.9999 17.99 13.0999 17.73 13.2899 17.54C13.3899 17.45 13.4899 17.38 13.6199 17.33C13.9899 17.17 14.4299 17.26 14.7099 17.54C14.7999 17.64 14.8699 17.74 14.9199 17.87C14.9699 17.99 14.9999 18.12 14.9999 18.25C14.9999 18.38 14.9699 18.51 14.9199 18.63Z"
                    fill="#F2994A"/>
            </svg>

            <div className="text-xs text-gray-600 flex flex-col gap-2 mb-2 ">
                <p className={'text-[#25396F] text-sm font-bold'}>Set criteria</p>
                <p className={'text-tertiaryTextColor'}>You haven’t defined the distribution
                    criteria for
                    this project yet. Tap the &#39;Set Now&#39; button to get started.</p>
                <p className={'text-[#25396F] cursor-pointer underline font-bold text-xs'}>Set
                    Now</p>
            </div>

        </div>
    );
}

export default DistributionCriteria;