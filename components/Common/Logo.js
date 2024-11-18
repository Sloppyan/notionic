// https://react-svgr.com/playground/
import * as React from 'react'

const Logo = (props) => (
  <img
    src='/favicon.svg'
    width='24'
    height='24'
    style={{
      opacity: 1
    }}
    {...props}
  />
)

export default Logo
