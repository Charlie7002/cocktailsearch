import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [search, setSearch] = useState("a");
	const [cocktails, setCocktails] = useState([]);

	const fetchDrinks = useCallback(async () => {
		setLoading(true);
		try {
			const res = await fetch(`${url}${search}`);
			const data = await res.json();

			//sortir array de l'object (du bon franglais)
			const { drinks } = data;

			if (drinks) {
				const newCocktails = drinks.map((item) => {
					const {
						idDrink,
						strDrink,
						strDrinkThumb,
						strAlcoholic,
						strGlass,
						strIngredient1,
						strIngredient2,
						strIngredient3,
						strIngredient4,
						strIngredient5,
						strIngredient6,
						strIngredient7,
						strInstructions,
						strMeasure1,
						strMeasure2,
						strMeasure3,
						strMeasure4,
						strMeasure5,
						strMeasure6,
						strMeasure7
					} = item;
					return {
						id: idDrink,
						name: strDrink,
						image: strDrinkThumb,
						info: strAlcoholic,
						glass: strGlass,
						ing1: strIngredient1,
						ing2: strIngredient2,
						ing3: strIngredient3,
						ing4: strIngredient4,
						ing5: strIngredient5,
						ing6: strIngredient6,
						ing7: strIngredient7,
						mes1: strMeasure1,
						mes2: strMeasure2,
						mes3: strMeasure3,
						mes4: strMeasure4,
						mes5: strMeasure5,
						mes6: strMeasure6,
						mes7: strMeasure7,
						desc: strInstructions
					};
				});

				setCocktails(newCocktails);
			} else {
				setCocktails([]);
			}
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	}, [search]);

	useEffect(() => {
		fetchDrinks();
	}, [search, fetchDrinks]);
	return <AppContext.Provider value={{ cocktails, loading, setSearch }}>{children}</AppContext.Provider>;
};
// make sure use
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
