import React from 'react';

class SetAlarm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            time: '',
            hour: '',
            minute: '',
            newClock: { h: '', m: '' },
            onClickRenderInput: false,
        }

        this.url = "http://streaming.tdiradio.com:8000/house.mp3";
        this.audio = new Audio(this.url)
    }

    componentDidUpdate() {
        if (this.state.newClock.h === this.props.hour && this.state.newClock.m === this.props.minute) {
            this.audio.play();
        }
    }

    getClockTime = e => {
        if (e.target.value >= 0 && e.target.value <= 23 && e.target.name === 'hour') {
            this.setState({ [e.target.name]: e.target.value })
        } else if (e.target.value >= 0 && e.target.value <= 59 && e.target.name === 'minute') {
            this.setState({ [e.target.name]: e.target.value })
        } else {
            return null
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s5"></div>
                    <div className="col s5">
                        <button onClick={() => {
                            this.setState({ onClickRenderInput: true })
                        }} className="btn waves-effect waves-purple" type="submit" name="action">
                            Set Alarm
                        </button>
                    </div>
                </div>
                {
                    this.state.onClickRenderInput ?
                        <div className="container">
                            <div className="row">
                                <div className="col s4"></div>
                                <div className="col s4">
                                    <label><h5>Hour</h5></label>
                                    <input onChange={this.getClockTime} value={this.state.hour} name="hour" type="number" />
                                    <label><h5>Minute</h5></label>
                                    <input onChange={this.getClockTime} value={this.state.minute} name="minute" type="number" />
                                </div>
                                <div className="col s4"></div>
                            </div>
                            <div className="row">
                                <div className="col s4"></div>
                                <div className="col s4">
                                    <button onClick={() => {
                                        const hr = this.state.hour;
                                        const mt = this.state.minute;
                                        this.setState({ newClock: { h: hr, m: mt } })
                                        this.setState({ hour: '', minute: '' });
                                        this.setState({ onClickRenderInput: false })
                                    }} className="btn waves-effect waves-purple" type="submit" name="action">Submit</button>
                                </div>
                                <div className="col s4"></div>
                            </div>
                        </div>
                        :
                        null
                }
            </div>
        );
    }
}

export default SetAlarm;