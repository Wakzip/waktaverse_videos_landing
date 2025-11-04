'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Footer from './scripts/footer'
import Link from 'next/link'
import './globals.css';
import { IoTimerOutline } from "react-icons/io5";

export default function HomePage() {

  return (
    <>
      <div className='landing'>
        <div className='home'>
              <div className='home_banner'>
                <div className='home_banner_picture'>
                  <img src="/be_my_light_banner.png"alt="Be My Light 배너"className='home_banner_picture'/>
                  <div className='banner_detail'>
                    <h2 className='banner_title'>[Be My Light] 발매</h2>
                    <p className='banner_subtitle'>이세계아이돌의 첫 미니 앨범 'Be My Light'가 발매되었습니다!</p>
                    <div className='banner_buttons'>
                      <Link href={'https://youtu.be/3cEUPoPXz7E'}><button className='banner_button'><span>MV 보러가기</span></button></Link>
                      <Link href={'https://isegyechart.com'}><button className='banner_button'><span>이세계차트 가기</span></button></Link>
                    </div>
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
                <p className='home_detail_p'>왁타버스와 함께하는 생활, Waktaverse Videos.<br></br>오랜만에 랜딩페이지에서 인사드려요.<br></br><br></br>열심히 디자인, 개발 중에 있으니 조금만 기다려주세요!<br></br><br></br>다시 한번 모든 팬치분들과 이파리분들의 관심에 감사드려요!<br></br><br></br>- Team Wakzip 일동 -</p>
              </div>
            </div>
        </div>
      </div>
            <Footer />
        </>
      )}
