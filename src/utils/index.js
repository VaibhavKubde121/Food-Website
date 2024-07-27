export async function fetchRecipes(filter) {
  const { query, limit } = filter;

  const url = `https://api.edamam.com/search?q=${query}&app_id=${
    import.meta.env.VITE_EDAMAM_APP_ID
  }&app_key=${import.meta.env.VITE_EDAMAM_API_KEY}&from=0&to=${limit}&`;

  const res = await fetch(url);
  const data = await res.json();

  // console.log(data);
  return data;
}

export async function fetchRecipe(id) {
  const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=${import.meta.env.VITE_EDAMAM_APP_ID}&app_key=${import.meta.env.VITE_EDAMAM_API_KEY}`;

  const response = await fetch(url);

  const data = await response.json();
  // console.log(data[0]);

  return data[0];
}
