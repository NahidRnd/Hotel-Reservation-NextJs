import Link from "next/link";

const TopDestination = () => {
    return (
            <div className="container mt-[50px] mb-[60px]">
              <div>
                <h2 className="title">Top Destinations</h2>
                <span>
                    Travelers search for cities are interested in these places
                </span>
              </div>
              <div className="flex gap-[30px]">
                <div className="dest-img-item">
                    <Link href={`city/a13ec24b-3423-4a74-bc9b-7581bb40d360`}><img src="/t_amsterdam.jfif" alt="" /></Link>
                    <div className="caption">
                        <Link href={`city/a13ec24b-3423-4a74-bc9b-7581bb40d360`}>Amsterdam</Link>
                    </div>
                </div>
                <div className="dest-img-item">
                    <Link href={`city/907807f8-157f-4317-a93d-adcbd395c891`}><img src="/t_paris.jfif" alt="" /></Link>
                    <div className="caption">
                        <Link href={`city/907807f8-157f-4317-a93d-adcbd395c891`}>Paris</Link>
                    </div>
                </div>
              </div>
              <div className="flex gap-[22px] justify-center mt-[20px]">
                <div className="dest-img-item h2">
                    <Link href={`city/397e5cde-64ca-46fc-b979-f66e9c3f62c9`}><img src="t_istanbul.jfif" alt="" /></Link>
                    <div className="caption">
                        <Link href={`city/397e5cde-64ca-46fc-b979-f66e9c3f62c9`}>Istanbul</Link>
                    </div>
                </div>
                <div className="dest-img-item h2">
                    <Link href={`city/2d56a4b8-38be-404d-88f2-bb9e30871d58`}><img src="t_rotterdam.jfif" alt="" /></Link>
                    <div className="caption">
                        <Link href={`city/2d56a4b8-38be-404d-88f2-bb9e30871d58`}>Rotterdam</Link>
                    </div>
                </div>
                <div className="dest-img-item h2">
                    <Link href={`city/9aece4f8-1449-4392-af96-218d4bd4efbf`}><img src="t_brussels.jpg" alt="" /></Link>
                    <div className="caption">
                        <Link href={`city/9aece4f8-1449-4392-af96-218d4bd4efbf`}>Brussels</Link>
                    </div>
                </div>
              </div>
            </div>
    );
}
 
export default TopDestination;