import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import CardLists from "../../Components/CardLists/CardLists";
import { useState } from "react";

const Home = () => {
    const donations = useLoaderData();
    const [filter, setFilter] = useState([])

    const handleSearch =(searhInput)=>{
        const filteredCard = donations?.filter((card)=>
        card.category.toUpperCase() === searhInput.toUpperCase()
        )
        setFilter(filteredCard);
    }
    
    return (
        <div>
            <Banner handleSearch={handleSearch}></Banner>
            <CardLists donations={filter.length>0 ? filter : donations}></CardLists>
        </div>
    );
};

export default Home;