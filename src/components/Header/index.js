import React from 'react'

export const Header = props => {
    return (
        <header className="black mb5 pt5">
            <h1 className="ttu f3 tracked-mega anton tc mt0 mb3">Marmalade.fm</h1>
            <ul className="flex list justify-center pl0">
                <li className="mh2"><a className="nav-link biryani-black f6 ttu gray" href="#">What's hot</a></li>
                <li className="mh2"><a className="nav-link biryani-black f6 ttu gray" href="#">Archive</a></li>
                <li className="mh2"><a className="nav-link biryani-black f6 ttu gray" href="#">About</a></li>
            </ul>
        </header>     
    )
}
