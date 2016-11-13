import React, {Component} from 'react';
import {connect} from "react-redux";

class App extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-8 col-xs-offset-2">
                        <h1>{this.props.data.greet}</h1>
                        <button className="btn btn-primary btn-block"
                                onClick={() => this.props.setData("Made by Zakria Sarmini")}>Click Me !
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setData: (payload) => {
            dispatch({
                type: "CHANGE",
                payload: payload
            })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
