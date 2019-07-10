import React, { Component } from 'react';
import axios from 'axios';

import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: 'Welcome to my portfolio',
            isLoading: false,
            data: []
        };
    
        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        });
    }

    getPortfolioItems() {
        axios
          .get('https://stellaschutjer.devcamp.space/portfolio/portfolio_items')
          .then(response => {
             this.setState({
                 data: response.data.portfolio_items
             })
          })
          .catch(error => {
             console.log(error);
          });
    }

    portfolioItems() {
        return this.state.data.map(item => {
            debugger;
            return (
                <PortfolioItem 
                    key={item.id} 
                    item={item}
                />
            );
        });
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h2>{this.state.pageTitle}</h2>
            
                <button onClick={() => this.handleFilter('0data')}>
                    0data
                </button>
                <button onClick={() => this.handleFilter('1data')}>
                    1data
                </button>
                <button onClick={() => this.handleFilter('2data')}>
                    2data
                </button>
                <button onClick={() => this.handleFilter('3data')}>
                    3data
                </button>

                {this.portfolioItems()}
            </div>
        );
    }
}