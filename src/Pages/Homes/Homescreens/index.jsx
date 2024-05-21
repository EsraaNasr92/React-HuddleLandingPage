import Community from '../Community';
import Counter from '../Counter';
import Flow from '../Flow';
import Footer from '../Footer';
import Grow from '../Grow';
import Header from '../Header';
import HeroSection from '../HeroSection';
import User from '../Users';

export default function index(){
    return(
        <>
            <Header />
            <HeroSection />
            <Counter />
            <Grow />
            <Flow />
            <User />
            <Community />
            <Footer />
        </>
    );
}