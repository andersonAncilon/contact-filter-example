import React from 'react';
import { styles } from './Style';
import { Highlight } from '../highlight/Highlight';

const Card = ({ props, highlight = '' }) => {
	return (
		<div style={styles.cardContainer}>
			<div style={styles.cardHeader}>
				<Highlight text={props.name.first} style={styles.cardHeaderTitle} exp={highlight}/>
			</div>
			<img style={styles.cardImage} alt={`The face of ${props.name.first}`} src={props.picture.large} />
		</div>
	);
};

export default Card;
