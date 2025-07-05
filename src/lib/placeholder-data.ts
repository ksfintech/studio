import type { Tool, Insight } from './definitions';

export const TOOLS: Tool[] = [
  {
    id: 'senti-trader',
    name: 'SentiTrader AI',
    description:
      'Leverages real-time sentiment analysis from news and social media to predict market movements.',
    category: ['Algorithmic Trading', 'Market Analysis'],
    accomplishment:
      'SentiTrader AI offers a predictive edge by processing vast amounts of unstructured text data, identifying market sentiment shifts faster than traditional analysis methods. This allows for proactive trading strategies and enhanced risk management.',
    features: [
      'Real-time sentiment scoring',
      'Multi-language support (English, Mandarin, Spanish)',
      'Customizable asset watchlists',
      'API access for automated trading bots',
    ],
    company: 'AlphaVector Analytics',
    websiteUrl: '#',
    logoUrl: 'https://placehold.co/100x100.png',
  },
  {
    id: 'fraud-shield',
    name: 'FraudShield Pro',
    description:
      'An advanced AI-driven platform for detecting and preventing fraudulent financial transactions.',
    category: ['Fraud Detection', 'Security'],
    accomplishment:
      'By using deep learning models, FraudShield Pro analyzes transaction patterns to identify anomalies with 99.5% accuracy, significantly reducing false positives and protecting financial institutions from sophisticated fraud schemes.',
    features: [
      'Real-time transaction monitoring',
      'Behavioral biometrics analysis',
      'Adaptive learning models',
      'Comprehensive case management dashboard',
    ],
    company: 'SecureLedger Inc.',
    websiteUrl: '#',
    logoUrl: 'https://placehold.co/100x100.png',
  },
  {
    id: 'wealth-wise',
    name: 'WealthWise Robo-Advisor',
    description:
      'A personalized investment management platform that uses AI to create and manage diversified portfolios.',
    category: ['Robo-Advisor', 'Investment'],
    accomplishment:
      'WealthWise democratizes professional wealth management by providing low-cost, automated, and personalized investment advice. Its algorithms continuously optimize portfolios based on risk tolerance and market conditions, aiming for long-term growth.',
    features: [
      'Goal-based financial planning',
      'Automatic portfolio rebalancing',
      'Tax-loss harvesting',
      'Socially Responsible Investing (SRI) options',
    ],
    company: 'NextGen Wealth',
    websiteUrl: '#',
    logoUrl: 'https://placehold.co/100x100.png',
  },
  {
    id: 'credit-score-ai',
    name: 'CreditScore AI',
    description:
      'Utilizes machine learning to provide more accurate and inclusive credit risk assessments.',
    category: ['Credit Scoring', 'Lending'],
    accomplishment:
      'CreditScore AI helps lenders make fairer decisions by analyzing alternative data sources beyond traditional credit reports. This approach opens up access to credit for underserved populations while reducing default risk for lenders.',
    features: [
      'Alternative data integration (e.g., utility payments, rental history)',
      'Explainable AI (XAI) for decision transparency',
      'Regulatory compliance modules (e.g., GDPR, CCPA)',
      'Scalable API for loan origination systems',
    ],
    company: 'EquiFinance',
    websiteUrl: '#',
    logoUrl: 'https://placehold.co/100x100.png',
  },
  {
    id: 'compliance-guard',
    name: 'ComplianceGuard',
    description:
      'An AI-powered platform for automating regulatory compliance and reporting for financial institutions.',
    category: ['Regulatory Tech', 'Compliance'],
    accomplishment:
      'ComplianceGuard automates the tedious process of monitoring regulatory changes and ensuring adherence. It reduces compliance costs by up to 40% and minimizes the risk of costly penalties by providing real-time alerts and automated report generation.',
    features: [
      'Automated horizon scanning for regulatory updates',
      'Natural Language Processing (NLP) for policy analysis',
      'Audit trail and version control',
      'Customizable reporting templates',
    ],
    company: 'Regulytics',
    websiteUrl: '#',
    logoUrl: 'https://placehold.co/100x100.png',
  },
];

export const INSIGHTS: Insight[] = [
  {
    id: 'ai-in-trading',
    title: 'The Rise of AI in Algorithmic Trading',
    summary:
      'Explore how artificial intelligence is reshaping the landscape of algorithmic trading, from sentiment analysis to predictive modeling, and what it means for the future of markets.',
    content: `
      <p class="mb-4">Artificial intelligence (AI) is no longer a futuristic concept in finance; it's a present-day reality that is fundamentally transforming algorithmic trading. Traditional quantitative models, while powerful, often rely on historical data and predefined rules. AI, particularly machine learning (ML) and deep learning, introduces a new paradigm of adaptability and predictive power.</p>
      <h3 class="text-xl font-semibold mt-6 mb-2">Sentiment Analysis: The Market's Mood Ring</h3>
      <p class="mb-4">One of the most significant applications is sentiment analysis. Tools like SentiTrader AI ingest millions of data points from news articles, social media posts, and financial reports in real-time. Using Natural Language Processing (NLP), these systems gauge the collective mood of the market towards a specific asset. A sudden shift from positive to negative sentiment can be a powerful leading indicator of a price drop, allowing AI-driven funds to react before the trend is apparent in price charts alone.</p>
      <h3 class="text-xl font-semibold mt-6 mb-2">Predictive Modeling and Anomaly Detection</h3>
      <p class="mb-4">Beyond sentiment, AI models excel at identifying complex, non-linear patterns in vast datasets that are invisible to the human eye. These models can forecast price movements, volatility, and liquidity with increasing accuracy. Furthermore, they are crucial for anomaly detection, flagging unusual trading activities that could signify market manipulation or the beginning of a black swan event.</p>
      <h3 class="text-xl font-semibold mt-6 mb-2">The Future is Autonomous</h3>
      <p>As AI technology matures, we are moving towards more autonomous trading systems. These systems not only generate signals but also execute trades, manage risk, and continuously learn from their performance, adapting their strategies without human intervention. While this presents immense opportunities, it also raises important questions about regulation, market stability, and the evolving role of the human trader in an AI-dominated world.</p>
    `,
    imageUrl: 'https://placehold.co/1200x630.png',
  },
  {
    id: 'democratizing-investment',
    title: 'How Robo-Advisors Are Democratizing Investment',
    summary:
      'Robo-advisors are breaking down the barriers to professional wealth management, making sophisticated investment strategies accessible and affordable for everyone.',
    content: `
      <p class="mb-4">For decades, personalized investment management was a luxury reserved for the wealthy. High fees, steep account minimums, and an intimidating aura kept the average person at bay. The advent of AI-powered robo-advisors has shattered this old model, democratizing access to financial tools that can build long-term wealth.</p>
      <h3 class="text-xl font-semibold mt-6 mb-2">Personalization at Scale</h3>
      <p class="mb-4">At their core, robo-advisors like WealthWise leverage algorithms to offer services that once required a team of human experts. Through a simple online questionnaire, they assess an individual's financial situation, investment goals, and risk tolerance. The AI then constructs a diversified portfolio, typically using low-cost exchange-traded funds (ETFs), tailored to that specific profile. This is personalization at a scale and cost-efficiency that was previously unimaginable.</p>
      <h3 class="text-xl font-semibold mt-6 mb-2">Automation and Discipline</h3>
      <p class="mb-4">One of the biggest enemies of successful investing is emotional decision-making. Investors often panic-sell during market downturns or chase fads at their peak. Robo-advisors instill discipline through automation. They handle crucial tasks like portfolio rebalancing—selling assets that have grown and buying those that have shrunk to maintain the target asset allocation—and tax-loss harvesting without emotional bias. This systematic approach helps investors stay the course and compound their returns over time.</p>
      <h3 class="text-xl font-semibold mt-6 mb-2">Lowering the Barrier to Entry</h3>
      <p>Perhaps the most profound impact of robo-advisors is their accessibility. With low or no account minimums and management fees that are a fraction of what traditional advisors charge, they have opened the door for a new generation of investors. Anyone with a smartphone and a small amount to invest can now access a sophisticated, diversified, and professionally managed portfolio, truly leveling the financial playing field.</p>
    `,
    imageUrl: 'https://placehold.co/1200x630.png',
  },
  {
    id: 'ai-fraud-detection',
    title: 'The Unseen Guardian: AI in Fraud Detection',
    summary:
      "Learn how AI is working behind the scenes as an unseen guardian, protecting our financial systems from an ever-evolving landscape of fraudulent activities.",
    content: `
      <p class="mb-4">In the digital age, the speed and scale of financial transactions have created unprecedented opportunities for fraudsters. Traditional rule-based systems are no longer sufficient to combat these sophisticated threats. This is where Artificial Intelligence steps in, serving as an unseen, ever-vigilant guardian of the financial ecosystem.</p>
      <h3 class="text-xl font-semibold mt-6 mb-2">Beyond Rules: Learning Behavior</h3>
      <p class="mb-4">Unlike static systems that flag transactions based on simple rules (e.g., "transaction amount > $10,000"), AI models learn the normal behavior of each individual customer. They analyze thousands of data points for every transaction: time of day, location, device used, purchase amount, and historical patterns. A transaction that is normal for one user might be a significant anomaly for another. AI can distinguish this nuance, dramatically reducing the number of frustrating false positives where legitimate transactions are blocked.</p>
      <h3 class="text-xl font-semibold mt-6 mb-2">Identifying Complex Fraud Rings</h3>
      <p class="mb-4">Modern fraud is often orchestrated by organized rings using networks of stolen identities and accounts. AI, particularly through graph analytics, can uncover these hidden connections. It can identify networks of seemingly unrelated accounts that all share a common device, IP address, or behavioral pattern, allowing institutions to shut down entire fraudulent operations rather than just single instances.</p>
      <h3 class="text-xl font-semibold mt-6 mb-2">Adapting to New Threats</h3>
      <p>Fraudsters are constantly evolving their tactics. An AI-based system like FraudShield Pro is designed to adapt. Through continuous learning, the model updates itself based on new, confirmed fraudulent activities. When a new type of scam emerges, the system quickly learns its characteristics and incorporates them into its detection engine, ensuring the defense is always up-to-date. This adaptive capability is what makes AI an indispensable tool in the ongoing fight to secure our financial world.</p>
    `,
    imageUrl: 'https://placehold.co/1200x630.png',
  },
];
