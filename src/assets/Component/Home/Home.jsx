import Banner from "../Banner/Banner";
import CategoryList from "../CategoryLIst/CategoryList";
import FaeturedJob from "../FeaturedJob/FaeturedJob";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FaeturedJob></FaeturedJob>
        </div>
    );
};

export default Home;