import { Link } from "react-router-dom";

const DonatedList = ({donation}) => {

    const { id, picture, title, category, category_bg, card_bg, text_button_bg, text_color, description, price } = donation;

    return (
        <div>
            <div 
            style={{
                backgroundColor: card_bg,
            }}
            className="relative flex w-full max-w-[48rem] h-full flex-row rounded-xl  bg-clip-border text-gray-700">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img 
                        src={picture}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <button
                    style={{
                        backgroundColor: category_bg,
                        color: text_color
                    }}
                    className="mb-4 block font-sans text-xs md:text-sm font-semibold uppercase leading-relaxed tracking-normal p-2 rounded-lg antialiased">
                        {category}
                    </button>
                    <h4 
                    
                    className="mb-2 block font-sans text-base md:text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                       {title}
                    </h4>
                    <p
                    style={{
                        color : text_color
                    }}
                    className="mb-8 block font-sans text-base md:text-lg font-bold leading-relaxed antialiased">
                        ${price}
                    </p>
                    <Link to={`/donation/${id}`}>
                        <button
                         style={{
                            backgroundColor: text_color,
                            color: "white"
                        }}
                            className="flex select-none items-center gap-2 rounded-lg py-3 md:py-4 px-3 md:px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            view details
                            
                        </button>
                        </Link>
                </div>
            </div>
        </div>
    );
};

export default DonatedList;