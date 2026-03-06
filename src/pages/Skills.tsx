import BackHomeButton from "../components/BackHome/BackHomeButton";

export default function Skills() {
    return (
        <>
            <BackHomeButton />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto py-16 sm:py-24 lg:py-10">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">Skills</h2>
                    
                    <p className="mt-4 text-gray-500">
                        Here are some of the technologies and tools I work with when building web applications and backend services, and I'm always eager to learn new ones.
                    </p>

                    <h4 className="mt-6 text-xl font-semibold text-gray-900 text-left">💻 Programming Languages:</h4>
                    
                    <ul className="mt-4 text-gray-500 list-disc list-inside text-left">
                        <li>Java</li>
                        <li>TypeScript</li>
                        <li>Go</li>
                        <li>Python</li>
                    </ul>

                    <h4 className="mt-6 text-xl font-semibold text-gray-900 text-left">⚛️ Frontend:</h4>

                    <ul className="mt-4 text-gray-500 list-disc list-inside text-left">
                        <li>React</li>
                        <li>TypeScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Tailwind</li>
                        <li>JavaScript</li>
                    </ul>

                    <h4 className="mt-6 text-xl font-semibold text-gray-900 text-left">🧠 Backend:</h4>

                    <ul className="mt-4 text-gray-500 list-disc list-inside text-left">
                        <li>Java Spring Boot</li>
                        <li>REST API development</li>
                        <li>Microservices</li>
                        <li>API design</li>
                    </ul>

                    <h4 className="mt-6 text-xl font-semibold text-gray-900 text-left">🗄️ Databases:</h4>

                    <ul className="mt-4 text-gray-500 list-disc list-inside text-left">
                        <li>PostgreSQL</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                    </ul>

                    <h4 className="mt-6 text-xl font-semibold text-gray-900 text-left">⚙️ Tools & Technologies:</h4>

                    <ul className="mt-4 text-gray-500 list-disc list-inside text-left">
                        <li>Git</li>
                        <li>Docker</li>
                        <li>Linux</li>
                        <li>Maven</li>
                    </ul>

                    <h4 className="mt-6 text-xl font-semibold text-gray-900 text-left">🌱 Currently Learning:</h4>
                    
                    <ul className="mt-4 text-gray-500 list-disc list-inside text-left">
                        <li>Improving my skills with Python</li>
                        <li>Machine learning</li>
                    </ul>
                </div>
            </div>
        </>
    );
}