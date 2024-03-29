// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { api } from '../utils';
// import toast from 'react-hot-toast';

// const UpdateRecipe = () => {
//   const { recipe_id } = useParams();
//   const [recipe, setRecipe] = useState(null);

//   useEffect(() => {
//     // Fetch recipe data from the API
//     const fetchRecipe = async () => {
//       try {
//         const response = await api.get(`'/recipe/<int:recipe_id>'${recipe_id}`);
//         setRecipe(response.data);
//       } catch (error) {
//         console.error('Error fetching recipe:', error);
//       }
//     };

//     fetchRecipe();
//   }, [recipe_id]);

//   const formik = useFormik({
//     initialValues: {
//       title: recipe?.title || '',
//       description: recipe?.description || '',
//       instructions: recipe?.instructions || '',
//       prep_time: recipe?.prep_time || '',
//       cook_time: recipe?.cook_time || '',
//       servings: recipe?.servings || '',
//       image_url: recipe?.image_url || '',
//     },
//     validationSchema: Yup.object({
//       title: Yup.string().required('Title is required'),
//       description: Yup.string().required('Description is required'),
//       instructions: Yup.string().required('Instructions are required'),
//       prep_time: Yup.number().required('Prep time is required'),
//       cook_time: Yup.number().required('Cook time is required'),
//       servings: Yup.string().required('Servings are required'),
//       image_url: Yup.string().required('Image URL is required'),
//     }),
//     onSubmit: async (values) => {
//       try {
//         const response = await api.put(`/updaterecipe/${recipeId}`, values);
//         toast.success('Recipe updated successfully');
//       } catch (error) {
//         console.error('Error updating recipe:', error);
//         toast.error('Failed to update recipe');
//       }
//     },
//   });

//   if (!recipe) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>Update Recipe</h2>
//       <form onSubmit={formik.handleSubmit}>
//         <label htmlFor="title">Title:</label>
//         <input
//           id="title"
//           name="title"
//           type="text"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.title}
//         />
//         {formik.touched.title && formik.errors.title ? (
//           <div>{formik.errors.title}</div>
//         ) : null}

//         <label htmlFor="description">Description:</label>
//         <textarea
//           id="description"
//           name="description"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.description}
//         />
//         {formik.touched.description && formik.errors.description ? (
//           <div>{formik.errors.description}</div>
//         ) : null}

//         <label htmlFor="instructions">Instructions:</label>
//         <textarea
//           id="instructions"
//           name="instructions"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.instructions}
//         />
//         {formik.touched.instructions && formik.errors.instructions ? (
//           <div>{formik.errors.instructions}</div>
//         ) : null}

//         <label htmlFor="prep_time">Prep Time (minutes):</label>
//         <input
//           id="prep_time"
//           name="prep_time"
//           type="number"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.prep_time}
//         />
//         {formik.touched.prep_time && formik.errors.prep_time ? (
//           <div>{formik.errors.prep_time}</div>
//         ) : null}

//         <label htmlFor="cook_time">Cook Time (minutes):</label>
//         <input
//           id="cook_time"
//           name="cook_time"
//           type="number"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.cook_time}
//         />
//         {formik.touched.cook_time && formik.errors.cook_time ? (
//           <div>{formik.errors.cook_time}</div>
//         ) : null}
//         <label htmlFor="servings">Servings:</label>
//         <input
//           id="servings"
//           name="servings"
//           type="text"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.servings}
//         />
//         {formik.touched.servings && formik.errors.servings ? (
//           <div>{formik.errors.servings}</div>
//         ) : null}

//         <label htmlFor="image_url">Image URL:</label>
//         <input
//           id="image_url"
//           name="image_url"
//           type="text"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.image_url}
//         />
//         {formik.touched.image_url && formik.errors.image_url ? (
//           <div>{formik.errors.image_url}</div>
//         ) : null}

//         <button type="submit">Update Recipe</button>
//       </form>
//     </div>
//   );
// };

// export default UpdateRecipe;
