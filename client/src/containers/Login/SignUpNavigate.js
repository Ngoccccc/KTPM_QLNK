import {Link} from 'react-router-dom';

export default function SignUpNavigate({
    paragraph,
    linkName,
    linkUrl="#"
}){
    return(
        <div className="mb-10">
            <p className="mt-2 text-center text-sm text-gray-600 mt-5">
            {paragraph} {' '}
            <Link to={linkUrl} className="font-medium text-purple-600 hover:text-purple-500">
                {linkName}
            </Link>
            </p>
        </div>
    )
}