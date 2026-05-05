import { redirect } from 'next/navigation'
// Direct users to login page by default

export default function Home() {
  redirect('/login')
}
