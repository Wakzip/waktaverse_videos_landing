import localFont from 'next/font/local';
import './globals.css';
import Navbar from './scripts/navbar';

const NotoBold = localFont({ 
  src: '../../public/fonts/NotoSansKR-Bold.ttf',
  name: 'Noto Sans KR',
  weight: '400 700',
 });

const Noto = localFont({ 
  src: '../../public/fonts/NotoSansKR-VariableFont_wght.ttf',
  name: 'Noto Sans KR',
  weight: '400 700',
});

export const metadata = {
  title: 'Waktaverse Videosㅣ함께 만들어 가는 왁타버스 생활',
  description: '모든 왁타버스 영상을 내 손 안에.',
  openGraph: {
    site_name: 'Waktaverse Videos',
    title: 'Waktaverse Videosㅣ함께 만들어 가는 왁타버스 생활',
    description: '모든 왁타버스 영상을 내 손 안에.',
    images: [
      {
        url: 'https://videos.wakzip.kr/metadata.png',
      },
    ],
    link: 'https://videos.wakzip.kr',
  },
  keywords: 'Waktaverse, 왁타버스, 왁타버스 비디오, Waktaverse Videos',
};

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
        <html lang="en">
        <head>
        <meta name="naver-site-verification" content="32a3c512748c75a608bb78c2a8d2440623a7641c" />
        </head>
          <body className={Noto.className}>
            {children}
          </body>
        </html>
    </>
  );
}
