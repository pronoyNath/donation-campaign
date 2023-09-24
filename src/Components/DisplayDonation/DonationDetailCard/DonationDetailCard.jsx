const DonationDetailCard = ({ donation }) => {
    const {id, picture, title, category,category_bg,card_bg,text_button_bg,text_color,description,price} = donation;
    return (
        <div>
            <div className="relative flex h-[100vh] w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700">
                <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none relative">
                    <img className="w-full h-[60vh]"
                        src={picture}
                        alt="ui/ux review check"
                    />
                    <div className="w-full h-[80px] absolute bottom-0 bg-black bg-opacity-60">
                        <button className={`font-bold text-lg p-2 rounded ${text_button_bg}  ml-10 mt-4`}>Donate ${price}</button>
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