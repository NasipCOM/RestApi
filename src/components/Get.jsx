import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

class Posts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                this.setState({ posts: response.data });
            });
    }

    render() {
        const { posts } = this.state;
        return (
            <Wrapper>
                List of Names
                {posts.map(posts => (
                    <li key={posts.id}>{posts.name}</li>
                ))}
            </Wrapper>
        );
    }
}
export default Posts;

const Wrapper = styled.div`
    margin: 0 auto;
    text-align: center;
`;
