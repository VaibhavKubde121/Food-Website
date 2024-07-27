/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import Loading from './Loading';
import Searchbar from './Searchbar';
import { fetchRecipes } from '../utils';
import RecipeCard from './RecipeCard';

const Recipes = () => {

    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState('Vegan');
    const [limit, setLimit] = useState(30);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setQuery(e.target.value);
    }

    const fetchRecipe = async()=>{
        try {
            const data = await fetchRecipes({query,limit});
            setRecipes(data);
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false);
        }
    }
    
    const showMore = () =>{
        setLimit(prev => prev + 10);
        fetchRecipe();
    }

    const handleSearch = async(e) =>{
        e.preventDefault();
        if(e.key === 'Enter'){
            fetchRecipe();
        }
        fetchRecipe();
    }
    useEffect(()=>{
        setLoading(true);
        fetchRecipe();
    },[]);
    // console.log(recipes);

    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <div id='recipes' className='w-full py-20'>
            <div className="w-full flex items-center justify-center pt-10 pb-5 px-0 md:px-10">
                <form className='w-full lg:w-2/4' onSubmit={handleSearch}>
                    <Searchbar placeholder='eg. Cake,Vegan,Chicken'
                        handleInputChange={handleChange}
                        rightIcon={<BiSearchAlt2 className='text-gray-600' />} />
                </form>
            </div>
            {
                recipes?.hits?.length > 0 ? (
                    <>
                        <div className='w-full flex flex-wrap items-center justify-center gap-10 px-0 lg:px-10 py-10'>
                            {
                                recipes?.hits?.map((item,index)=>(
                                    <RecipeCard recipe={item} key={index} />
                                ))
                            }
                        </div>
                        <div className='flex w-full items-center justify-center py-10'>
                            <button className='bg-green-800 text-white px-3 py-1 
                            rounded-full text-xl'
                            onClick={showMore}>Show more</button>
                        </div>
                    </>
                ) : (
                    <div className='text-white w-full items-center justify-center py-10'>
                        <p className='text-center'>No recipe found!</p>
                    </div>
                )
            }
        </div>
    )
}

export default Recipes
