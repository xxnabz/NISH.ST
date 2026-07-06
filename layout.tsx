export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{ background: '#090909', color: '#F7F5F2', fontFamily: 'sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
