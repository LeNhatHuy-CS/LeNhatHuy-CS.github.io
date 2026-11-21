// All the content of the site lives in this file.
// Edit the text here; you normally do not need to touch the components.

export const profile = {
  name: 'Le Nhat Huy',
  brand: 'Nhat Huy',
  title: 'Final-year Computer Science Student @ Ton Duc Thang University, Vietnam',
  avatar: '/avatar.jpg',
  bio: [
    'I am a final-year Computer Science student at Ton Duc Thang University. I am interested in data analysis, machine learning and deep learning, with a focus on NLP and computer vision.',
    'I have built course and team projects ranging from face authentication with liveness detection and Vietnamese visual question answering to statistical analysis of student performance and a containerized mini cloud. From May to October 2026 I worked as a Teaching Assistant Intern at MindX.',
  ],
  emails: ['lenhathuy.computerscience@gmail.com', 'lenhathuy219@gmail.com'],
  links: {
    github: 'https://github.com/LeNhatHuy-CS',
    orcid: 'https://orcid.org/0009-0004-7036-0578',
    linkedin: '', // add your LinkedIn URL here to show it
  },
  // The CV button opens this link. It can be a Google Drive link or a file in public/ (for example '/cv.pdf').
  // While this is empty, the CV button is hidden.
  cvUrl: 'https://drive.google.com/drive/folders/1RE2OBHP00mj_fhOo8nGptx-nKutcAq4N?usp=sharing',
};

// `me` must match one entry of `authors` exactly; that author is highlighted in bold.
export const publications = [
  {
    title: 'GA-ECBM: Gated Additive Energy-Based Concept Bottleneck Models for Reliable Concept Interventions',
    status: 'Under submission',
    summary:
      'An energy-based concept bottleneck model with an additive concept-label energy and a gated image term, so correcting concepts at test time rarely turns a correct prediction into a wrong one. On CUB-200-2011 (3 seeds, 100 epochs) it cut intervention harm from 2.83% to 0.03% compared with the official ECBM.',
    authors: ['Huy Nhat-Le', 'Khanh Quoc Tran-Duong'],
    me: 'Huy Nhat-Le',
    links: [{ label: 'GitHub', url: 'https://github.com/LeNhatHuy-CS/GA-ECBM' }],
  },
  {
    title:
      'ACC-ECBM: Interpretable Lung Cancer Identification from Chest Radiographs and Pre-Imaging Clinical Data with Concept Bottlenecks and Explainable Boosting',
    status: 'Submitted',
    venue:
      '[ICCIES 2027] 3rd International Conference on Computational Intelligence in Engineering Science (Scopus Indexed)',
    summary:
      'A hybrid pipeline for lung cancer identification in which only perception is a deep network and the final prediction is an explainable boosting machine. A reasoning module links 14 radiological findings to a clinical knowledge graph and propagates clinician-confirmed findings with adaptive concept calibration. Evaluated on MIMIC data.',
    authors: ['Thanh Phong Nguyen', 'Huy Nhat-Le', 'Khanh Quoc Tran-Duong', 'Van Huy Pham'],
    me: 'Huy Nhat-Le',
    links: [],
  },
  {
    title: 'TDTU-TARViLeg: A Benchmark for Time-Aware Vietnamese Legal Retrieval',
    status: 'Under review',
    venue:
      '[ICCIES 2027] 3rd International Conference on Computational Intelligence in Engineering Science (Scopus Indexed)',
    authors: ['Phan, T. H.', 'Nguyen, Q. H.', 'Le, N. H.', 'Le, D. D.', 'Duong, T.-C.', 'Le, A.-C.'],
    me: 'Le, N. H.',
    links: [{ label: 'Site', url: 'https://iccies.tdtu.edu.vn/' }],
  },
];

export const projects = [
  {
    title: 'Face Authentication for Web Applications',
    tag: 'Team project',
    context: 'Introduction to Information Security · Ton Duc Thang University',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/LeNhatHuy-CS/Face-Authentication-for-Web-Application',
      },
    ],
    summary:
      'A face authentication system that replaces password-based login with real-time biometric verification from a webcam.',
    highlights: [
      'Detects and aligns faces with MTCNN, extracts embeddings with FaceNet and matches identities by cosine similarity.',
      'Added liveness detection based on blink detection and movement analysis to prevent spoofing attacks.',
      'Built the FastAPI backend with JWT session management and a webcam web interface (WebRTC).',
      'Role: fullstack and integration in a team of three.',
    ],
    tech: ['Python', 'FastAPI', 'PyTorch', 'MTCNN', 'FaceNet', 'dlib', 'JWT'],
  },
  {
    title: 'Vietnamese VQA and Chest X-ray Report Generation',
    tag: 'Team project',
    context: 'Deep Learning final project · Ton Duc Thang University',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/LeNhatHuy-CS/VQA-and-XRay_Generation_Report',
      },
    ],
    summary:
      'Two vision-language tasks: answering Vietnamese questions about Vietnamese food images, and generating radiology-style reports from chest X-rays.',
    highlights: [
      'VQA on about 3,000 images across 30 food classes with 15,000 question-answer pairs. Compared ResNet50 + PhoBERT with LSTM and Transformer decoders against BLIP (zero-shot, fine-tuned and DPO-improved).',
      'X-ray reports: compared a DenseNet121 + attention LSTM baseline with a fine-tuned BLIP model.',
      'Evaluated with Exact Match, BLEU, ROUGE-L, METEOR, BERTScore and LLM-as-a-judge, and built a demo app for each task.',
    ],
    tech: ['Python', 'BLIP', 'PhoBERT', 'ResNet50', 'DenseNet121', 'Jupyter'],
  },
  {
    title: 'Student Performance Analysis',
    tag: 'Team project',
    context: 'Data Analysis and Visualization · Ton Duc Thang University',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/LeNhatHuy-CS/Student_Performance_Analysis',
      },
    ],
    summary:
      'A statistical study of how gender, parental education and test preparation affect high school exam scores in Math, Reading and Writing.',
    highlights: [
      'Exploratory analysis with outlier detection, and normality checks using Shapiro-Wilk tests and Q-Q plots.',
      'Hypothesis testing with t-tests and ANOVA, plus Pearson and Spearman correlation analysis.',
      'Built a multiple linear regression model that predicts Math scores with R² ≈ 0.84.',
    ],
    tech: ['Python', 'Pandas', 'NumPy', 'Seaborn', 'SciPy', 'Statsmodels', 'Jupyter'],
  },
  {
    title: 'Blossom: Flower Shop Management',
    tag: 'Team project',
    context: 'Web application · team of four',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/LeNhatHuy-CS/Flower_Shop_Management_Software',
      },
    ],
    summary:
      'A flower shop website with a complete shopping flow and an admin panel for managing the store.',
    highlights: [
      'Customer features: product search and filtering, wishlist, cart and checkout, order tracking and profile updates.',
      'Admin panel to manage products, categories and orders, with separate admin, staff and user roles.',
      'PHP backend with a MySQL database and an HTML, CSS and JavaScript frontend.',
    ],
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'MiniCloud',
    tag: 'Course project',
    context: 'Cloud Computing',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/LeNhatHuy-CS/CloudComputing_MiniCloud',
      },
    ],
    summary:
      'A containerized mini cloud environment where each service runs in its own container, orchestrated with Docker Compose.',
    highlights: [
      'Services include an API gateway and proxy, an application backend, an authentication and identity server, and an internal DNS server.',
      'Also includes object storage, a relational database, Prometheus monitoring and multiple web frontend servers.',
    ],
    tech: ['Docker', 'Docker Compose', 'Python', 'Prometheus'],
  },
];

export const skills = [
  { group: 'Languages', items: ['Python', 'R', 'Java', 'C', 'JavaScript', 'PHP', 'SQL'] },
  { group: 'Machine learning', items: ['scikit-learn', 'TensorFlow', 'PyTorch', 'OpenCV'] },
  {
    group: 'Data analysis',
    items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Power BI', 'Jupyter', 'Google Colab'],
  },
  { group: 'Databases', items: ['MySQL', 'PostgreSQL', 'MongoDB'] },
  { group: 'Tools', items: ['Git', 'GitHub', 'Docker', 'VS Code', 'Anaconda'] },
];

export const experience = [
  {
    period: 'May 2026 - Oct 2026',
    role: 'Teaching Assistant Intern',
    org: 'MindX',
    points: [],
  },
  {
    period: '2023 - Present',
    role: 'B.Sc. Computer Science',
    org: 'Ton Duc Thang University · Ho Chi Minh City',
    points: [
      'Final-year student.',
      'Selected coursework: Deep Learning, Computer Vision, Machine Learning.',
    ],
  },
];
