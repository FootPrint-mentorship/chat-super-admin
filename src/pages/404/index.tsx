import React from 'react';
import Link from 'next/link';

const NotFoundPage: React.FC = () => {
    return (<div className="min-h-screen flex justify-center items-center bg-white">
            <div className="bg-white  p-8 text-center w-full max-w-md ">
                <div className="text-6xl text-blue-500 font-bold">
          <span className="flex justify-center items-center">
           <svg width="333" height="148" viewBox="0 0 333 148" fill="none" xmlns="http://www.w3.org/2000/svg">
<path
    d="M87.199 88.7467H97.999L94.831 107.179H83.887L80.863 124.315H60.847L63.871 107.179H16.207L19.519 88.7467L63.583 23.5146H85.903L41.695 88.7467H67.183L71.359 64.8427H91.375L87.199 88.7467Z"
    fill="#25396F"/>
<g clip-path="url(#clip0_19385_195526)">
<path
    d="M164.006 131.829C163.254 131.548 162.454 131.552 161.675 131.474C154.47 130.753 147.683 128.666 141.319 125.228C134.289 121.428 128.379 116.307 123.482 110.005C123.301 109.772 123.12 109.537 122.93 109.31C122.891 109.263 122.819 109.242 122.715 109.18C122.056 109.553 121.375 109.951 120.683 110.322C119.996 110.689 119.372 111.18 118.545 111.432C118.955 105.665 119.376 99.9692 119.798 94.2134C120.052 94.2711 120.182 94.2814 120.293 94.3309C122.223 95.1782 134.697 101.443 135.328 101.886C134.726 102.365 134.04 102.672 133.401 103.055C132.753 103.443 132.094 103.814 131.386 104.222C131.553 104.472 131.679 104.694 131.838 104.888C138.69 113.256 147.337 118.754 157.933 121.088C161.617 121.898 165.355 122.174 169.132 122.02C184.158 121.401 197.212 113.246 205.05 101.579C209.039 95.64 211.579 89.1316 212.711 82.0666C213.282 78.5042 213.428 74.9233 213.226 71.332C213.022 67.7057 212.4 64.1413 211.375 60.6531C211.282 60.3398 211.2 60.0244 211.097 59.6595C212.006 59.0348 212.983 58.5689 213.917 58.0329C214.859 57.4928 215.807 56.9609 216.762 56.4414C217.71 55.926 218.623 55.3384 219.667 54.8828C219.778 55.124 219.889 55.3199 219.959 55.5281C221.075 58.8761 221.889 62.2962 222.398 65.7905C222.874 69.0581 223.052 72.3401 222.988 75.6386C222.819 84.2972 220.881 92.5414 217.013 100.289C211.297 111.737 202.756 120.424 191.283 126.168C186.391 128.619 181.225 130.249 175.811 131.066C174.314 131.293 172.805 131.447 171.302 131.643C170.979 131.684 170.661 131.765 170.34 131.829C168.226 131.829 166.118 131.829 164.006 131.829Z"
    fill="#17CE89"/>
<path
    d="M167.171 16.0021C167.627 16.0577 168.082 16.1443 168.538 16.1629C176.986 16.4989 184.897 18.7604 192.296 22.8196C198.612 26.2851 204.018 30.8536 208.605 36.4012C208.813 36.6527 209.027 36.9022 209.27 37.1908C209.487 37.0877 209.697 37.0094 209.883 36.8939C210.749 36.3538 211.608 35.8013 212.474 35.2571C212.721 35.1004 212.979 34.9602 213.216 34.8221C213.542 34.9767 213.418 35.2385 213.414 35.4447C213.344 38.4071 213.262 41.3717 213.183 44.3341C213.126 46.507 213.072 48.6799 213.014 50.8528C213.004 51.2074 212.981 51.564 212.965 51.9001C212.573 52.0877 212.326 51.8568 212.074 51.7475C209.326 50.5539 206.584 49.3437 203.84 48.1398C201.82 47.2533 199.802 46.3648 197.781 45.4762C197.571 45.3834 197.363 45.2866 197.076 45.1567C197.233 44.9938 197.334 44.8392 197.478 44.7464C198.336 44.1919 199.202 43.6517 200.066 43.1034C200.342 42.9281 200.612 42.7447 200.853 42.5859C200.948 42.2973 200.756 42.1777 200.635 42.0375C193.844 34.1335 185.408 28.9466 175.197 26.7242C170.884 25.7862 166.512 25.5347 162.118 25.9367C153.468 26.7263 145.657 29.7444 138.775 35.0323C129.768 41.953 123.988 51.0033 121.271 62.012C120.279 66.0279 119.844 70.116 119.914 74.2515C119.986 78.5519 120.594 82.7781 121.78 86.9178C121.897 87.3259 122.002 87.7362 122.126 88.1959C121.198 88.8144 120.223 89.2886 119.287 89.8246C118.372 90.3461 117.448 90.8533 116.527 91.3666C115.579 91.8944 114.63 92.4221 113.721 92.9293C113.34 92.82 113.346 92.5128 113.266 92.2778C112.375 89.6555 111.686 86.9796 111.192 84.2542C110.773 81.9515 110.466 79.6363 110.346 77.2964C110.324 76.8697 110.309 76.4368 110 76.0904C110 74.3773 110 72.6641 110 70.951C110.322 70.5325 110.328 70.0294 110.357 69.5388C110.561 65.9764 111.099 62.4635 111.998 59.0145C115.711 44.7856 123.598 33.4511 135.803 25.2193C144.16 19.583 153.435 16.5814 163.528 16.1587C163.953 16.1402 164.374 16.0557 164.796 16C165.59 16.0021 166.38 16.0021 167.171 16.0021Z"
    fill="#17CE89"/>
<path
    d="M199.051 73.9809C198.878 83.6558 195.472 91.9598 188.413 98.6599C183.804 103.037 178.318 105.76 172.051 106.867C169.348 107.345 166.623 107.426 163.879 107.195C151.961 106.191 141.193 98.1857 136.592 86.2472C134.838 81.6973 134.104 76.9743 134.363 72.1111C134.978 60.6261 141.098 50.9017 149.868 45.3973C153.658 43.0183 157.762 41.5133 162.197 40.864C172.863 39.3033 183.622 43.3626 190.809 51.6707C194.938 56.4432 197.497 61.9641 198.573 68.1714C198.903 70.0866 199.084 72.0224 199.051 73.9809ZM175.16 83.6517C175.339 83.6208 175.405 83.5919 175.467 83.6022C175.661 83.6331 175.854 83.6764 176.046 83.7218C179.06 84.4062 182.101 84.6268 185.173 84.2001C186.451 84.0228 187.688 83.7032 188.883 83.2146C189.337 83.0291 189.545 82.7446 189.537 82.2395C189.514 80.8232 189.547 79.4069 189.52 77.9927C189.463 74.7581 187.209 72.3956 183.991 72.142C182.28 72.0059 180.573 72.1523 178.864 72.1544C178.668 72.1544 178.471 72.1956 178.279 72.2389C176.547 72.6244 175.226 73.5748 174.319 75.1045C174.195 75.3127 174.168 75.6116 173.91 75.6796C173.64 75.4322 173.391 75.2178 173.158 74.9911C172.284 74.1396 171.241 73.5975 170.053 73.3583C169.443 73.2346 168.814 73.1583 168.192 73.146C166.843 73.1192 165.495 73.1418 164.145 73.1501C162.131 73.1645 160.417 73.8696 159.046 75.3663C158.923 75.5023 158.766 75.6095 158.589 75.758C158.416 75.3993 158.284 75.1003 158.129 74.8138C157.428 73.5088 156.383 72.5873 154.969 72.1399C154.346 71.942 153.686 71.7957 153.037 71.775C151.493 71.7256 149.938 71.6864 148.398 71.7853C145.092 71.9956 143.049 74.6777 142.993 76.9929C142.954 78.638 142.902 80.2831 142.876 81.9282C142.865 82.6024 142.935 82.6951 143.616 82.893C144.374 83.1136 145.139 83.3136 145.912 83.4744C149.607 84.2392 153.295 84.3465 156.964 83.3095C157.084 83.2765 157.214 83.2806 157.416 83.2621C157.416 83.7321 157.408 84.1547 157.418 84.5773C157.434 85.1958 157.513 85.2968 158.1 85.5009C158.224 85.5442 158.354 85.569 158.482 85.6061C161.865 86.6142 165.32 86.9894 168.837 86.7461C170.616 86.6224 172.364 86.2987 174.032 85.6349C174.277 85.538 174.525 85.4453 174.758 85.3216C174.972 85.2082 175.102 85.0185 175.112 84.7649C175.127 84.4042 175.143 84.0475 175.16 83.6517ZM166.247 72.3543C169.064 72.4615 171.535 70.1031 171.54 67.1324C171.544 64.3184 169.253 61.9723 166.402 61.9496C163.508 61.927 161.11 64.1328 161.118 67.0747C161.129 70.668 164.025 72.4182 166.247 72.3543ZM151.095 71.3009C153.711 71.2432 155.779 69.3177 155.816 66.5881C155.853 63.9473 153.726 61.9331 151.194 61.9001C148.495 61.8651 146.426 63.9906 146.424 66.5366C146.424 68.9342 148.172 71.1957 151.095 71.3009ZM181.79 61.8445C179.512 61.7826 177.108 63.6216 177.083 66.4315C177.058 69.1898 179.25 71.2225 181.808 71.2143C184.138 71.206 186.476 69.3548 186.469 66.4624C186.461 63.5638 183.95 61.7723 181.79 61.8445Z"
    fill="#17CE89"/>
</g>
<path
    d="M305.992 88.7467H316.792L313.624 107.179H302.68L299.656 124.315H279.64L282.664 107.179H235L238.312 88.7467L282.376 23.5146H304.696L260.488 88.7467H285.976L290.152 64.8427H310.168L305.992 88.7467Z"
    fill="#25396F"/>
<defs>
<clipPath id="clip0_19385_195526">
<rect width="113" height="115.829" fill="white" transform="translate(110 16)"/>
</clipPath>
</defs>
</svg>

          </span>
                </div>
                <h1 className="text-2xl font-semibold text-gray-800 mt-4">Oops... page not found</h1>
                <p className="text-gray-600 mt-2">
                    The page you're looking for might have been removed, temporarily unavailable, or never existed.
                    We're sad you had to see this and hope you never see it again.
                </p>
                <Link href="/">
                    <p className="mt-6 inline-block px-6 py-2 text-white bg-secondaryBgColor rounded-lg transition duration-200">
                        Back To Dashboard
                    </p>
                </Link>
            </div>
        </div>);
};

export default NotFoundPage;
