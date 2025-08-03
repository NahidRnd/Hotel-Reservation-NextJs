import Link from "next/link";
import { MdOutlinePlayArrow } from "react-icons/md";

const Video = () => {
    return (
            <div className="bg-[url('/video_bg.jpg')] h-[500px] text-center p-[100px]">
              <div className="py-[90px] px-0">
                <Link href="https://www.youtube.com/watch?v=5ZxApiwDecQ" target="_blank" className="block w-[110px] h-[110px] relative m-auto">
                    <MdOutlinePlayArrow className="text-[110px] text-white border-[5px] border-white rounded-full p-4 opacity-0.6 transition-all duration-200 ease-out" />
                </Link>
              </div>
            </div>
    );
}
 
export default Video;