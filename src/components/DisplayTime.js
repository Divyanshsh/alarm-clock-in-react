import React from 'react';

import SetAlarm from './SetAlarm';

class DisplayTime extends React.Component {
    state = {
        hour: '',
        minute: '',
        second: '',
        onClickRender: false,
        storedCurrentTime: null
    }

    getTime = () => {
        setTimeout(() => {
            const hour = new Date().getHours().toString();
            const minute = new Date().getMinutes().toString();
            const second = new Date().getSeconds().toString();
            this.setState({ hour: hour, minute: minute, second: second });
        }, 1000);
    }

    render() {
        this.getTime()
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col s5"></div>
                        <div className="col s3">
                            <h3>Alarm Clock</h3>
                        </div>
                        <div className="col s4"></div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col s1"></div>
                        <div className="col s2 blue lighten pulse">
                            <h4>{this.state.hour}</h4>
                        </div>
                        <div className="col s2">
                            <h4>:</h4>
                        </div>
                        <div className="col s2 blue lighten pulse">
                            <h4>{this.state.minute}</h4>
                        </div>
                        <div className="col s2">
                            <h4>:</h4>
                        </div>
                        <div className="col s2 blue lighten pulse">
                            <h4>{this.state.second}</h4>
                        </div>
                        <div className="col s1"></div>
                    </div>
                </div>
                <SetAlarm hour={this.state.hour} minute={this.state.minute} />
            </div>
        );
    }
}

export default DisplayTime;