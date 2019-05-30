import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

class Put extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: ""
        };
    }

    handleChange = event => {
        this.setState({title:event.target.value})
    };

    handleSabmit = event => {
        event.preventDefault();
        const title = {
            title: this.state.name
        };
        axios.put("https://jsonplaceholder.typicode.com/users", {title})
            .then(res => {
                console.log(res);
                console.log(res.data);

            })
    };

    render() {
        return (
            <Wrapper>
                <form onSubmit={this.handleSabmit}> 
                Title 
            <MyInput type="text" name="title" onChange={this.handleChange} ></MyInput>
            <button type="submit">Add</button>
            </form>
            </Wrapper>
        );
    }
}
export default Put;

const Wrapper = styled.div`
    margin: 0 auto;
    text-align: center;
`;
const MyInput = styled.input`
    `;