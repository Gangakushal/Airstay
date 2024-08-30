import React from 'react'

export default function DropDown({children}) {
    return (
        <details className="dropdown">
            {children}
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
            </ul>
        </details>
    )
}
