/*global Mixcloud*/
import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import FeaturedMix from './FeaturedMix';
import { Header } from './Header';
import Home from './Home.js';
import About from './About';
import Archives from './Archives';
import mixesData from '../data/mixes'

class App extends Component {
  constructor(props) {
    super(props)
    this.state= {
      playing: false,
      currentMix: '',
      mixIds : mixesData,
      mix:null,
      mixes: []
    }
  }

  fetchMixes = async () => {
    const {mixIds} = this.state
    mixIds.map(async (id, i) => {
      try {
        console.log(`http://localhost:4000/mixes/?mix=${id}`)
        const response = await fetch (`http://localhost:4000/mixes/?mix=${id}`)
        const mixPayload = await response.json()
        this.setState((prevState, props) => ({
          mixes: [...prevState.mixes, mixPayload]
        }))
      } catch(err){
        console.log(err)
      }
    })
  }

  mountAudio = async() => {
    this.widget = Mixcloud.PlayerWidget(this.player);
    await this.widget.ready

    this.widget.events.pause.on(
      () => {this.setState({playing: false})}
    );

    this.widget.events.play.on(
      () => {this.setState({playing: true})}
    );
  }

  actions = {
    togglePlay : () => {
      this.widget.togglePlay();
    },
  
    playMix : mixName => {
      const { currentMix } = this.state;
      if(mixName === currentMix) return this.widget.togglePlay()
      
      this.setState({
        currentMix: mixName
      })
      this.widget.load(mixName, true)
      this.mountAudio()
    }
  }
  
  componentDidMount() {
    this.mountAudio()
    this.fetchMixes()
  }

  render() {
    const [firstMix={}] = this.state.mixes
    return (
      <div>
        <div className="flex-l justify-end">
          <FeaturedMix {...this.state} {...this.actions} {...firstMix} id={firstMix.key}/>
          <div className="w-50-l relative z-1">
            <Header/>
      
            <Switch>
              <Route exact path="/" render={() => <Home {...this.state} {...this.actions}/>}/>
              <Route exact path="/archive" render={() => <Archives {...this.state} {...this.actions}/>}/>
              <Route exact path="/about" render={() => <About {...this.state}/>}/>
            </Switch>
          </div>
        </div>
        <iframe 
          title="AudioPlayer"
          width="100%" 
          height="60" 
          src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2Fmmhradio%2Fvivendii-sound-teezee-070320%2F" 
          frameBorder="0"
          className="db fixed bottom-0 z-5"
          ref={player => (this.player = player)}
        />
      </div>
    );
  }
}

export default App;
