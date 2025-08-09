import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
    return (
            <div className="flex gap-[30px]">
                <div className="testimonial-item">
                    <div className="comment">
                        <h3>Nice Place</h3>
                        <div className="rating">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <CiStar />
                        </div>
                        <p>
                        Fantastic location in a historic renovated monastery in the heart of the Castro. Staff were helpful and knowledgeable and everything in easy walking distance.
                        </p>
                    </div>
                    <div className="author">
                        <Image src='user8.jpg' alt="Testimonial" />
                        <div className="author-info">
                            <h5 className="text-[18px] font-semibold">Beth Cardon</h5>
                            <span>Rome, Italy</span>
                        </div>
                    </div>
                </div>
                <div className="testimonial-item">
                    <div className="comment">
                        <h3>Good Choice</h3>
                        <div className="rating">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <CiStar />
                            <CiStar />
                        </div>
                        <p>
                        Extremely nice environment, the room was great, the service was awesome, really helpful and great service I&aposll visit them again in the near future.
                        </p>
                    </div>
                    <div className="author">
                        <Image src='user2.jpg' alt="Testimonial" />
                        <div className="author-info">
                            <h5 className="text-[18px] font-semibold">Beth Cardon</h5>
                            <span>Rome, Italy</span>
                        </div>
                    </div>
                </div>
                <div className="testimonial-item">
                    <div className="comment">
                        <h3>Perfect Website</h3>
                        <div className="rating">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <p>
                        The owner and staff were extremely helpful and kind and took time to ensure that we had extra information on things to do in the area and places to visit.
                        </p>
                    </div>
                    <div className="author">
                        <Image src='/user1-1.jpg' alt="Testimonial" />
                        <div className="author-info">
                            <h5 className="text-[18px] font-semibold">Beth Cardon</h5>
                            <span>Rome, Italy</span>
                        </div>
                    </div>
                </div>
            </div>
    );
}
 
export default Testimonials;