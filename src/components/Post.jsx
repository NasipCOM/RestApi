import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

class Post extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: ""
        };
    }

    handleChange = event => {
        this.setState({name:event.target.value})
    };

    handleSabmit = event => {
        event.preventDefault();
        const title = {
            name: this.state.name
        };
        axios.post("https://jsonplaceholder.typicode.com/users", {title})
            .then(res => {
                console.log(res);
                console.log(res.data);

            })
    };

    render() {
        return (
            <Wrapper>
                <form onSubmit={this.handleSabmit}> 
                Users
            <MyInput type="text" name="name" onChange={this.handleChange} ></MyInput>
            <button type="submit">Add</button>
            </form>
            </Wrapper>
        );
    }
}
export default Post;

const Wrapper = styled.div`
    margin: 0 auto;
    text-align: center;
`;
const MyInput = styled.input`
    `;