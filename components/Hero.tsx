import Book from "./book/Book";

const Hero = () => {
    return (
        <>
        <div className="container md:pt-0 pt-26! w-full md:min-h-screen bg-[linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.1)),url(/slider-1.jpg)] text-white bg-cover bg-center flex justify-center items-center">
            <div className="bg-white/70 text-[#262626] md:w-[80%] md:h-[500px] w-full rounded-lg md:py-20 md:px-12 px-4">
                <h1 className="md:text-6xl text-xl font-semibold mt-3 mx-auto md:mb-6 max-w-[700px] md:leading-14">Book your stay and enjoy a luxury experience</h1>
                <p className="max-w-[700px] mt-3 mx-auto mb-6 leading-5">
                    Future-Proof Your Business, Innovative Solutions for a Digital World,
                    Elevate Your Business, Simplify Your Life
                </p>
                <div className="hidden md:block">
                    <Book />
                </div>
            </div>
        </div>
        <div className="md:hidden block">
            <Book page="responsive" />
        </div>
        </>
        
    );
}
 
export default Hero;

