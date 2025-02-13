import { TextField } from '@mui/material';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { TaskFormData } from './AddTaskModal';

interface FormInputProps {
  control: Control<TaskFormData>;
  errors: FieldErrors<TaskFormData>;
  name: keyof TaskFormData;
  label: string;
  multiline?: boolean;
  rows?: number;
}

export const FormInput = ({
  control,
  errors,
  name,
  label,
  multiline = false,
  rows = 1,
}: FormInputProps) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <TextField
        {...field}
        label={label}
        variant="outlined"
        fullWidth
        margin="normal"
        multiline={multiline}
        rows={rows}
        error={!!errors[name]}
        helperText={errors[name]?.message}
      />
    )}
  />
);
