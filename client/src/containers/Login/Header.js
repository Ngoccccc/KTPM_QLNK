import {Link} from 'react-router-dom';

export default function Header({
    heading,
    linkUrl="#"
}){
    return(
        <div className="mb-10">
            <div className="flex justify-center">
                <img 
                    alt=""
                    className="h-14 w-14"
                    src="https://luatnbs.com/wp-content/uploads/2017/07/du-lieu-data.png.webp"/>
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                {heading}
            </h2>
        </div>
    )
}