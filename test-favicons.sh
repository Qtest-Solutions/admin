#!/bin/bash

# 🔍 Favicon Verification Script
# Tests if all favicon files are accessible

echo "🔍 Favicon Verification Test"
echo "============================"
echo ""

# Check if server is running
if ! curl -s http://localhost:3000 > /dev/null 2>&1; then
    echo "⚠️  Dev server not running!"
    echo "Please start it with: npm run dev"
    echo ""
    exit 1
fi

echo "✅ Server is running"
echo ""
echo "Testing favicon accessibility..."
echo ""

# Test each favicon file
test_file() {
    local file=$1
    local url="http://localhost:3000${file}"
    
    response=$(curl -s -o /dev/null -w "%{http_code}" "$url")
    
    if [ "$response" = "200" ]; then
        echo "✅ ${file} - OK (200)"
    else
        echo "❌ ${file} - FAILED (${response})"
    fi
}

# Test all favicon files
test_file "/favicon.ico"
test_file "/favicon-16x16.png"
test_file "/favicon-32x32.png"
test_file "/apple-touch-icon.png"
test_file "/android-chrome-192x192.png"
test_file "/android-chrome-512x512.png"
test_file "/site.webmanifest"

echo ""
echo "Testing main pages..."
echo ""

# Test main pages
test_file "/"
test_file "/about"
test_file "/services"
test_file "/blog"
test_file "/contact"
test_file "/training"

echo ""
echo "📊 Summary:"
echo "==========="
echo ""
echo "All favicon files should return 200 OK"
echo "All page URLs should return 200 OK"
echo ""
echo "Next steps:"
echo "1. Open http://localhost:3000 in browser"
echo "2. Check browser tab for favicon"
echo "3. Open DevTools → Network tab"
echo "4. Filter by 'favicon' to see all requests"
echo "5. All should show 200 status"
echo ""
