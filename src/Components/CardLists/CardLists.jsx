import DisplayDonation from "../DisplayDonation/DisplayDonation";

const CardLists = ({donations}) => {
    
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-5 md:py-16 ">
            {
                donations.map(donation=><DisplayDonation key={donation.id} donation={donation}></DisplayDonation>)
            }
            </div>
        </div>
    );
};

export default CardLists;