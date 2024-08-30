import Footer from "../components/Footer";

function About() {
  const teamMembers = [
    {
      name: "Jane Doe",
      position: "CEO & Founder",
      img: "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "John Smith",
      position: "CTO",
      img: "https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Alice Brown",
      position: "Chief Marketing Officer",
      img: "https://images.pexels.com/photos/1687675/pexels-photo-1687675.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
  ];

  return (
    <>
      <div className="bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 min-h-screen p-8">
        {/* Header Section */}
        <section className="text-center py-12">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 dark:text-slate-100">
            About <span className="text-pink-600 dark:text-pink-600">Us</span>
          </h1>
          <p className="text-md md:text-2xl text-gray-600 dark:text-gray-300 mt-4">
            Discover our story, mission, and the amazing team behind it all.
          </p>
        </section>

        {/* Our Story Section */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 my-8">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Our Story</h2>
          <p className="text-gray-600 dark:text-gray-300">
            We started with a simple mission: to create a platform that empowers individuals to take charge of their health and well-being. From humble beginnings, we’ve grown into a thriving community of passionate individuals dedicated to making a positive impact on the world.
          </p>
        </section>

        {/* Mission Section */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 my-8">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Our mission is to provide the tools and resources needed to help people lead healthier, happier lives. We believe that with the right support, everyone can achieve their full potential, both physically and mentally.
          </p>
        </section>

        {/* Team Section */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 my-8">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div className="text-center" key={index}>
                <img
                  src={member.img}
                  alt="Team Member"
                  className="mx-auto object-contain h-40 w-40 rounded-full border-4 border-white dark:border-gray-700 shadow-md"
                />
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mt-4">{member.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{member.position}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center py-12">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Join Our Journey</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            We’re always looking for passionate individuals to join our team. If you’re ready to make a difference, contact us today.
          </p>
          <a href="/contact" className="text-white bg-pink-500 dark:bg-pink-600 px-6 py-3 rounded-full shadow-lg hover:bg-pink-600 dark:hover:bg-pink-700 transition-colors">
            Contact Us
          </a>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default About;
