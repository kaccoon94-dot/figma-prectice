import './ListOneLine.css'
import Divider from './Divider.jsx'

/**
 * ListOneLine — Figma「List - One Line」(node 18:7603, 한 줄 글자 + 아래 구분선)
 * 사용 컴포넌트: Divider
 * 모바일_검색화면에서는 검색창의 이름표('검색어를 입력해주세요')로 쓰므로 htmlFor를 주면 <label>이 됩니다.
 *
 * @param {React.ReactNode} children  글자
 * @param {string} htmlFor            연결할 입력칸 id (있으면 <label>)
 */
function ListOneLine({ children, htmlFor, className = '', ...rest }) {
  const classes = ['list-one-line', className].filter(Boolean).join(' ')
  const Text = htmlFor ? 'label' : 'p'

  return (
    <div className={classes} {...rest}>
      <Text className="list-one-line__text" htmlFor={htmlFor}>
        {children}
      </Text>
      <Divider />
    </div>
  )
}

export default ListOneLine
