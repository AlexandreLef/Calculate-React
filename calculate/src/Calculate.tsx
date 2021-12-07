import React from 'react';
import './Calculate.css';
import Keyboard from './Keyboard';
import Screen from './Screen';
import Header from './Header';

type CalculateProps = {}

type CalculateStates = {
    n1: string,
    n2: string,
    operator: string,
    result: number | null
}

class Calculate extends React.Component<CalculateProps, CalculateStates> {

    constructor(props: CalculateProps) {
        super(props);
        this.state = {
            n1: "",
            n2: "",
            operator: "",
            result: null
        } ;

    }

    sendNumber(x: number) {
        if (this.state.operator === "") {
            this.setState({
                ...this.state,
                n1: this.state.n1 + x.toString(),
                result: null
            })
        } else {
            this.setState({
                ...this.state,
                n2: this.state.n2 + x.toString()
            })
        }
    }

    sendString(x: string) {
        switch (x) {
            case "=":
                if (this.state.n1 === "") {
                    this.setState({
                        ...this.state,
                        result: 0
                    })
                } else if (this.state.n2 === "") {
                    this.setState({
                        ...this.state,
                        result: parseFloat(this.state.n1)
                    })
                } else {
                    let res = this.compute()
                    this.setState({
                        n1: "",
                        n2: "",
                        operator: "",
                        result: res
                    })
                }                
                break;

            case "Del":
                if (this.state.n1 !== "" && this.state.operator === "") {
                    this.setState({
                        ...this.state,
                        n1: this.state.n1.slice(0, - 1)
                    })
                } else if (this.state.operator !== "" && this.state.n2 === "" ) {
                    this.setState({
                        ...this.state,
                        operator: ""
                    })
                } else {
                    this.setState({
                    ...this.state,
                    n2: this.state.n2.slice(0, - 1)
                    })
                }
                break;
           
            case "AC":
                this.setState({
                    n1: "",
                    n2: "",
                    operator: "",
                    result: null
                })
                break;
   
            case ".":
                if (this.state.operator === "") {
                    if (this.state.n1 === "") {
                        this.setState({
                            ...this.state,
                            n1: "0" + x.toString()
                        })
                    } else {
                        this.setState({
                        ...this.state,
                        n1: this.state.n1 + x.toString()
                        }) 
                    }
                } else {
                    if (this.state.n2 === "") {
                        this.setState({
                            ...this.state,
                            n2: "0" + x.toString()
                        })
                    } else {
                       this.setState({
                        ...this.state,
                        n2: this.state.n2 + x.toString()
                    }) 
                    }
                }
                break;
                
            case "+":
            case "-":
            case "*":
            case "/":
                if (this.state.operator === "") {
                    this.setState({
                        ...this.state,
                        operator: x
                    })
                }
                break;
            default:
                break;
        }
    }

    compute() {
        switch (this.state.operator) {
            case "+":
                return parseFloat(this.state.n1) + parseFloat(this.state.n2) 
            case "-":
                return parseFloat(this.state.n1) - parseFloat(this.state.n2)
            case "*":
                return parseFloat(this.state.n1) * parseFloat(this.state.n2)
            case "/":  
                if (this.state.n2 === "0") {
                    return parseInt("Error")
                }
                return parseFloat(this.state.n1) / parseFloat(this.state.n2)
            default:
                return 0;
        }
    }

    render() {
        let valueDisplay = this.state.n1+this.state.operator+this.state.n2

        if (this.state.result !== null) {
            valueDisplay = this.state.result.toString()
        }

        return (
            <div className="calculate">
                <div className="header"><Header /></div>
                <div className="container">
                    <div className="row my-2"><Screen value={valueDisplay}/></div>
                    <div className="keyboard my-2"><Keyboard 
                    onNumberButtonClicked={this.sendNumber.bind(this)}
                    onOperatorButtonClicked={this.sendString.bind(this)}
                    onOtherButtonClicked={this.sendString.bind(this)}
                    /></div>
                </div>
            </div>
        )
    }
}

export default Calculate;