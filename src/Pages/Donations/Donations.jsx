import { useEffect, useState } from "react";
import DonatedList from "../../Components/DonatedList/DonatedList";


const Donations = () => {
    const [donations, setDonations] = useState([]);
    const [notFound, setNotFound] = useState("");
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        const donationsItems = JSON.parse(localStorage.getItem('donationList'));
        if (donationsItems) {
            setDonations(donationsItems);
            
        } else {
            setNotFound("Not Donated Yet!")
        }
    }, [])

    return (
        <div className="pt-5 pb-10">
            {
                notFound ? <div className="font-bold text-3xl flex mt-36 justify-center">
                    {notFound}
                </div> :

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {
                            isShow ? donations.map(donation => <DonatedList key={donation.id} donation={donation}></DonatedList>) :
                                donations.slice(0, 4).map(donation => <DonatedList key={donation.id} donation={donation}></DonatedList>)
                        }


                    </div>
            }
            {
               !isShow && donations.length > 4 && <button onClick={() => setIsShow(true)} className="flex justify-center btn font-bold text-white py-2 px-3 mx-auto bg-green-700 m-7">
                    See All    
                </button>
            }
            
        </div>
    );
};

export default Donations;