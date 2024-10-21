import React from 'react';

const data = [
    {
        title: "Your trusted  <br/>  Co-Development partner",
        description: "Enhancing the taste, health, and <br/> economics of consumer-facing <br/>products through continuous learning,<br/> innovative technical solutions, and <br/> customer-centricity."
    },
    {
        title: "Portfolio strategy",
        description: "A rather balanced approach towards <br/> managing risks and maximizing <br/> opportunities across various market <br/> segments."
    },
    {
        title: "Focus on innovation and sustainability",
        description: "Investing in research, new <br/> technologies, and sustainability <br/> initiatives to stay a step ahead of <br/> market trends and meet evolving <br/> customer needs."
    }
];

const Card = () => {
    return (
        <div className=" min-h-screen flex flex-col items-center justify-center px-4 py-8 md:flex-row md:justify-center md:gap-6 lg:gap-0 flex-wrap">
            {data.map(({ title, description }, key) => {
                return (
                    <div 
                        key={key} 
                        className="relative bg-wrapper-card max-w-md bg-white rounded-[1rem] shadow-lg overflow-hidden p-8 border border-gray-200 w-[513.3px] h-[472.39px] flex flex-col justify-between mx-4 my-4 lg:my-0"
                    >
                        <h2 
                            className="text-[28px] font-semibold text-[#00264E] leading-[36px] tracking-tight mb-6 "
                            dangerouslySetInnerHTML={{ __html: title }}
                        />
                        <p className="text-[18px] font-normal text-[#00264E] leading-[26px] tracking-tight absolute top-[18rem]" dangerouslySetInnerHTML={{ __html: description }}/>
                    </div>
                );
            })}
        </div>
    );
};


export default Card;
