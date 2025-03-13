import { FaHome, FaUsers, FaRegLightbulb, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h1
            className="text-4xl font-bold sm:text-6xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About <span className="text-blue-300">HomeHive Real Estate</span>
          </motion.h1>
          <p className="mt-4 text-lg opacity-90">
            We help you find the perfect home with ease and confidence.
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-blue-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Who We Are
        </motion.h2>
        <p className="mt-4 text-gray-600">
          HomeHive Real Estate is a leading real estate platform that connects
          homebuyers with their dream properties. With years of experience in
          the industry, we offer a seamless, transparent, and customer-first
          approach to home searching.
        </p>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-10 px-6">
          <motion.div
            className="p-6 bg-blue-50 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FaRegLightbulb className="text-4xl text-blue-600 mx-auto" />
            <h3 className="text-xl font-bold mt-4 text-blue-800">
              Our Mission
            </h3>
            <p className="mt-2 text-gray-600">
              To provide the most seamless, user-friendly, and secure property
              search experience for everyone.
            </p>
          </motion.div>

          <motion.div
            className="p-6 bg-blue-50 rounded-lg shadow-md"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FaHome className="text-4xl text-blue-600 mx-auto" />
            <h3 className="text-xl font-bold mt-4 text-blue-800">Our Vision</h3>
            <p className="mt-2 text-gray-600">
              To become the most trusted real estate platform by offering
              high-quality service and transparency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-100 text-center">
        <motion.h2
          className="text-3xl font-bold text-blue-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why Choose HomeHive Real Estate?
        </motion.h2>
        <div className="grid sm:grid-cols-3 gap-8 max-w-6xl mx-auto mt-8 px-6">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <FaUsers className="text-4xl text-blue-600 mx-auto" />
            <h3 className="text-xl font-bold mt-4">Trusted by Thousands</h3>
            <p className="text-gray-600 mt-2">
              We have helped thousands of people find their dream home.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <FaHandshake className="text-4xl text-blue-600 mx-auto" />
            <h3 className="text-xl font-bold mt-4">Hassle-Free Process</h3>
            <p className="text-gray-600 mt-2">
              Our easy and transparent process ensures a smooth experience.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <FaHome className="text-4xl text-blue-600 mx-auto" />
            <h3 className="text-xl font-bold mt-4">Wide Range of Listings</h3>
            <p className="text-gray-600 mt-2">
              We offer a diverse selection of properties to suit every budget.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 bg-white text-center">
        <motion.h2
          className="text-3xl font-bold text-blue-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Meet Our Experts
        </motion.h2>
        <div className="grid sm:grid-cols-4 gap-8 max-w-6xl mx-auto mt-8 px-6">
          {[
            {
              name: "Ganesh Prasad",
              role: "Full Stack Developer",
              image: "profile_01.jpg",
              description:
                "Expert in building scalable web applications and backend systems. Passionate about Java, React, and cloud computing.",
            },
            {
              name: "Abhishek Ahirwar",
              role: "React Developer",
              image: "profile_02.jpg",
              description:
                "Specializes in creating dynamic user interfaces with React and Next.js. Loves optimizing performance and UX design.",
            },
            {
              name: "Priyanshu Chouhan",
              role: "Documentation Advisor",
              image: "profile_03.jpg",
              description:
                "Ensures clear and concise technical documentation, making complex concepts easy to understand for developers.",
            },
            {
              name: "Sapna Mandloi",
              role: "Content Creator",
              image: "profile_04.jpg",
              description:
                "Creates engaging and informative content on technology and development, bridging the gap between tech and storytelling.",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg shadow-md text-center"
            >
              <img
                src={`/images/${member.image}`}
                alt={member.name}
                className="rounded-full w-24 h-24 object-cover mx-auto border-4 border-gray-200 shadow-lg"
              />
              <h3 className="text-xl font-bold mt-4">{member.name}</h3>
              <p className="text-blue-600 mt-1 font-semibold">{member.role}</p>
              <p className="text-gray-700 mt-2 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white text-center">
        <motion.h2
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Join Us Today!
        </motion.h2>
        <p className="mt-4 text-lg opacity-90">
          Start your journey towards your dream home with HomeHive Real Estate.
        </p>
        <a
          href="/sign-up"
          className="mt-6 inline-block px-6 py-3 bg-white text-blue-900 font-bold rounded-lg hover:bg-gray-200 transition"
        >
          Sign Up Now
        </a>
      </section>
    </div>
  );
}
