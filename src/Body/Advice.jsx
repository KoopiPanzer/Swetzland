import React from 'react';

export const Advice = () => {
  return (
    <div
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '15px',
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6',
        color: '#333',
        animation: 'fadeIn 1.5s ease-in-out',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          fontSize: '2rem',
          marginBottom: '20px',
          color: '#007BFF',
          animation: 'slideDown 1s ease-in-out',
        }}
      >
        Швейцария — страна альпийских вершин, кристальных озер и безупречного сервиса
      </h2>
      <h3 style={{ fontSize: '1.5rem', marginTop: '20px', color: '#007BFF', animation: 'fadeIn 1.5s ease-in-out' }}>
        📍 География и климат
      </h3>
      <p style={{ animation: 'fadeIn 2s ease-in-out' }}>
        Швейцария расположена в самом сердце Европы, граничит с Германией, Францией, Италией, Австрией и Лихтенштейном.
        Это страна контрастов: заснеженные пики Альп, живописные долины, зеркальные озера (Женевское, Цюрихское,
        Люцернское) и уютные средневековые городки. Климат умеренный, но зависит от региона: в горах — прохладно даже
        летом, на юге (Тичино) — почти средиземноморский.
      </p>
      <h3 style={{ fontSize: '1.5rem', marginTop: '20px', color: '#007BFF', animation: 'fadeIn 1.5s ease-in-out' }}>
        🏙️ Ключевые города и курорты
      </h3>
      <ul style={{ paddingLeft: '20px', animation: 'fadeIn 2s ease-in-out' }}>
        <li>Цюрих — финансовый центр с роскошными бутиками и оживленной культурной жизнью.</li>
        <li>Женева — дипломатическая столица, город фонтанов и шарма.</li>
        <li>Берн — столица с средневековым Старым городом (ЮНЕСКО).</li>
        <li>Люцерн — сказочная набережная, Часовенный мост и близость к горе Пилатус.</li>
        <li>Интерлакен — ворота к Юнгфрау, Мёнху и Эйгеру.</li>
        <li>Церматт — авто-фри курорт у подножия Маттерхорна.</li>
        <li>Санкт-Мориц — элитный горнолыжный курорт.</li>
      </ul>
      <h3 style={{ fontSize: '1.5rem', marginTop: '20px', color: '#007BFF', animation: 'fadeIn 1.5s ease-in-out' }}>
        🎿 Чем заняться?
      </h3>
      <ul style={{ paddingLeft: '20px', animation: 'fadeIn 2s ease-in-out' }}>
        <li>✔ Горные лыжи и сноуборд — лучшие курорты: Вербье, Давос, Гриндельвальд.</li>
        <li>✔ Пешие походы — тропы вдоль Энгандинских озер или маршрут "5 озер" в Церматте.</li>
        <li>✔ Железнодорожные туры — ледниковый экспресс, Бернина-экспресс.</li>
        <li>✔ Гастрономия — фондю, раклет, шоколад Lindt и вина Вале.</li>
        <li>✔ SPA и релакс — термы Бад-Рагац, Leukerbad.</li>
      </ul>
      <h3 style={{ fontSize: '1.5rem', marginTop: '20px', color: '#007BFF', animation: 'fadeIn 1.5s ease-in-out' }}>
        🛂 Виза и валюта
      </h3>
      <p style={{ animation: 'fadeIn 2s ease-in-out' }}>
        Швейцария входит в Шенген, но не в ЕС. Валюта — швейцарский франк (CHF). Уровень цен высокий, но сервис
        безупречен.
      </p>
      <h3 style={{ fontSize: '1.5rem', marginTop: '20px', color: '#007BFF', animation: 'fadeIn 1.5s ease-in-out' }}>
        🚆 Транспорт
      </h3>
      <p style={{ animation: 'fadeIn 2s ease-in-out' }}>
        Общественный транспорт — один из лучших в мире: поезда, автобусы, канатные дороги работают точно по расписанию.
        Выгодно купить Swiss Travel Pass для неограниченных поездок.
      </p>
      <h3 style={{ fontSize: '1.5rem', marginTop: '20px', color: '#007BFF', animation: 'fadeIn 1.5s ease-in-out' }}>
        🌟 Почему стоит выбрать Швейцарию?
      </h3>
      <ul style={{ paddingLeft: '20px', animation: 'fadeIn 2s ease-in-out' }}>
        <li>✅ Безопасность, чистота и порядок.</li>
        <li>✅ Идеально для активного отдыха и эко-туризма.</li>
        <li>✅ Культурное разнообразие: немецкая, французская и итальянская влияния.</li>
        <li>✅ Роскошные отели и уютные шале.</li>
      </ul>
      <p style={{ animation: 'fadeIn 2s ease-in-out' }}>
        Совет от агентства: Лучшее время для посещения — декабрь-март (лыжи) и июнь-сентябрь (трекинг, озера). Для
        романтики — весенние цветущие долины, а для гастротура — осенние виноградники Лаво (ЮНЕСКО).
      </p>
      <p style={{ animation: 'fadeIn 2s ease-in-out' }}>
        Швейцария — это страна, где каждый найдет свой идеальный отдых!
      </p>
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

          @keyframes slideDown {
            from {
              transform: translateY(-20px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};