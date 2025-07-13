import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About AI FinTech Agents | AI FinTech Insights',
  description: 'Learn about AI agents in fintech, how they work, and how they can help financial professionals and individuals manage their finances.',
  keywords: 'AI agents, fintech, financial technology, artificial intelligence, financial management, investment tools',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#141414] text-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About AI FinTech Agents
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how artificial intelligence is revolutionizing the financial industry and empowering individuals to make smarter financial decisions.
          </p>
        </div>

        {/* What are AI Agents Section */}
        <section className="mb-16">
          <div className="bg-[#222831] rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-blue-400">
              What Are AI Agents?
            </h2>
            <div className="space-y-6 text-gray-200">
              <p className="text-lg leading-relaxed">
                AI agents are intelligent software programs that can perform tasks autonomously or semi-autonomously, 
                making decisions and taking actions based on their programming and the data they process. Unlike 
                traditional software, AI agents can learn, adapt, and improve their performance over time.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-[#1a1a1a] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-green-400">Key Characteristics</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Autonomous decision-making capabilities</li>
                    <li>• Ability to learn from data and experience</li>
                    <li>• Natural language processing and understanding</li>
                    <li>• Real-time data analysis and processing</li>
                    <li>• Continuous improvement through machine learning</li>
                  </ul>
                </div>
                
                <div className="bg-[#1a1a1a] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-purple-400">How They Work</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Process vast amounts of financial data</li>
                    <li>• Identify patterns and trends</li>
                    <li>• Generate insights and recommendations</li>
                    <li>• Execute trades or financial operations</li>
                    <li>• Provide personalized financial advice</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI FinTech Agents Section */}
        <section className="mb-16">
          <div className="bg-[#222831] rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-blue-400">
              AI FinTech Agents: Revolutionizing Finance
            </h2>
            <div className="space-y-6 text-gray-200">
              <p className="text-lg leading-relaxed">
                AI FinTech agents are specialized artificial intelligence systems designed specifically for 
                financial applications. They combine the power of machine learning, data analytics, and 
                financial expertise to provide intelligent solutions for complex financial challenges.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-[#1a1a1a] p-6 rounded-lg text-center">
                  <div className="text-3xl mb-4">📊</div>
                  <h3 className="text-xl font-semibold mb-3 text-green-400">Data Analysis</h3>
                  <p className="text-gray-300">
                    Process millions of data points to identify market trends, risk patterns, and investment opportunities.
                  </p>
                </div>
                
                <div className="bg-[#1a1a1a] p-6 rounded-lg text-center">
                  <div className="text-3xl mb-4">🤖</div>
                  <h3 className="text-xl font-semibold mb-3 text-purple-400">Automation</h3>
                  <p className="text-gray-300">
                    Automate routine financial tasks, from portfolio rebalancing to fraud detection and compliance monitoring.
                  </p>
                </div>
                
                <div className="bg-[#1a1a1a] p-6 rounded-lg text-center">
                  <div className="text-3xl mb-4">🎯</div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">Personalization</h3>
                  <p className="text-gray-300">
                    Provide tailored financial advice and strategies based on individual goals, risk tolerance, and circumstances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits for Financial Professionals */}
        <section className="mb-16">
          <div className="bg-[#222831] rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-blue-400">
              How AI Agents Help Financial Professionals
            </h2>
            <div className="space-y-6 text-gray-200">
              <p className="text-lg leading-relaxed">
                Financial professionals across various sectors are leveraging AI agents to enhance their 
                capabilities, improve efficiency, and deliver better results for their clients.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-400">Investment Managers & Advisors</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li>• <strong>Portfolio Optimization:</strong> AI agents analyze market conditions and automatically rebalance portfolios for optimal performance</li>
                    <li>• <strong>Risk Assessment:</strong> Real-time monitoring of portfolio risk and automated alerts for potential issues</li>
                    <li>• <strong>Market Research:</strong> Automated analysis of financial news, earnings reports, and market sentiment</li>
                    <li>• <strong>Client Communication:</strong> Personalized reporting and insights for client meetings</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-purple-400">Banking & Lending Professionals</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li>• <strong>Credit Scoring:</strong> More accurate risk assessment using alternative data sources</li>
                    <li>• <strong>Fraud Detection:</strong> Real-time monitoring of transactions to identify suspicious activity</li>
                    <li>• <strong>Loan Processing:</strong> Automated document analysis and faster approval processes</li>
                    <li>• <strong>Customer Service:</strong> 24/7 intelligent chatbots for customer support</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">Traders & Analysts</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li>• <strong>Algorithmic Trading:</strong> Execute complex trading strategies with precision and speed</li>
                    <li>• <strong>Market Prediction:</strong> Advanced forecasting models based on historical and real-time data</li>
                    <li>• <strong>News Analysis:</strong> Sentiment analysis of financial news and social media</li>
                    <li>• <strong>Compliance Monitoring:</strong> Automated tracking of regulatory requirements</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-yellow-400">Insurance & Risk Managers</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li>• <strong>Risk Modeling:</strong> Advanced predictive models for underwriting and pricing</li>
                    <li>• <strong>Claims Processing:</strong> Automated assessment and faster claim settlements</li>
                    <li>• <strong>Fraud Prevention:</strong> Pattern recognition to identify fraudulent claims</li>
                    <li>• <strong>Customer Segmentation:</strong> Personalized insurance products and pricing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits for Individuals */}
        <section className="mb-16">
          <div className="bg-[#222831] rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-blue-400">
              How AI Agents Help Individuals Manage Finances
            </h2>
            <div className="space-y-6 text-gray-200">
              <p className="text-lg leading-relaxed">
                Whether you're just starting your financial journey or looking to optimize your existing 
                strategies, AI agents can provide personalized guidance and automation to help you achieve 
                your financial goals.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-400">Personal Finance Management</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li>• <strong>Budgeting:</strong> AI-powered expense tracking and spending analysis</li>
                    <li>• <strong>Savings Goals:</strong> Automated savings recommendations and progress tracking</li>
                    <li>• <strong>Debt Management:</strong> Optimized debt repayment strategies</li>
                    <li>• <strong>Financial Planning:</strong> Personalized retirement and investment planning</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-purple-400">Investment & Wealth Building</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li>• <strong>Portfolio Management:</strong> Automated rebalancing and optimization</li>
                    <li>• <strong>Investment Research:</strong> AI-curated investment opportunities and analysis</li>
                    <li>• <strong>Risk Management:</strong> Personalized risk assessment and mitigation strategies</li>
                    <li>• <strong>Tax Optimization:</strong> Smart tax-loss harvesting and tax-efficient investing</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">Financial Education & Guidance</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li>• <strong>Learning Resources:</strong> Personalized financial education content</li>
                    <li>• <strong>Goal Setting:</strong> AI-assisted financial goal planning and tracking</li>
                    <li>• <strong>Market Insights:</strong> Simplified explanations of complex financial concepts</li>
                    <li>• <strong>Behavioral Coaching:</strong> Nudges and reminders for better financial habits</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-yellow-400">Advanced Financial Services</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li>• <strong>Estate Planning:</strong> AI-assisted legacy and inheritance planning</li>
                    <li>• <strong>Insurance Optimization:</strong> Personalized insurance recommendations</li>
                    <li>• <strong>Real Estate Analysis:</strong> Property investment analysis and market insights</li>
                    <li>• <strong>Cryptocurrency Management:</strong> Digital asset portfolio optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Ready to Explore AI FinTech Agents?
            </h2>
            <p className="text-xl text-gray-100 mb-6">
              Discover the best AI agents for your financial needs and start optimizing your financial future today.
            </p>
            <div className="space-x-4">
              <a 
                href="/tools" 
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Browse AI Agents
              </a>
              <a 
                href="/recommend" 
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get Personalized Recommendations
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 