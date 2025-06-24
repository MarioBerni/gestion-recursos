import { redirect } from 'next/navigation';

export default function Home() {
  // Redirigir a la página de login
  redirect('/login');

  // Este return nunca se ejecutará debido a la redirección,
  // pero es necesario para satisfacer el tipado de TypeScript
  return null;
}
