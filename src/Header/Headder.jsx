import React from 'react';

export const Headder = () => {
  return (
    <div
      className="flex flex-col justify-center items-center"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://russagency.ru/upload/Image/catalog/big/19502-2.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <h1 className="text-3xl text-white font-bold mb-4">Добро пожаловать</h1>
      <button
        style={{
          padding: '10px 20px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Больше информации
      </button>
    </div>
  );
};