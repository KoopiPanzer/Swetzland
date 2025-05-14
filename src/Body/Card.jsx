import React from 'react';

export const Card = () => {
  const cards = [
    {
      title: 'Альпы',
      description: 'Горный массив, занимающий большую часть территории Швейцарии.',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/5f/1f/1e/caption.jpg?w=1400&h=1400&s=1',
    },
    {
      title: 'Женевское озеро',
      description: 'Одно из крупнейших озёр в Западной Европе.',
      image: 'https://s3.eu-central-1.amazonaws.com/eputevoditel.com/images/switzerland-geneva.jpg',
    },
    {
      title: 'Цюрих',
      description: 'Крупнейший город Швейцарии с богатой историей.',
      image: 'https://static.euronews.com/articles/stories/08/89/28/70/1536x864_cmsv2_83950759-2e46-59b9-b99a-32a7e7f4659d-8892870.jpg',
    },
    {
      title: 'Рейнский водопад',
      description: 'Один из самых больших водопадов в Европе.',
      image: 'https://img.fotocommunity.com/rheinfall-d16414e5-2aed-4440-a41a-e1c0375f697d.jpg?width=1000',
    },
    {
      title: 'Берн',
      description: 'Столица Швейцарии с уникальной архитектурой.',
      image: 'https://badenguide.ru/wp-content/uploads/2018/08/SteFou-%D0%91%D0%B5%D1%80%D0%BD-e1534744001800.jpg',
    },
    {
      title: 'Люцерн',
      description: 'Город с живописным видом на Альпы и знаменитым мостом Капелльбрюкке.',
      image: 'https://badenguide.ru/wp-content/uploads/2018/08/Laszlo-Daroczy-%D0%9B%D1%8E%D1%86%D0%B5%D1%80%D0%BD-%D0%B2%D0%B8%D0%B4-%D1%81%D0%B2%D0%B5%D1%80%D1%85%D1%83-e1534571831840.jpg',
    },
    {
      title: 'Церматт',
      description: 'Горнолыжный курорт у подножия Маттерхорна.',
      image: 'https://www.ski.ru/kohana/upload/ckfinder_images/u40207/_thumbs/Images/1_DSC10083%20(175).jpg',
    },
    {
      title: 'Маттерхорн',
      description: 'Одна из самых известных гор в Альпах, символ Швейцарии.',
      image: 'https://a.travelcdn.mts.ru/travel-media/gora_matterhorn_v_alpah_v_shvejczarii_istoriya_mesta_1_022be6cf6a.webp',
    },
  ];

  return (
    <div>
      <h2
        style={{
          textAlign: 'center',
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '20px',
          color: '#333',
        }}
      >
        Популярные места
      </h2>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          gap: '20px',
          padding: '20px',
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              width: '300px',
              backgroundColor: 'white',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              overflow: 'hidden',
              textAlign: 'center',
            }}
          >
            <img
              src={card.image}
              alt={card.title}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
              }}
            />
            <div style={{ padding: '15px' }}>
              <h3 style={{ fontSize: '1.5rem', margin: '10px 0' }}>{card.title}</h3>
              <p style={{ fontSize: '1rem', color: '#555' }}>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};