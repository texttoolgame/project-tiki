import '../styles/globals.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar></NavBar>
        <Component {...pageProps} />
      <Footer></Footer>
    </>
   
  )
}

export default MyApp;
