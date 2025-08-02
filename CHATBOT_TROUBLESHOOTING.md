# Chatbot Deployment Troubleshooting Guide

## 🚨 Issue: Chatbot works locally but fails on deployment

### **Problem Description**
The AI Financial Concierge chatbot works perfectly on localhost but shows "Sorry, I encountered an error. Please try again later." when deployed to Firebase App Hosting.

### **Root Causes & Solutions**

## 1. Environment Variables Not Set in Production

### **Check Environment Variables**
```bash
# Test environment variables locally
node test-env.js

# Check deployment logs
firebase apphosting:logs
```

### **Solution: Verify Firebase App Hosting Environment Variables**
1. Go to Firebase Console → App Hosting → Your App
2. Check Environment Variables section
3. Ensure all variables from `.env.local` are set:
   - `GEMINI_API_KEY`
   - `NEXT_PUBLIC_FIREBASE_API_KEY`
   - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
   - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
   - `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
   - `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
   - `NEXT_PUBLIC_FIREBASE_APP_ID`

## 2. Debug the Production Environment

### **Use the Debug Endpoint**
After deployment, visit: `https://your-app.web.app/api/debug-chatbot-prod`

This will show:
- Environment variable status
- Chatbot context retrieval status
- AI flow test results
- Detailed error messages

### **Check Application Logs**
```bash
# View real-time logs
firebase apphosting:logs --follow

# View recent logs
firebase apphosting:logs --limit 100
```

## 3. Common Deployment Issues

### **Issue: GEMINI_API_KEY not accessible**
**Symptoms**: "AI service is not properly configured" error
**Solution**: 
1. Verify API key is set in Firebase App Hosting environment variables
2. Check if API key has proper permissions
3. Ensure API key is not expired

### **Issue: Firebase connection problems**
**Symptoms**: "Firebase not available" errors
**Solution**:
1. Verify Firebase project configuration
2. Check Firebase project permissions
3. Ensure Firebase services are enabled

### **Issue: Build-time vs Runtime environment**
**Symptoms**: Works in development but fails in production
**Solution**:
1. Check `NODE_ENV` is set to "production"
2. Verify all environment variables are available at runtime
3. Test with the debug endpoint

## 4. Step-by-Step Fix Process

### **Step 1: Verify Local Environment**
```bash
# Test locally
npm run dev
# Visit http://localhost:9002/chatbot
# Test the chatbot - should work
```

### **Step 2: Check Environment Variables**
```bash
# Run environment test
node test-env.js
# Should show all variables as "Set"
```

### **Step 3: Deploy with Debugging**
```bash
# Deploy with enhanced logging
./deploy.sh
```

### **Step 4: Test Production**
1. Visit your deployed app: `https://your-app.web.app/chatbot`
2. Test the chatbot
3. If it fails, visit: `https://your-app.web.app/api/debug-chatbot-prod`
4. Check the debug output for specific errors

### **Step 5: Check Logs**
```bash
# View deployment logs
firebase apphosting:logs --limit 50
```

## 5. Manual Environment Variable Setup

If automatic environment variable loading fails:

### **Method 1: Firebase Console (Recommended)**
1. Go to Firebase Console → App Hosting → Your App
2. Click "Environment Variables"
3. Add each variable manually:
   ```
   GEMINI_API_KEY=AIzaSyAp9484eRFa7X4hKPevl4dKsGQBmGDPaiE
   NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyAmCymnNst9545zxYMjPsDzPdVjhYV06MM
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=ai-fintech-insights.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=ai-fintech-insights
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=ai-fintech-insights.firebasestorage.app
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=594019690566
   NEXT_PUBLIC_FIREBASE_APP_ID=1:594019690566:web:823112240fc601050c4247
   ```

### **Method 2: Updated apphosting.yaml (Already Done)**
The `apphosting.yaml` file has been updated with actual environment variable values instead of variable substitution. This should work automatically when you deploy.

### **Method 3: Firebase CLI (Limited)**
```bash
# Note: Firebase App Hosting doesn't have a direct env:set command
# Environment variables must be set through the Firebase Console or apphosting.yaml

# Alternative: Use Firebase Functions config (if applicable)
firebase functions:config:set gemini.api_key="your_gemini_api_key"
firebase functions:config:set firebase.api_key="your_firebase_api_key"
```

## 6. Testing Checklist

- [ ] Local development works (`npm run dev`)
- [ ] Environment variables test passes (`node test-env.js`)
- [ ] Build succeeds (`npm run build`)
- [ ] Deployment completes without errors
- [ ] Debug endpoint shows all variables set
- [ ] Chatbot responds correctly in production

## 7. Emergency Fallback

If the chatbot still doesn't work, you can temporarily disable it:

1. Comment out the chatbot route in the header
2. Add a maintenance message
3. Deploy the fix
4. Debug the issue separately

## 8. Support Information

### **Useful Commands**
```bash
# Test environment
node test-env.js

# Deploy with debugging
./deploy.sh

# View logs
firebase apphosting:logs

# Debug endpoint
curl https://your-app.web.app/api/debug-chatbot-prod
```

### **Key Files to Check**
- `src/ai/genkit.ts` - AI configuration
- `src/ai/flows/financial-concierge.ts` - Chatbot logic
- `src/lib/data.ts` - Data access
- `apphosting.yaml` - Deployment configuration
- `.env.local` - Environment variables

### **Common Error Messages**
- "GEMINI_API_KEY is not set" → Environment variable missing
- "Firebase not available" → Firebase configuration issue
- "AI service is not properly configured" → API key or permissions issue
- "Network error" → Connectivity or CORS issue 