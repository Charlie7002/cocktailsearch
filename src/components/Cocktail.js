import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ id, name, image, desc, glass, info, ing1, ing2, ing3, ing4, ing5, ing6, ing7, mes1, mes2, mes3, mes4, mes5, mes6, mes7 }) => {
	return (
		<article className="cocktail">
			<div className="img-container">
				<img className="cocktail-img" src={image} alt={name} />
			</div>
			<div className="cocktail-footer">
				<h3>{name}</h3>
				<h4>{glass}</h4>
				<p>{info}</p>
				<Link to={`/cocktail/${id}`} className="btn btn-primary">
					Details
				</Link>
			</div>
		</article>
	);
};

export default Cocktail;
