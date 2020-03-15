import React from 'react'
import Mix from '../Mix'

const Home = ({mixes, ...props}) => {
    return (
        <div className="flex flex-wrap justify-between mixes ph3 ph4-l">
          
    
            {mixes.map((mix, idx) => (
                <div className="mix mb4">
                    <Mix {...props} {...mix} id={mix.key}/>
                </div>        
            ))}
         
        </div>
    )
}

export default Home
