import { AppShell } from '@/components/layout/AppShell';
import { MainColumn } from '@/components/layout/MainColumn';
import { Hero } from '@/components/home/Hero';
import { NowStrip } from '@/components/home/NowStrip';
import { PrinciplesList } from '@/components/home/PrinciplesList';
import { ProjectList } from '@/components/home/ProjectList';

export default function Home() {
  return (
    <AppShell>
      <MainColumn>
        <Hero />
        <NowStrip />
        <PrinciplesList />
        <ProjectList />
      </MainColumn>
    </AppShell>
  );
}
