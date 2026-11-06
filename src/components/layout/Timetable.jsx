import './Timetable.css'

/**
 * Timetable — Figma「오전시간표」「오후시간표」(버스 운행 시각 목록)
 * 이름(오전/오후)과 시각 목록이 짝이라 <dl>(설명 목록)으로 만듭니다.
 *
 * @param {Array<{label: string, times: string[]}>} rows  예: [{ label: '오전', times: ['08:30', ...] }]
 */
function Timetable({ rows = [], className = '', ...rest }) {
  const classes = ['timetable', className].filter(Boolean).join(' ')

  return (
    <dl className={classes} {...rest}>
      {rows.map(({ label, times }) => (
        <div key={label} className="timetable__row">
          <dt className="timetable__label">{label}</dt>
          {times.map((time, i) => (
            <dd key={`${i}-${time}`} className="timetable__time">
              {time}
            </dd>
          ))}
        </div>
      ))}
    </dl>
  )
}

export default Timetable
