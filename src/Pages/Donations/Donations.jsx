import { useEffect, useState } from "react";
import DonatedList from "../../Components/DonatedList/DonatedList";


const Donations = () => {
    const [donations, setDonations] = useState([]);
    const [notFound, setNotFound] = useState("");
    const [isShow, setIsShow] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const donationsItems = JSON.parse(localStorage.getItem('donationList'));
        if (donationsItems) {
            setDonations(donationsItems);
            
            const total = donationsItems.reduce((preValue, currentItem) => preValue + currentItem.price, 0)

            setTotalPrice(total)
        } else {
            setNotFound("Not Donated Yet!")
        }
    }, [])

    return (
        <div>
            {
                notFound ? <div className="font-bold text-3xl flex mt-36 justify-center">
                    {notFound}
                </div> :

                    <div className="grid grid-cols-2 gap-10">
                        {
                            isShow ? donations.map(donation => <DonatedList key={donation.id} donation={donation}></DonatedList>) :
                                donations.slice(0, 2).map(donation => <DonatedList key={donation.id} donation={donation}></DonatedList>)
                        }


                    </div>
            }
            {
                donations.length > 2 && <button onClick={() => setIsShow(!isShow)} className="flex justify-center btn font-bold text-white py-2 px-3 mx-auto bg-green-700 m-7">
                    {
                        isShow ? "See less" : "See All"
                    }
                </button>
            }
            
        </div>
    );
};

export default Donations;