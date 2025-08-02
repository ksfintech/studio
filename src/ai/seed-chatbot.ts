import { db } from '../lib/firebase';
import { addDoc, collection } from 'firebase/firestore';
import * as fs from 'fs/promises';
import * as path from 'path';
import 'dotenv/config';

const chatbotContexts = [
    // ===== PLATFORM FEATURES =====
    {
        section: "Platform Features",
        text: "AI Fintech Compass Platform Features: Tool Directory Listing - Display a browsable list of AI Fintech tools with name, brief description, and application areas. Tool Detail Pages - Dedicated pages for each AI Fintech tool, including name, category, insight/accomplishment, key features, company, and website link. Keyword Search - Implement a keyword search to search by tool name, company, or keywords in the description. Category Filter - Include a category filter to narrow results by application area. AI Fintech Insights Section - Display a list of articles or summaries about various AI applications in finance. Fintech Insights Detail - Pages dedicated to Fintech insights piece, displaying the full article. AI-Powered Insight Suggestions - Use an AI tool to automatically suggest related insight articles based on the currently viewed AI Fintech tool's details."
    },
    
    // ===== AI FINTECH CATEGORIES =====
    {
        section: "AI Fintech Categories",
        text: "AI Fintech Categories: Fraud Detection & Security - AI-powered systems that detect and prevent financial fraud, money laundering, and security threats in real-time. Customer Service Automation - Chatbots, virtual assistants, and automated customer support systems for financial institutions. Personalized Banking - AI-driven personalization for banking services, product recommendations, and customer experience optimization. Risk Management - AI tools for credit risk assessment, market risk analysis, and regulatory compliance. Trading & Investment - Algorithmic trading platforms, robo-advisors, and AI-powered investment analysis tools. Payment Processing - AI-enhanced payment systems, fraud detection, and transaction processing optimization. Regulatory Compliance - AI tools for KYC/AML compliance, regulatory reporting, and audit automation. Data Analytics - AI-powered financial data analysis, market insights, and predictive analytics."
    },
    
    // ===== POPULAR AI FINTECH TOOLS =====
    {
        section: "Popular AI Fintech Tools",
        text: "Popular AI Fintech Tools: Feedzai Risk Engine - AI-powered platform that detects and prevents financial fraud in real-time across various payment channels. Kasisto KAI - Conversational AI platform for the financial industry, powering intelligent virtual assistants. Plaid - Financial data API that connects apps to users' bank accounts for secure data sharing. Stripe Radar - Machine learning-powered fraud detection for online payments. Zest AI - AI-powered credit underwriting platform that helps lenders make better decisions. Upstart - AI lending platform that uses machine learning to assess creditworthiness. Affirm - AI-driven buy-now-pay-later platform with instant credit decisions. Robinhood - AI-powered trading platform with automated investment recommendations. Betterment - Robo-advisor using AI for portfolio management and investment optimization. SoFi - AI-enhanced personal finance platform offering loans, investing, and banking services."
    },
    
    // ===== INDUSTRY INSIGHTS =====
    {
        section: "Industry Insights",
        text: "AI in Fintech Industry Insights: Market Growth - The global AI in fintech market is expected to reach $61.3 billion by 2028, growing at a CAGR of 23.5%. Adoption Trends - 90% of financial services companies are investing in AI technologies, with fraud detection and customer service being the top use cases. Cost Savings - AI implementation in banking can reduce operational costs by 20-30% while improving efficiency by 40-60%. Customer Experience - AI-powered personalization can increase customer engagement by 25% and reduce churn by 15%. Regulatory Impact - AI is helping financial institutions meet regulatory requirements more efficiently, with 70% reporting improved compliance outcomes. Investment Focus - Venture capital investment in AI fintech startups reached $12.5 billion in 2023, with fraud detection and robo-advisory leading the way."
    },
    
    // ===== TECHNICAL IMPLEMENTATION =====
    {
        section: "Technical Implementation",
        text: "AI Fintech Technical Implementation: Machine Learning Models - Supervised learning for fraud detection, unsupervised learning for anomaly detection, and reinforcement learning for trading algorithms. Natural Language Processing - Chatbots, sentiment analysis, document processing, and automated customer support. Computer Vision - Document verification, identity authentication, and visual fraud detection. Predictive Analytics - Credit scoring, market prediction, and risk assessment using historical data patterns. Blockchain Integration - AI-powered smart contracts, decentralized finance (DeFi) applications, and cryptocurrency trading bots. API Architecture - RESTful APIs, GraphQL, and microservices for scalable AI fintech applications. Cloud Computing - AWS, Google Cloud, and Azure services for AI model deployment and data processing. Security & Privacy - Federated learning, differential privacy, and secure multi-party computation for protecting sensitive financial data."
    },
    
    // ===== USE CASES & APPLICATIONS =====
    {
        section: "Use Cases & Applications",
        text: "AI Fintech Use Cases & Applications: Banking - AI chatbots for customer service, fraud detection, credit scoring, and personalized product recommendations. Insurance - AI-powered claims processing, risk assessment, fraud detection, and automated underwriting. Investment Management - Robo-advisors, algorithmic trading, portfolio optimization, and market analysis. Payment Processing - Fraud detection, transaction monitoring, and automated payment routing. Lending - AI credit scoring, loan approval automation, and risk assessment. Regulatory Compliance - Automated KYC/AML processes, regulatory reporting, and audit trail management. Wealth Management - Personalized investment advice, portfolio rebalancing, and financial planning. Trading - Algorithmic trading, market prediction, and automated order execution."
    },
    
    // ===== CHALLENGES & CONSIDERATIONS =====
    {
        section: "Challenges & Considerations",
        text: "AI Fintech Challenges & Considerations: Data Quality - Ensuring high-quality, accurate, and representative data for AI model training and validation. Regulatory Compliance - Meeting financial regulations while implementing AI solutions, including explainability requirements. Security & Privacy - Protecting sensitive financial data and ensuring AI systems are secure against attacks. Bias & Fairness - Addressing algorithmic bias in credit scoring, lending, and other financial decisions. Model Interpretability - Making AI decisions explainable and transparent for regulatory and customer trust requirements. Integration Complexity - Integrating AI systems with existing legacy financial infrastructure and workflows. Talent Shortage - Finding skilled professionals with both AI and financial domain expertise. Cost & ROI - Managing the high costs of AI implementation while demonstrating clear return on investment."
    },
    
    // ===== FUTURE TRENDS =====
    {
        section: "Future Trends",
        text: "AI Fintech Future Trends: Generative AI - Large language models for financial document generation, customer service, and content creation. Quantum Computing - Quantum algorithms for portfolio optimization, risk assessment, and cryptography. Edge AI - On-device AI processing for real-time financial decisions and reduced latency. Federated Learning - Collaborative AI training across multiple financial institutions while preserving data privacy. Explainable AI - Transparent AI systems that provide clear explanations for financial decisions. Autonomous Finance - Fully automated financial management systems that make decisions without human intervention. Digital Twins - Virtual replicas of financial systems for testing, optimization, and risk management. Sustainable Finance - AI tools for ESG (Environmental, Social, Governance) analysis and sustainable investment decisions."
    },
    
    // ===== COMPLIANCE & REGULATIONS =====
    {
        section: "Compliance & Regulations",
        text: "AI Fintech Compliance & Regulations: GDPR - European data protection regulations affecting AI systems that process personal financial data. CCPA - California Consumer Privacy Act requirements for AI-powered financial services. SOX - Sarbanes-Oxley Act compliance for AI systems in financial reporting and auditing. Basel III - Banking regulations requiring AI systems to maintain adequate capital and risk management. MiFID II - European financial markets regulation affecting AI trading and investment advice. PSD2 - Payment Services Directive requiring AI systems to support open banking and secure authentication. Fair Lending Laws - Anti-discrimination regulations requiring AI lending systems to be fair and unbiased. Model Risk Management - Regulatory frameworks for managing risks associated with AI model deployment in financial services."
    }
];

async function seedChatbotContext() {
    try {
        console.log('Seeding chatbot context with organized sections...');
        const contextsCollection = collection(db, 'chatbot-context');

        for (const context of chatbotContexts) {
            await addDoc(contextsCollection, {
                section: context.section,
                text: context.text,
                createdAt: new Date(),
            });
            console.log(`Added context section: "${context.section}"`);
        }

        console.log('Successfully seeded chatbot context with organized sections.');
    } catch (e) {
        console.error('Failed to seed chatbot context', e);
    }
}

seedChatbotContext().then(() => {
    console.log('Seeding script finished.');
    process.exit(0);
});
