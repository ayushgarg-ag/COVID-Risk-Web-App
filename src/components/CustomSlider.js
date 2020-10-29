import React from 'react';
import './CustomSlider.css';

/*
    To use slider as a custom HTML tag in any other component:

    ex:     import CustomSlider from './CustomSlider';
            <CustomSlider min='0' max='100' step_count='0.5'/>

    min = minimum allowable value
    max = maximum allowable value
    step_count = step size of the sliders (interval between each increment)

    To change styling:
    -you can change any colors to whatever
    -you can change 'width' and 'max-width' in lines 3-4 to change the width of the slider to whatever (make sure width is a percentage)
    -plz try not to change anything else unless u understand what its doing cause a lot of scaling is hard-coded
     and it was frickin annoying to set the correct values thnx... :)
*/

class CustomSlider extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            lvalue: parseInt(this.props.min), //this value holds the MIN input value (to be used for back-end)
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