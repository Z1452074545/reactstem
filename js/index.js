import React from "react"
import ReactDOM from"react-dom"
import ComHeader from './src/components/comHeader'
import ComFonter from './src/components/comFonter'
import ComBody from './src/components/comBody'
class BodyIndex extends React.Component{
    constructor(){
        super()  //调用基类的所有对象
    }
    render(){
        return(
            <div>
            <ComHeader/>
            <ComBody/>
            <ComFonter/>
            </div>
        )
    }
}
ReactDOM.render(
    <BodyIndex/>,
    document.getElementById("root")
    
)