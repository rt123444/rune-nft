import React from "react";

export class Countdown extends React.Component {

    constructor(props) {
        super(props);
        this.state = {timeleft: "", live:true};
    }

    async componentDidMount() {
      this.setState({end: new Date(1631732400)});
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    async tick() {
        let now = new Date();
        let end = new Date('09/15/2021');
        let total = end - now;
        let seconds = Math.floor( (total/1000) % 60 );
        let minutes = Math.floor( (total/1000/60) % 60 );
        let hours = Math.floor( (total/(1000*60*60)) % 24 );
        let days = Math.floor( total/(1000*60*60*24) );
        if (total < 0) {
          this.setState({live:false});
          seconds = 0;
          minutes = 0;
          hours = 0;
          days = 0;
        }
        this.setState({
          timeleft: days + "d " + (hours < 10 ? "0" + hours : hours) + "h " + (minutes < 10 ? "0" + minutes : minutes) + "m " + (seconds < 10 ? "0" + seconds : seconds) + "s"
        });
    }

    render() {
      return (
        <h2                     
            style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 25,
            margin: '10px, 0, 0, 0',
          }}>{this.state.timeleft}</h2>          
      );
    }
  }