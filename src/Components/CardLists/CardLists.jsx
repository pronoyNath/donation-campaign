import DisplayDonation from "../DisplayDonation/DisplayDonation";

const CardLists = ({donations}) => {
    // console.log(donations);
    return (
        <div>
            <div className="grid grid-cols-4 gap-5 py-16 ">
            {
                donations.map(donation=><DisplayDonation key={donation.id} donation={donation}></DisplayDonation>)
            }
            </div>
        </div>
    );
};

export default CardLists;