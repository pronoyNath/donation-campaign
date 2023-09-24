import { Link } from "react-router-dom";

const DisplayDonation = ({ donation }) => {
    const { id, picture, title, category,category_bg,card_bg,text_button_bg,text_color} = donation;

    return (
        <div className=''>
            <Link to={`/donation/${id}`}>
            <div className={`relative flex max-w-[24rem] flex-col rounded-xl  bg-clip-border text-gray-700 shadow-2xl ${card_bg}`}>
                <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <img
                        src={picture}
                        alt=""
                    />
                </div>
                <div className="p-6 ">
                    <button className={`block font-sans text-xs font-bold leading-snug tracking-normal text-blue-gray-900 antialiased  p-2 rounded-md ${category_bg} ${text_color}`}>
                        {category}
                    </button>
                    <p className={`mt-3 block font-sans text-sm font-bold leading-relaxed text-gray-700 antialiased ${text_color}`}>
                        {title}
                    </p>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default DisplayDonation;