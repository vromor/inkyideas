import React from 'react'
import './Gallery.css'
// import { Media } from "./media";
import { useParams } from 'react-router-dom';
// import { abc } from "./abc";
import { allphoto } from '../data';

function Section({ file, setFile, id }) {
    const params = useParams()
    let Media = allphoto.filter((item) => item.heading === params.title)

    console.log(Media[0]);
    return (

        <div>

            {params.title === "smalltownandruralmarketing" ? (
                <div className='ruralmarket'>
      <h1>Small Town & Rural Marketing</h1>
      <div>
        <p>In this days, rural markets have acquired significance, as the overall growth of the economy has resulted into substantial increase in the purchasing power of the rural communities in India. On account of green revolution, the rural areas are consuming a large quantity of industrial and urban manufactured products. In this context, a special marketing strategy, named rural marketing has emerged.

          The Indian rural market has a huge demand base and offers great opportunities to marketers. Two-third of Indian consumers live in rural areas and almost half of the national income is generated here therefore companies take key interest in marketing their products in rural markets.</p>

        <h3>Haats/Melas:</h3>

        <p>Haats (weekly markets) and melas are the places where we get to witness the maximum crowd of people from various villages, huge brand exposure and utmost visibility of customers. This is the reason which makes them great for promoting brands as we get to interact and connect with maximum no. of audiences. They offer a variety of media opportunities in one place. We at Inkyideas, target these activities for conducting campaigns to provide best sale oriented results.
        </p>
        <h3>Mandi Participation:</h3>

        <p>Mandi is a place where harvested crops are displayed for selling by various vendors. People come here with the mindset of buying and spending money. Thus we get maximum no. of superior buyers. Inkyideas makes your brand/product visible in these Mandis by actively participating in the same with its innovative ways, which definitely help in amplifying your business with increased sales and high visibility.
        </p>
        <h3>Rural Integrated Communication programmes:</h3>

        <p>In any form of rural communication, while we may have a national strategy, we have to think and act locally. We use the ‘slice of life’ approaches which are simple and direct, targeting all age groups which include youngsters, kids, women, oldies, etc. An integrated package consists of different mass media options such as radio, local TV channels and other media options like distributing pre- activity pamphlets, putting hoardings, banners, etc. With this process we integrate the communication strategy to reach out our TG better, put a stronger impact on them and get maximum audience during the final activity.
        </p>
        <h3>Rural Loyalty Programmes:</h3>

        <p>Brand loyalty stands for active involvement of a consumer with a brand. Rural consumers are more comfortable with the concept of brand stickiness which means they are happy with a brand that gives reasonable satisfaction and do not wish to get into experimentation. Inkyideas creates that stickiness or the loyalty of those rural customers for your brand through its Rural Loyalty Programmes.
        </p>
        <h3>Buying Decision Building & Influencing Programmes:</h3>

        <p>With this special programme, Inkyideas provides a good deal of information about the positive consequences of buying your brand by stressing the important attributes of the product, the advantages compared with the competition and even encourage “trial” or “sampling” of the product. This programme persuades the potential customer that the product will satisfy his or her needs. Then after having made a purchase, we encourage customers to make the right decision & influence them for their next purchase of the same product.</p>
        <h3>Tele Marketing:</h3>

        <p>Telemarketing is one of the ways of direct marketing which sells the product on phone. It provides immediate feedback & valuable information that can be quickly analyzed. Inkyideas team provides your brand, endless opportunities to increase your business horizons through telemarketing. We take regular feedback of your products to get the better understanding of customer’s persuasion for the same.
        </p>
        <h3>Visibility Solutions:</h3>

        <p>When a brand's personality and essence are creatively expressed by its physical surroundings – the environment comes alive with the power of amplified purchase. Our creative team similarly portrays your brand in an innovative manner so as to give utmost visibility solutions.
        </p>
        <h3>Folk Media:</h3>

        <p>Traditional folk media is a term used to denote ‘people‘s performances′. Rural India is a treasure trove of folk art, theatre, music, dance, art and craft. It has several advantages over conventional mass media which are –

          It has immediate feedback and increased attentiveness. Regional / local level variations make it closer to the people.

          Scope for using body language or non verbal language is high.

          It is performed in a common language, which makes it easier to connect with rural lives effectively.

          We give your brand effective Folk media solutions to benefit your product from above advantages.</p>

        <h3>Rural Merchandising:</h3>
        <p>Rural retailers face a huge ammount of pressures in their struggle to increase sales. One big challenge is to get an effective visual merchandising display to get the benefit of more visibility. Inkyideas team provides various concepts of low-cost & effective visual merchandising techniques to create a strong impact on buyers resulting in increased sales.
        </p>
      </div>
    </div>
            ): null};

            <div className='gallery'>
                <div className="container">
                    <h1> Photo Gallery  </h1>
                    <div className="media-container">
                        {Media[0].images.map((file, index) => (
                            <div className="media" key={index} onClick={() => setFile(file)}>
                                {file.type === "image" ? (
                                    <img src={file.url} alt="" />
                                ) : (
                                    <video src={`${file.url}#t=0.001`} muted preload="metadata" />
                                )}

                            </div>
                        ))}
                    </div>

                    <div className="popup-media" style={{ display: file ? "block" : "none" }}>
                        <span onClick={() => setFile(null)}> &times; </span>
                        {file?.type === "video" ? (
                            <video src={file?.url} muted autoplay controls />
                        ) : (
                            <img src={file?.url} />
                        )}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Section