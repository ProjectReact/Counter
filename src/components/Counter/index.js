import React, { Component } from "react";

// 封装一个counter 组件
class Counter extends Component{
    render(){
        console.log(this.props);
        return (            
            <div className="counter">
                <h1>计算器总数：{ this.props.value }</h1>
                <button className="btn btn-primary" onClick={ this.props.onIncrement }> 点我加1 </button>
                <button className="btn btn-success" onClick={ this.props.onDecrement }> 点我减1 </button>
            </div>
        )
    }
}

Counter.propTypes = {

}
export default Counter;