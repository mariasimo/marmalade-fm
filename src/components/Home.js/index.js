import React from 'react'
import Mix from '../Mix'

const Home = props => {
    return (
        <div className="flex flex-wrap justify-between mixes ph3 ph4-l">
            <div className="mix mb4">
                <Mix name="Trip Hop & Allies Vol. 6" id="/mol_/trip-hop-allies-vol-6-mr-moods-hai-le-mononome-ta-ku-q-funktion-onra-patrick-doyle-bonobo/" {...props}/>
            </div>
            <div className="mix mb4">
                <Mix name="Four Color Zack | MikiDz" id="/DJJazzyJeff/four-color-zack-mikidz/" {...props}/>
            </div>
            <div className="mix mb4">
                <Mix name="WairPAint | Dr. Martens On Air: Camden" id="/drmartens/warpaint-dr-martens-on-air-camden/" {...props}/>
            </div>
         
        </div>
    )
}

export default Home
