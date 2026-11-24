// All the content of the site lives in this file.
// Edit the text here; you normally do not need to touch the components.

export const profile = {
  name: 'Le Nhat Huy',
  brand: 'Nhat Huy',
  title: 'Final-year Computer Science Student @ Ton Duc Thang University, Vietnam',
  avatar: '/avatar.jpg',
  bio: [
    'I am a final-year Computer Science student at Ton Duc Thang University. I am interested in data analysis, machine learning and deep learning, with a focus on NLP and computer vision.',
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
    status: 'Under review',
    venue:
      '[ICCIES 2027] 3rd International Conference on Computational Intelligence in Engineering Science (Scopus Indexed)',
    summary:
      'An energy-based concept bottleneck model with an additive concept-label energy and a gated image term, so correcting concepts at test time rarely turns a correct prediction into a wrong one. On CUB-200-2011 (3 seeds, 100 epochs) it cut intervention harm from 2.83% to 0.03% compared with the official ECBM.',
    authors: ['Thanh Phong Nguyen', 'Huy Nhat-Le', 'Khanh Quoc Tran-Duong', 'Van Huy Pham'],
    me: 'Huy Nhat-Le',
    links: [{ label: 'GitHub', url: 'https://github.com/LeNhatHuy-CS/GA-ECBM' }],
  },
  {
    title:
      'ACC-ECBM: Interpretable Lung Cancer Identification from Chest Radiographs and Pre-Imaging Clinical Data with Concept Bottlenecks and Explainable Boosting',
    status: 'Under review',
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
    summary:
      'A provision-level benchmark for time-aware Vietnamese legal retrieval, where a retrieved clause must have been in force at the date that governs the question. It is built from 93,331 normative documents split into 3.12 million Article, Clause and Point chunks, with an amendment graph of 52,127 provision-level overrides and 572 grounded citizen questions. Across 22 retrieval configurations, unconstrained BM25 and BGE-M3 reach top-10 temporal violation rates of 48.25% and 52.47%; adding provision-level validity intervals cuts them to 1.59%-1.80%.',
    authors: ['Phan, T. H.', 'Nguyen, Q. H.', 'Le, N. H.', 'Le, D. D.', 'Duong, T.-C.', 'Le, A.-C.'],
    me: 'Le, N. H.',
    links: [{ label: 'Site', url: 'https://iccies.tdtu.edu.vn/' }],
  },
];

export const projects = [
  {
    title: 'DermaXAI: Explainable Skin Lesion Classification',
    tag: '',
    context: 'Explainable AI · Concept bottleneck models · Derm7pt dataset',
    links: [{ label: 'GitHub', url: 'https://github.com/LeNhatHuy-CS/DermaXAI' }],
    summary:
      'Melanoma vs. non-melanoma classification on the Derm7pt dataset, with predictions that can be explained through clinical concepts instead of a single black-box score.',
    highlights: [
      'Compared four classifiers on an EfficientNet-B0 backbone: a black-box baseline, a joint concept bottleneck model (CBM), the energy-based ECBM, and GA-ECBM, a gated variant developed in this project (gated image branch with margin, intervention and monotonicity losses).',
      'Used the official Derm7pt split (413 train / 203 validation / 395 test) and ran every model with three seeds (42, 123, 2026).',
      'On the validation split, ECBM and GA-ECBM reach about 71% concept accuracy against 57.2% for the joint CBM, and GA-ECBM gives the highest ROC-AUC under concept intervention (up to 0.938 at k = 7).',
    ],
    tech: ['Python', 'PyTorch', 'EfficientNet-B0', 'Concept bottleneck models', 'Explainable AI'],
  },
  {
    title: 'Vietnamese Legal QA Chatbot using LLM Fine-Tuning and RAG',
    tag: '',
    context: 'NLP · Retrieval-augmented generation · Vietnam Road Traffic Order and Safety Law',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/LeNhatHuy-CS/LLM-Finetuning-With-RAG-and-Comparisons',
      },
    ],
    summary:
      'A Vietnamese question-answering system for Vietnam\'s Road Traffic Order and Safety Law that compares four setups: the base LLM, RAG, LoRA/QLoRA fine-tuning, and fine-tuning combined with RAG.',
    highlights: [
      'RAG pipeline: law PDF, parsing, chunking, embeddings and a vector database (ChromaDB in the app, FAISS in the notebooks); the top-k passages are filled into the prompt for the LLM.',
      'Fine-tuned Llama 3.2 3B with PEFT (LoRA/QLoRA) and evaluated all four setups with BLEU, ROUGE, BERTScore and Recall@5.',
      'Reference results: ROUGE-L rises from 0.241 (zero-shot) to 0.439 with fine-tuning and 0.443 with fine-tuning plus RAG, and retrieval reaches Recall@5 of 0.94. Test sets differ between setups, so these are indicative.',
      'Built a full-stack web app to try the chatbot (Django and MySQL backend, React and Vite frontend), run locally with Docker Compose.',
    ],
    tech: ['Python', 'Llama 3.2', 'PEFT (LoRA/QLoRA)', 'ChromaDB', 'FAISS', 'LangChain', 'Django', 'React', 'Docker'],
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
