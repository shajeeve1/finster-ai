'use client';
import { useRouter } from 'next/navigation';
import {
  ContentBox,
  Description,
  MainContainer,
  StartButton,
  Subtitle,
  Title,
} from './styles';

export default function HomePage() {
  const router = useRouter();

  return (
    <MainContainer>
      <ContentBox>
        <Title variant="h1" color="primary">
          Welcome to the Finster Task Manager
        </Title>
        <Subtitle variant="h6">Simple project management for Finster</Subtitle>
        <Description color="primary.light">
          Streamline your workflow with this task management platform. Track
          progress, collaborate with your team, and achieve your goals
          efficiently.
        </Description>
        <StartButton variant="contained" onClick={() => router.push('/tasks')}>
          To the task manager app
        </StartButton>
      </ContentBox>
    </MainContainer>
  );
}
