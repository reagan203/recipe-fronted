import React, { useContext, useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, CircularProgress, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { AuthContext } from '../context/AuthContext';
import { api } from '../utils';
import { Link } from 'react-router-dom';

const Home = () => {
    const { isAuthenticated } = useContext(AuthContext);
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedRecipe, setSelectedRecipe] = useState(null); // State to track selected recipe
    const [open, setOpen] = useState(false); // State to control dialog visibility

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const res = await api.get('/recipe');
                setRecipes(res.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };

        fetchRecipes();
    }, []);

    const handleDeleteRecipe = async (recipeId) => {
        try {
            await api.delete(`/updaterecipe/${recipeId}`);
            setRecipes(recipes.filter(recipe => recipe.recipe_id !== recipeId));
        } catch (error) {
            console.error('Error deleting recipe:', error);
        }
    };

    const handleViewInstructions = (recipe) => {
        setSelectedRecipe(recipe);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container maxWidth="lg">
            <Typography variant="h4" align="center" gutterBottom>
                Welcome to Recipe App
            </Typography>
            {isAuthenticated && (
                <Button variant="contained" color="primary" component={Link} to="/create">
                    Create Recipe
                </Button>
            )}
            <Grid container spacing={3} justifyContent="center" mt={3}>
                {loading ? (
                    <CircularProgress />
                ) : (
                    recipes.map(recipe => (
                        <Grid item xs={12} sm={6} md={4} key={recipe.recipe_id}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={recipe.image_url}
                                    alt={recipe.title}
                                />
                                <CardContent>
                                    <Typography variant="h6">{recipe.title}</Typography>
                                    <Typography variant="body2">{recipe.description}</Typography>
                                    <Typography variant="caption">Prep Time: {recipe.prep_time} mins</Typography>
                                    <Typography variant="caption">Cook Time: {recipe.cook_time} mins</Typography>
                                    <Typography variant="caption">Servings: {recipe.servings}</Typography>
                                    <Button onClick={() => handleViewInstructions(recipe)}>
                                        View Instructions
                                    </Button>
                                    {isAuthenticated && (
                                        <Grid container justifyContent="flex-end" mt={1}>
                                            {/* <Button component={Link} to={`/update/${recipe.recipe_id}`} color="primary">
                                                Edit
                                            </Button> */}
                                            <Button onClick={() => handleDeleteRecipe(recipe.recipe_id)} color="error">
                                                Delete
                                            </Button>
                                        </Grid>
                                    )}
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                )}
            </Grid>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{selectedRecipe && selectedRecipe.title}</DialogTitle>
                <DialogContent>
                    {selectedRecipe && (
                        <Typography variant="body2">{selectedRecipe.instructions}</Typography>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default Home;
