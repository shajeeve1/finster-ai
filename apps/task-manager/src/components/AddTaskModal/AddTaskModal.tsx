'use client';
import {
  Typography,
  Button,
  Modal,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Task } from '../../types/tasks';
import { taskSchema } from './schema';
import { FormInput } from './FormInput';
import { ModalContainer } from './styles';

export type TaskFormData = Pick<Task, 'title' | 'description'>;

interface AddTaskModalProps {
  open: boolean;
  onClose: () => void;
  onAddTask: (data: TaskFormData) => void;
  isCreating?: boolean;
}

export const AddTaskModal = ({
  open,
  onClose,
  onAddTask,
  isCreating,
}: AddTaskModalProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TaskFormData>({
    resolver: yupResolver(taskSchema),
    defaultValues: {
      title: '',
      description: '',
    },
  });

  const onSubmit = (data: TaskFormData) => {
    onAddTask(data);
    reset();
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
      }}
    >
      <ModalContainer
        sx={{
          width: { xs: '95%', sm: '90%', md: 700 },
          maxWidth: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          p: 2,
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            color: 'primary.light',
            mb: 2,
            fontSize: { xs: '1.5rem', sm: '2rem' },
          }}
        >
          Create New Task
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            control={control}
            errors={errors}
            name="title"
            label="Task Title"
          />
          <FormInput
            control={control}
            errors={errors}
            name="description"
            label="Task Description"
            multiline
            rows={isMobile ? 2 : 4}
          />

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
              mt: 2,
            }}
          >
            <Button
              onClick={onClose}
              variant="outlined"
              fullWidth={isMobile}
              sx={{
                minWidth: 140,
                mb: 2,
              }}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              variant="contained"
              disabled={isCreating}
              fullWidth={isMobile}
              sx={{
                minWidth: 140,
                mb: 2,
              }}
            >
              Create Task
            </Button>
          </Box>
        </form>
      </ModalContainer>
    </Modal>
  );
};
