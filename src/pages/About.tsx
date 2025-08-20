import { motion } from 'framer-motion'
import { GraduationCap, Award, Target, Heart, Code, Brain, Users, Lightbulb } from 'lucide-react'

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const skills = [
  { name: 'Python', level: 95, color: 'bg-blue-500' },
  { name: 'Machine Learning', level: 90, color: 'bg-green-500' },
  { name: 'React/TypeScript', level: 85, color: 'bg-purple-500' },
  { name: 'Deep Learning', level: 80, color: 'bg-red-500' },
  { name: 'Node.js', level: 75, color: 'bg-yellow-500' },
  { name: 'Data Science', level: 85, color: 'bg-indigo-500' },
]

const values = [
  {
    icon: Code,
    title: 'Technical Excellence',
    description: 'Committed to writing clean, efficient, and maintainable code that solves real-world problems.'
  },
  {
    icon: Brain,
    title: 'Continuous Learning',
    description: 'Always exploring new technologies and methodologies to stay at the forefront of innovation.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Believe in the power of teamwork and open communication to achieve exceptional results.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Passionate about creating innovative solutions that make a positive impact on society.'
  },
]

export default function About() {
  return (
    <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-700 rounded-full mx-auto mb-8 flex items-center justify-center text-white text-4xl font-bold shadow-2xl"
            >
              HJ
            </motion.div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">About Me</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">AI researcher-in-training specializing in large language models and autonomous agents, passionate about turning cutting-edge ideas into real-world impact through hands-on projects and collaboration.</p>
          </motion.div>

          {/* Personal Story */}
          <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Heart className="w-8 h-8 text-red-500 mr-3" />
              My Journey
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I’m Haoran Ji, an AI researcher-in-training interested in large language models. I’m committed to 
                learning and growing through hands-on experience and collaboration. I value both technical depth 
                and building connections, and I’m eager to contribute to impactful projects in dynamic AI teams.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Born in Shanghai and educated at Beihang University, I’ve always been driven by a passion for mathematics, 
                technology, and real-world impact. Recognizing early the transformative power of AI, I specialized in large 
                language models and autonomous agents, immersing myself in hands-on research and ambitious projects. My recent 
                internship at Baidu, where I contributed to the PaddlePaddle ecosystem, deepened my appreciation for fast-paced, 
                collaborative innovation. 
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                By staying engaged with the latest AI tools and industry trends, I continually strive 
                to bridge theory and practice, driven by curiosity, adaptability, and a commitment to excellence.
              </p>
            </div>
          </motion.div>

          {/* Education & Achievements */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <GraduationCap className="w-7 h-7 text-blue-600 mr-3" />
                Education
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Bachelor of Science</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">Beihang University (BUAA)</p>
                  <p className="text-gray-500 dark:text-gray-400">2021 - 2025 (Expected)</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Specialization in Artificial Intelligence and Machine Learning. 
                    Relevant coursework: Reinforcement Learning, Computer Vision, Natural Language Processing, 
                    Data Structures & Algorithms.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Award className="w-7 h-7 text-yellow-600 mr-3" />
                Achievements
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">The 7th National College Computer Ability Challenge</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Artificial Intelligence Competition - First Prize Northern CN</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Skills */}
          <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <Target className="w-8 h-8 text-green-600 mr-3" />
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 1, ease: "easeOut" }}
                      className={`h-2 rounded-full ${skill.color}`}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Values */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Core Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}