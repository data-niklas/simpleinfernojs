import {render, Component} from "./inferno.js"
import {createElement as c} from "./inferno-create-element.js"

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            counter: 0
        }
        this.inc = this.inc.bind(this)
    }

    inc(){
        this.setState({
            counter : this.state.counter + 1
        })
    }

    render(){
        return c("div",{},
            c("span",{
                onclick : this.inc
            },"You clicked this text:\t"),
           String( this.state.counter) + " times"
        )
    }

}

render( c(App),document.getElementById("app"))