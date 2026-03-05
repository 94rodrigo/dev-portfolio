export default function MainSection() {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 rounded-lg border border-gray-200 grid grid-cols-2 justify-items-center items-center h-full">
            <div>
                <span>Hi, I'm Rodrigo Costa!</span>
                <br />
                <h1 className="text-5xl font-extrabold bg-gradient-to-r 
                    from-orange-300 via-pink-500 to-purple-900 
                    bg-clip-text text-transparent">Software</h1>
                <br />
                <span>Developer</span>
                <br />
                <span>A passionate software developer with a love for creating innovative solutions. Welcome to my portfolio!</span>
            </div>
            <div className="flex items-center justify-center h-full">
                <img className="max-w-[75%]" src="/images/rodrigo-picture.png" alt="Rodrigo Costa" />
            </div>
        </div>
    );
}