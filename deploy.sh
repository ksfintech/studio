#!/bin/bash

# Firebase App Hosting Deployment Script
# This script deploys the AI Fintech Compass application to Firebase Hosting

echo "🚀 Starting Firebase App Hosting deployment..."

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "❌ Error: .env.local file not found!"
    echo "Please create .env.local with your environment variables before deploying."
    exit 1
fi

# Load environment variables from .env.local
echo "📋 Loading environment variables from .env.local..."
export $(cat .env.local | grep -v '^#' | xargs)

# Verify required environment variables
echo "🔍 Verifying required environment variables..."
node test-env.js

if [ $? -ne 0 ]; then
    echo "❌ Environment variables check failed!"
    exit 1
fi

# Create a temporary .env file for deployment
echo "📝 Creating deployment environment file..."
cat .env.local > .env.deploy

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
echo "📋 Using environment variables from .env.deploy"
firebase deploy --only apphosting --config apphosting.yaml

# Check deployment status
if [ $? -eq 0 ]; then
    echo "🎉 Deployment successful!"
    echo "Your application is now live on Firebase App Hosting!"
    echo "You can view it at: https://aifintechinsights.web.app"
    echo ""
    echo "🔧 To debug chatbot issues:"
    echo "1. Check the deployment logs: firebase apphosting:logs"
    echo "2. Test the health endpoint: https://aifintechinsights.web.app/api/health"
    echo "3. Test the chatbot endpoint: https://aifintechinsights.web.app/chatbot"
else
    echo "❌ Deployment failed! Please check the error messages above."
    exit 1
fi

# Clean up
rm -f .env.deploy 