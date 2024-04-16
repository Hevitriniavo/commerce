interface HeaderProps {
    className: string;
}
export default function Header({ className }: HeaderProps) {
    return (
        <div className="">
            <div className={`py-6 ${className} flex flex-col justify-center items-center header-bg`}>
                <h1 className="text-center items-center justify-center text-4xl font-bold text-gray-900">Nos meilleurs fruits et légumes</h1>
            </div>
            <hr className="w-full h-1 bg-gray-600 width-animation" />
        </div>
    )
}
