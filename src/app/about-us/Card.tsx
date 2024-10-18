
import React from 'react';


const data = [
    {
        title: `Your trusted  <br/>  Co- Development partner`,
        description: "Enhancing the taste, health, and economics of consumer-facing products, through continuous learning, innovative technical solutions, and customer-centricity."
    },
{
    title: "Portfolio strategy",
        description: "A rather balanced approach towards managing risks and maximizing opportunities across various market segments."
},
{
    title: "Focus on innovation and sustainability",
        description: "Investing in research, new technologies, and sustainability initiatives to stay a step ahead of market trends and meet evolving customer needs."
}
]

const Card = () => {
    return (
        <div className="min-h-screen flex items-center justify-around p-4  px-[12rem]">
            <>
                {
          data.map(({ title, description }, key) => {
            return (
                <div key={key} className="w-full max-w-md bg-white rounded-3xl shadow-lg overflow-hidden relative p-8 w-[513.3px] h-[472.39px] border border-gray-300 flex flex-col justify-between bg-wrapper-card ">
                    <h2 className="text-[32px] font-semibold text-[#00264E] leading-[38px] tracking-[-0.01em] w-[356.51px] h-[114px] mb-6"
                        dangerouslySetInnerHTML={{ __html: title }}>
                    </h2>
        
                    <p className="text-[20px] font-normal text-[#00264E] leading-[28px] tracking-[-0.01em] w-[374.53px] h-[139px]">
                        {description}
                    </p>
                </div>
            )
        })
        
                }
            </>

        </div>
    );
};

export default Card;
