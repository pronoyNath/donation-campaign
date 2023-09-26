const DonationDetailCard = ({ donation }) => {
    const { id, picture, title, category, category_bg, card_bg, text_button_bg, text_color, description, price } = donation;

    const handleDonations = () => {
        // console.log(phone);
        const addDonationList = [];
        const donationItems = JSON.parse(localStorage.getItem('donationList'));

        if (!donationItems) {
            addDonationList.push(donation);
            localStorage.setItem('donationList', JSON.stringify(addDonationList));
            swal("Thank You!", "You Donated Successfully!", "success")
        }
        else {
            const isExists = donationItems.find(donation => donation.id === id)
            if (!isExists) {
                addDonationList.push(...donationItems, donation);
                localStorage.setItem('donationList', JSON.stringify(addDonationList))
                swal("Thank You!", "You Donated Successfully!", "success")
            }
            else {
                swal("Already Donated!", "Please try to donate other categories!")
            }

        }
       
    }

    return (
        <div>
            <div className="relative flex h-[600px] w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700">
                <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <img
                        className="w-full h-[100%] object-fill"
                        src={picture}
                        alt="ui/ux review check"
                    />
                    <div className="w-full h-[80px] absolute bottom-0 bg-black bg-opacity-60">
                        <button onClick={handleDonations}
                            style={{
                                backgroundColor: text_color,
                                color: "white"
                            }}
                            className={`font-bold text-lg p-2 rounded   ml-10 mt-4`}>Donate ${price}</button>
                    </div>
                </div>
                <div className="p-6">
                    <h4 className="block font-sans text-2xl font-bold leading-snug tracking-normal text-black antialiased">
                        {title}
                    </h4>
                    <p className="mt-3 block font-sans text-lg font-normal leading-relaxed text-gray-700 antialiased">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DonationDetailCard;