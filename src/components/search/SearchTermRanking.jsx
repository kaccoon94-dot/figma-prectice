import { useState } from 'react'
import './SearchTermRanking.css'
import SearchTerm from './SearchTerm.jsx'

/* Figma 예시 내용 — 실제 데이터는 daily / weekly로 넘겨 바꿉니다 */
const DEFAULT_DAILY = ['안장', '안장자', '이장', '위패신청', '봉사시간', '사이버참배', '배우자합장신청', '추모행사', '안장식', '셔틀버스']
const DEFAULT_WEEKLY = ['안장 신청', '이장 신청', '위치정보확인', '위패신청', '추모', '사이버참배', '배우자합장신청', '봉안시설', '채용정보', '셔틀버스']

const PERIODS = [
  { value: 'daily', label: '일간' },
  { value: 'weekly', label: '주간' },
]

/**
 * SearchTermRanking — Figma「검색어」(node 349:10579, '많이 찾은 검색어' 목록)
 * 종류: 일간 / 주간 → 오른쪽 위 일간/주간 버튼으로 전환
 * 사용 컴포넌트: SearchTerm(검색어) × 10
 *
 * @param {string[]} daily       일간 순위 검색어 (1위부터)
 * @param {string[]} weekly      주간 순위 검색어 (1위부터)
 * @param {function} getHref     검색어 → 이동할 주소 (기본 '#')
 * @param {function} onTermClick 검색어를 눌렀을 때 함께 실행할 함수 (예: 검색 화면 닫기)
 * @param {'daily'|'weekly'} defaultPeriod  처음 보여줄 기간 (기본 'daily')
 * @param {number} headingLevel  제목 단계 (기본 2 → <h2>)
 */
function SearchTermRanking({
  daily = DEFAULT_DAILY,
  weekly = DEFAULT_WEEKLY,
  getHref = () => '#',
  onTermClick,
  defaultPeriod = 'daily',
  headingLevel = 2,
  className = '',
  ...rest
}) {
  const [period, setPeriod] = useState(defaultPeriod)
  const classes = ['search-term-ranking', className].filter(Boolean).join(' ')
  const terms = period === 'weekly' ? weekly : daily
  const Heading = `h${headingLevel}`

  return (
    <section className={classes} {...rest}>
      <div className="search-term-ranking__header">
        <Heading className="search-term-ranking__title">많이 찾은 검색어</Heading>
        {/* 일간/주간 — 선택된 쪽은 aria-pressed="true" */}
        <div className="search-term-ranking__period" role="group" aria-label="기간 선택">
          {PERIODS.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              className="search-term-ranking__period-button"
              aria-pressed={period === value}
              onClick={() => setPeriod(value)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* 검색순위 */}
      <ol className="search-term-ranking__list" aria-label={`${period === 'weekly' ? '주간' : '일간'} 검색 순위`}>
        {terms.map((term, i) => (
          <li key={`${i}-${term}`} className="search-term-ranking__item">
            <span className="search-term-ranking__rank">{String(i + 1).padStart(2, '0')}</span>
            <SearchTerm href={getHref(term)} onClick={onTermClick}>
              {term}
            </SearchTerm>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default SearchTermRanking
