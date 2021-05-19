import React, { useEffect, useCallback } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
	const { id } = useParams();
	const [loading, setLoading] = useState(false);
	const [cocktail, setCocktail] = useState([]);
	const [listIngredients, setListIngredients] = useState([]);

	const fetchSingleCocktail = useCallback(async () => {
		setLoading(true);
		try {
			const res = await fetch(`${url}${id}`);
			const data = await res.json();
			if (data) {
				const {
					strDrink: name,
					strDrinkThumb: image,
					strAlcoholic: info,
					strCategory: category,
					strGlass: glass,
					strInstructions: instructions,
					strIngredient1,
					strIngredient2,
					strIngredient3,
					strIngredient4,
					strIngredient5,
					strIngredient6,
					strMeasure1,
					strMeasure2,
					strMeasure3,
					strMeasure4,
					strMeasure5,
					strMeasure6
				} = data.drinks[0];
				const ingredients = [
					[strIngredient1, strMeasure1],
					[strIngredient2, strMeasure2],
					[strIngredient3, strMeasure3],
					[strIngredient4, strMeasure4],
					[strIngredient5, strMeasure5],
					[strIngredient6, strMeasure6]
				];

				const newCocktail = {
					name,
					image,
					info,
					category,
					glass,
					instructions,
					ingredients
				};
				setListIngredients(ingredients);
				setCocktail(newCocktail);
				setLoading(false);
			} else {
				setCocktail(null);
			}
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	}, [id]);

	useEffect(() => {
		fetchSingleCocktail();
	}, [id, fetchSingleCocktail]);

	if (loading) {
		return <Loading />;
	}
	if (!cocktail) {
		return <h2 className="section-title">No cocktails</h2>;
	} else {
		const { name, image, category, glass, info, instructions } = cocktail;

		return (
			<section className="section cocktail-section">
				<Link to="/" className="btn btn-primary">
					Back Home
				</Link>
				<h2 className="section-title">{name}</h2>
				<div className="drink">
					<img src={image} alt={name} />
					<div className="drink-info">
						<div className="label">
							<span className="drink-data">Name :</span>

							<p>{name}</p>

							<span className="drink-data">Category :</span>

							<p>{category}</p>
							<span className="drink-data">Info :</span>

							<p>{info}</p>
							<span className="drink-data">Glass :</span>
							<p>{glass}</p>
							<span className="drink-data">Instruction :</span>

							<p>{instructions}</p>
						</div>

						<div className="ingredient-container">
							<span className="drink-data" id="inst">
								ingredients :
							</span>
							<div className="ing-box">
								{listIngredients.map((item, index) => {
									return (
										item[0] !== null && (
											<div className="ing-bog-item" key={`${item}${index}`}>
												<span>{item[0]}</span> <span>{item[1]}</span>
											</div>
										)
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
};

export default SingleCocktail;
