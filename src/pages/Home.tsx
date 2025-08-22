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
    <div className="min-h-screen pt-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
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
            className="lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-8 text-white relative overflow-hidden group hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/10 to-indigo-600/20"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)] group-hover:bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.2),transparent_50%)] transition-all duration-500"></div>
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-24 h-24 bg-gradient-to-br from-white/30 to-white/10 rounded-full mb-6 flex items-center justify-center backdrop-blur-md border border-white/20 shadow-lg"
              >
                <span className="text-3xl font-bold bg-gradient-to-br from-white to-purple-200 bg-clip-text text-transparent">HJ</span>
              </motion.div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Haoran Ji
              </h1>
              <p className="text-xl mb-6 text-purple-200 font-medium">
                Yet Another AI researcher-in-training
              </p>
              <p className="text-lg mb-8 text-slate-300 leading-relaxed">
                Final-year AI/ML student passionate about exploring LLMs, agents, and building innovative solutions.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-white/20 to-purple-500/20 hover:from-white/30 hover:to-purple-500/30 rounded-full font-medium transition-all duration-300 backdrop-blur-md border border-white/20 hover:border-white/30 shadow-lg hover:shadow-xl group"
              >
                Learn More
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Quick Info Cards */}
          <motion.div
            variants={itemVariants}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 border border-blue-200/50 dark:border-blue-700/50 hover:border-blue-300/70 dark:hover:border-blue-600/70 group"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-xl group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40 transition-colors duration-300">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white ml-3">Location</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">Beijing, China</p>
            <p className="text-gray-600 dark:text-gray-300">Toronto, Canada (2026 Fall)</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Available for remote work</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 border border-emerald-200/50 dark:border-emerald-700/50 hover:border-emerald-300/70 dark:hover:border-emerald-600/70 group"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800/40 transition-colors duration-300">
                <Calendar className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white ml-3">Experience</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">2+ Years</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">AI/ML Development</p>
          </motion.div>

          {/* Skills Preview */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 bg-gradient-to-br from-cyan-500 via-teal-600 to-emerald-600 rounded-3xl p-6 text-white relative overflow-hidden group hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-teal-500/10 to-emerald-500/20"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(34,211,238,0.15),transparent_50%)] group-hover:bg-[radial-gradient(circle_at_30%_70%,rgba(34,211,238,0.25),transparent_50%)] transition-all duration-500"></div>
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
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 border border-indigo-200/50 dark:border-indigo-700/50 hover:border-indigo-300/70 dark:hover:border-indigo-600/70 group"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/40 transition-colors duration-300">
                <Mail className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white ml-3">Connect</h3>
            </div>
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
            className="bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 rounded-3xl p-6 text-white relative overflow-hidden group hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 via-orange-500/10 to-red-500/20"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(251,191,36,0.15),transparent_50%)] group-hover:bg-[radial-gradient(circle_at_70%_30%,rgba(251,191,36,0.25),transparent_50%)] transition-all duration-500"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-3">Latest Work</h3>
              <p className="text-amber-100 mb-4 text-sm leading-relaxed">Development Intern at Baidu, working on paddlepaddle ecosystem, and RL on LLMs.</p>
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
            className="lg:col-span-2 bg-gradient-to-br from-indigo-600 via-purple-700 to-violet-800 rounded-3xl p-6 text-white relative overflow-hidden group hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-600/10 to-violet-700/20"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.15),transparent_50%)] group-hover:bg-[radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.25),transparent_50%)] transition-all duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-6 h-6 mr-3" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-violet-100 mb-2 font-medium text-lg">Beihang University</p>
                  <p className="text-violet-200 text-sm mb-2">Bachelor of Science</p>
                  <p className="text-violet-200 text-sm mb-3">Computing Mathematics</p>
                  <p className="text-violet-100 text-sm">Final Year • 2022-2026</p>
                </div>
                <div>
                  <h4 className="text-violet-100 font-medium mb-2 text-sm">Key Coursework</h4>
                  <div className="space-y-1 text-xs text-violet-200">
                    <p>• Machine Learning & Deep Learning</p>
                    <p>• Data Structures & Algorithms</p>
                    <p>• Computer Vision & NLP</p>
                    <p>• Software Engineering</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-violet-400/30">
                <div className="flex items-center justify-between">
                  <div className="text-xs text-violet-200">
                    <p>Focus: AI/ML, RL, LLM</p>
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