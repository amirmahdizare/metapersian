import React from 'react'

export const Menu = (props:React.SVGProps<SVGSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="20" viewBox="0 0 27 20" fill="none" {...props}>
            <path d="M1 19H26M1 1H26M1 10H26" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>
    )
}
