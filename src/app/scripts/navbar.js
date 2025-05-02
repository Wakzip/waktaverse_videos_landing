'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src="/waktaverse_videos_new_logo.png" width="50px" alt="Waktaverse Videos 로고"/>
        </div>
        <div className="right-section">
        </div>
      </nav>
    </>
  );
}
