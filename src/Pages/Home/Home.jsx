import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import CardLists from "../../Components/CardLists/CardLists";

const Home = () => {
    const donations = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <CardLists donations={donations}></CardLists>
        </div>
    );
};

export default Home;