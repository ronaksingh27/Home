type LinkProps = {
    href: string;
    description: string;
    Icon?: React.ComponentType<{ size: number }>;
}

export default function Link({ href , description , Icon} : LinkProps ) {
    return (
        <div  className="flex items-center bg-gray-500 pl-2 mb-2 rounded-xl"  >
            <a 
                href={href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-black hover:text-yellow-500 transition-colors"
                aria-label={`Link to ${description}`}
            >
                {/* Clickable Icon */}
                <span className="mr-2 bg-gray-500 rounded-lg">
                    {Icon && <Icon size={16} />}
                </span>

                {/* Text Description */}
                <p className="font-serif text-gray-200 hover:text-yellow-500 px-2 py-1 rounded-md hover:shadow-md transition-shadow">
                    {description}
                </p>
            </a>
        </div>
    );
}
