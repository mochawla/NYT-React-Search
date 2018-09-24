import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron/jumbotron";
import API from "../../utils/API";
import Container from "../../components/Container/container";
import Row from "../../components/Row/row";
import Column from "../../components/Column/column";
import Search from "../../components/Search/search";
import Results from "../../components/Results/results";
import ResultItem from "../../components/ResultItem/resultitem";

class Home extends Component {

    state = {
        articles: [],
        title: "",
        date: "",
        url: "",
        begin: "",
        end: "",
        results: []

    }

    render() {
        return (
           <Container fluid> 
            <Jumbotron/>

            <Row>
                <Column size="md-12">
                    <Search/>
                </Column>    
            </Row>

            <Row>
                <Column size="md-12">
                    <Results>
                        {this.state.articles.map(article =>{
                            return (
                                <ResultItem
                                    title={article.title}
                                    date={article.date}
                                    url={article.url}
                                />
                            );
                        })}
                    </Results>    
                </Column>    
            </Row>

            </Container>
        )
    }
}

export default Home;