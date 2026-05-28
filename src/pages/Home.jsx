import { Link } from "react-router-dom";

export default function Home() {

<<<<<<< HEAD
    const services = [
    "Diseño FTTH",
    "Distribución ODN",
    "Planos AutoCAD",
    "Documentación As-Built",
    "Cálculo de Potencia Óptica",
    "Soporte para ISP",
    ];
=======
        const services = [
            {
                title: "Diseño FTTH",
                description:
                "Diseño de redes FTTH optimizadas para despliegues urbanos y rurales.",
            },
            {
                title: "Distribución ODN",
                description:
                "Planificación y distribución eficiente de la red óptica pasiva (ODN).",
            },
            {
                title: "Planos AutoCAD",
                description:
                "Elaboración de planos técnicos detallados en AutoCAD para proyectos de fibra óptica.",
            },
            {
                title: "Documentación As-Built",
                description:
                "Generación de documentación final conforme a la ejecución del proyecto.",
            },
            {
                title: "Cálculo de Potencia Óptica",
                description:
                "Análisis y cálculo de pérdidas ópticas para garantizar el rendimiento de la red.",
            },
            {
                title: "Soporte para ISP",
                description:
                "Asistencia técnica especializada para proveedores de internet y telecomunicaciones.",
            },
            ];
>>>>>>> f4bfece (tercera subida)

    const projects = [
            {
                title: "ATP",
<<<<<<< HEAD
                description: "Diseño GPON para 128 hogares.",
=======
                description: "Entregables para proyectos ATP tanto MDU como SDU, así como troncales de conexión",
>>>>>>> f4bfece (tercera subida)
                link: "/projects/ATP",
            },
            {
                title: "ONNET",
                description:
<<<<<<< HEAD
                "Planeación de rutas principales, nodos y cajas para expansión de red.",
=======
                "Entregables para proyectos ONNET, Telefónica, cargues en Gestot, así como seguimientos y actualización de planos de diseño, construcción de red y obras civiles",
>>>>>>> f4bfece (tercera subida)
                link: "/projects/Onnet",
            },
            {
                title: "UFINET",
                description:
<<<<<<< HEAD
                "Organización y actualización de planos técnicos para ISP.",
=======
                "Entregables para despliegue de red Ufinet, despliegue de homepassed (Hogares-Pasados), tanto en verticales como externos, distribución de splitters y ramificaciones de ramales",
>>>>>>> f4bfece (tercera subida)
                link: "/projects/Ufinet",
            },
            {
                title: "CLARO",
                description:
<<<<<<< HEAD
                "Organización y actualización de planos técnicos para ISP.",
=======
                "Entregables Claro de acuerdo a requerimientos para proceso de cargue listo para Smallworld",
>>>>>>> f4bfece (tercera subida)
                link: "/projects/Claro",
            },
            {
                title: "ITX",
                description:
<<<<<<< HEAD
                "Organización y actualización de planos técnicos para ISP.",
=======
                "Carpetas de entregables para proyectos Internexa, simbología y especificaciones técnicas, revision de documentación de despliegues de fibra (No se realizan cargues en plataforma de ITX)",
>>>>>>> f4bfece (tercera subida)
                link: "/projects/ITX",
            },
            {
                title: "GESTION PERMISOS",
                description:
<<<<<<< HEAD
                "Organización y actualización de planos técnicos para ISP.",
=======
                "Entregables para permisos ante electrificadoras, predios privados, operadores dueños de infraestructura, ETB, Claro, Une, Telefonica, etc",
>>>>>>> f4bfece (tercera subida)
                link: "/projects/GestionPermisos",
            },
                     ];

  const tech = ["AutoCAD", "QGIS", "ArcGis", "GlobalMapper", "Google Earth Pro", "AppMoviles"];


    return (
        <div className="min-h-screen bg-black text-white font-sans">
        <div className="min-h-screen bg-black text-white font-sans">
            {/* Navbar */}
            <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-800 z-50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <h1 className="text-2xl font-bold text-cyan-400">
                    Redes de Fibra Optica - Robinson Cuesta
                </h1>

                <div className="hidden md:flex gap-6 text-sm text-gray-300">
                    <a href="#about" className="hover:text-cyan-400 transition">
                    Sobre mí
                    </a>
                    <a href="#services" className="hover:text-cyan-400 transition">
                    Servicios
                    </a>
                    <a href="#projects" className="hover:text-cyan-400 transition">
                    Proyectos
                    </a>
                    <a href="#contact" className="hover:text-cyan-400 transition">
                    Contacto
                    </a>
<<<<<<< HEAD
=======
                    <a href="/projects/login" className="hover:text-cyan-400 transition">
                    Videos Capacitaciòn
                    </a>
>>>>>>> f4bfece (tercera subida)
                </div>
                </div>
            </nav>

            {/* Hero */}
            <section id="top" className="pt-40 pb-24 px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <p className="text-cyan-400 uppercase tracking-[4px] mb-4">
                    Diseñador de Redes FTTH & GPON
                    </p>

                    <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
                        Entregables de
                    <span className="text-cyan-400"> fibra óptica</span>
                    </h2>

                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    Diseño de redes FTTH, documentación técnica,
                    planos AutoCAD, Qgis, Arcgis y distribución ODN para proyectos de
                    telecomunicaciones. 
                    </p>

                    <div className="flex gap-4 flex-wrap">
                    <button className="bg-cyan-400 text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition">
                        <a href="#projects" className="hover:text-cyan-400 transition">
                        Ver Proyectos
                        </a>
                    </button>

                    <button className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-2xl hover:bg-cyan-400 hover:text-black transition">
                        Contactarme
                    </button>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border border-cyan-500/20 rounded-3xl p-10 shadow-2xl">
                    <div className="space-y-4 text-gray-300">
                    <div className="space-y-4 text-gray-300">
                        <a
                        href="#ftth"
                        className="block bg-black/50 p-4 rounded-2xl border border-gray-800 hover:border-cyan-400 hover:scale-105 transition"
                        >
                        📡 Diseño FTTH para expansión ISP
                        </a>

                        <a
                        href="#rutas"
                        className="block bg-black/50 p-4 rounded-2xl border border-gray-800 hover:border-cyan-400 hover:scale-105 transition"
                        >
                        🗺️ Planeación de rutas y nodos
                        </a>

                        <a
                        href="#documentacion"
                        className="block bg-black/50 p-4 rounded-2xl border border-gray-800 hover:border-cyan-400 hover:scale-105 transition"
                        >
                        📑 Documentación técnica profesional
                        </a>
                        <a
                        href="#potencia"
                        className="block bg-black/50 p-4 rounded-2xl border border-gray-800 hover:border-cyan-400 hover:scale-105 transition"
                        >
                        ⚡ Cálculo de potencia óptica
                        </a>

                    </div>
                    </div>
                </div>
                </div>
            </section>



        {/* FTTH Showcase */}
        <section
        id="ftth"
        className="py-24 px-6 bg-gradient-to-b from-gray-950 to-black"
        >
        <div className="max-w-7xl mx-auto">

            <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-cyan-400 mb-6">
                Diseño FTTH
            </h3>

            <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
                Planeación y diseño de redes FTTH utilizando arquitectura GPON,
                distribución ODN y documentación técnica profesional para ISP y
                proyectos de telecomunicaciones.
            </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Imagen */}
            <div className="rounded-3xl overflow-hidden border border-cyan-500/20 shadow-2xl">
                <img
                src="https://github.com/ROKU2411/portafolio/blob/main/pon.png?raw=true"
                alt="FTTH Network"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
            </div>

            {/* Contenido */}
            <div className="space-y-6">

                <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6">
                <h4 className="text-2xl font-semibold mb-3 text-cyan-400">
                    Arquitectura GPON
                </h4>

                <p className="text-gray-400 leading-relaxed">
                    Diseño de redes GPON con distribución eficiente de splitters,
                    rutas ópticas y capacidad escalable para crecimiento de usuarios.
                </p>
                </div>

                <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6">
                <h4 className="text-2xl font-semibold mb-3 text-cyan-400">
                    Distribución ODN
                </h4>

                <p className="text-gray-400 leading-relaxed">
                    Organización de cajas NAP, CTO, rutas troncales y derivaciones
                    optimizadas para minimizar pérdidas ópticas.
                </p>
                </div>

                <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6">
                <h4 className="text-2xl font-semibold mb-3 text-cyan-400">
                    Documentación Técnica
                </h4>

                <p className="text-gray-400 leading-relaxed">
                    Elaboración de planos AutoCAD, mapas GIS y documentación As-Built
                    para proyectos de telecomunicaciones.
                </p>
                </div>

            </div>
            </div>
            
            <div className="mt-12 text-center">
            <a
                href="#top"
                className="inline-block bg-cyan-400 text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition"
            >
                ↑ Volver arriba
            </a>
            </div>

        </div>
        </section>

        {/* Rutas y nodos */}
        <section
        id="rutas"
        className="py-24 px-6 bg-black border-t border-gray-900"
        >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

            <div>
            <h3 className="text-5xl font-bold text-cyan-400 mb-6">
                Planeación de Rutas y Nodos
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Diseño estratégico de rutas de fibra óptica, nodos de distribución,
                cajas terminales y expansión de infraestructura para proyectos ISP.
            </p>

            <div className="space-y-4">
                <div className="bg-gray-900 p-6 rounded-3xl border border-gray-800">
                📍 Diseño de rutas principales
                </div>

                <div className="bg-gray-900 p-6 rounded-3xl border border-gray-800">
                🧭 Planeación de nodos GPON
                </div>

                <div className="bg-gray-900 p-6 rounded-3xl border border-gray-800">
                📡 Distribución eficiente de cobertura
                </div>
            </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-cyan-500/20">
            <img
                src="https://github.com/ROKU2411/portafolio/blob/main/qgis01.jpg?raw=true"
                alt="Rutas FTTH"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
            </div>
            <div className="mt-12 text-center">
            <a
            href="#top"
            className="inline-block bg-cyan-400 text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition"
            >
            ↑ Volver arriba
            </a>
            </div>
        </div>
        </section>

        {/* Documentación */}
        <section
        id="documentacion"
        className="py-24 px-6 bg-gray-950 border-t border-gray-900"
        >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

            <div className="rounded-3xl overflow-hidden border border-cyan-500/20">
            <img
                src="https://github.com/ROKU2411/portafolio/blob/main/acadearth.png?raw=true"
                alt="Documentación Técnica"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
            </div>

            <div>
            <h3 className="text-5xl font-bold text-cyan-400 mb-6">
                Documentación Técnica
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Organización y elaboración de planos técnicos, documentación
                As-Built y reportes para proyectos de telecomunicaciones.
            </p>

            <div className="grid gap-4">

                <div className="bg-gray-900 p-6 rounded-3xl border border-gray-800">
                📑 Planos AutoCAD, Earth, Gis
                </div>

                <div className="bg-gray-900 p-6 rounded-3xl border border-gray-800">
                🗂️ Documentación Relevamiento, Seguimientos,  As-Built
                </div>

                <div className="bg-gray-900 p-6 rounded-3xl border border-gray-800">
                🛰️ Generación de cartografías y organización técnica
                </div>

            </div>
            </div>
            <div className="mt-12 text-center">
            <a
            href="#top"
            className="inline-block bg-cyan-400 text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition"
            >
            ↑ Volver arriba
            </a>
            </div>
        </div>
        </section>

        {/* Potencia óptica */}
        <section
        id="potencia"
        className="py-24 px-6 bg-black border-t border-gray-900"
        >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

            <div>
            <h3 className="text-5xl font-bold text-cyan-400 mb-6">
                Certificación de Enlaces
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Evaluación de pérdidas ópticas, niveles de señal y distribución
                eficiente para garantizar estabilidad y rendimiento en redes FTTH.
            </p>

            <div className="space-y-4">

                <div className="bg-gray-900 p-6 rounded-3xl border border-gray-800">
                ⚡ Revisión de trazas, confirmación de datos técnicos
                </div>

                <div className="bg-gray-900 p-6 rounded-3xl border border-gray-800">
                📉 Evaluación de pérdidas
                </div>

                <div className="bg-gray-900 p-6 rounded-3xl border border-gray-800">
                📶 Edición de trazas 
                </div>

            </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-cyan-500/20">
            <img
                src="https://github.com/ROKU2411/portafolio/blob/main/fastreporter.png?raw=true"
                alt="Potencia Óptica"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
            </div>

            <div className="mt-12 text-center">
            <a
                href="#top"
                className="inline-block bg-cyan-400 text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition"
            >
                ↑ Volver arriba
            </a>
            </div>
        </div>
        </section>

            {/* Sobre mí */}
            <section id="about" className="py-24 px-6 border-t border-gray-900">
                <div className="max-w-5xl mx-auto text-center">
                <h3 className="text-4xl font-bold mb-6 text-cyan-400">
                    Sobre mí
                </h3>

                <p className="text-gray-400 text-lg leading-relaxed">
                    Diseñador enfocado en redes FTTH y GPON, especializado en
                    documentación técnica de acuerdo a requerimientos de clientes. Entregables de relevamiento,
                    construcción, certificación y entregas finales. Con soporte constante en caso requerido para
                    actualizaciones y modificaciones.

                </p>
                </div>
            </section>

            {/* Servicios */}
            <section
                id="services"
                className="py-24 px-6 bg-gradient-to-b from-black to-gray-950"
            >
                <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h3 className="text-4xl font-bold text-cyan-400 mb-4">
                    Servicios
                    </h3>
                    <p className="text-gray-400">
                    Soluciones técnicas para proyectos de telecomunicaciones.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<<<<<<< HEAD
                    {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-cyan-400/40 hover:translate-y-[-5px] transition"
                    >
                        <div className="text-4xl mb-4">⚙️</div>
                        <h4 className="text-xl font-semibold mb-3">{service}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                        Servicio profesional orientado a proyectos FTTH y redes de
                        fibra óptica.
                        </p>
                    </div>
                    ))}
=======
                {services.map((service, index) => (
                    <div
                    key={index}
                    className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-cyan-400/40 hover:translate-y-[-5px] transition"
                    >
                    <div className="text-4xl mb-4">⚙️</div>

                    <h4 className="text-xl font-semibold mb-3">
                        {service.title}
                    </h4>

                    <p className="text-gray-400 text-sm leading-relaxed">
                        {service.description}
                    </p>
                    </div>
                ))}
>>>>>>> f4bfece (tercera subida)
                </div>
                </div>
            </section>

            {/* Proyectos */}
            <section id="projects" className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h3 className="text-4xl font-bold text-cyan-400 mb-4">
                    Proyectos
                    </h3>
                    <p className="text-gray-400">
<<<<<<< HEAD
                    Ejemplos de diseño y documentación técnica.
=======
                  Experiencia en entregables y documentación
>>>>>>> f4bfece (tercera subida)
                    </p>
                </div>
                 <div className="grid lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Link
                        key={index}
                        to={project.link}
                        className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden hover:scale-[1.02] transition block"
                        >
                        <div className="h-52 bg-gradient-to-br from-cyan-500/30 to-blue-500/10 flex items-center justify-center text-6xl">
                            📡
                        </div>

                        <div className="p-8">
                            <h4 className="text-2xl font-semibold mb-4">
                            {project.title}
                            </h4>

                            <p className="text-gray-400 leading-relaxed">
                            {project.description}
                            </p>
                        </div>
                        </Link>
                    ))}
                    </div>       
                
                </div>
            </section>

            {/* Tecnologías */}
            <section className="py-24 px-6 border-t border-gray-900">
                <div className="max-w-6xl mx-auto text-center">
                <h3 className="text-4xl font-bold text-cyan-400 mb-10">
                    Tecnologías
                </h3>

                <div className="flex flex-wrap justify-center gap-4">
                    {tech.map((item, index) => (
                    <div
                        key={index}
                        className="px-6 py-3 bg-gray-900 border border-gray-800 rounded-2xl text-gray-300 hover:border-cyan-400/50 transition"
                    >
                        {item}
                    </div>
                    ))}
                </div>
                </div>
            </section>

            {/* Contacto */}
            <section id="contact" className="py-24 px-6 bg-gray-950">
                <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-4xl font-bold text-cyan-400 mb-6">
                    Contacto
                </h3>

                <p className="text-gray-400 text-lg mb-10">
                    Disponible para proyectos FTTH, documentación técnica y soporte de
                    diseño remoto.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-black border border-gray-800 rounded-3xl p-6">
                    <p className="text-gray-500 mb-2">Ubicación</p>
                    <h4 className="text-lg font-semibold">Bogota, Colombia</h4>
                    </div>

                    <div className="bg-black border border-gray-800 rounded-3xl p-6">
                    <p className="text-gray-500 mb-2">WhatsApp</p>
                    <h4 className="text-lg font-semibold">+57 317 3421059</h4>
                    <h4 className="text-lg font-semibold">+57 313 8135814</h4>
                    </div>

                    <div className="bg-black border border-gray-800 rounded-3xl p-6">
                    <p className="text-gray-500 mb-2">Email</p>
                    <h4 className="text-lg font-semibold">robinson.cuesta24@gmail.com</h4>
                    </div>
                </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-gray-900 py-8 text-center text-gray-500 text-sm">
                © 2026 Robinson Cuesta — Portafolio de Diseño FTTH & GPON
            </footer>
            </div>
        </div>
        );
     }