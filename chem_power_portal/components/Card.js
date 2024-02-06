import Image from 'next/image'

function Card(props) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <Image className="w-full" src={props.imageName} alt="Placeholder Image" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center">{props.name}</div>
            </div>
        </div>
    );
}

export default Card;
