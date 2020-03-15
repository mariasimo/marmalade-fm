import React from 'react'
import Stat from '../Stats'

const About = ({mixes}) => { 
    return (
        <div className="ph3 ph4-l">
            <div className="measure center lh-copy f4 ph3">
                <p className="mt0">
                    Marmalade.fm features the lastes and greatest in grooves, beats and world music.
                </p>

                <p>Wheter you're into hip hop, trip hop, classic jazz, fusion jazz, afro beat or break beat... we have you covered!</p>
            </div>

            <div className="flex pt3">
                <Stat statName="Featuring..." statNumber={mixes.length} statWord="mixes"/>
                <Stat statName="Played..." statNumber={ mixes.reduce((ac, cu) => ac + cu.play_count, 0)} statWord="times"/>
                <Stat statName="Total" statNumber={mixes.reduce((ac, cu) => ac + cu.audio_length, 0)} statWord="seconds"/>      
            </div>
        </div>
    )
}

export default About
