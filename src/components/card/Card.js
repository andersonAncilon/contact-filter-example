import React, { Component } from 'react';
import { styles } from './Style';

class Card extends Component {

    render() {
        return (
            <>
                {this.props.user ?
                    <div style={styles.cardContainer}>
                        <div style={styles.cardHeader}>
                            <h3 style={styles.cardHeaderTitle}>{this.props.user.name.first}</h3>
                        </div>
                        <img style={styles.cardImage} alt={`The face of ${this.props.user.name.first}`} src={this.props.user.picture.large} />
                    </div> : ''}
            </>
        );
    }
}

export default Card;