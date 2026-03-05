
export default function MainSection() {
    return (
        <div className="mx-auto max-w-7xl text-gray-600 px-4 sm:px-6 lg:px-8 rounded-lg border border-gray-200 grid grid-cols-2 justify-items-center items-center h-full">
            <div>
                <span className="text-3xl">Hi, I'm Rodrigo Costa!</span>
                <br />
                <br />
                <br />
                <h1 id="lbl-oftware-developer" className="text-5xl font-extrabold bg-linear-to-r from-orange-300 via-pink-500 to-purple-900 bg-clip-text text-transparent">
                    Software Developer
                </h1>
                <br />
                <br />
                <br />
                <span className={`font-sans text-gray-600 leading-relaxed text-xl`}>A passionate software developer with a love for creating innovative solutions. Welcome to my portfolio!</span>
            </div>
            <div className="flex items-center justify-center h-full">
                <img className="max-w-[75%]" src="/images/rodrigo-picture.png" alt="Rodrigo Costa" />
            </div>
        </div>
    );
}