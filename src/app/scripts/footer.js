'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CiLogin, CiLogout } from 'react-icons/ci';
import { BsSearch } from 'react-icons/bs';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
        <footer>
            <div className='footer-section'>
              <img src="/waktaverse_videos_new_logo_gray_text.png" alt="로고" className='footer-logo'/>
              <p className='madeby'><strong>Copyright ⓒ Team WakzipㆍWaktaverse Videos.</strong></p>
              <div className='footer_buttom'>
                <div className='footer_info'>
                  <p className='info_service'>Waktaverse Videos는 왁타버스에서 제공하는 서비스가 아닙니다.</p>
                  <p className='info_contact_mail'><a href='mailto:contact@wakzip.kr?subject=[문의]?body=문의를 작성하시고 전송하시면 Team Wakzip 서비스 팀으로 자동 전송됩니다.'>[문의] contact@wakzip.kr</a></p>
                </div>
                <div className='footer_terms'>
                  <p className='policy'><a href='/terms/policy'>이용약관</a></p>
                  <p className='privacy'><a href='/terms/privacy'><strong>개인정보 처리방침</strong></a></p>
                </div>
              </div>
            </div>
        </footer>
    </>
  );
}
