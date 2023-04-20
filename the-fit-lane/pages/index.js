import Head from 'next/head';
import NavBar from '../components/Navbar';
import Main from '../components/Main';

export default function HomePage() {
  return (
    <div>
       <Head>
          <title>The Fit Lane</title>
          <meta name='description' content='Generated by create next app' />
          <link rel='icon' href='../public/fitlaneLogo.png' />
        </Head>
        <NavBar/>
        <Main/>
    </div>
  )
}