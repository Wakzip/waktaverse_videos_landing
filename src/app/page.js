'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import './globals.css';
import { IoTimerOutline } from "react-icons/io5";

export default function HomePage() {

  return (
    <>
      <div className='home'>
        <div className='home_banner'>
          <div className='home_banner_picture'>
            <img src="/misty_rainbow_banner.png"alt="Misty Rainbow 배너"width={1000}className='home_banner_picture'/>
            <div className='banner_detail'>
              <h2 className='banner_title'>[Misty Rainbow] 발매</h2>
              <Link href={'https://www.youtube.com/watch?v=DJLa8QYUtmQ'}><button className='banner_button'><p className='banner_button_p'>MV 보러가기</p></button></Link>
            </div>
          </div>
        </div>
        <div className='home_detail'>
            <div className='home_detail_title'>
              <div className='div_icons'>
                <IoTimerOutline/>
              </div>
              <h3>Waktaverse Videos</h3>
            </div>
            <div className='home_detail_info'>
              <p className='home_detail_p'>벌써부터 방문해주셔서 감사해요.<br></br><br></br>열심히 디자인, 개발 중에 있으니 조금만 기다려주세요!<br></br><br></br>다시 한번 모든 팬치분들과 이파리분들의 관심에 감사드려요!<br></br><br></br>- Team Wakzip 일동 -</p>
            </div>
          </div>
      </div>
          <footer>
            <div className='footer-section'>
              <img src="/waktaverse_videos_new_logo_gray_text.png" alt="로고" className='footer-logo'/>
              <p className='madeby'><strong>Copyright ⓒ Team WakzipㆍWaktaverse Videos.</strong></p>
              <p className='info_service'>Waktaverse Videos는 왁타버스에서 제공하는 서비스가 아닙니다.</p>
              <p className='info_contact_mail'><a href='mailto:contact@wakzip.kr?subject=[문의]?body=문의를 작성하시고 전송하시면 Team Wakzip 서비스 팀으로 자동 전송됩니다.'>[문의] contact@wakzip.kr</a></p>
            </div>
          </footer>
        </>
      )}
