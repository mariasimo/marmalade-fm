import React from 'react'

const PlayMix = ({playMix, id, currentMix, playing, children}) => {
    return (
        <div 
            className={`pointer ${(id === currentMix && playing === true) && 'playing'}`}
            onClick={()=>playMix(id)}
        >
            {children}
        </div>
    )
}

export default PlayMix
