import React, { Component } from 'react';

import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: 'Welcome to my portfolio',
            isLoading: false,
            data: [
                {title:'SomeData', category: '0data', slug: 'SomeData'},
                {title:'SomeMoreData', category: '1data', slug: 'SomeMoreData'},
                {title:'EvenMoreData', category: '2data', slug: 'EvenMoreData'},
                {title:'OneMoreStringOfData', category: '3data', slug: 'OneMoreStringOfData'}
            ]
        };
    
        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }

    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={'google.com'} slug={item.slug}/>;
        });
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