#!/bin/bash

# Simplified Firebase App Hosting Deployment Script
# This script deploys with environment variables configured in firebase.json

echo "🚀 Starting Firebase App Hosting deployment with fixed environment variables..."

# Check if .env.local exists (for reference)
if [ ! -f .env.local ]; then
    echo "❌ Error: .env.local file not found!"
    echo "Please create .env.local with your environment variables before deploying."
    exit 1
fi

echo "✅ Environment variables are configured in firebase.json"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the application
echo "🔨 Building the application..."
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
    echo "❌ Build failed! Please fix the build errors before deploying."
    exit 1
fi

echo "✅ Build completed successfully!"

# Deploy to Firebase App Hosting
echo "🌐 Deploying to Firebase App Hosting..."
echo "📋 Using environment variables from firebase.json"
firebase deploy --only apphosting

# Check deployment status
if [ $? -eq 0 ]; then
    echo "🎉 Deployment successful!"
    echo "Your application is now live on Firebase App Hosting!"
    echo "You can view it at: https://aifintechinsights.web.app"
    echo ""
    echo "🔧 To test the chatbot:"
    echo "1. Visit: https://aifintechinsights.web.app/chatbot"
    echo "2. Test the chatbot functionality"
    echo "3. If issues persist, check: https://aifintechinsights.web.app/api/debug-chatbot-prod"
    echo ""
    echo "📋 To view logs:"
    echo "firebase apphosting:logs --limit 50"
else
    echo "❌ Deployment failed! Please check the error messages above."
    exit 1
fi 