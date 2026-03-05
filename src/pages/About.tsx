import BackHomeButton from "../components/BackHome/BackHomeButton";

export default function About() {
    return (
        <>
            <BackHomeButton />
            <div className="mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-gray-700">About Me</h1>

                <img className="w-48 h-48 rounded-full mx-auto mb-6 mr-10 float-left" src="https://avatars.githubusercontent.com/u/51063103?v=4" alt="Profile Picture" />

                <p className="text-lg text-justify text-gray-600 mt-4">
                    Hi! I'm Rodrigo, a software developer with over 6 years of experience building web applications and backend systems.
                </p>

                <p className="text-lg text-justify text-gray-600 mt-4"> 
                    My main stack includes <b>Java, React, and TypeScript</b>, and I also have experience working with <b>Go and Python</b>. I enjoy designing clean architectures, developing scalable APIs, and building reliable applications that solve real-world problems.
                </p>

                <p className="text-lg text-justify text-gray-600 mt-4">
                    I hold degrees in <b>Chemical Engineering</b> and <b>Systems Analysis and Development</b>, which gave me a strong analytical mindset and a structured approach to problem solving. I currently live in Santos, São Paulo, Brazil.
                </p>

                <p className="text-lg text-justify text-gray-600 mt-4">
                    I speak <b>Portuguese, English, and French</b>, and I also have working knowledge of <b>Spanish and German.</b>
                </p>

                <p className="text-lg text-justify text-gray-600 mt-4">
                    Outside of programming, I enjoy practicing physical exercises, listening to music, playing the guitar, and reading books. I believe maintaining a balance between technology and personal interests helps me stay creative and motivated.
                </p>

                <p className="text-lg text-justify text-gray-600 mt-4">
                    I'm always interested in learning new technologies, improving my skills, and collaborating on meaningful projects.
                </p>
            </div>
        </>
    );
}