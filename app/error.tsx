"use client";

const ErrorPage = () => {

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px', background: '#0a1929', color: '#fff' }} className='min-h-screen flex flex-col items-center justify-center gap-10'>
      <h1 style={{ fontSize: '48px' }}>Xəta baş verdi.</h1>
      <p style={{ fontSize: '18px' }}>Texniki xəta baş verdi. Biraz sonra yenidən yoxlayın.</p>
      <button
        onClick={reloadPage}
        style={{
          background: '#FFB869',
          color: '#333',
          fontSize: '16px',
          opacity: '0.8',
          padding: '12px 24px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Yenilə
      </button>
    </div>
  );
};

export default ErrorPage;
