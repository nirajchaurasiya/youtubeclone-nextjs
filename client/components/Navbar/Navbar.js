import React, { useEffect, useState } from 'react'
import { AiOutlineHistory, AiOutlineHome, AiOutlineLike, AiOutlineMenu, AiOutlineNotification, AiOutlinePaperClip, AiOutlineSearch, AiOutlineSetting, AiOutlineVideoCamera } from 'react-icons/ai'
import { MdOutlineAppShortcut, MdOutlineExpandMore, MdOutlineFeedback, MdOutlineHelpCenter, MdOutlineMovieCreation, MdOutlinePhotoLibrary, MdOutlineReportGmailerrorred, MdOutlineSportsScore, MdOutlineWatchLater, MdQueueMusic, MdSubscriptions, MdTrendingUp, MdVideoSettings } from 'react-icons/md'
import { IoGameControllerOutline } from 'react-icons/io5'
import Image from 'next/image'
import Subscriptions from '../../subscriptions/Subscriptions.json'
export default function Navbar() {
  const [colorModeIcon, setColorModeIcon] = useState('🌜');
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [width, setWidth] = useState(null);
  const [showMenu, setShowMenu] = useState(false)
  const changeTheClass = () => {
    if (localStorage.getItem('youtubeColorMode') === 'light') {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      localStorage.setItem('youtubeColorMode', 'dark')
      setColorModeIcon('🌞')
    }
    else if (localStorage.getItem('youtubeColorMode') === 'dark') {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
      localStorage.setItem('youtubeColorMode', 'light')
      setColorModeIcon('🌜')
    }
  }
  useEffect(() => {
    if (localStorage) {
      if (localStorage.getItem('youtubeColorMode')) {
        const mode = localStorage.getItem('youtubeColorMode')
        document.body.classList.add(mode);
        if (mode === 'dark') {
          setColorModeIcon('🌞')
        }
      } else {
        localStorage.setItem('youtubeColorMode', 'light');
      }
    }
    function handleResize() {
      setWidth(window.innerWidth);
      console.log(width)
    }

    handleResize(); // Set initial width on mount

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])
  return (
    <>
      <div className='full_navbar_border'>

        <div className='navbar_main'>
          <ul className="menu_logo">
            <li><AiOutlineMenu /> </li>
            <li><Image width={100} height={25} src="/assests/logo.png" alt="logo" /></li>
          </ul>
          <ul className="search_bar_btn">
            <input type="text" placeholder='search' onClick={() => { setShowSuggestions(!showSuggestions) }} />
            <button><AiOutlineSearch /></button>
          </ul>
          {showSuggestions && <div className="showSuggestions">
            {[1, 2, 3, 4, 5, 6, 7].map((e, index) => {
              return (
                <p key={index}>Hello World</p>
              )
            })}
          </div>}
          <ul className="profile_video_add_notification">
            <li><AiOutlineVideoCamera /></li>
            <li><AiOutlineNotification /></li>
            <li><Image width={100} height={100} className='profile_navbar' src="/assests/profile.jpg" alt="profile" /></li>
            <li onClick={changeTheClass}>{colorModeIcon}</li>
          </ul>
        </div>


      </div>
      <div className='side_bar'>
        <div className="mid_side_bar">
          <div className="side_bar_contents">

            <div className="important_links">
              <p style={{ display: "flex", alignItems: "center", gap: "1rem" }}><AiOutlineHome />  <span> Home </span> </p>
              <p style={{ display: "flex", alignItems: "center", gap: "1rem" }}><MdOutlineAppShortcut />  <span> Shorts </span> </p>
              <p style={{ display: "flex", alignItems: "center", gap: "1rem" }}><MdSubscriptions /> <span> Subscriptions </span> </p>
            </div>
            <div className="hr"></div>

            <div className="second_div_links">
              <p style={{ display: "flex", alignItems: "center", gap: "1rem" }} ><MdOutlinePhotoLibrary /> <span> Library </span> </p>
              <p style={{ display: "flex", alignItems: "center", gap: "1rem" }} ><AiOutlineHistory /> <span> History </span> </p>
              <p style={{ display: "flex", alignItems: "center", gap: "1rem" }} ><MdVideoSettings /> <span> Your videos </span> </p>
              <p style={{ display: "flex", alignItems: "center", gap: "1rem" }} ><MdOutlineMovieCreation /> <span> Your movies </span> </p>
              <p style={{ display: "flex", alignItems: "center", gap: "1rem" }} ><MdOutlineWatchLater />  <span> Watch later </span> </p>
              <p style={{ display: "flex", alignItems: "center", gap: "1rem" }} ><AiOutlinePaperClip /> <span> Your clips </span> </p>
              <p style={{ display: "flex", alignItems: "center", gap: "1rem" }} ><AiOutlineLike /> <span> Liked videos </span> </p>
              <button className='show_none_to_phone'>Show More<MdOutlineExpandMore /></button>
            </div>
            <div className="hr" style={{ marginTop: "5%" }}></div>
            <div className="show_none_to_phone">
              <div className="third_div_links">
                <h4>Subscriptions</h4>
                {Subscriptions.map(e => {
                  return (
                    <div key={e?.name} className="image_profile">
                      <img src={e?.img} alt="profile" />
                      <span title={e?.name}>{e.name.length > 16 ? e.name.slice(0, 14) + '..' : e?.name}</span>
                    </div>
                  )
                })}

              </div>

              <div className="hr" style={{ marginTop: "5%" }}></div>
              <div className="third_div_links">
                <h4>Explore</h4>
                <div className='mid_third_div_links'>
                  <p style={{ display: "flex", alignItems: "center", gap: "1rem" }} ><MdTrendingUp /> <span> Trending </span> </p>
                  <p style={{ display: "flex", alignItems: "center", gap: "1rem" }} ><MdQueueMusic /> <span> Music </span> </p>
                  <p style={{ display: "flex", alignItems: "center", gap: "1rem" }} ><IoGameControllerOutline /> <span> Gaming </span> </p>
                  <p style={{ display: "flex", alignItems: "center", gap: "1rem" }} ><MdOutlineSportsScore /> <span> Sports </span> </p>
                </div>
              </div>
              <div className="hr" style={{ marginTop: "5%", marginBottom: "5%" }}></div>
              <div className="important_links">
                <p style={{ display: "flex", alignItems: "center", gap: "1rem", backgroundColor: "transparent" }}><AiOutlineSetting /> <span> Settings </span> </p>
                <p style={{ display: "flex", alignItems: "center", gap: "1rem" }} ><MdOutlineReportGmailerrorred /> <span> Report history </span> </p>
                <p style={{ display: "flex", alignItems: "center", gap: "1rem" }} ><MdOutlineHelpCenter /> <span> Help </span> </p>
                <p style={{ display: "flex", alignItems: "center", gap: "1rem" }} ><MdOutlineFeedback /> <span> Send feedback </span> </p>
              </div>
              <div className="hr" style={{ marginTop: "5%", marginBottom: "5%" }}></div>

              <div className="report_links">
                <a href='#' style={{ backgroundColor: "transparent" }}>About</a>
                <a href='#' style={{ backgroundColor: "transparent" }}>Press</a>
                <a href='#' style={{ backgroundColor: "transparent" }}>Copyright</a>
                <a href='#' style={{ backgroundColor: "transparent" }}>Contactus</a>
                <a href="#">Creators</a>
                <a href="#">Advertise</a><a href="#">Developers</a><a href="#">Terms</a><a href="#">Privacy</a><a href="#">Policy and safety</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
