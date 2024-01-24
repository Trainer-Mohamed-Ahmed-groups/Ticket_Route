import { Button, Card } from 'flowbite-react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
export default function TravelCard({ title, description }) {
    return (
        <div className='p-2 lg:w-1/3 md:w-1/2 sm:w-full'>
            <Card className="max-w-sm">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">{description}</p>
                <Button to="/service">
                    <Link to={`/service/${title}`} className='flex items-center'>
                        Read more
                        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Link>
                </Button>
            </Card>
        </div>
    );
}
