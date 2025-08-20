import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Calendar, Tag, Search, Filter } from 'lucide-react'

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

const projects = [
  {
    id: 1,
    title: 'Distributed YOLO Inference Pipeline',
    description: 'Production-ready distributed YOLO inference pipeline powered by NVIDIA Triton Inference Server. Supports Kubernetes orchestration and Docker deployment.',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=distributed%20computing%20pipeline%20with%20YOLO%20object%20detection%2C%20Kubernetes%20containers%2C%20modern%20tech%20visualization%2C%20blue%20and%20green%20colors&image_size=landscape_4_3',
    technologies: ['Python', 'Docker', 'Kubernetes', 'Triton'],
    category: 'AI/ML',
    date: '2024',
    github: 'https://github.com/666keke/distributed-pipeline-yolo',
    demo: '',
    featured: true
  },
  {
    id: 2,
    title: 'Shanghai Gaokao Data Analysis',
    description: 'Data analysis & university application assistant for Shanghai Gaokao admission data (2020-2024)',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=educational%20data%20analysis%20dashboard%20with%20charts%20and%20university%20statistics%2C%20clean%20interface%2C%20blue%20and%20white%20theme&image_size=landscape_4_3',
    technologies: ['TypeScript', 'Next.js', 'Data Analysis'],
    category: 'Data Science',
    date: '2024',
    github: 'https://github.com/666keke/Shanghai-Gaokao',
    demo: 'https://666keke.github.io/Shanghai-Gaokao',
    featured: true
  },
  {
    id: 3,
    title: 'Knowledge Graph Generator',
    description: 'End-to-end knowledge graph construction (data crawling, NLP, graph DB storage)',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=knowledge%20graph%20visualization%20with%20connected%20nodes%20and%20relationships%2C%20network%20diagram%2C%20modern%20data%20visualization&image_size=square_hd',
    technologies: ['Python', 'NLP', 'Graph Database'],
    category: 'AI/ML',
    date: '2024',
    github: 'https://github.com/666keke/knowledge-graph-gen',
    demo: '',
    featured: true
  },
  {
    id: 4,
    title: 'Machine Learning Course Agent',
    description: 'Built react agent with QwQ-32b, BGE-m3, BM25, jina-colbert for multi-retrieval and tool calling',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20agent%20interface%20with%20LangChain%20components%2C%20chatbot%20UI%2C%20machine%20learning%20elements%2C%20modern%20design&image_size=landscape_4_3',
    technologies: ['LangChain', 'Python', 'NLP'],
    category: 'AI/ML',
    date: '2025.05–07',
    github: '',
    demo: '',
    featured: true
  },
  {
    id: 5,
    title: 'Volleyball Action Dataset',
    description: 'Designed and built volleyball action dataset; keypoint detection/classification with ViTPose, LoRA',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=volleyball%20action%20recognition%20with%20pose%20estimation%20keypoints%2C%20sports%20analytics%2C%20computer%20vision%20visualization&image_size=landscape_4_3',
    technologies: ['Python', 'ViTPose', 'LoRA', 'IA3', 'Prompt-Tuning', 'BitFit'],
    category: 'AI/ML',
    date: '2025.04–07',
    github: '',
    demo: '',
    featured: false
  },
  {
    id: 6,
    title: 'Diffusion & Causal Drug Recommendation',
    description: 'Personalized drug recommendation using diffusion models & causal inference',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=medical%20AI%20drug%20recommendation%20system%20with%20molecular%20structures%20and%20data%20analysis%2C%20healthcare%20technology&image_size=landscape_4_3',
    technologies: ['Python', 'Diffusion Models', 'Causal Inference'],
    category: 'AI/ML',
    date: '2025.05–',
    github: '',
    demo: '',
    featured: false
  }
]

const categories = ['All', 'AI/ML', 'Data Science']

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredProjects = filteredProjects.filter(project => project.featured)
  const otherProjects = filteredProjects.filter(project => !project.featured)

  return (
    <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A collection of projects showcasing my expertise in AI/ML, full-stack development, 
              and innovative problem-solving.
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <Filter className="w-5 h-5 mr-2" />
                Filters
              </button>
            </div>

            {/* Category Filters */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
                >
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                          selectedCategory === category
                            ? 'bg-blue-600 text-white shadow-lg'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Featured Projects</h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {featuredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                          {project.category}
                        </span>
                        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {project.date}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm rounded-full flex items-center"
                          >
                            <Tag className="w-3 h-3 mr-1" />
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-4">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                          >
                            <Github className="w-5 h-5 mr-2" />
                            Code
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            <ExternalLink className="w-5 h-5 mr-2" />
                            Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                {featuredProjects.length > 0 ? 'Other Projects' : 'All Projects'}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                          {project.category}
                        </span>
                        <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs">
                          <Calendar className="w-3 h-3 mr-1" />
                          {project.date}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex gap-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-3 py-2 bg-gray-900 dark:bg-gray-700 text-white text-sm rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors flex-1 justify-center"
                          >
                            <Github className="w-4 h-4 mr-1" />
                            Code
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors flex-1 justify-center"
                          >
                            <ExternalLink className="w-4 h-4 mr-1" />
                            Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div variants={itemVariants} className="text-center py-12">
              <div className="text-gray-400 dark:text-gray-500 mb-4">
                <Search className="w-16 h-16 mx-auto mb-4" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No projects found</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Try adjusting your search terms or filters.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
}