// Enhanced initial job data with more diverse listings
const initialJobs = [
    {
        id: 1,
        title: "Senior Frontend Developer",
        company: "TechCorp Inc.",
        location: "San Francisco, CA",
        category: "Technology",
        type: "Full-time",
        salary: "$120,000 - $160,000",
        description: "We are looking for an experienced Frontend Developer to join our dynamic team. You will be responsible for developing user-facing web applications using modern JavaScript frameworks. The ideal candidate should have strong experience with React, Vue.js, or Angular, and a passion for creating exceptional user experiences.\n\nResponsibilities:\n• Develop responsive web applications\n• Collaborate with design and backend teams\n• Optimize applications for maximum speed and scalability\n• Write clean, maintainable code\n• Participate in code reviews and technical discussions\n\nRequirements:\n• 5+ years of frontend development experience\n• Expert knowledge of React, TypeScript, and modern CSS\n• Experience with state management libraries (Redux, Zustand)\n• Strong understanding of web performance optimization\n• Bachelor's degree in Computer Science or equivalent experience",
        email: "careers@techcorp.com",
        datePosted: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
        id: 2,
        title: "Digital Marketing Manager",
        company: "Growth Solutions",
        location: "New York, NY",
        category: "Marketing",
        type: "Full-time",
        salary: "$75,000 - $95,000",
        description: "Join our marketing team as a Digital Marketing Manager and help drive our online presence. You'll be responsible for developing and executing digital marketing strategies across multiple channels including social media, email marketing, and paid advertising.\n\nKey Requirements:\n• 3+ years of digital marketing experience\n• Proficiency in Google Analytics and social media platforms\n• Experience with email marketing tools (Mailchimp, HubSpot)\n• Strong analytical and communication skills\n• Bachelor's degree in Marketing or related field\n\nWhat we offer:\n• Competitive salary and benefits\n• Professional development opportunities\n• Flexible work arrangements\n• Health, dental, and vision insurance\n• 401(k) with company matching",
        email: "hr@growthsolutions.com",
        datePosted: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
        id: 3,
        title: "Financial Analyst",
        company: "Capital Advisors",
        location: "Chicago, IL",
        category: "Finance",
        type: "Full-time",
        salary: "$65,000 - $85,000",
        description: "We are seeking a detail-oriented Financial Analyst to join our finance team. The successful candidate will be responsible for financial planning, analysis, and reporting to support business decision-making.\n\nResponsibilities:\n• Prepare financial reports and analysis\n• Develop financial models and forecasts\n• Support budgeting and planning processes\n• Analyze market trends and competitive landscape\n• Present findings to senior management\n\nRequirements:\n• Bachelor's degree in Finance, Accounting, or Economics\n• 2+ years of financial analysis experience\n• Advanced Excel skills and knowledge of financial modeling\n• Strong attention to detail and analytical thinking\n• CFA or CPA certification preferred",
        email: "jobs@capitaladvisors.com",
        datePosted: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
        id: 4,
        title: "UX/UI Designer",
        company: "Design Studio Pro",
        location: "Austin, TX",
        category: "Design",
        type: "Full-time",
        salary: "$80,000 - $110,000",
        description: "We're looking for a creative UX/UI Designer to help us create amazing user experiences. You'll work closely with our product and development teams to design intuitive and visually appealing interfaces.\n\nWhat you'll do:\n• Create wireframes, prototypes, and high-fidelity designs\n• Conduct user research and usability testing\n• Collaborate with developers to ensure design implementation\n• Maintain and evolve our design system\n• Stay up-to-date with design trends and best practices\n\nRequirements:\n• 3+ years of UX/UI design experience\n• Proficiency in Figma, Sketch, or Adobe Creative Suite\n• Strong portfolio demonstrating design process\n• Understanding of web and mobile design principles\n• Experience with design systems and component libraries",
        email: "hello@designstudiopro.com",
        datePosted: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
        id: 5,
        title: "Sales Representative",
        company: "SalesForce Solutions",
        location: "Remote",
        category: "Sales",
        type: "Full-time",
        salary: "$50,000 - $80,000 + Commission",
        description: "Join our sales team as a Sales Representative and help us grow our customer base. This is a great opportunity for someone who is passionate about sales and wants to work in a fast-paced environment.\n\nResponsibilities:\n• Generate new leads and prospects\n• Conduct product demonstrations\n• Negotiate contracts and close deals\n• Maintain relationships with existing clients\n• Meet and exceed sales targets\n\nWhat we offer:\n• Competitive base salary plus commission\n• Comprehensive benefits package\n• Professional development opportunities\n• Remote work flexibility\n• Supportive team environment\n• Unlimited PTO policy",
        email: "careers@salesforcesolutions.com",
        datePosted: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
        id: 6,
        title: "Registered Nurse",
        company: "City General Hospital",
        location: "Boston, MA",
        category: "Healthcare",
        type: "Full-time",
        salary: "$70,000 - $90,000",
        description: "We are seeking a compassionate and skilled Registered Nurse to join our medical team. The ideal candidate will provide high-quality patient care in a fast-paced hospital environment.\n\nRequirements:\n• Current RN license in Massachusetts\n• BSN preferred\n• 1+ years of hospital experience\n• Strong communication and interpersonal skills\n• Ability to work in a team environment\n• BLS and ACLS certification required\n\nBenefits:\n• Competitive salary\n• Comprehensive health insurance\n• Retirement plan with matching\n• Continuing education support\n• Flexible scheduling options\n• Sign-on bonus available",
        email: "nursing@citygeneralhospital.com",
        datePosted: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
        id: 7,
        title: "DevOps Engineer",
        company: "CloudTech Systems",
        location: "Seattle, WA",
        category: "Technology",
        type: "Full-time",
        salary: "$110,000 - $140,000",
        description: "We're looking for a skilled DevOps Engineer to help us build and maintain our cloud infrastructure. You'll work with cutting-edge technologies to ensure our systems are scalable, reliable, and secure.\n\nKey Responsibilities:\n• Design and implement CI/CD pipelines\n• Manage cloud infrastructure on AWS/Azure\n• Monitor system performance and troubleshoot issues\n• Implement security best practices\n• Collaborate with development teams\n\nRequirements:\n• 3+ years of DevOps experience\n• Strong knowledge of Docker, Kubernetes\n• Experience with Infrastructure as Code (Terraform, CloudFormation)\n• Proficiency in scripting languages (Python, Bash)\n• AWS or Azure certification preferred",
        email: "devops@cloudtechsystems.com",
        datePosted: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
        id: 8,
        title: "Product Manager",
        company: "InnovateLab",
        location: "Los Angeles, CA",
        category: "Technology",
        type: "Full-time",
        salary: "$130,000 - $170,000",
        description: "Join our product team as a Product Manager and help shape the future of our innovative SaaS platform. You'll work cross-functionally to define product strategy and drive execution.\n\nWhat you'll do:\n• Define product roadmap and strategy\n• Gather and analyze user feedback\n• Work with engineering and design teams\n• Conduct market research and competitive analysis\n• Manage product launches and feature releases\n\nRequirements:\n• 4+ years of product management experience\n• Strong analytical and problem-solving skills\n• Experience with agile development methodologies\n• Excellent communication and leadership abilities\n• Technical background preferred\n• MBA or relevant degree",
        email: "careers@innovatelab.com",
        datePosted: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
        id: 9,
        title: "Data Scientist",
        company: "Analytics Pro",
        location: "Remote",
        category: "Technology",
        type: "Full-time",
        salary: "$100,000 - $130,000",
        description: "We're seeking a talented Data Scientist to join our analytics team. You'll work with large datasets to extract insights and build predictive models that drive business decisions.\n\nResponsibilities:\n• Analyze complex datasets to identify trends and patterns\n• Build and deploy machine learning models\n• Create data visualizations and reports\n• Collaborate with stakeholders to understand business needs\n• Present findings to executive leadership\n\nRequirements:\n• Master's degree in Data Science, Statistics, or related field\n• 3+ years of data science experience\n• Proficiency in Python, R, and SQL\n• Experience with machine learning frameworks\n• Strong statistical analysis skills\n• Excellent communication abilities",
        email: "data@analyticspro.com",
        datePosted: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
        id: 10,
        title: "Marketing Coordinator",
        company: "BrandBoost Agency",
        location: "Miami, FL",
        category: "Marketing",
        type: "Full-time",
        salary: "$45,000 - $55,000",
        description: "Join our creative marketing team as a Marketing Coordinator. This is a great entry-level position for someone looking to start their career in marketing and advertising.\n\nKey Duties:\n• Assist with campaign development and execution\n• Manage social media accounts and content\n• Coordinate marketing events and promotions\n• Support market research initiatives\n• Help with content creation and copywriting\n\nRequirements:\n• Bachelor's degree in Marketing, Communications, or related field\n• 1-2 years of marketing experience (internships count)\n• Strong written and verbal communication skills\n• Proficiency in social media platforms\n• Creative thinking and attention to detail\n• Adobe Creative Suite knowledge a plus",
        email: "hr@brandboostagency.com",
        datePosted: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
        id: 11,
        title: "Software Engineer",
        company: "StartupXYZ",
        location: "Remote",
        category: "Technology",
        type: "Full-time",
        salary: "$90,000 - $120,000",
        description: "Join our fast-growing startup as a Software Engineer. You'll have the opportunity to work on exciting projects and make a real impact on our product development.\n\nWhat you'll build:\n• Scalable web applications using modern frameworks\n• RESTful APIs and microservices\n• Database schemas and optimization\n• Integration with third-party services\n• Automated testing and deployment pipelines\n\nRequirements:\n• 2+ years of software development experience\n• Strong knowledge of JavaScript, Node.js, or Python\n• Experience with databases (PostgreSQL, MongoDB)\n• Familiarity with cloud platforms (AWS, GCP)\n• Understanding of software engineering best practices\n• Startup experience preferred",
        email: "engineering@startupxyz.com",
        datePosted: new Date(Date.now() - 11 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
        id: 12,
        title: "HR Business Partner",
        company: "Global Enterprises",
        location: "Chicago, IL",
        category: "Human Resources",
        type: "Full-time",
        salary: "$80,000 - $100,000",
        description: "We're looking for an experienced HR Business Partner to support our growing organization. You'll work closely with leadership to develop HR strategies and support employee development.\n\nKey Responsibilities:\n• Partner with business leaders on HR strategy\n• Manage employee relations and conflict resolution\n• Support talent acquisition and retention efforts\n• Develop and implement HR policies and procedures\n• Lead performance management processes\n\nRequirements:\n• Bachelor's degree in HR, Business, or related field\n• 5+ years of HR experience, preferably as a business partner\n• Strong knowledge of employment law\n• Excellent interpersonal and communication skills\n• SHRM or HRCI certification preferred\n• Experience with HRIS systems",
        email: "hr@globalenterprises.com",
        datePosted: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
        id: 13,
        title: "Customer Success Manager",
        company: "SaaS Solutions Inc",
        location: "Austin, TX",
        category: "Customer Service",
        type: "Full-time",
        salary: "$70,000 - $90,000",
        description: "Join our customer success team and help our clients achieve their goals with our platform. You'll be responsible for onboarding, training, and supporting our enterprise customers.\n\nWhat you'll do:\n• Onboard new customers and ensure successful adoption\n• Conduct training sessions and product demos\n• Monitor customer health and identify expansion opportunities\n• Resolve customer issues and escalations\n• Collaborate with product and engineering teams\n\nRequirements:\n• 3+ years of customer success or account management experience\n• Strong communication and presentation skills\n• Experience with SaaS products and platforms\n• Ability to understand technical concepts\n• Customer-focused mindset\n• Bachelor's degree preferred",
        email: "success@saassolutions.com",
        datePosted: new Date(Date.now() - 13 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
        id: 14,
        title: "Operations Manager",
        company: "LogiFlow Corp",
        location: "Denver, CO",
        category: "Operations",
        type: "Full-time",
        salary: "$85,000 - $105,000",
        description: "We're seeking an Operations Manager to oversee our daily operations and drive process improvements. You'll play a key role in ensuring operational efficiency and supporting business growth.\n\nResponsibilities:\n• Manage day-to-day operations and workflows\n• Identify and implement process improvements\n• Coordinate with various departments and teams\n• Monitor KPIs and operational metrics\n• Lead operational projects and initiatives\n\nRequirements:\n• Bachelor's degree in Business, Operations, or related field\n• 4+ years of operations management experience\n• Strong analytical and problem-solving skills\n• Experience with process improvement methodologies\n• Excellent leadership and communication abilities\n• Project management certification a plus",
        email: "operations@logiflowcorp.com",
        datePosted: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
        id: 15,
        title: "Legal Counsel",
        company: "LawTech Partners",
        location: "New York, NY",
        category: "Legal",
        type: "Full-time",
        salary: "$150,000 - $200,000",
        description: "Join our legal team as Legal Counsel and provide expert legal advice to support our business operations. You'll work on a variety of legal matters including contracts, compliance, and corporate governance.\n\nKey Duties:\n• Draft and review commercial contracts\n• Provide legal advice on business matters\n• Ensure compliance with applicable laws and regulations\n• Support M&A and corporate transactions\n• Manage relationships with external counsel\n\nRequirements:\n• JD from an accredited law school\n• 5+ years of legal experience, preferably in-house\n• Strong knowledge of commercial and corporate law\n• Excellent drafting and negotiation skills\n• Bar admission in relevant jurisdiction\n• Technology industry experience preferred",
        email: "legal@lawtechpartners.com",
        datePosted: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
        id: 16,
        title: "Mechanical Engineer",
        company: "EngineerWorks",
        location: "Detroit, MI",
        category: "Engineering",
        type: "Full-time",
        salary: "$75,000 - $95,000",
        description: "We're looking for a skilled Mechanical Engineer to join our engineering team. You'll work on designing and developing innovative mechanical systems and products.\n\nWhat you'll work on:\n• Design mechanical components and systems\n• Conduct engineering analysis and simulations\n• Collaborate with cross-functional teams\n• Support product testing and validation\n• Prepare technical documentation\n\nRequirements:\n• Bachelor's degree in Mechanical Engineering\n• 3+ years of mechanical design experience\n• Proficiency in CAD software (SolidWorks, AutoCAD)\n• Strong analytical and problem-solving skills\n• Knowledge of manufacturing processes\n• PE license preferred",
        email: "engineering@engineerworks.com",
        datePosted: new Date(Date.now() - 16 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
        id: 17,
        title: "Elementary School Teacher",
        company: "Sunshine Elementary",
        location: "Phoenix, AZ",
        category: "Education",
        type: "Full-time",
        salary: "$45,000 - $60,000",
        description: "Join our dedicated team of educators as an Elementary School Teacher. You'll have the opportunity to make a positive impact on young learners and help them develop foundational skills.\n\nResponsibilities:\n• Plan and deliver engaging lessons\n• Assess student progress and provide feedback\n• Create a positive classroom environment\n• Communicate with parents and guardians\n• Participate in school activities and professional development\n\nRequirements:\n• Bachelor's degree in Education or subject area\n• Valid teaching license/certification\n• Experience working with elementary-age children\n• Strong communication and classroom management skills\n• Passion for education and student success\n• Bilingual abilities a plus",
        email: "hr@sunshineelementary.edu",
        datePosted: new Date(Date.now() - 17 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
        id: 18,
        title: "Graphic Designer",
        company: "Creative Studio",
        location: "Portland, OR",
        category: "Design",
        type: "Part-time",
        salary: "$25 - $35 per hour",
        description: "We're seeking a talented Graphic Designer to join our creative team on a part-time basis. You'll work on diverse projects including branding, marketing materials, and digital design.\n\nProject Types:\n• Brand identity and logo design\n• Marketing collateral and advertisements\n• Website and digital graphics\n• Packaging and print design\n• Social media content\n\nRequirements:\n• Bachelor's degree in Graphic Design or related field\n• 2+ years of graphic design experience\n• Proficiency in Adobe Creative Suite\n• Strong portfolio demonstrating design skills\n• Attention to detail and creative thinking\n• Ability to work independently and meet deadlines",
        email: "design@creativestudio.com",
        datePosted: new Date(Date.now() - 18 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
        id: 19,
        title: "Business Analyst",
        company: "ConsultPro",
        location: "Washington, DC",
        category: "Finance",
        type: "Contract",
        salary: "$60 - $80 per hour",
        description: "We're looking for an experienced Business Analyst to join our consulting team on a contract basis. You'll work with clients to analyze business processes and recommend improvements.\n\nKey Activities:\n• Analyze business requirements and processes\n• Identify opportunities for improvement\n• Create detailed documentation and reports\n• Facilitate stakeholder meetings and workshops\n• Support implementation of recommended solutions\n\nRequirements:\n• Bachelor's degree in Business, Finance, or related field\n• 4+ years of business analysis experience\n• Strong analytical and problem-solving skills\n• Proficiency in data analysis tools\n• Excellent communication and presentation abilities\n• Consulting experience preferred",
        email: "contracts@consultpro.com",
        datePosted: new Date(Date.now() - 19 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
        id: 20,
        title: "Social Media Intern",
        company: "Digital Trends Media",
        location: "Los Angeles, CA",
        category: "Marketing",
        type: "Internship",
        salary: "$15 - $18 per hour",
        description: "Join our dynamic marketing team as a Social Media Intern. This is a great opportunity to gain hands-on experience in digital marketing and social media management.\n\nWhat you'll learn:\n• Social media strategy and content planning\n• Content creation and graphic design\n• Community management and engagement\n• Analytics and performance tracking\n• Influencer outreach and partnerships\n\nRequirements:\n• Currently enrolled in Marketing, Communications, or related program\n• Strong understanding of social media platforms\n• Creative thinking and writing skills\n• Basic knowledge of design tools (Canva, Photoshop)\n• Enthusiastic and eager to learn\n• Available for 20-25 hours per week",
        email: "internships@digitaltrendsmedia.com",
        datePosted: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString()
    }
];

// Application state
let jobs = [];
let filteredJobs = [];
let currentSearchTerm = '';
let currentCategory = '';
let currentLocation = '';
let currentSort = 'newest';
let currentView = 'grid';

// DOM elements
const jobsList = document.getElementById('jobsList');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const categoryFilter = document.getElementById('categoryFilter');
const locationFilter = document.getElementById('locationFilter');
const sortSelect = document.getElementById('sortSelect');
const clearFiltersBtn = document.getElementById('clearFilters');
const jobCount = document.getElementById('jobCount');
const noJobsMessage = document.getElementById('noJobsMessage');
const loadingSpinner = document.getElementById('loadingSpinner');
const advancedToggle = document.getElementById('advancedToggle');
const advancedFilters = document.getElementById('advancedFilters');
const gridViewBtn = document.getElementById('gridView');
const listViewBtn = document.getElementById('listView');

// Stats elements
const totalJobs = document.getElementById('totalJobs');
const heroJobCount = document.getElementById('heroJobCount');
const heroCompanyCount = document.getElementById('heroCompanyCount');
const heroCategoryCount = document.getElementById('heroCategoryCount');

// Modal elements
const addJobBtn = document.getElementById('addJobBtn');
const addJobModal = document.getElementById('addJobModal');
const closeAddJobModal = document.getElementById('closeAddJobModal');
const cancelAddJob = document.getElementById('cancelAddJob');
const addJobForm = document.getElementById('addJobForm');

const jobDetailsModal = document.getElementById('jobDetailsModal');
const closeJobDetailsModal = document.getElementById('closeJobDetailsModal');

// Initialize the application
function init() {
    loadJobs();
    setupEventListeners();
    updateStats();
    displayJobs();
}

// Load jobs from localStorage or use initial data
function loadJobs() {
    const savedJobs = localStorage.getItem('jobBoardJobs');
    if (savedJobs) {
        jobs = JSON.parse(savedJobs);
    } else {
        jobs = [...initialJobs];
        saveJobs();
    }
    filteredJobs = [...jobs];
}

// Save jobs to localStorage
function saveJobs() {
    localStorage.setItem('jobBoardJobs', JSON.stringify(jobs));
}

// Update statistics
function updateStats() {
    const totalJobsCount = jobs.length;
    const uniqueCompanies = new Set(jobs.map(job => job.company)).size;
    const uniqueCategories = new Set(jobs.map(job => job.category)).size;
    
    totalJobs.textContent = `${totalJobsCount} Jobs Available`;
    heroJobCount.textContent = totalJobsCount;
    heroCompanyCount.textContent = uniqueCompanies;
    heroCategoryCount.textContent = uniqueCategories;
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    searchInput.addEventListener('input', debounce(performSearch, 300));

    // Filter functionality
    categoryFilter.addEventListener('change', performFilter);
    locationFilter.addEventListener('change', performFilter);
    sortSelect.addEventListener('change', performSort);
    clearFiltersBtn.addEventListener('click', clearFilters);

    // Advanced filters toggle
    advancedToggle.addEventListener('click', toggleAdvancedFilters);

    // View toggle
    gridViewBtn.addEventListener('click', () => setView('grid'));
    listViewBtn.addEventListener('click', () => setView('list'));

    // Modal functionality
    addJobBtn.addEventListener('click', openAddJobModal);
    closeAddJobModal.addEventListener('click', closeAddJobModalHandler);
    cancelAddJob.addEventListener('click', closeAddJobModalHandler);
    closeJobDetailsModal.addEventListener('click', closeJobDetailsModalHandler);

    // Form submission
    addJobForm.addEventListener('submit', handleAddJob);

    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === addJobModal) {
            closeAddJobModalHandler();
        }
        if (e.target === jobDetailsModal) {
            closeJobDetailsModalHandler();
        }
    });
}

// Toggle advanced filters
function toggleAdvancedFilters() {
    const isVisible = advancedFilters.style.display !== 'none';
    advancedFilters.style.display = isVisible ? 'none' : 'block';
    advancedToggle.textContent = isVisible ? 'Advanced Filters' : 'Hide Advanced';
}

// Set view mode
function setView(view) {
    currentView = view;
    gridViewBtn.classList.toggle('active', view === 'grid');
    listViewBtn.classList.toggle('active', view === 'list');
    
    if (view === 'grid') {
        jobsList.className = 'jobs-grid';
    } else {
        jobsList.className = 'jobs-list';
    }
    
    displayJobs();
}

// Debounce function for search input
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Perform search
function performSearch() {
    currentSearchTerm = searchInput.value.toLowerCase().trim();
    applyFilters();
}

// Perform filter
function performFilter() {
    currentCategory = categoryFilter.value;
    currentLocation = locationFilter.value;
    applyFilters();
}

// Perform sort
function performSort() {
    currentSort = sortSelect.value;
    applyFilters();
}

// Apply all filters and sorting
function applyFilters() {
    showLoading();
    
    setTimeout(() => {
        filteredJobs = jobs.filter(job => {
            const matchesSearch = !currentSearchTerm || 
                job.title.toLowerCase().includes(currentSearchTerm) ||
                job.company.toLowerCase().includes(currentSearchTerm) ||
                job.description.toLowerCase().includes(currentSearchTerm) ||
                job.location.toLowerCase().includes(currentSearchTerm);
            
            const matchesCategory = !currentCategory || job.category === currentCategory;
            
            const matchesLocation = !currentLocation || 
                job.location.toLowerCase().includes(currentLocation.toLowerCase());
            
            return matchesSearch && matchesCategory && matchesLocation;
        });
        
        // Apply sorting
        filteredJobs.sort((a, b) => {
            switch (currentSort) {
                case 'newest':
                    return new Date(b.datePosted) - new Date(a.datePosted);
                case 'oldest':
                    return new Date(a.datePosted) - new Date(b.datePosted);
                case 'company':
                    return a.company.localeCompare(b.company);
                case 'title':
                    return a.title.localeCompare(b.title);
                default:
                    return 0;
            }
        });
        
        hideLoading();
        displayJobs();
    }, 300);
}

// Show loading spinner
function showLoading() {
    loadingSpinner.style.display = 'block';
    jobsList.style.display = 'none';
    noJobsMessage.style.display = 'none';
}

// Hide loading spinner
function hideLoading() {
    loadingSpinner.style.display = 'none';
}

// Clear all filters
function clearFilters() {
    searchInput.value = '';
    categoryFilter.value = '';
    locationFilter.value = '';
    sortSelect.value = 'newest';
    currentSearchTerm = '';
    currentCategory = '';
    currentLocation = '';
    currentSort = 'newest';
    filteredJobs = [...jobs];
    displayJobs();
}

// Display jobs
function displayJobs() {
    updateJobCount();
    
    if (filteredJobs.length === 0) {
        jobsList.style.display = 'none';
        noJobsMessage.style.display = 'block';
        return;
    }
    
    jobsList.style.display = currentView === 'grid' ? 'grid' : 'flex';
    noJobsMessage.style.display = 'none';
    
    jobsList.innerHTML = filteredJobs.map(job => createJobCard(job)).join('');
    
    // Add click listeners to job cards
    document.querySelectorAll('.job-card').forEach(card => {
        card.addEventListener('click', () => {
            const jobId = parseInt(card.dataset.jobId);
            openJobDetailsModal(jobId);
        });
    });
}

// Create job card HTML
function createJobCard(job) {
    const shortDescription = job.description.length > 150 
        ? job.description.substring(0, 150) + '...' 
        : job.description;
    
    const timeAgo = getTimeAgo(job.datePosted);
    
    return `
        <div class="job-card" data-job-id="${job.id}">
            <div class="job-card-header">
                <h3 class="job-title">${escapeHtml(job.title)}</h3>
                <div class="job-company">${escapeHtml(job.company)}</div>
            </div>
            <div class="job-meta">
                <div class="job-meta-item job-location">${escapeHtml(job.location)}</div>
                <div class="job-meta-item job-type">${escapeHtml(job.type || 'Full-time')}</div>
                ${job.salary ? `<div class="job-meta-item job-salary">${escapeHtml(job.salary)}</div>` : ''}
                <span class="job-category">${escapeHtml(job.category)}</span>
            </div>
            <div class="job-description">
                ${escapeHtml(shortDescription)}
            </div>
            <div class="job-footer">
                <span class="job-date">Posted ${timeAgo}</span>
                <span class="job-apply">Click to view details</span>
            </div>
        </div>
    `;
}

// Get time ago string
function getTimeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'today';
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
}

// Update job count
function updateJobCount() {
    const count = filteredJobs.length;
    jobCount.textContent = `${count} job${count !== 1 ? 's' : ''} found`;
}

// Open add job modal
function openAddJobModal() {
    addJobModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close add job modal
function closeAddJobModalHandler() {
    addJobModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    addJobForm.reset();
}

// Handle add job form submission
function handleAddJob(e) {
    e.preventDefault();
    
    const newJob = {
        id: Date.now(),
        title: document.getElementById('jobTitle').value.trim(),
        company: document.getElementById('companyName').value.trim(),
        location: document.getElementById('jobLocation').value.trim(),
        category: document.getElementById('jobCategory').value,
        type: document.getElementById('jobType').value,
        salary: document.getElementById('salaryRange').value.trim(),
        description: document.getElementById('jobDescription').value.trim(),
        email: document.getElementById('contactEmail').value.trim(),
        datePosted: new Date().toISOString()
    };
    
    // Add job to the beginning of the array
    jobs.unshift(newJob);
    saveJobs();
    updateStats();
    
    // Update filtered jobs and display
    applyFilters();
    
    // Close modal and show success message
    closeAddJobModalHandler();
    showNotification('Job posted successfully! 🎉');
}

// Open job details modal
function openJobDetailsModal(jobId) {
    const job = jobs.find(j => j.id === jobId);
    if (!job) return;
    
    document.getElementById('modalJobTitle').textContent = job.title;
    document.getElementById('modalCompany').textContent = job.company;
    document.getElementById('modalLocation').textContent = job.location;
    document.getElementById('modalCategory').textContent = job.category;
    document.getElementById('modalJobType').textContent = job.type || 'Full-time';
    document.getElementById('modalDatePosted').textContent = `Posted ${getTimeAgo(job.datePosted)}`;
    document.getElementById('modalDescription').textContent = job.description;
    document.getElementById('modalEmail').textContent = job.email;
    document.getElementById('modalEmail').href = `mailto:${job.email}`;
    
    // Handle salary display
    const salaryContainer = document.getElementById('modalSalaryContainer');
    const salaryElement = document.getElementById('modalSalary');
    if (job.salary) {
        salaryElement.textContent = job.salary;
        salaryContainer.style.display = 'flex';
    } else {
        salaryContainer.style.display = 'none';
    }
    
    // Set up apply button
    const applyBtn = document.querySelector('.apply-btn');
    applyBtn.onclick = () => {
        window.location.href = `mailto:${job.email}?subject=Application for ${job.title} position&body=Dear Hiring Manager,%0D%0A%0D%0AI am interested in applying for the ${job.title} position at ${job.company}.%0D%0A%0D%0APlease find my resume attached.%0D%0A%0D%0ABest regards`;
    };
    
    jobDetailsModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close job details modal
function closeJobDetailsModalHandler() {
    jobDetailsModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
        z-index: 1001;
        font-weight: 500;
        animation: slideIn 0.3s ease-out;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
    `;
    notification.textContent = message;
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);