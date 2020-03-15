import React from 'react'
import Mix from '../Mix'

const Home = ({mixes, ...props}) => {
    return (
        <div className="flex flex-wrap justify-between mixes ph3 ph4-l pad-bottom pb4">
          
            {mixes.slice(0,6).map((mix, idx) => (
                <div className="mix mb4">
                    <Mix {...props} {...mix} key={idx} id={mix.key}/>
                </div>        
            ))}
         
        </div>
    )
}

export default Home
