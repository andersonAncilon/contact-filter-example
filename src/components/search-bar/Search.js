import React, { Component } from 'react';

import { style } from './Style';

class Search extends Component {


    onChange = (e) => {
        this.props.onChange(e)
    }

    render() {
        return (
            <div>
                <input onChange={ this.onChange } style={style.input} type="text" placeholder={this.props.placeholder}/>
            </div>
        );
    }
}

export default Search;