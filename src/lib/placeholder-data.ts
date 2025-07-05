import type { Tool, Insight } from './definitions';

export const TOOLS: Tool[] = [
  {
    id: 'feedzai-risk-engine',
    name: 'Feedzai Risk Engine',
    description: 'An AI-powered platform that detects and prevents financial fraud in real-time across various payment channels.',
    category: ['Fraud Detection', 'Security'],
    accomplishment: 'Feedzai\'s Risk Engine leverages machine learning to analyze vast amounts of transaction data, identifying suspicious patterns indicative of fraud. It significantly reduces false positives while improving the detection rate of new and evolving fraud schemes, thereby protecting financial institutions and their customers.',
    features: [
      'Real-time transaction monitoring',
      'Behavioral biometrics analysis',
      'Explainable AI for decision transparency',
      'Dynamic risk scoring',
      'Case management integration',
    ],
    company: 'Feedzai',
    websiteUrl: 'https://feedzai.com/',
    logoUrl: 'https://placehold.co/100x100.png',
  },
  {
    id: 'zest-ai',
    name: 'Zest AI',
    description: 'AI-automated credit underwriting that helps lenders make faster, fairer, and more accurate decisions.',
    category: ['Credit Risk Assessment', 'Lending Automation'],
    accomplishment: 'Zest AI builds more inclusive and profitable lending portfolios by using machine learning to safely approve more applicants. Their technology provides explainability for every decision, ensuring compliance and transparency.',
    features: [
      'Automated machine learning for credit modeling',
      'Full model explainability (XAI)',
      'Fair lending analysis tools',
      'Seamless integration with existing loan origination systems',
      'Portfolio risk analysis',
    ],
    company: 'Zest AI',
    websiteUrl: 'https://www.zest.ai/',
    logoUrl: 'https://placehold.co/100x100.png',
  },
  {
    id: 'upstart',
    name: 'Upstart',
    description: 'An AI lending platform that goes beyond the FICO score to finance people based on their true potential.',
    category: ['Lending Automation', 'Credit Risk Assessment'],
    accomplishment: 'Upstart\'s model uses AI to analyze over 1,600 data points to assess creditworthiness, leading to higher approval rates and lower interest rates for consumers. For banks, this results in lower fraud and loss rates and a more automated lending process.',
    features: [
      'AI models trained on vast datasets',
      'Connects consumers with partner banks and credit unions',
      'Automated loan application and approval process',
      'Verification of income and employment data',
      'Personal and auto loan offerings',
    ],
    company: 'Upstart Network, Inc.',
    websiteUrl: 'https://www.upstart.com/',
    logoUrl: 'https://placehold.co/100x100.png',
  },
  {
    id: 'betterment',
    name: 'Betterment',
    description: 'A leading robo-advisor that provides automated, goal-based investing and financial planning services.',
    category: ['Robo-Advisory', 'Portfolio Management'],
    accomplishment: 'Betterment makes professional investment management accessible to everyone with low fees and no account minimums. Its platform uses AI to create personalized portfolios and automates key strategies like tax-loss harvesting and rebalancing.',
    features: [
      'Personalized investment portfolios with ETFs',
      'Automated portfolio rebalancing',
      'Tax-loss harvesting and coordination',
      'Goal-based planning for retirement, savings, etc.',
      'High-yield cash accounts and checking services',
    ],
    company: 'Betterment',
    websiteUrl: 'https://www.betterment.com/',
    logoUrl: 'https://placehold.co/100x100.png',
  },
  {
    id: 'darktrace',
    name: 'Darktrace',
    description: 'A global leader in AI-powered cyber defense, protecting financial institutions from sophisticated threats.',
    category: ['Cybersecurity'],
    accomplishment: 'Darktrace\'s Self-Learning AI understands the normal "pattern of life" for every user and device in a financial network. It autonomously detects and responds to emerging threats in real-time, from insider threats to advanced persistent threats.',
    features: [
      'Self-learning anomaly detection',
      'Autonomous response to neutralize threats',
      'Full network visibility (cloud, email, IoT, etc.)',
      'AI-powered threat investigation',
      'Proactive threat hunting',
    ],
    company: 'Darktrace',
    websiteUrl: 'https://www.darktrace.com/',
    logoUrl: 'https://placehold.co/100x100.png',
  },
  {
    id: 'kensho',
    name: 'Kensho',
    description: 'AI and machine learning capabilities for the financial services industry, acquired by S&P Global.',
    category: ['Investment Analytics', 'Market Analysis'],
    accomplishment: 'Kensho provides next-generation analytics, machine learning, and data visualization tools that solve complex analytical problems for financial institutions. It enables investors to ask complex financial questions in plain English and get instant answers.',
    features: [
      'Natural language query processing',
      'Large-scale data analysis',
      'Document and text data extraction (Kensho Scribe)',
      'Data linking and normalization (Kensho Link)',
      'AI-driven market event analysis',
    ],
    company: 'S&P Global',
    websiteUrl: 'https://www.kensho.com/',
    logoUrl: 'https://placehold.co/100x100.png',
  },
  {
    id: 'alpaca',
    name: 'Alpaca',
    description: 'A commission-free API-first stock brokerage platform for algorithmic and automated trading.',
    category: ['Algorithmic Trading', 'Investment Analytics'],
    accomplishment: 'Alpaca empowers developers and traders to build and connect applications to trade stocks and crypto algorithmically. It provides a robust, real-time data and execution platform, democratizing access to the tools for building automated trading strategies.',
    features: [
      'Commission-free stock and crypto trading API',
      'Real-time and historical market data',
      'Paper trading environment for testing',
      'Integration with popular trading libraries and platforms',
      'Broker API for fintech apps to offer stock trading',
    ],
    company: 'AlpacaDB, Inc.',
    websiteUrl: 'https://alpaca.markets/',
    logoUrl: 'https://placehold.co/100x100.png',
  },
  {
    id: 'kasisto-kai',
    name: 'Kasisto KAI',
    description: 'A conversational AI platform for the financial industry, powering intelligent virtual assistants.',
    category: ['Customer Service Automation', 'Personalized Banking'],
    accomplishment: 'KAI enables financial institutions to engage with customers through human-like conversations on web, mobile, and messaging platforms. It handles complex queries, executes transactions, and offers personalized insights, improving customer experience and operational efficiency.',
    features: [
      'Pre-built with deep financial knowledge',
      'Multi-channel deployment (web, mobile, IVR)',
      'Transaction processing and account management capabilities',
      'Personalized financial insights and recommendations',
      'Seamless human agent handoff',
    ],
    company: 'Kasisto',
    websiteUrl: 'https://kasisto.com/',
    logoUrl: 'https://placehold.co/100x100.png',
  },
  {
    id: 'c3-ai-aml',
    name: 'C3 AI Anti-Money Laundering',
    description: 'An AI-based application for detecting and preventing money laundering activities.',
    category: ['Regulatory Compliance (RegTech AI)', 'Fraud Detection'],
    accomplishment: 'C3 AI AML uses AI to analyze transaction data, customer profiles, and network relationships to identify complex money laundering schemes that rule-based systems miss. It reduces false positives by over 80% and enhances the efficiency of compliance teams.',
    features: [
      'Unified data from disparate sources',
      'AI-powered risk scoring',
      'Network graph analysis to uncover hidden relationships',
      'Automated alert triage and prioritization',
      'Explainable AI for regulatory reporting',
    ],
    company: 'C3.ai',
    websiteUrl: 'https://c3.ai/products/c3-ai-anti-money-laundering/',
    logoUrl: 'https://placehold.co/100x100.png',
  },
  {
    id: 'personetics',
    name: 'Personetics',
    description: 'AI-powered financial data-driven personalization and customer engagement platform for banks.',
    category: ['Personalized Banking', 'Customer Service Automation'],
    accomplishment: 'Personetics helps banks deliver hyper-personalized insights, advice, and automated financial wellness programs to their customers. By analyzing transaction data, it helps customers save more, manage debt, and improve their financial health, leading to increased loyalty.',
    features: [
      'Real-time transaction analysis and categorization',
      'Proactive, personalized insights and advice',
      'Automated savings programs',
      'Self-service creation of new insights by the bank',
      'Integration with bank\'s existing digital channels',
    ],
    company: 'Personetics',
    websiteUrl: 'https://personetics.com/',
    logoUrl: 'https://placehold.co/100x100.png',
  },
  {
    id: 'numerai',
    name: 'Numerai',
    description: 'A hedge fund that uses a global network of data scientists to build predictive models for the stock market.',
    category: ['Portfolio Management', 'Investment Analytics'],
    accomplishment: 'Numerai crowdsources AI by providing encrypted financial data to a community of anonymous data scientists. These scientists build machine learning models to predict stock market trends, and the best models are combined into a meta-model that drives the hedge fund\'s trading.',
    features: [
      'Weekly data science competitions',
      'Encrypted, high-quality financial data',
      'NMR cryptocurrency for staking and rewards',
      'Decentralized network of contributors',
      'Ensemble modeling to combine predictions',
    ],
    company: 'Numerai',
    websiteUrl: 'https://numer.ai/',
    logoUrl: 'https://placehold.co/100x100.png',
  },
  {
    id: 'highradius',
    name: 'HighRadius',
    description: 'An AI-powered platform that automates order-to-cash and treasury processes for enterprises.',
    category: ['Lending Automation', 'Portfolio Management'],
    accomplishment: 'HighRadius uses AI to automate repetitive tasks in credit, collections, and payments, freeing up finance teams to focus on strategic work. Their solutions reduce days sales outstanding (DSO), optimize working capital, and reduce bad debt.',
    features: [
      'AI-driven credit and collections management',
      'Automated cash application and invoice matching',
      'E-invoicing and payments portal',
      'Deductions and dispute management',
      'Real-time treasury and cash management',
    ],
    company: 'HighRadius',
    websiteUrl: 'https://www.highradius.com/',
    logoUrl: 'https://placehold.co/100x100.png',
  },
  {
    id: 'addepar',
    name: 'Addepar',
    description: 'A wealth management platform that specializes in data aggregation, analytics, and reporting for complex portfolios.',
    category: ['Portfolio Management', 'Investment Analytics'],
    accomplishment: 'Addepar provides a comprehensive view of a client\'s entire financial picture by aggregating data from various sources. Its powerful analytics engine allows advisors to model complex scenarios and provide insightful advice for ultra-high-net-worth clients and family offices.',
    features: [
      'Data aggregation across all asset classes',
      'Customizable performance reporting',
      'Portfolio analysis and modeling tools',
      'Client portal and mobile app',
      'Open platform with API integrations',
    ],
    company: 'Addepar',
    websiteUrl: 'https://addepar.com/',
    logoUrl: 'https://placehold.co/100x100.png',
  },
  {
    id: 'signifyd',
    name: 'Signifyd',
    description: 'An AI-powered fraud protection platform for e-commerce businesses that guarantees approved orders against fraud.',
    category: ['Fraud Detection', 'Security'],
    accomplishment: 'Signifyd\'s machine learning models instantly sift legitimate from fraudulent orders, maximizing conversions by reducing false declines. They back their decisions with a 100% financial guarantee, shifting the liability for fraud from the merchant.',
    features: [
      'Real-time machine learning for fraud detection',
      '100% chargeback protection guarantee',
      'Automated order review',
      'Abuse prevention (e.g., policy abuse, promotion abuse)',
      'Payment compliance and SCA management',
    ],
    company: 'Signifyd',
    websiteUrl: 'https://www.signifyd.com/',
    logoUrl: 'https://placehold.co/100x100.png',
  },
  {
    id: 'mx-technologies',
    name: 'MX Technologies',
    description: 'An open finance platform that helps financial institutions and fintechs clean, enhance, and present financial data.',
    category: ['Personalized Banking', 'Investment Analytics'],
    accomplishment: 'MX uses AI to aggregate and enhance financial data, turning raw transaction strings into clean, categorized information. This enables banks and fintechs to build better digital experiences, offer personalized insights, and help customers become financially strong.',
    features: [
      'Data aggregation from over 16,000 sources',
      'Transaction cleansing and categorization',
      'Personal financial management (PFM) tools',
      'Mobile banking and money management solutions',
      'Data-driven analytics and insights',
    ],
    company: 'MX Technologies Inc.',
    websiteUrl: 'https://www.mx.com/',
    logoUrl: 'https://placehold.co/100x100.png',
  },
];

export const INSIGHTS: Insight[] = [
  {
    id: 'ai-in-credit-risk',
    title: 'The Role of AI in Revolutionizing Credit Risk Assessment',
    summary: 'This article explores how artificial intelligence is transforming traditional credit scoring models, enabling more accurate and inclusive risk evaluations through advanced data analysis.',
    content: `
      <p class="mb-4">Artificial intelligence is dramatically reshaping how financial institutions assess credit risk. Traditional methods often rely on limited data points and static models, which can exclude potential borrowers or misjudge risk. AI, particularly machine learning algorithms, can analyze vast, diverse datasets—including non-traditional data—to identify complex patterns and predict creditworthiness with greater precision.</p>
      <h3 class="text-xl font-semibold mt-6 mb-2">Expanding Data Horizons</h3>
      <p class="mb-4">AI models can incorporate thousands of data points, far beyond the scope of traditional FICO scores. This includes alternative data like rental payments, utility bills, and even online behavioral data. By using a more holistic view of an applicant's financial life, lenders can make fairer and more accurate decisions. This not only improves lending decisions for the institution but also promotes financial inclusion by providing opportunities to a wider demographic previously overlooked by conventional systems.</p>
      <h3 class="text-xl font-semibold mt-6 mb-2">Transparency with Explainable AI (XAI)</h3>
      <p>A key challenge with complex AI models is their "black box" nature. However, the rise of Explainable AI (XAI) is addressing this. Tools like Zest AI provide clear, human-readable explanations for every credit decision, ensuring that lenders can meet regulatory requirements for transparency and consumers can understand why they were approved or denied. This fosters trust and accountability in the lending process.</p>
    `,
    imageUrl: 'https://placehold.co/1200x630.png',
  },
  {
    id: 'robo-advisors-future',
    title: 'AI-Powered Robo-Advisors: The Future of Wealth Management',
    summary: 'Discover how AI-driven robo-advisors are making sophisticated, personalized investment management accessible and affordable for the masses.',
    content: `
      <p class="mb-4">The world of wealth management, once an exclusive domain for high-net-worth individuals, is undergoing a radical transformation thanks to AI-powered robo-advisors. These digital platforms provide automated, algorithm-driven financial planning services with little to no human supervision, making sophisticated investing strategies available to everyone.</p>
      <h3 class="text-xl font-semibold mt-6 mb-2">Democratizing Access</h3>
      <p class="mb-4">Platforms like Betterment and Wealthfront use AI to assess a user's risk tolerance and financial goals through simple online questionnaires. Based on this information, they construct and manage a diversified portfolio of low-cost ETFs. By automating this process, they can offer their services for a fraction of the cost of traditional human advisors, often with no or very low account minimums.</p>
      <h3 class="text-xl font-semibold mt-6 mb-2">Behavioral Coaching and Automation</h3>
      <p>Beyond portfolio construction, AI excels at tasks that require discipline and consistency. Robo-advisors automatically handle portfolio rebalancing and tax-loss harvesting, strategies that maximize returns but are often neglected by individual investors. Furthermore, by providing data-driven advice and preventing emotion-fueled decisions during market volatility, these platforms act as behavioral coaches, helping investors stay focused on their long-term goals.</p>
    `,
    imageUrl: 'https://placehold.co/1200x630.png',
  },
  {
    id: 'fighting-financial-crime',
    title: 'Fighting Financial Crime with AI and Machine Learning',
    summary: 'Learn how financial institutions are leveraging AI to detect and combat complex financial crimes like fraud and money laundering more effectively than ever before.',
    content: `
      <p class="mb-4">As financial transactions become increasingly digital and instantaneous, the methods used by criminals have grown more sophisticated. Traditional rule-based systems for detecting fraud and money laundering are struggling to keep up. Artificial Intelligence and machine learning are now the front line of defense in the fight against financial crime.</p>
      <h3 class="text-xl font-semibold mt-6 mb-2">Uncovering Hidden Patterns</h3>
      <p class="mb-4">AI systems, like the Feedzai Risk Engine, analyze billions of data points in real time to understand what constitutes normal behavior for each user. They can detect subtle anomalies that signal fraudulent activity, such as unusual transaction times, locations, or amounts. For anti-money laundering (AML), AI can perform complex network analysis to uncover hidden relationships between entities that might be part of a sophisticated laundering ring.</p>
      <h3 class="text-xl font-semibold mt-6 mb-2">Reducing False Positives</h3>
      <p>A major pain point for legacy systems is the high number of false positives—legitimate transactions incorrectly flagged as suspicious. This frustrates customers and wastes investigators' time. By learning individual behavioral patterns, AI models drastically reduce these false alarms, allowing compliance teams to focus their resources on genuine threats and high-risk cases.</p>
    `,
    imageUrl: 'https://placehold.co/1200x630.png',
  },
  {
    id: 'ai-personalized-banking',
    title: 'How AI is Personalizing the Customer Banking Experience',
    summary: 'Banks are using AI to move beyond one-size-fits-all services, offering hyper-personalized insights, advice, and support to deepen customer relationships.',
    content: `
      <p class="mb-4">The future of banking is personal. Customers today expect their bank to understand their individual financial situation and provide tailored guidance. Artificial intelligence is the key technology enabling this shift from transactional relationships to personalized partnerships.</p>
      <h3 class="text-xl font-semibold mt-6 mb-2">Data-Driven Insights</h3>
      <p class="mb-4">Platforms like Personetics and MX use AI to analyze a customer's transaction data, identifying spending habits, income patterns, and savings opportunities. Based on this analysis, the bank can deliver proactive and relevant insights directly through their digital channels. Examples include a warning about a potential low balance, a suggestion to transfer money to a savings goal, or an alert about a duplicate charge.</p>
      <h3 class="text-xl font-semibold mt-6 mb-2">Conversational Banking</h3>
      <p>Conversational AI, in the form of intelligent chatbots and virtual assistants like Kasisto's KAI, is another cornerstone of personalization. These AI assistants can handle a wide range of customer queries 24/7, from checking account balances to executing payments. They understand natural language, learn from past interactions, and can provide a seamless, human-like service experience, freeing up human agents to handle more complex issues.</p>
    `,
    imageUrl: 'https://placehold.co/1200x630.png',
  },
  {
    id: 'regtech-ai',
    title: 'RegTech: Using AI to Navigate the Complex World of Financial Compliance',
    summary: 'Regulatory Technology (RegTech) is leveraging AI to help financial institutions manage regulatory compliance more efficiently and effectively, reducing costs and risks.',
    content: `
      <p class="mb-4">The regulatory landscape for financial services is in a constant state of flux, becoming more complex and demanding every year. Manually keeping track of and complying with these regulations is a monumental task. AI-powered Regulatory Technology, or RegTech, is emerging as a powerful solution to this challenge.</p>
      <h3 class="text-xl font-semibold mt-6 mb-2">Automating Compliance Processes</h3>
      <p class="mb-4">RegTech tools use AI and Natural Language Processing (NLP) to automate key compliance tasks. They can scan regulatory publications from around the world to identify changes relevant to a specific institution, interpret complex legal documents, and map them to internal policies and controls. This "horizon scanning" ensures that firms are always aware of their obligations.</p>
      <h3 class="text-xl font-semibold mt-6 mb-2">Enhancing Reporting and Auditing</h3>
      <p>AI also streamlines regulatory reporting and auditing. It can automatically aggregate data from various systems, populate required report templates, and create detailed audit trails. This not only saves thousands of hours of manual work but also improves the accuracy of regulatory submissions, reducing the risk of non-compliance penalties.</p>
    `,
    imageUrl: 'https://placehold.co/1200x630.png',
  }
];
