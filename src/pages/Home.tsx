import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail, MapPin, Calendar, Award, Code, Brain, Zap, GraduationCap } from 'lucide-react'
import { Link } from 'react-router-dom'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export default function Home() {
  return (
    <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-auto"
        >
          {/* Hero Card - Large */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-8 text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-24 h-24 bg-white/20 rounded-full mb-6 flex items-center justify-center backdrop-blur-sm"
              >
                <span className="text-3xl font-bold">HJ</span>
              </motion.div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Haoran Ji
              </h1>
              <p className="text-xl mb-6 text-blue-100">
                AI/ML Engineer & Full-Stack Developer
              </p>
              <p className="text-lg mb-8 text-blue-50 leading-relaxed">
                Final-year Computer Science student passionate about artificial intelligence, 
                machine learning, and building innovative solutions.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 rounded-full font-medium transition-all duration-300 backdrop-blur-sm group"
              >
                Learn More
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Quick Info Cards */}
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center mb-4">
              <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
              <h3 className="font-semibold text-gray-900 dark:text-white">Location</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">Beijing, China</p>
            <p className="text-gray-600 dark:text-gray-300">Toronto, Canada (2025 Fall)</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Available for remote work</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center mb-4">
              <Calendar className="w-6 h-6 text-green-600 dark:text-green-400 mr-3" />
              <h3 className="font-semibold text-gray-900 dark:text-white">Experience</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">2+ Years</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">AI/ML Development</p>
          </motion.div>

          {/* Skills Preview */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl p-6 text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <Code className="w-6 h-6 mr-3" />
                <h3 className="text-xl font-semibold">Core Skills</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Brain className="w-4 h-4 mr-2" />
                    <span className="text-sm">Machine Learning</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="w-4 h-4 mr-2" />
                    <span className="text-sm">Deep Learning</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Code className="w-4 h-4 mr-2" />
                    <span className="text-sm">Large Language Models</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-4 h-4 mr-2" />
                    <span className="text-sm">Reinforcement Learning</span>
                  </div>
                </div>
              </div>
              <Link
                to="/projects"
                className="inline-flex items-center mt-4 text-sm font-medium hover:underline"
              >
                View Projects
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Contact Links */}
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
          >
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Connect</h3>
            <div className="space-y-3">
              <a
                href="https://github.com/666keke"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Github className="w-5 h-5 mr-3" />
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/haoran-ji-b9994231b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-5 h-5 mr-3" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <Link
                to="/contact"
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Mail className="w-5 h-5 mr-3" />
                <span className="text-sm">Contact</span>
              </Link>
            </div>
          </motion.div>

          {/* Recent Work */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-6 text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-3">Latest Work</h3>
              <p className="text-orange-100 mb-4 text-sm leading-relaxed">Development Intern at Baidu, working on paddlepaddle ecosystem, and RL on LLMs.</p>
              <Link
                to="/experience"
                className="inline-flex items-center text-sm font-medium hover:underline"
              >
                View Experience
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-6 text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-6 h-6 mr-3" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-indigo-100 mb-2 font-medium text-lg">Beihang University</p>
                  <p className="text-indigo-200 text-sm mb-2">Bachelor of Science</p>
                  <p className="text-indigo-200 text-sm mb-3">Computing Mathematics</p>
                  <p className="text-indigo-100 text-sm">Final Year • 2021-2025</p>
                </div>
                <div>
                  <h4 className="text-indigo-100 font-medium mb-2 text-sm">Key Coursework</h4>
                  <div className="space-y-1 text-xs text-indigo-200">
                    <p>• Machine Learning & Deep Learning</p>
                    <p>• Data Structures & Algorithms</p>
                    <p>• Computer Vision & NLP</p>
                    <p>• Distributed Systems</p>
                    <p>• Software Engineering</p>
                    <p>• Database Systems</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-indigo-400/30">
                <div className="flex items-center justify-between">
                  <div className="text-xs text-indigo-200">
                    <p>Focus: AI/ML, Full-Stack Development</p>
                  </div>
                  <Link
                    to="/about"
                    className="inline-flex items-center text-sm font-medium hover:underline"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}