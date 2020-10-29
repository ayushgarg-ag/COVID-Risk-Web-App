import React from 'react';
import './CustomSlider.css';

class CustomSlider extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            lvalue: parseInt(this.props.min), //this value holds the MIN input value
            rvalue: parseInt(this.props.max), //this value holds the MAX input value
            _step: parseFloat(this.props.step_count)
        }

        this.leftInputUpdated = this.leftInputUpdated.bind(this);
        this.rightInputUpdated = this.rightInputUpdated.bind(this);
    }

    leftInputUpdated(event){
        var targetValue1 = event.target.value;
        targetValue1 = Math.min(targetValue1, this.state.rvalue - this.state._step);
        var percent = ((targetValue1 - this.props.min) / (this.props.max - this.props.min)) * 100;

        this.setState({ lvalue: Math.round(percent * 100) / 100 });
    }
    rightInputUpdated(event){
        var targetValue = event.target.value;
        targetValue = Math.max(targetValue, this.state.lvalue + this.state._step);
        var percent = ((targetValue - this.props.min) / (this.props.max - this.props.min)) * 100;

        this.setState({ rvalue: Math.round(percent * 100) / 100 });
    }
    
    render(){
        const rangeStyle = {
            left: this.state.lvalue + '%',
            right: (100 - this.state.rvalue) + '%' 
        };

        return(
            <div className="frame">
                <input
                    className='input-left'
                    type='range'
                    min={this.props.min}
                    max={this.props.max}
                    step={this.props.step_count}
                    value={this.state.lvalue}
                    onInput={this.leftInputUpdated}/>
                <input
                    className='input-right'
                    type='range'
                    min={this.props.min}
                    max={this.props.max}
                    step={this.props.step_count}
                    value={this.state.rvalue}
                    onInput={this.rightInputUpdated}/>
                <div className='bar' style={{backgroundColor: this.state.bgcolor}}>
                    <div className='track'/>
                    <div className='range'
                        style={rangeStyle}/>
                    <div className='thumb left'
                        style={{left: this.state.lvalue + '%'}}/>
                    <div className='thumb right'
                        style={{right: (100 - this.state.rvalue) + '%'}}/>
                    <p className='info left'
                        style={{left: this.state.lvalue + '%'}}>{this.state.lvalue}</p>
                    <p className='info right'
                        style={{right: (100 - this.state.rvalue) + '%'}}>{this.state.rvalue}</p>
                </div>
            </div>
        )
    }
}

export default CustomSlider;