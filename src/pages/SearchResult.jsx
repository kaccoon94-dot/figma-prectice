import { Fragment } from 'react'
import { useSearchParams, useNavigate } from 'react-router'
import './InnerPage.css'
import './SearchResult.css'
import HomeShortcut from '../components/layout/HomeShortcut.jsx'
import TopBanner from '../components/layout/TopBanner.jsx'
import Divider from '../components/layout/Divider.jsx'
import Breadcrumb from '../components/layout/Breadcrumb.jsx'
import RelatedSites from '../components/layout/RelatedSites.jsx'
import Footer from '../components/layout/Footer.jsx'
import SearchTypeTab from '../components/search/SearchTypeTab.jsx'
import SearchBox from '../components/search/SearchBox.jsx'
import SearchResultItem from '../components/search/SearchResultItem.jsx'

/* Figma 예시 결과 (검색어 '셔틀버스') — 실제 검색 기능이 생기면 서버 결과로 바꿉니다 */
const MENU_RESULTS = [
  { title: '2026년 국립대전현충원 추석 연휴 기간 셔틀버스 이용 안내', to: '/guide/bus' },
  { title: '셔틀버스 운행 안내', to: '/guide/bus' },
]
const POST_RESULTS = [
  {
    title: '추석 연휴 기간 셔틀버스 추가 운행 안내',
    description:
      '추석을 맞이하여 경건한 참배 분위기를 조성하고 국가유공자 유가족이 편안히 참배하실 수 있도록 추가 셔틀버스를 운영을 시행 할 계획입아래',
    to: '#',
  },
  {
    title: '대전 현충원 내 셔틀버스 운영 안내',
    description:
      '국가유공자 유가족이 편안히 참배하실 수 있도록 아래와 같이 안내하오니 참고하여 주시기 바랍니다. ○ 추석 연휴 전주(9.27.~28.)및 연휴(10.3.~8.)에는 일방통행을 실시합니다. - 추석 명절 기간 교통량 증가에 따라 일방통행을 실시하오니 첨부된 일방통행로 및 주차지역을 미리 확인하시고, 묘소 옆 도로에 주차하실 경우 진행방향 우측으로 주차하여 주시기 바랍니다.',
    to: '#',
  },
]

function search(list, query) {
  if (!query) return []
  const q = query.toLowerCase()
  return list.filter(
    ({ title, description = '' }) => title.toLowerCase().includes(q) || description.toLowerCase().includes(q),
  )
}

/**
 * SearchResult — Figma「모바일_검색화면 A_1 · A_2 · B_1 · B_2」(통합검색 결과)
 * - A_1 메뉴 결과 / A_2 게시글 결과 / B_1 · B_2 결과 없음
 * - 주소: /search?q=검색어&type=menu|post
 * - 결과 개수·결과 없음 안내는 aria-live로 스크린리더가 읽어 줌
 */
function SearchResult() {
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const query = params.get('q') ?? ''
  const type = params.get('type') === 'post' ? 'post' : 'menu'
  const results = search(type === 'post' ? POST_RESULTS : MENU_RESULTS, query)

  const handleSearch = (q) => navigate(`/search?q=${encodeURIComponent(q)}&type=${type}`)

  return (
    <div className="inner-page search-result-page">
      <HomeShortcut />
      <header>
        <TopBanner compact />
      </header>

      <main id="main" className="inner-page__main" tabIndex={-1}>
        <Breadcrumb current="통합검색" />

        <h1 className="search-result-page__title">통합검색</h1>

        <div className="search-result-page__block">
          <SearchTypeTab type={type} query={query} />
        </div>

        <div className="search-result-page__block">
          {/* key: 주소의 검색어가 바뀌면 입력칸도 새 검색어로 */}
          <SearchBox key={query} defaultValue={query} onSearch={handleSearch} />
        </div>

        {/* 검색결과가있습니다 / 검색결과가 없습니다 */}
        <div className="search-result-page__status" aria-live="polite">
          {query && results.length > 0 && (
            <p className="search-result-page__summary">
              <span>검색어 ‘{query}’</span>
              <span>
                검색 결과 표시 갯수 <strong>{String(results.length).padStart(2, '0')}</strong>개
              </span>
            </p>
          )}
          {query && results.length === 0 && <p className="search-result-page__empty">‘{query}’에 대한 검색결과가 없습니다.</p>}
        </div>

        {results.length > 0 && (
          <ul className={`search-result-page__list search-result-page__list--${type}`}>
            {results.map((result, i) => (
              <Fragment key={result.title}>
                {i > 0 && (
                  <li className="search-result-page__divider" aria-hidden="true">
                    <Divider />
                  </li>
                )}
                <li className="search-result-page__item">
                  <SearchResultItem {...result} query={query} />
                </li>
              </Fragment>
            ))}
          </ul>
        )}
      </main>

      <footer>
        <RelatedSites />
        <Footer />
      </footer>
    </div>
  )
}

export default SearchResult
