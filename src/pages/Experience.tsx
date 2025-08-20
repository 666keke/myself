import { motion } from 'framer-motion'
import { MapPin, Calendar, Award, Users, Trophy, Briefcase, Target } from 'lucide-react'

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

const workExperience = [
  {
    id: 1,
    company: 'Baidu',
    position: 'Development Intern',
    location: 'Beijing, China',
    duration: '2025.08–Now',
    type: 'Internship',
    description: 'Improving PaddlePaddle ecosystem, AI software development',
    achievements: [
      'Contributing to PaddlePaddle ecosystem improvements',
      'Working on RL on LLMs, focusing on tool use',
      'Collaborating with development teams on production systems'
    ],
    technologies: ['VeRL', 'PaddlePaddle', 'AI Development'],
    logo: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Baidu%20company%20logo%20style%20icon%2C%20blue%20and%20red%20colors%2C%20modern%20tech%20company%20branding&image_size=square'
  },
  {
    id: 2,
    company: 'Institution of Artificial Intelligence, Beihang University',
    position: 'Research Student',
    location: 'Beijing, China',
    duration: '2025.05–Now',
    type: 'Research',
    description: 'Research in AI/LLMs, participated in multiple ML projects',
    achievements: [
      'Conducting research in AI and Large Language Models',
      'Participating in multiple machine learning projects',
      'Contributing to academic research initiatives'
    ],
    technologies: ['Python', 'AI/ML', 'LLMs', 'Research'],
    logo: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=university%20AI%20institute%20logo%20with%20academic%20elements%2C%20blue%20and%20gold%20colors%2C%20scholarly%20design&image_size=square'
  }
]

const competitions = [
  {
    id: 1,
    name: 'MCM/ICM Mathematical Modeling Contest',
    position: 'Main contributor for modeling and coding',
    date: '2024.01',
    description: 'Participated in the international mathematical modeling contest, focusing on complex problem-solving and mathematical analysis.',
    achievements: [
      'Main contributor for mathematical modeling',
      'Responsible for coding implementation',
      'Collaborated on complex mathematical problem solving'
    ],
    award: 'Participant',
    participants: 'International contest'
  },
  {
    id: 2,
    name: 'China College Mathematical Modeling Contest',
    position: 'Main contributor for modeling and coding',
    date: '2024.09',
    description: 'Participated in the national mathematical modeling contest, applying mathematical techniques to real-world problems.',
    achievements: [
      'Main contributor for mathematical modeling',
      'Responsible for coding implementation',
      'Applied mathematical techniques to practical problems'
    ],
    award: 'Participant',
    participants: 'National contest'
  },
  {
    id: 3,
    name: 'The 7th National College Computer Ability Challenge - Artificial Intelligence Competition',
    position: 'AI Model Developer and Strategy Designer',
    date: '2025.08',
    description: 'AI competition requiring teams to train models for autonomous exploration and decision-making in virtual environments with optimal strategy implementation.',
    achievements: [
      'Trained AI models for autonomous navigation and decision-making',
      'Developed reinforcement learning algorithms for optimal strategies',
      'Implemented path planning and multi-agent coordination systems'
    ],
    award: 'First Prize in Northern China',
    participants: 'National competition'
  }
]

const activities = [
  {
    id: 1,
    organization: 'AI Institute Publicity Center (BUAA)',
    role: 'Copywriting Lead',
    duration: '2024.09–2025.09',
    description: 'Managed WeChat content, team management, academic focus',
    achievements: [
      'Managed WeChat content creation and publication',
      'Led team management initiatives',
      'Focused on academic content and outreach',
      'Enhanced institute visibility through strategic communication'
    ],
    impact: 'Institute publicity'
  },
  {
    id: 2,
    organization: 'Yanxing Beihang (China Social Welfare Foundation)',
    role: 'Manager',
    duration: '2023.09–2025.09',
    description: 'Organized events, designed materials, inter-school liaison',
    achievements: [
      'Organized various social welfare events',
      'Designed promotional and educational materials',
      'Managed inter-school liaison activities',
      'Coordinated with China Social Welfare Foundation'
    ],
    impact: 'Social welfare'
  }
]

export default function Experience() {
  return (
    <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Experience
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My journey through professional work, competitive programming, research, 
              and community leadership.
            </p>
          </motion.div>

          {/* Work Experience */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center mb-8">
              <Briefcase className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Work Experience</h2>
            </div>
            <div className="space-y-8">
              {workExperience.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="flex-shrink-0">
                      <img
                        src={job.logo}
                        alt={`${job.company} logo`}
                        className="w-16 h-16 rounded-2xl object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{job.position}</h3>
                          <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">{job.company}</p>
                        </div>
                        <div className="flex flex-col lg:items-end mt-2 lg:mt-0">
                          <div className="flex items-center text-gray-500 dark:text-gray-400 mb-1">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span className="text-sm">{job.duration}</span>
                          </div>
                          <div className="flex items-center text-gray-500 dark:text-gray-400">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span className="text-sm">{job.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          job.type === 'Internship' 
                            ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300'
                            : 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                        }`}>
                          {job.type}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{job.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {job.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start">
                              <Target className="w-4 h-4 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300 text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Competitions */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center mb-8">
              <Trophy className="w-8 h-8 text-yellow-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Competitions & Awards</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {competitions.map((comp, index) => (
                <motion.div
                  key={comp.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-yellow-500"
                >
                  <div className="flex items-center justify-between mb-4">
                    <Award className="w-8 h-8 text-yellow-600" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">{comp.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{comp.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">{comp.position}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">{comp.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {comp.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600 dark:text-gray-300 text-xs">{achievement}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300 rounded-full">
                      {comp.award}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">{comp.participants}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Extracurricular Activities */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center mb-8">
              <Users className="w-8 h-8 text-purple-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Leadership & Activities</h2>
            </div>
            <div className="space-y-6">
              {activities.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{activity.role}</h3>
                      <p className="text-lg text-purple-600 dark:text-purple-400 font-semibold">{activity.organization}</p>
                    </div>
                    <div className="flex items-center mt-2 lg:mt-0">
                      <Calendar className="w-4 h-4 text-gray-500 dark:text-gray-400 mr-2" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">{activity.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{activity.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Contributions:</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {activity.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                      Impact: {activity.impact}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}