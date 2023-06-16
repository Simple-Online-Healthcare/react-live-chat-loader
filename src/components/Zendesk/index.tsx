import React, { CSSProperties } from 'react'

import useChat from '../../hooks/useChat'
import { ProviderProps, ClassNames } from '../../types'

const sopStyles: {
  button: CSSProperties
} = {
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
    borderRadius: '100px',
    bottom: '14px',
    left: '20px',
    boxShadow: '0 8px 24px rgb(0 0 0 / 16%)',
    backgroundColor: '#1D5CFF',
    cursor: 'pointer',
    position: 'fixed',
    zIndex: 2147483001,
    userSelect: 'none',
    fontWeight: 700,
    letterSpacing: 0.6,
    fontSize: '15px',
    lineHeight: 1.5,
    height: '45.98px',
    width: '135.7px',
    fontSmooth: 'always'
  }
}

interface Props extends ProviderProps {
  color?: string
}

const Provider = ({
  color,
  containerClass = ClassNames.container
}: Props): JSX.Element | null => {
  const [state, loadChat] = useChat({ loadWhenIdle: true })

  if (state === 'complete') return null

  return (
    <div className={containerClass}>
      <div
        role="button"
        aria-label="Load Chat"
        aria-busy="true"
        aria-live="polite"
        onClick={() => loadChat({ open: true })}
        onMouseEnter={() => loadChat({ open: false })}
        style={{ ...sopStyles.button }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          fill="#FFFFFF"
          x="0px"
          y="0px"
          width="20px"
          height="20px"
          viewBox="0 0 20 20"
          xmlSpace="preserve"
          aria-hidden="true"
        >
          <g></g>
          <g></g>
          <g></g>
          <g>
            <g>
              <g>
                <path d="M11,12.3V13c0,0-1.8,0-2,0v-0.6c0-0.6,0.1-1.4,0.8-2.1c0.7-0.7,1.6-1.2,1.6-2.1c0-0.9-0.7-1.4-1.4-1.4 c-1.3,0-1.4,1.4-1.5,1.7H6.6C6.6,7.1,7.2,5,10,5c2.4,0,3.4,1.6,3.4,3C13.4,10.4,11,10.8,11,12.3z"></path>
                <circle cx="10" cy="15" r="1"></circle>
              </g>
              <path d="M10,2c4.4,0,8,3.6,8,8s-3.6,8-8,8s-8-3.6-8-8S5.6,2,10,2 M10,0C4.5,0,0,4.5,0,10s4.5,10,10,10s10-4.5,10-10S15.5,0,10,0 L10,0z"></path>
            </g>
          </g>
        </svg>
        Support
      </div>
    </div>
  )
}

Provider.defaultProps = {
  color: '#1f93ff'
}

export default Provider
