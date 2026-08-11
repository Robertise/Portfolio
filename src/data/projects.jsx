export const projects = [
  {
    id: "ddi-research",
    title: "Topology-Aware Loss Design for Drug-Drug Interaction Prediction",
    image:
      "https://res.cloudinary.com/dn5errmkv/image/upload/v1786451353/ddi_hnqacr.png",
    type: "Research",
    roleName: "Methodology Lead",
    problem:
      "Standard DDI severity models fail to reliably detect rare contraindicated interactions (6.63% of cases) under strict semi-inductive evaluation for novel drugs.",
    solution:
      "Designed a composite topology-aware severity calibration loss on R-GCN backbone with asymmetric cost matrices, cross-space feature alignment, and contrastive learning.",
    duration: "Apr 2026 - Present (Under Review)",
    codeUrl: "",
    liveUrl: "",
    privateRepo: true,
    tags: ["Python", "PyTorch", "PyTorch Geometric", "GNNs", "R-GCN", "ChemBERTa", "RDKit", "Scikit-Learn", "HuggingFace"],

    // Detailed content for Modal
    highlights: [
      { label: "Contraindicated F1", value: "0.3873 → 0.4301 (~+11% gain)" },
      { label: "Macro F1 Gain", value: "+1.1 pp overall" },
      { label: "Accuracy Gain", value: "+0.9 pp overall" },
      { label: "GNN Backbones", value: "Transferred to 8 architectures" },
    ],
    fullProblem:
      "Identifying contraindicated drug combinations before they reach patients is a pressing clinical need. Most existing DDI prediction models operate under transductive settings where test drugs are already observed during training. In real-world clinical deployment, clinicians encounter novel compounds (semi-inductive protocol). Furthermore, Contraindicated interactions represent only 6.63% of cases vs 50% moderate, causing standard objectives to fail on the highest-risk class.",
    fullSolution:
      "Built a multi-source pharmacological knowledge graph from DrugBank, DDInter, CrescenDDI, and FDA FAERS under a strict semi-inductive protocol. Test drugs are topologically isolated and represented exclusively by ChemBERTa SMILES embeddings. Developed a composite training objective on an R-GCN backbone, and ported it to additional heterogeneous graph architectures via an architecture-preserving adapter. Contributed to an ongoing research paper currently under peer review.",
  },
  {
    id: "pedix-rag",
    title: "Pedix - Agentic RAG for Pediatric Symptom-to-Care Navigation",
    image:
      "https://res.cloudinary.com/dn5errmkv/image/upload/v1786451753/pedix_znyfhm.png",
    type: "Individual",
    roleName: "Pedix Developer & Cloud Support",
    problem:
      "Parents of children aged 0–5 face high-stakes triage decisions, while general symptom checkers lack pediatric age-stratified clinical thresholds.",
    solution:
      "Built a cloud-deployed Level 4 Agentic RAG system with a custom 5-stage reasoning loop, sub-10ms safety screen, age-filtered Qdrant retrieval, and AWS infrastructure.",
    duration: "Jun 2026 - Aug 2026",
    codeUrl: "https://github.com/Robertise/Pedix",
    liveUrl: "",
    privateRepo: false,
    tags: ["Python", "FastAPI", "React", "Agentic RAG", "Amazon Bedrock", "AWS", "Qdrant", "LLM", "Claude", "HuggingFace", "DynamoDB"],

    // Detailed content for Modal
    highlights: [
      { label: "Architecture", value: "Level 4 Agentic RAG (Custom Loop)" },
      { label: "Safety Screen", value: "<10ms Rule-Based + Claude Haiku" },
      { label: "Cloud Platform", value: "12 AWS Services (EC2, Bedrock, S3...)" },
      { label: "Knowledge Base", value: "~1,800 Chunks (WHO, NICE, CDC, AAP)" },
    ],
    fullProblem:
      "Pediatric clinical thresholds change dramatically across age groups (e.g. a 38.0°C rectal temperature in a 20-day neonate is a medical emergency, whereas in a 3-year-old it is manageable at home). General-purpose symptom checkers retrofitted from adult tools fail to encode these vital distinctions, causing parental panic or dangerous mis-triage.",
    fullSolution:
      "Implemented a pediatric-native care navigation app with a custom 5-stage agentic loop (Stage 0: Hybrid safety screen -> Routing -> Stage 1: Age detection -> Stage 2: Age-filtered Qdrant retrieval -> Stage 3: Care pathway reasoning -> Stage 4: Reflection -> Stage 5: Structured output). Deployed on AWS using 12 services with strict cost governance. Features child profile management (DOB-based dynamic age calculation) and a full reasoning trace panel for transparency.",
  },
  {
    id: "traffic-guidance",
    title: "Traffic-Based Route Guidance System",
    image:
      "https://res.cloudinary.com/dn5errmkv/image/upload/v1773218053/route-based_tkumpo.jpg",
    type: "Team",
    roleName: "Leader",
    problem:
      "Traditional route planning methods often fail to consider dynamic traffic conditions, leading to inefficient navigation and longer travel times.",
    solution:
      "Developed a route guidance system combining the IDA* search algorithm with machine learning models (LSTM and GRU) to analyze traffic patterns and predict optimal routes.",
    duration: "Dec 2025 - Apr 2026",
    codeUrl: "https://github.com/COS30019-IntroductiontoAI/Traffic-based-Route-Guidance-System",
    liveUrl: "https://cos30019-introductiontoai.github.io/Traffic-based-Route-Guidance-System/route-guidance",
    privateRepo: false,
    tags: ["Python", "Machine Learning", "LSTM", "GRU", "Search Algorithms", "TensorFlow"],

    // Detailed content for Modal
    highlights: [
      { label: "Core Algorithm", value: "IDA* Graph Search + Neural Networks" },
      { label: "ML Models", value: "LSTM & GRU Traffic Prediction" },
      { label: "My Role", value: "Project Leader" },
    ],
    fullProblem:
      "Standard shortest-path algorithms (like A* or Dijkstra) assume static road network weights, failing to anticipate real-time dynamic congestion, traffic spikes, and bottleneck delays in urban environments.",
    fullSolution:
      "Combined iterative deepening A* (IDA*) heuristic search with deep sequence learning models (LSTM and GRU) to predict temporal traffic flow. The system dynamically evaluates alternative routing paths to minimize total travel time and avoid congestion bottlenecks.",
  },
  {
    id: "cyber-llm",
    title: "LLM-Based Cybersecurity Log Analyzer",
    image:
      "https://res.cloudinary.com/dn5errmkv/image/upload/v1773218053/cybersecurity_ohdisq.jpg",
    type: "Team",
    roleName: "Project Coordinator",
    problem:
      "Security analysts must manually review large volumes of system logs to identify threats, which is time-consuming and prone to missing subtle indicators of compromise.",
    solution:
      "Built an AI-assisted analysis tool using Retrieval-Augmented Generation (RAG) to interpret system log entries and map them to cybersecurity techniques.",
    duration: "Jan 2026 - Present",
    codeUrl: "https://github.com/nghiatran0401/cyber-llm-agent",
    liveUrl: "",
    privateRepo: false,
    tags: ["Python", "LLM", "RAG", "Cybersecurity", "NLP"],

    // Detailed content for Modal
    highlights: [
      { label: "Approach", value: "Retrieval-Augmented Generation (RAG)" },
      { label: "Domain", value: "SOC Threat Intelligence & Log Analysis" },
      { label: "My Role", value: "Project Coordinator" },
    ],
    fullProblem:
      "Modern Security Operations Centers (SOC) face alert fatigue. Security analysts must inspect thousands of raw log entries daily, struggling to correlate subtle indicators of compromise across complex IT infrastructure.",
    fullSolution:
      "Architected an AI-assisted threat intelligence tool using RAG. The system parses security logs, retrieves relevant MITRE ATT&CK techniques from a vector database, and generates contextual threat summaries with actionable remediation advice.",
  },
];
