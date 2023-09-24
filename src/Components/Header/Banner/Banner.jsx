const Banner = () => {
    return (
        <div className="">
            <div className="hero min-h-[70vh]" style={{ backgroundImage: 'url(https://i.ibb.co/hy9RG5r/larm-rmah-AEa-TUnvneik-unsplash.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-12 text-3xl font-bold">I Grow By Helping People In Need</h1>
                        <div className="relative w-3/4 mx-auto">
                            <input type="text" placeholder="Search here...." className="input input-bordered w-full" />
                            <button className="btn bg-red-500 border-none text-white absolute top-0 right-0 rounded-l-none">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;