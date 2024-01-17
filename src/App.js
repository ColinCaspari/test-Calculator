import React, { Component } from 'react';


class ButtonPanel extends Component {
    render() {
        return (
            <>
                <div id='full-grid'>
                    <div id='result'>123</div>

                    <div className="component-button-panel">
                        <div>
                            <button id='clear-button'>C</button>
                            <button id='operator'>/</button>
                        </div>
                        <div>
                            <button>7</button>
                            <button>8</button>
                            <button>9</button>
                            <button id='operator'>*</button>
                        </div>
                        <div>
                            <button>4</button>
                            <button>5</button>
                            <button>6</button>
                            <button id='operator'>-</button>
                        </div>
                        <div>
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button id='operator'>+</button>
                        </div>
                        <div>
                            <button>0</button>
                            <button>,</button>
                            <button id='result-button'>=</button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ButtonPanel;





