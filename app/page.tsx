import { Board } from './components/Board';

export default function Home() {
  return (
    <main className='flex flex-col items-center'>
      <h1 className='my-10 text-2xl font-bold'>15 puzzle game</h1>
      <Board />
    </main>
  );
}
