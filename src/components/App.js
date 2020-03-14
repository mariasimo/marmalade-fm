/*global Mixcloud*/
import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import FeaturedMix from './FeaturedMix';
import { Header } from './Header';
import Home from './Home.js';
import About from './About';
import Archives from './Archives';

class App extends Component {
  constructor(props) {
    super(props)
    this.state= {
      playing: false,
      currentMix: ''
    }
  }

  mountAudio = async() => {
    this.widget = Mixcloud.PlayerWidget(this.player);
    await this.widget.ready
    await this.widget.play()

    this.widget.events.pause.on(
      () => {
        this.setState({playing: false},
          () =>  console.log(this.state))
      }
    );

    this.widget.events.play.on(
      () => {
        this.setState({playing: true},
          () => console.log(this.state))
      }
    );

  }

  actions = {
    togglePlay : () => {
      this.widget.togglePlay();
    },
  
    playMix : mixName => {
      this.setState({
        currentMix: mixName
      })
      this.widget.load(mixName, true)
      this.mountAudio()

    }
  }
  
  componentDidMount() {
    this.mountAudio()
  }


  render() {
    return (
      <div>
        <div className="flex-l justify-end">
          <FeaturedMix/>
          <div className="w-50-l relative z-1">
            <Header/>
      
            <Switch>
              <Route exact path="/" render={() => <Home {...this.state} {...this.actions}/>}/>
              <Route exact path="/archive" component={Archives}/>
              <Route exact path="/about" component={About}/>
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
