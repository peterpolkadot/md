import './globals.css';

export const metadata = {
  title: process.env.NEXT_PUBLIC_SITE_NAME || 'Money Directory'
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <main className='container'>{children}</main>
      </body>
    </html>
  );
}