import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationDetailCard from "../../Components/DisplayDonation/DonationDetailCard/DonationDetailCard";

const DonationsDetails = () => {

    const { id } = useParams();
    // console.log(id);
    const donations = useLoaderData();
    // console.log(donations);
    const [donation, setDonation] = useState([]);

    useEffect(() => {
        const findDonation = donations?.find(donation => donation.id == id)
        setDonation(findDonation);

    }, [id, donations])

    return (
        <div>
            <DonationDetailCard donation={donation}></DonationDetailCard>
        </div>
    );
};

export default DonationsDetails;