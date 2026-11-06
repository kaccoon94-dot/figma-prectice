import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router'
import './index.css';
import './App.css';
import Main from './pages/Main.jsx';
import Login from './pages/Login.jsx';
import SearchResult from './pages/SearchResult.jsx';
import UsageGuide from './pages/UsageGuide.jsx';

/* 화면이 바뀌면 맨 위로 (주소 # 이동은 제외) */
function ScrollToTop() {
  const { pathname, search } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname, search])
  return null
}

/**
 * 화면 주소
 * /           메인 (모바일_메인 · 데스크탑_메인)
 * /login      로그인 방식 선택
 * /search     통합검색 결과 (?q=검색어&type=menu|post)
 * /guide      이용 및 시설 안내
 * /guide/bus  버스운행
 */
function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        본문 바로가기
      </a>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="/guide" element={<UsageGuide />} />
        <Route path="/guide/bus" element={<UsageGuide />} />
        <Route path="*" element={<Main />} />
      </Routes>
    </>
  )
}

export default App
