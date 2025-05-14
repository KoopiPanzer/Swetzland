import React from 'react';

export const Headder = () => (
  <div
    className="flex flex-col justify-center items-center"
    style={{
      backgroundImage: "url('https://perito.media/uploads/post/image/93d408cf7eec62d4f470745392c2b2451b11fa7966340c9272422e586aa49b2d/main_johannes-hofmann-PM5a_R83-YQ-unsplash.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      color: 'white',
      textAlign: 'center',
      padding: '20px',
    }}
  >
    <h1
      style={{
        fontSize: '4rem',
        fontWeight: 'bold',
        marginBottom: '30px',
        textShadow: '3px 3px 6px rgba(0, 0, 0, 0.8)',
        animation: 'fadeIn 2s ease-in-out',
      }}
    >
      Добро пожаловать в Швейцарию!
    </h1>
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
      `}
    </style>
  </div>
);