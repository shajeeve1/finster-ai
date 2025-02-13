import * as yup from 'yup';

export const taskSchema = yup.object().shape({
  title: yup
    .string()
    .trim()
    .required('Title is required')
    .min(10, 'Title must be at least 10 characters')
    .max(100, 'Title must be at most 100 characters'),
  description: yup
    .string()
    .trim()
    .optional()
    .max(500, 'Description must be at most 500 characters'),
});
