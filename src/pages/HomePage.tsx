import Link from "@/components/link";
import { IoDocumentAttach } from "react-icons/io5";
import { LuPresentation} from "react-icons/lu";
import { FaFolder ,FaCameraRetro } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";



const resume_link = "https://drive.google.com/file/d/1RkQ__--VLFiIRi6puqFND_UTH-cw75D3/view?usp=drive_link";


export default function HomePage() {
    return (
        
        <div className=" flex flex-wrap w-full justify-center ">
            <div className="pl-1 bg-gray-400 ">
                <div className=" bg-gray-500 pl-2 h-full ">
                    <p>Heyy Everyone !! Its ..</p>
                    <p><span className="text-xl font-bold bg-blue-400 text-orange-500 rounded-md px-2 mr-2">LitRunner </span> here </p>
                    <p className="mt-2">My real name is , </p>
                    <p ><span className="text-xl font-bold bg-blue-400 text-orange-500 rounded-md px-2" >Ronak Singh</span> </p>
                    <p className="mt-2"> I love <span className="font-bold">exploring</span> interesting topics </p>
                    <p>and <span className="font-bold">building</span> cool things. </p>
                </div>               
            </div>

            <div className="ml-2 rounded-md">
                <p className = " text-black text-sm bg-yellow-500 rounded-md mb-2">Some <span className="font-bold">interesting</span> stuff about me</p>
                <div className="">
                    <div >
                        <Link href={resume_link} description="Resume (.pdf)" Icon={IoDocumentAttach}/>
                    <div/>

                    <div className="">
                        <Link href = "https://500px.com/photo/1106187294/ooty-by-ronak-singh.com" description="Photos" Icon={FaCameraRetro}/>
                    </div>

                    <div className="">
                        <Link href = "https://medium.com/me/stories/public" description="Blogs" Icon={FaMedium}/>
                    </div>

                    <div className="">
                        <Link href = "example.com" description="files" Icon={FaFolder}/>
                    </div>

                    <div className="">
                        <Link href = "example.com" description="presentation" Icon={LuPresentation}/>
                    </div>
                            
                </div>   
            </div>
                    
        </div>
        </div>
    );
}