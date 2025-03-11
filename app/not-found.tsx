import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px', background: '#0a1929', color: '#fff' }} className='min-h-screen flex flex-col items-center justify-center gap-10'>
      <h1 style={{ fontSize: '48px' }}>404 - Səhifə Tapılmadı.</h1>
      <p style={{ fontSize: '18px' }}>Axtardığınız səhifə tapılmadı.</p>
      <Link href="/">
        <button style={{
          background: '#FFB869', 
          color: '#333',
          opacity: '0.8', 
          fontSize: '16px', 
          padding: '12px 24px', 
          border: 'none', 
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          Ana səhifə
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
