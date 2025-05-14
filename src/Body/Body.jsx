import React from 'react';

export const Body = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100vh',
        padding: '20px',
        backgroundImage: "url('https://blog-cdn.aviata.kz/posts/thumbnails/0_ee6e3ab20ccaf52f6b76f11f63551c84666f6b3bcddfcd8efe0aea9fa07367f9.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'black',
      }}
    >
      <div
        style={{
          maxWidth: '50%',
          fontSize: '1.2rem',
          lineHeight: '1.8',
          padding: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '15px',
          boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
          textAlign: 'justify',
          animation: 'fadeIn 1.5s ease-in-out',
        }}
      >
        <p>
          Швейцария — страна без выхода к морю, территория которой делится на три природных региона: горы Юра на севере, Швейцарское плато в центре и Альпы на юге, занимающие 61 % всей территории Швейцарии.
        </p>
        <p>
          Северная граница частично проходит по Боденскому озеру и Рейну, который начинается в центре Швейцарских Альп и образует часть восточной границы. Западная граница проходит по горам Юра, южная — по Итальянским Альпам и Женевскому озеру. Плато лежит в низине, но большая его часть расположена выше 500 метров над уровнем моря. Состоящие из лесистых хребтов (до 1600 м) молодые складчатые горы Юра протянулись на территорию Франции и Германии. Наивысшая точка Швейцарии находится в Пеннинских Альпах — пик Дюфур (4634 м), наинизшая — озеро Лаго-Маджоре — 193 м.
        </p>

        <a
          href="https://ru.wikipedia.org/wiki/%D0%A8%D0%B2%D0%B5%D0%B9%D1%86%D0%B0%D1%80%D0%B8%D1%8F"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: 'white',
            fontSize: '1rem',
            fontWeight: 'bold',
            textDecoration: 'none',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            transition: 'transform 0.3s ease, background-color 0.3s ease',
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.backgroundColor = '#0056b3';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.backgroundColor = '#007BFF';
          }}
        >
          Узнать больше
        </a>
      </div>

      <img
        src="https://world-karta.ru/images/57---------.jpg"
        alt="Карта Швейцарии"
        style={{
          maxWidth: '40%',
          height: 'auto',
          border: '3px solid #007BFF',
          borderRadius: '15px',
          boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
          animation: 'slideIn 1.5s ease-in-out',
        }}
      />
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes slideIn {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};