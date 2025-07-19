
import React from 'react';
import Layouts from './layouts';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { clearUser } from './store';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';
import { useSelector } from 'react-redux';

function About() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.user.user);

  React.useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    dispatch(clearUser());
    navigate('/');
  };

  return (
    <Layouts>
      <div className="w-full min-h-screen bg-gradient-to-br from-purple-100 via-cyan-50 to-pink-100 py-10 px-2 flex flex-col items-center">
        {/* Group 1: Header, About, AI Research */}
        <div className="max-w-5xl w-full mb-8 p-6 rounded-2xl shadow-2xl bg-gradient-to-br from-pink-200 via-white to-purple-100 border border-purple-300">
          <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-400 to-cyan-600 mb-6 drop-shadow-lg">Welcome to Micro_code</h1>
          <div className="w-full h-2 mb-8 bg-gradient-to-r from-pink-400 via-purple-300 to-cyan-400 rounded-full"></div>
          {/* About Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-500 bg-clip-text text-transparent">About Us</h2>
            <p className="text-gray-700  leading-relaxed">
              Micro_code is a forward-thinking software company specializing in custom software development, AI-powered solutions, and digital transformation for businesses worldwide. Our mission is to empower organizations with innovative technology, seamless user experiences, and scalable architectures.<br /><br />
              Founded in 2015, Micro_code has grown from a small startup to a global technology partner, serving clients in over 20 countries. Our commitment to excellence and innovation drives us to deliver cutting-edge solutions for businesses of all sizes.<br /><br />
              <span className="block text-teal-600 font-semibold mb-2">Innovation at Our Core</span>
              We leverage the latest advancements in artificial intelligence, machine learning, and cloud computing to help our clients stay ahead of the curve. Our R&D team constantly explores new technologies to deliver future-ready solutions.<br /><br />
              <span className="block text-teal-600 font-semibold mb-2">Sustainability & Social Impact</span>
              Micro_code is committed to sustainable development and social responsibility. We support green tech initiatives, promote diversity in tech, and contribute to community-driven projects that make a positive impact.<br /><br />
              <span className="block text-teal-600 font-semibold mb-2">Global Partnerships</span>
              Our strategic alliances with leading tech companies and universities enable us to deliver world-class solutions and foster innovation across industries.
            </p>
          </section>
          {/* AI Research & Innovation Section */}
          <section data-aos="fade-up" className="mb-8">
            <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-400 via-purple-300 to-pink-500 bg-clip-text text-transparent">AI Research & Innovation</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-teal-50 p-4 rounded-xl shadow">
                <h3 className="font-bold text-teal-600 mb-1">AI Labs</h3>
                <p className="text-gray-700">Our dedicated AI Labs focus on developing next-generation algorithms for natural language processing, computer vision, and predictive analytics.</p>
              </div>
              <div className="bg-teal-50 p-4 rounded-xl shadow">
                <h3 className="font-bold text-teal-600 mb-1">Open Source Contributions</h3>
                <p className="text-gray-700">We actively contribute to open source AI projects, sharing our expertise and collaborating with the global tech community.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Group 2: Vision/Mission, Leadership, Services */}
        <div className="max-w-5xl w-full mb-8 p-6 rounded-2xl shadow-2xl bg-gradient-to-br from-cyan-100 via-white to-purple-100 border border-cyan-300">
          {/* Vision & Mission Section */}
          <section data-aos="fade-up" className="mb-8">
            <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-400 via-purple-300 to-pink-500 bg-clip-text text-transparent">Vision & Mission</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-emerald-50 p-4 rounded-xl shadow">
                <h3 className="font-bold text-emerald-600 mb-1">Our Vision</h3>
                <p className="text-gray-700">To be the global leader in digital innovation, driving business success through technology and creativity.</p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-xl shadow">
                <h3 className="font-bold text-emerald-600 mb-1">Our Mission</h3>
                <p className="text-gray-700">Empowering organizations to achieve their goals with smart, scalable, and secure software solutions.</p>
              </div>
            </div>
          </section>
          {/* Leadership Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-pink-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">Leadership</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div data-aos='fade-right' className="bg-emerald-100 p-4 rounded-xl shadow">
                <h3 className="font-bold text-emerald-600 mb-1">CEO: Priya Sharma</h3>
                <p className="text-gray-700">Priya brings 15+ years of experience in software engineering and business strategy, leading Micro_code to new heights in innovation and client satisfaction.</p>
              </div>
              <div data-aos='fade-left' className="bg-emerald-100 p-4 rounded-xl shadow">
                <h3 className="font-bold text-emerald-600 mb-1">CTO: Arjun Patel</h3>
                <p className="text-gray-700">Arjun is an expert in AI, cloud computing, and scalable architectures, driving the technical vision of Micro_code.</p>
              </div>
            </div>
          </section>
          {/* Services Section */}
          <section className="mb-8 w-full">
            <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-500 bg-clip-text text-transparent">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {/* ...existing code for services, but with teal/emerald colors... */}
              <div data-aos="fade-up-right" className="bg-teal-50 p-4 rounded-xl shadow">
                <h3 className="font-bold text-teal-600 mb-2">AI & Machine Learning</h3>
                <p className="text-gray-700">Build intelligent systems for automation, analytics, and prediction. Includes NLP, computer vision, and recommendation engines.</p>
              </div>
              <div className="bg-teal-50 p-4 rounded-xl shadow">
                <h3 className="font-bold text-teal-600 mb-2">Custom Software Development</h3>
                <p className="text-gray-700">Tailored web, mobile, and enterprise applications to fit your business needs.</p>
              </div>
              <div data-aos="fade-up-left" className="bg-teal-50 p-4 rounded-xl shadow">
                <h3 className="font-bold text-teal-600 mb-2">Cloud Solutions</h3>
                <p className="text-gray-700">Scalable, secure cloud migration, management, and optimization for AWS, Azure, and GCP.</p>
              </div>
              <div data-aos="fade-up-right" className="bg-teal-50 p-4 rounded-xl shadow">
                <h3 className="font-bold text-teal-600 mb-2">UI/UX Design</h3>
                <p className="text-gray-700">User-centric interfaces for delightful experiences, wireframes, and prototyping.</p>
              </div>
              <div className="bg-teal-50 p-4 rounded-xl shadow">
                <h3 className="font-bold text-teal-600 mb-2">Consulting & Strategy</h3>
                <p className="text-gray-700">Data-driven digital transformation, business growth, and IT strategy consulting.</p>
              </div>
              <div data-aos="fade-up-left" className="bg-teal-50 p-4 rounded-xl shadow">
                <h3 className="font-bold text-teal-600 mb-2">Cybersecurity</h3>
                <p className="text-gray-700">Protect your data and infrastructure with robust security solutions, audits, and compliance.</p>
              </div>
              <div data-aos="fade-up-right" className="bg-teal-50 p-4 rounded-xl shadow">
                <h3 className="font-bold text-teal-600 mb-2">DevOps & Automation</h3>
                <p className="text-gray-700">Streamline development and deployment for faster results, CI/CD pipelines, and infrastructure as code.</p>
              </div>
              <div className="bg-teal-50 p-4 rounded-xl shadow">
                <h3 className="font-bold text-teal-600 mb-2">Mobile App Development</h3>
                <p className="text-gray-700">Native and cross-platform apps for iOS and Android, including Flutter and React Native.</p>
              </div>
              <div data-aos="fade-up-left" className="bg-teal-50 p-4 rounded-xl shadow">
                <h3 className="font-bold text-teal-600 mb-2">Data Analytics</h3>
                <p className="text-gray-700">Unlock insights and drive decisions with advanced analytics, dashboards, and reporting.</p>
              </div>
              <div data-aos="fade-up-right" className="bg-teal-50 p-4 rounded-xl shadow">
                <h3 className="font-bold text-teal-600 mb-2">E-commerce Solutions</h3>
                <p className="text-gray-700">Custom online stores, payment integration, and scalable e-commerce platforms.</p>
              </div>
              <div className="bg-teal-50 p-4 rounded-xl shadow">
                <h3 className="font-bold text-teal-600 mb-2">IT Support & Maintenance</h3>
                <p className="text-gray-700">24/7 support, troubleshooting, and ongoing maintenance for your digital assets.</p>
              </div>
              <div data-aos="fade-up-left" className="bg-teal-50 p-4 rounded-xl shadow">
                <h3 className="font-bold text-teal-600 mb-2">Training & Workshops</h3>
                <p className="text-gray-700">Upskill your team with hands-on training in AI, cloud, and software development best practices.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Group 3: Client Success, Achievements, Why Choose Us */}
        <div className="max-w-5xl w-full mb-8 p-6 rounded-2xl shadow-2xl bg-gradient-to-br from-pink-100 via-white to-cyan-100 border border-pink-300">
          {/* Client Success Stories Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-500 bg-clip-text text-transparent">Client Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div data-aos='fade-right' className="bg-emerald-100 p-4 rounded-xl shadow">
                <h3 className="font-bold text-emerald-600 mb-1">Retail AI Transformation</h3>
                <p className="text-gray-700">Micro_code helped a leading retailer boost sales by 30% using AI-driven demand forecasting and personalized recommendations.</p>
              </div>
              <div data-aos='fade-left' className="bg-emerald-100 p-4 rounded-xl shadow">
                <h3 className="font-bold text-emerald-600 mb-1">Healthcare Automation</h3>
                <p className="text-gray-700">Our custom healthcare platform streamlined patient management and improved diagnostics with machine learning models.</p>
              </div>
            </div>
          </section>
          {/* Achievements Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">Our Achievements</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div data-aos="fade-up" data-aos-duration="3000" className="bg-emerald-100 p-4 rounded-xl text-center shadow">
                <span className="text-2xl font-bold text-emerald-600">500+</span>
                <p className="text-gray-700">Projects Delivered</p>
              </div>
              <div data-aos="fade-up" data-aos-duration="3000" className="bg-emerald-100 p-4 rounded-xl text-center shadow">
                <span className="text-2xl font-bold text-emerald-600">200+</span>
                <p className="text-gray-700">Happy Clients</p>
              </div>
              <div data-aos="fade-up" data-aos-duration="3000" className="bg-emerald-100 p-4 rounded-xl text-center shadow">
                <span className="text-2xl font-bold text-emerald-600">10+</span>
                <p className="text-gray-700">Years of Excellence</p>
              </div>
            </div>
          </section>
          {/* Why Choose Us Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-500 bg-clip-text text-transparent">Why Choose Micro_code?</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div data-aos='fade-right' className="bg-teal-50 p-4 rounded-xl shadow">
                <h3 className="font-bold text-teal-600 mb-1">Expert Team</h3>
                <p className="text-gray-700">Our developers, designers, and AI specialists bring years of experience and creativity to every project.</p>
              </div>
              <div data-aos='fade-left' className="bg-teal-50 p-4 rounded-xl shadow">
                <h3 className="font-bold text-teal-600 mb-1">Client-Focused Approach</h3>
                <p className="text-gray-700">We listen, adapt, and deliver solutions that fit your unique business needs and goals.</p>
              </div>
              <div data-aos='fade-right' className="bg-teal-50 p-4 rounded-xl shadow">
                <h3 className="font-bold text-teal-600 mb-1">Agile & Transparent</h3>
                <p className="text-gray-700">Our agile process ensures rapid delivery, clear communication, and continuous improvement.</p>
              </div>
              <div data-aos='fade-left' className="bg-teal-50 p-4 rounded-xl shadow">
                <h3 className="font-bold text-teal-600 mb-1">Continuous Support</h3>
                <p className="text-gray-700">We provide ongoing support, maintenance, and optimization for long-term success.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Group 4: Careers, Testimonials, Contact, Logout */}
        <div className="max-w-5xl w-full mb-8 p-6 rounded-2xl shadow-2xl bg-gradient-to-br from-cyan-100 via-white to-purple-100 border border-cyan-300">
          {/* Careers Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-500 bg-clip-text text-transparent">Careers</h2>
            <p className="text-gray-700 mb-2">Join our passionate team and help shape the future of technology. We offer opportunities for growth, learning, and innovation in a collaborative environment.</p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Software Engineers</li>
              <li>AI/ML Specialists</li>
              <li>UI/UX Designers</li>
              <li>Cloud Architects</li>
              <li>Project Managers</li>
              <li>Business Analysts</li>
              <li>QA Engineers</li>
            </ul>
          </section>
          {/* Testimonials Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">Testimonials</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="bg-teal-50 p-4 rounded-xl shadow">
                <p className="text-gray-700 italic">"Micro_code transformed our business with their AI solutions. Highly recommended!"</p>
                <span className="block mt-2 text-teal-600 font-semibold">- Rakesh Kumar, CEO, TechNova</span>
              </div>
              <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="bg-teal-50 p-4 rounded-xl shadow">
                <p className="text-gray-700 italic">"The team at Micro_code is professional, responsive, and truly understands our needs."</p>
                <span className="block mt-2 text-teal-600 font-semibold">- Anjali Mehta, COO, FinEdge</span>
              </div>
            </div>
          </section>
          {/* Contact Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-500 bg-clip-text text-transparent">Contact Us</h2>
            <p className="text-gray-700 mb-2">Ready to transform your business with Micro_code? Reach out for a free consultation or project quote.</p>
            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <span className="font-semibold text-emerald-600">Email:</span>
              <span className="text-gray-700">contact@microcode.com</span>
            </div>
          </section>
          {/* Logout Button */}
          <div className="flex justify-center mt-6">
            <button onClick={handleLogout} className="bg-gradient-to-r from-teal-500 via-emerald-400 to-teal-700 hover:from-teal-600 hover:to-emerald-600 text-white font-semibold py-2 px-8 rounded-xl shadow-lg transition-all duration-200">Logout</button>
          </div>
        </div>
      </div>
    </Layouts>
  );
}

export default About;