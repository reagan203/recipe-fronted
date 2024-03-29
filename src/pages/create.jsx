import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import { api } from '../utils';

const CreateRecipe = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        instructions: '',
        prep_time: '',
        cook_time: '',
        servings: '',
        image_url: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/createrecipe', formData);
            // Clear form after successful submission
            setFormData({
                title: '',
                description: '',
                instructions: '',
                prep_time: '',
                cook_time: '',
                servings: '',
                image_url: ''
            });
            // Optionally, you can navigate to the home page or show a success message
        } catch (error) {
            console.error('Error creating recipe:', error);
        }
    };

    return (
        <Container maxWidth="md">
            <Typography variant="h4" align="center" gutterBottom>
                Create New Recipe
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
                <TextField
                    fullWidth
                    label="Description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
                <TextField
                    fullWidth
                    label="Instructions"
                    name="instructions"
                    multiline
                    rows={4}
                    value={formData.instructions}
                    onChange={handleChange}
                    required
                />
                <TextField
                    fullWidth
                    label="Prep Time (mins)"
                    name="prep_time"
                    type="number"
                    value={formData.prep_time}
                    onChange={handleChange}
                    required
                />
                <TextField
                    fullWidth
                    label="Cook Time (mins)"
                    name="cook_time"
                    type="number"
                    value={formData.cook_time}
                    onChange={handleChange}
                    required
                />
                <TextField
                    fullWidth
                    label="Servings"
                    name="servings"
                    value={formData.servings}
                    onChange={handleChange}
                    required
                />
                <TextField
                    fullWidth
                    label="Image URL"
                    name="image_url"
                    value={formData.image_url}
                    onChange={handleChange}
                    required
                />
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
        </Container>
    );
};

export default CreateRecipe;
