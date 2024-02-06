import Image from 'next/image';
import Chemicals from '../../../assets/chemicals.jpg'
import work from '../../../assets/work.jpg'
import services from '../../../assets/services.jpg'
import mission from '../../../assets/mission.jpg'
export default function AboutUs() {
    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-purple-900 to-indigo-800">
            <div className="max-w-screen-lg mx-auto p-8 bg-white rounded-lg shadow-xl">
                <h1 className="text-4xl font-bold text-purple-900 mb-8 text-center">Welcome to ChemPortal</h1>

                <div className="flex items-center mb-12">
                    <div className="w-full">
                        <Image
                            src={Chemicals}
                            alt="Welcome"
                            layout="responsive"
                            width={1200}
                            height={300}
                            className="rounded-lg mb-4"
                        />
                    </div>
                </div>

                <section className="mb-12 flex items-center">
                    <div className="w-1/4 rounded-full bg-gradient-to-br from-green-400 to-blue-600 text-white text-2xl font-bold mb-4 shadow-md flex justify-center items-center">
                        <span className="text-center">01</span>
                    </div>
                    <div className="ml-4 w-3/4">
                        <h2 className="text-3xl font-bold text-purple-900 mb-4">Our Work</h2>
                        <p className="text-gray-800 leading-7">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac massa sit amet elit consectetur condimentum. Sed eget nisl eu est viverra ultrices. Nulla facilisi.
                        </p>
                        <div className="mt-4">
                            <Image
                                src={work}
                                alt="Our Work"
                                width={500}
                                height={350}
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                </section>

                <section className="mb-12 flex items-center">
                    <div className="w-1/4 rounded-full bg-gradient-to-br from-yellow-400 to-orange-600 text-white text-2xl font-bold mb-4 shadow-md flex justify-center items-center">
                        <span className="text-center">02</span>
                    </div>
                    <div className="ml-4 w-3/4">
                        <h2 className="text-3xl font-bold text-purple-900 mb-4">Services we provide</h2>
                        <p className="text-gray-800 leading-7">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac massa sit amet elit consectetur condimentum. Sed eget nisl eu est viverra ultrices. Nulla facilisi.
                        </p>
                        <div className="mt-4">
                            <Image
                                src={services}
                                alt="Services"
                                width={500}
                                height={350}
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                </section>

                <section className="flex items-center">
                    <div className="w-1/4 rounded-full bg-gradient-to-br from-red-400 to-pink-600 text-white text-2xl font-bold mb-4 shadow-md flex justify-center items-center">
                        <span className="text-center">03</span>
                    </div>
                    <div className="ml-4 w-3/4">
                        <h2 className="text-3xl font-bold text-purple-900 mb-4">Our Mission</h2>
                        <p className="text-gray-800 leading-7">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac massa sit amet elit consectetur condimentum. Sed eget nisl eu est viverra ultrices. Nulla facilisi.
                        </p>
                        <div className="mt-4">
                            <Image
                                src={mission}
                                alt="Our Mission"
                                width={500}
                                height={350}
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}