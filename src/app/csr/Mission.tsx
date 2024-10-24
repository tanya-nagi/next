import React from "react";
import ImageCard from "./ImageCard";
import SectionTitles from "@components/molecules/sectionTitles";


const imagesArray = [

]
const textArray = [
  "We remain committed to nurturing this green sanctuary for the next two years, ensuring the growth of each tree and the ecosystem.",
  "With GPS-enabled tech, we are tracking various aspects of the trees' development, from height and girth to age and even their phenology.",
  "This comprehensive data will be seamlessly integrated with Google Maps, ensuring thorough tracking and fostering a sustainable environment."
]
const jsonData = [
  [
    {
      title: "01 - Tree plantation drive",
      images: [
        'https://s3-alpha-sig.figma.com/img/e4f5/da53/c8bea95f4e527b8f09ef6e8a3ac46b33?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZzxoVA4lA5EYNTblfn2UNKvxveIG8IheDRsKDB9Gw4mVYOGId9np-t~y2vdPcq3wJ5UMskK1HPoAsGkQrAdUIImuMaWoHs9ArFlxLhg47y4ELz5KfaX7ZSn9LVvUgIbPsieyCDA-VbLbjOCbiryJgBrJbcV1uo7~Bh0j4ssjpcuU8gbeM5JrjmtBPZSGFWV5EKHZ4c0GsnI5HC8iw5~0i1PJX~lcSrETTEoBR-XFfptXEkGhd5QsiyAyW6WXcpeZHxHvevyfLiDIrYKg8cKkKVpsstpdIfeaQYvQIBQtPQz5FxPI557gtSB1O48jeJzRhTgZ4YHke8GdbX7cf-ndPQ__',
        'https://s3-alpha-sig.figma.com/img/1635/cc09/c48f1f7d3cc3b98dd0c42af317564628?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bU-SIok9dNjc5RCloLaarpku1QOqcXmf3yeaRQYqgTXJSsCA93LxNn4WneU17Yijgn8f8iZ-XL4ivW55lFm~xEotoJH2MUSrQD-EtQ-JqFLu7R2w5Ynxa-xwTAclAK8xJscyATD7oRb0YwkShxgSKlvQz-7ztIVKZP-U4EoKxHK307bQw2OYwwcIUZaThkFbHj7QwvYY1sQ9YeKSE6qj2KNBu6nAhMjlwsIQRl5eDzATbAQbnJWHlyjQxNl2F~3nG-6YSWBd3vxqkPrxfquB3hacPAGM-EJ2RnQqPO2n~BqTi6zWyaBCfZRmp-RbZqxDaa95l-kXcX47AgIb6Hu6Uw__',
        'https://s3-alpha-sig.figma.com/img/fe98/88d3/fe8e2ed5ab6a6e0d6d29f9d15712b63a?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hDY5Tow2hCJub5pRHfZTkE0f6T1tlG8vcCBx6Ec84xx2R1oTJGmIE0hr89hVmvHobm1H2SbOiSGh4hfKNQH5LWPQ952kgCWGAwoKFb2uGMA5pv3A~x-DNpE46yIPOvls5TBjcgi0C9EEvI9qkj-Dra8NzgHM~XPr1RhIQ2h-wBblxbq7JD6iHPzrAJfQyDjJcmPyvShFQG9mo5TiuHnrALjdHdH8fHzibDchrm1PRn928tsAx8vj5mNqLNx5DhjeJ-mVPmRU56YVw0WaEN37bMpntIgmLgOoRn~DTS-wNy3XnXrYveON5aeXz~dyLqHKVMeXnK19yHVp0eSOxqvmJw__',
        'https://s3-alpha-sig.figma.com/img/784e/8da8/4eb2035ddc4971846217c1c84d61e335?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NLK1yng9NvU7xVHYeJejVOlNrI0StLpSOqTzD2ctx7BHelYxjRRFzotpyGPi1-F9KoAE0F5coSROuIeVvqLgKlYyp-s9JneAWZ-0jWG74zvegrRYcZcaTygsOJLue~pN0Zo~Yku-2tGj39A8COjiIrO66-x8cVqIxdHyTmgGSU-6reU-oVl~4MQKVP8y8mTSVQZ0kTuhMW8m4JGny5f9DTtzn5NE9fdRVltcBHTflAM8rNqM895hPeDWHKZS1rfw8ruvmb0m4QdSMXYb09c03rwGLew3oevuy3NVl9RCJP0Ox-Uc3pHHz6N6NUodljyknwC-E5-ivqGvPPDEB0II9w__'
      ],
      project: "Plantation of 13,000 native trees",
      location: "Khandala, Maharashtra",
      locationArray: [
        "We remain committed to nurturing this green sanctuary for the next two years, ensuring the growth of each tree and the ecosystem.",
        "With GPS-enabled tech, we are tracking various aspects of the trees' development, from height and girth to age and even their phenology.",
        "This comprehensive data will be seamlessly integrated with Google Maps, ensuring thorough tracking and fostering a sustainable environment."
      ]
    },
    {
      title: "02 - Promotion and distribution of plastic-free jute bags",
      images: [
        'https://s3-alpha-sig.figma.com/img/c29c/01ba/c0be49b9b89541f334f1d27f5f8119e2?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kvIHcWEp5jNp6Y6ijEYZVQRP1X~glus~EHU6i733KR9Ep4bshNFhCEnRqA0-xejNWJH71y9vhVNVmsnrjWCC2h49EBrXkrt4qqj5M~7r4XTkEgGTadPtMpKdxhooQugGjHNIoeUC-C9LnB7cxyzn5V21MJdL2Nu3SrZQt4MVDmBi2dRp5e~S5OeXPe0JuHjQBnARbexL-KZTnS1TLbj4bUwL-SxT2MmgGoalyg0PTigJ05eHNK~Sb9fK5pVSDX4SMS3iHt4wv7~yR7XV9wSPS-OvSa4qLfidtM7Y4umFwBH7jW-fBjD20HJJ5lF5NklozPbD6E1s-b4b1V-j~XZyBw__'
      ],
      project: "-----",
      location: "Tehsildar Office, Khalapur",
      locationArray: [
        "By championing the use of eco-friendly jute bags, we are tackling the pervasive issue of plastic waste.",
        "With GPS-enabled tech, we are tracking various aspects of the trees' development, from height and girth to age and even their phenology.",
        "Our initiative promotes sustainable living and supports local artisans, contributing to a circular economy."
      ]
    },
  ],
  [
    {
      title: "Ambulance and garbage van donation",
      images: [
        'https://s3-alpha-sig.figma.com/img/21fb/c9db/d4454f50de1f24beb429783f50ae4fea?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i9RzEWvfCC6Ywz4Omz~qIXh~rjNxIU7vmKzB8QjSVn6Xxru-WJqenwuV12jbxJijyJIuHwZk95~demB9FemGyNnEIrPAQbOMcpnD19dvs596XSYh94wlQPlbmVrjP6pZSalcbJtVn~QFzL8tiV5qRFlvWoH-ESUwgz9cNSTJxHTYpVCPYmjHojOiBe5jeAi8wTZTdSPalMe3QK53pIZpP6DJLKbwirvqD9-N4KPFPzy3HUu~P5FVCZv4KC1akzqzFz2xoLrdpaF8LSRzh07LwUeE~eqvYPQAwjdsEfF5sWOXgbrateWUk~GYgtMcnXH1vwiKTXZAqrG4d8xNJripfQ__',
        'https://s3-alpha-sig.figma.com/img/5588/61cf/a4e0dc49f423169a3f0314038cfe4277?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WCJfky3kZvnUujcN~AHHhD489CV7-bKk2eixADkSr3ta~fIA4Qy0XDD9L2uuc3i8F4bZIEQAhV0lol9DS5TVhwlktzIDviI3ATs-pEX86mD6CaTrLuQZSmNc3ivCz9b2FzjeM7zt8uZ6Rx0cF5NNhnY-~rxOieyMWcwzTzOAIBSNEbwPamq7VIUvqs3j3ZNhKgo4s-j1LO6HQ8ilfnRw4mgPrabVnNA1I~vnYLw37kX6QYd7x9R7g1zG3q4m6Y4NNnugQ1wDHO4a3gybuRmhK1NwcIDalqqrYF~czdfisFLhM7Osp4eedZqYEUo2GV1nEBEpzKuCUZnGnP0Vc81QUA__',
        'https://s3-alpha-sig.figma.com/img/3448/dbe8/1cf2c650036b4cdaf9295c98c62264f5?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G7OSphMg8UXsyYJi9LSpGyKmThLo6lFxVNEa9Mokbgd0RFxtVl7nRKoVYw1QsJa18~USrgJ7HFGw4mQVLJn-XCPt6IDnmKOe5hOYvD-5t2st6zv30VgYcM4lsqLFDiLeqmyWmCWWrKRbaDOzquzoq6xIAhe3MsOKAbJLbSNv9iH2Hdfx46-VeqRgiz6r814aRKtZUjTKZ9DWiiLSxO-V7MYYktQju9IIJljLHMgo4eqF0FpGJG-knnmI-BaKXarn1cuNLKZ~Qna8YLNwdScOMGH3JF4LlN-b~9LjReBojnNUSwTtByulMLYMQ44oT5Gc~yNnRY0sdOrDm9dx1FvbLw__',
        'https://s3-alpha-sig.figma.com/img/14a8/7b56/9e1a38c1b45d359e8606300b300c3c46?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F87mtli8owYunQ~rbHQTY~7m5~UjLol51DYGhGsja0qNPlrL9C480M5Hd7BdJeajkYbRej1ypgm4q~Z3ZdbqCDFHuFrgtZsXIGb9vxq9cNj0Xp3u9MUuSWkX~cx4QMkY~zVLMm6cjSXpdmFCccx0VsQP7gwZh3GPcqed6zm~Z~E1uJSsPW0h6lPGNYydqqCkZTihFmVoRRaJzBmoxRJHtwkPP8iA7mWIkgkPok7RQ3~aHPg5d7ROP5QSvpujuTJaK4-tUTh6tCgSCyZcG2b5cMDTf0zPABhSUHTStIcp2UkytNpHDn~ZVr6H0seDnMLD18jHmuT6q7LDyoy1MTK-NA__'
      ],
      project: "Provided the villagers from the two towns with a state-of-the-art ambulance and garbage van",
      location: "Navande and Atkargaon, Maharashtra",
      locationArray: [
        "This initiative ensures that communities have rapid access to medical services and enhances the quality of life for residents.",
        "The joy and gratitude of the villagers reaffirmed our belief that every action we take, ignites hope and touches hearts.",
        "We’re humbled to be the catalyst of change and contribute to India’s cleanliness campaign and emergency response infrastructure in the outskirts."
      ]
    }
  ],
  [
    {
      title: "Poshan Maah 2023",
      images: [
        'https://s3-alpha-sig.figma.com/img/87b1/3d7e/fb832fa54ef9551babc79a8ad48f6e5f?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JPLxBCzwSsHOL5gNTu8MB1ItLQpAiqc5ENYnZ61VpS6ltmtYOVc1wMM5hSYgqX7YeCwX7KHUTQi-hagozGFVGmxW9XipXKI2KhAZP2rhY0kqgGWDvwFgD9svqpij3QYlpzk6CbtLUN5W3VfM0Zhf41jf7xjyy~03QOSEFtuLiqG-fuQrWdxn4tlD9hsdhT3PsQHSoDyp~LqfzDtMDvuG6U9TaOV~JkDTCybqCRDWCDcuutxpBTO2FT631hygNXYfCwORHhj5f8w6LbLU7mymtPVN8ctwW~sN-yQ80zdHT3O~mDBs8EkpuLzcOaKskN~eK9YcBykswwur374~Dh33UQ__',
        'https://s3-alpha-sig.figma.com/img/bc95/9426/cf3712d79e46ebb2bf9a18b147ffd7d2?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OkeYespRATMAm8h2sVNCaBAiPdtc0S5Za4FcvyIuQPbDATUjMHNvi~1fOPzZvuqdIlNFfGH2eI2sj0EBDWO4Y73VSXZ3ZIO-wjUL45qVuzzIy5hkhZsDCJBefXRkZeqO~57GrsVaK1ejJTWhW41~ApbCOZ9LfrlRIYAC9ncrbBsny1xrqqJ5dQKdsjJ39TIKDknaq2IEFnm5IIfU786O6DpzYh5MqXHczUfuIvT~IOS1ED21-nOTS7DPVQEAxPwoxRSSSQ5XELAaESyQ558f5qYkTQ30nYidJ3xhjNOAuARPABWxI~LoRrWRp71ob8ZU1rRUB8ed~rjdNwYwR~LKrw__',
        'https://s3-alpha-sig.figma.com/img/052a/5fb3/7c97077ffde8ab9904e436f85a3f1557?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R-Oc~n6dRC3MswHTmKNz6aSMtTi8OldtZ2Omm4dwd-OM8wMm8iV0UY9rNYRLqVTomjYSw16C7p4AN-mrXWgOeQjEC4Peomdhvy0zABNnNsXr2kJNTd58kv4YSo2Z0lK8p6zrYGsUHa1ZUfP8vizdPiUoE053gzQi3lyDxeVtEMkR5C2Onr2DbVlqVYmfXqGkE-gzh7xkrgMIOv9v7Y7ZmzcpHQga-ov6IR2GcUEOIl5F19Gcz1OhH3DolUa~2c~4HXsXBscB3IWZfFXnVOVB2824ac8sZ0b4VFEAT7rNZd514kWrgx7GEJUOjJlLfjF4dcnZERtM1Lp-KZoObCnVJQ__',
        'https://s3-alpha-sig.figma.com/img/2bee/7db1/d84e996ea84769a9dc1c9ed0aaa44773?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fO5zEZfzx547cVUy6AjYFrmEDyNmlL7WrVwmd6J3rdovSNZ~u243v2p-Wi7XBklLoYc4hY60Wl3EfGHiUWj56MhzyzeWQ0JyQ5FTK5nsE0XqwLm8Yvx23J9133U9GV1dGV66ctTAUqkCQwGYkZLiNrdj7lTI~g01ADisL5JtYHIPdFuJH9JWM-cqVVmaxOcEwREMkf1KTOM4W7wWfXoVxl8ZD0xGzIKe9EWsNrm40sG~Snc0HBXRnGQjKkAPiduqHmZhkdnEIfS-wGjWBLa3w2RXNmS8iSUozEiGlYwnCX7lSWRb1j7z1CS1TpYoARiIQ0JI5gA~7GettHBu-BqGDA__'
      ],
      project: "Empowering communities and spreading awareness around nutrition-rich food through competitions, drama, and music.",
      location: "Atkargaon, Maharashtra",
      locationArray: [
        "Government officials, women, and Anganwadi Sevikas of Khalapur 1 and Khalapur 2 participated in the event.",
        "Women showcased their culinary skills in the Nutritional Food Recipes Competition.",
        "A powerful skit play was organized to educate the audience on the critical stages of human life and the role of nutrition in them.",
        "A Rangoli Competition was organized which featured a burst of creativity, with vibrant designs highlighting the importance of balanced nutrition."
      ]
    }
  ],
]

export default function TreePlantationDrive() {

  return (
    <>
      <section className="co-development sm:blade-top-padding blade-bottom-padding-lg">
        <SectionTitles
          title=""
          paragraphs={[
            `<b>‘Pragati’</b> means progress and for us, it’s perhaps a <br/>  commitment to driving sustainable growth, fostering <br/> community well-being, and nurturing our planet.`,
            `We hereby champion a holistic approach to endeavors that address environmental stewardship, community engagement, and food security.`
          ]}
          boldParagraphs={[
            `At AAK India, South Asia, and <br/> Sub-Saharan Africa, the Pragati <br/> Mission embodies the heart of <br/> our CSR initiatives.`,
          ]}
          middleModify={true}
        />
      </section>
      {
        jsonData.map((data, key) => {
          return <Tabs key={key} index={key} tabData={data} />

        })
      }

    </>

  )
}


const Tabs = ({ tabData, index }: any) => {

  const [isPlaying, setIsPlaying] = React.useState(true);

  const animationDuration = Infinity; // 10 seconds

  React.useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isPlaying) {
      // Set a timeout to pause the animation after it runs for 10 seconds
      timer = setTimeout(() => {
        setIsPlaying(false); // Pauses animation after the duration
        console.log("Animation paused");
      }, animationDuration); // Match the duration of your CSS animation
    }

    return () => {
      // Clear the timeout to prevent memory leaks
      clearTimeout(timer);
    };
  }, [isPlaying]);
  return <div className="mx-auto p-4 font-sans">
    <nav className="md:flex space-x-6 text-sm mb-6 sticky top-[-1px] bg-white z-10 w-full h-[89px] items-center ">
      <div className="item flex space-x-6 h-[40px] pl-72 ">
        <a href="#" className={`custom-link text-blue-600 ${index === 0 ? "border-b-[3px] border-blue-600 pb-2" : ""}`}>
          <span> Environmental stewardship</span>
        </a>
        <a href="#" className={`custom-link text-blue-600 ${index === 1 ? "border-b-[3px] border-blue-600 pb-2" : ""}`}>
          <span>Community engagement and enrichment</span>
        </a>
        <a href="#" className={`custom-link text-blue-600 ${index === 2 ? "border-b-[3px] border-blue-600 pb-2" : ""}`}>
          <span> Food security</span>
        </a>
      </div>
    </nav>



    {
      tabData.map((data: any) => {
        return <>
          <div className="grid w-full pl-72">
            <h1 className="text-2xl font-bold mb-6">{data.title}</h1>
          </div>

          <div className="grid gap-6 mb-6">
            <div
              className={`scroll-container ${data?.images.length > 1 ? 'w-full flex justify-center' : ''}`}
              onMouseEnter={() => {
                setIsPlaying(true);
              }}
            >
              <div className={`scroll-content ${isPlaying && data?.images.length > 1 ? 'play-animation' : 'w-[100%]'}`}>
                {data?.images.length > 1 ? data?.images?.map((src: any, key: any) => (
                  <ImageCard
                    imageUrl={`${src}`}
                    altText={`Sample Image ${key + 1}`}
                    key={key}
                    style={{
                      width: '820px',
                      height: '471px',
                      left: '266px',
                      borderRadius: '8px 0px 0px 0px',
                      marginRight: '3rem'
                    }}
                  />
                )) : <>
                <div className="w-full">
                  <ImageCard
                    imageUrl={`${data?.images[0]}`}
                    altText={`Sample Image`}
                    style={{
                      width: data?.images.length > 1 ?'820px':"77%",
                      height: '471px',
                      left: '266px',
                      borderRadius: '8px 0px 0px 0px',
                      marginRight: '3rem'
                    }}
                  />

                </div>
                </>}
              </div>
            </div>
          </div>

          <section className="relative blade-top-padding-lg blade-bottom-padding">
            <div className="flex relative w-container pl-[160px]">
              <div className="md:flex-1 space-y-3">
                <p className="custom-paragraph">Project</p>
                <div>
                  <h5 className="font-worksansMedium gsap-fade-in">
                    {data.project}
                  </h5>
                </div>
              </div>

              <div className="flex-1 flex justify-end">
                <div className="grid gap-3 max-w-xl">
                  <div className="grid gap-3">
                    <p className="custom-paragraph">Location</p>
                    <h5 className="font-worksansMedium gsap-fade-in">
                      {data.location}
                    </h5>
                    <div className="text">
                      {data?.locationArray?.map((text: any, index: any) => (
                        <h6
                          key={index}
                          className={`gsap-fade-in ${index < textArray.length - 1 ? 'border-b' : ''} py-[20px]`} // Apply border-b class conditionally
                        >
                          {text}
                        </h6>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      })
    }
  </div>
}