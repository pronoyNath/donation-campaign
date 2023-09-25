import { Link } from "react-router-dom";

const DisplayDonation = ({ donation }) => {
    const { id, picture, title, category,category_bg,card_bg,text_button_bg,text_color} = donation;

    return (
        <div className=''>
            <Link to={`/donation/${id}`}>
            <div 
            style={{
                backgroundColor: card_bg,
            }}
            className={`relative flex max-w-[24rem] flex-col rounded-xl  bg-clip-border text-gray-700 w-72`}>
                <div className="relative m-0 overflow-hidden rounded-t-xl bg-transparent bg-clip-border text-gray-700 shadow-none ">
                    <img  className="h-44 w-full"
                        src={picture}
                        alt=""
                    />
                </div>
                <div className="p-6 ">
                    <button
                    style={{
                        backgroundColor: category_bg,
                        color: text_color
                    }}
                     className={`block font-sans text-xs font-bold leading-snug tracking-normal text-blue-gray-900 antialiased  p-2 rounded-md`}>
                        {category}
                    </button>
                    <p 
                    style={{
                        color : text_color
                    }}
                    className={`mt-3 block font-sans text-sm font-bold leading-relaxed text-gray-700 antialiased`}>
                        {title}
                    </p>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default DisplayDonation;