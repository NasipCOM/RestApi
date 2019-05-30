import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

class Delete extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id:0
        };
    }

    handleChange = event => {
        this.setState({id:event.target.value})
    };

    handleSabmit = event => {
        event.preventDefault();
    
        axios.delete('https://jsonplaceholder.typicode.com/users/${this.state.id}')
            .then(res => {
                console.log(res);
                console.log(res.data);

            })
    };

    render() {
        return (
            <Wrapper>
                <form onSubmit={this.handleSabmit}> 
                Person ID
            <MyInput type="number" name="id" onChange={this.handleChange} ></MyInput>
            <button type="submit">Delete</button>
            </form>
            </Wrapper>
        );
    }
}
export default Delete;

const Wrapper = styled.div`
    margin: 0 auto;
    text-align: center;
`;
const MyInput = styled.input`
    `;