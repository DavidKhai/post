import React, { Component } from 'react';

class FilterSearch extends Component {
    render() {
        return (
            <div className="search-obj">
                <div className="container pt-3 pb-3">
                    <div className="row">
                    <div className="col-sm-3">
                        <div className="row">
                        <div className="col-3 d-flex align-items-center">
                            <label htmlFor="validationCustom04">Search</label>
                        </div>
                        <div className="col-9">
                            <select className="custom-select" required>
                                <option defaultValue disabled value>Stories</option>
                                <option value="">Stories 1</option>
                                <option value="">Stories 2</option>
                            </select>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="row">
                        <div className="col-2 d-flex align-items-center">
                            <label htmlFor="validationCustom04">by</label>
                        </div>
                        <div className="col-10">
                            <select className="custom-select" required>
                                <option defaultValue disabled value>Popularity</option>
                                <option value="">Popularity 1</option>
                                <option value="">Popularity 2</option>
                            </select>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="row">
                        <div className="col-2 d-flex align-items-center">
                            <label htmlFor="validationCustom04">for</label>
                        </div>
                        <div className="col-10">
                            <select className="custom-select" required>
                                <option defaultValue disabled value>All time</option>
                                <option value="">Time 1</option>
                                <option value="">Time 2</option>
                            </select>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default FilterSearch;