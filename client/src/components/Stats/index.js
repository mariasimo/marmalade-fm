import React from 'react'

const Stat = ({statName, statNumber, statWord}) => {
    return (
        <div className="w-third tc pa3 ba bw2 b--light-gray" style={{marginRight: -2}}>
            <div className="f6 biryani ttu">{statName}</div>
    <div className="f5 b biryani-black ttu tracked">{statNumber} {statWord}</div>
        </div>
    )
}

export default Stat
