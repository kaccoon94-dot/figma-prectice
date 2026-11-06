import './Divider.css'

/**
 * Divider — Figma「Divider」(node 18:7538, 구분선)
 * 내용을 나누는 가로선. 의미상 구분이므로 <hr>을 씁니다.
 */
function Divider({ className = '', ...rest }) {
  const classes = ['divider', className].filter(Boolean).join(' ')
  return <hr className={classes} {...rest} />
}

export default Divider
