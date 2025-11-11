#!/bin/bash

# 🎨 Favicon Generator Script
# Generates all required favicon sizes from existing favicon.ico

echo "🎨 QTest Solutions - Favicon Generator"
echo "======================================"
echo ""

cd "$(dirname "$0")/public" || exit 1

# Check if source file exists
if [ ! -f "favicon.ico" ]; then
    echo "❌ Error: favicon.ico not found in /public/"
    exit 1
fi

echo "✅ Found favicon.ico"
echo ""

# Method 1: Try ImageMagick (convert command)
if command -v convert &> /dev/null; then
    echo "🔧 Using ImageMagick to generate favicon files..."
    echo ""
    
    convert favicon.ico -resize 16x16 favicon-16x16.png && echo "✅ Created favicon-16x16.png"
    convert favicon.ico -resize 32x32 favicon-32x32.png && echo "✅ Created favicon-32x32.png"
    convert favicon.ico -resize 180x180 apple-touch-icon.png && echo "✅ Created apple-touch-icon.png"
    convert favicon.ico -resize 192x192 android-chrome-192x192.png && echo "✅ Created android-chrome-192x192.png"
    convert favicon.ico -resize 512x512 android-chrome-512x512.png && echo "✅ Created android-chrome-512x512.png"
    
    echo ""
    echo "✅ All favicon files generated successfully!"
    echo ""
    echo "📁 Generated files:"
    ls -lh favicon-*.png apple-touch-icon.png android-chrome-*.png 2>/dev/null
    
    echo ""
    echo "🔄 Next steps:"
    echo "1. Uncomment the full icon configuration in app/layout.tsx"
    echo "2. Run: npm run dev"
    echo "3. Test: http://localhost:3000/favicon-16x16.png"
    echo ""
    
    exit 0
fi

# Method 2: Node.js with sharp (if ImageMagick not available)
if command -v node &> /dev/null; then
    echo "⚠️  ImageMagick not found, checking for Node.js sharp package..."
    echo ""
    
    if npm list sharp &> /dev/null; then
        echo "🔧 Using Node.js sharp to generate favicon files..."
        echo ""
        
        node -e "
        const sharp = require('sharp');
        const fs = require('fs');
        
        async function generate() {
            try {
                await sharp('favicon.ico').resize(16, 16).toFile('favicon-16x16.png');
                console.log('✅ Created favicon-16x16.png');
                
                await sharp('favicon.ico').resize(32, 32).toFile('favicon-32x32.png');
                console.log('✅ Created favicon-32x32.png');
                
                await sharp('favicon.ico').resize(180, 180).toFile('apple-touch-icon.png');
                console.log('✅ Created apple-touch-icon.png');
                
                await sharp('favicon.ico').resize(192, 192).toFile('android-chrome-192x192.png');
                console.log('✅ Created android-chrome-192x192.png');
                
                await sharp('favicon.ico').resize(512, 512).toFile('android-chrome-512x512.png');
                console.log('✅ Created android-chrome-512x512.png');
                
                console.log('\\n✅ All files generated!');
            } catch (err) {
                console.error('❌ Error:', err.message);
                process.exit(1);
            }
        }
        
        generate();
        "
        
        exit 0
    else
        echo "⚠️  sharp package not found. Installing..."
        npm install sharp --save-dev
        echo ""
        echo "🔄 Please run this script again after sharp installation completes."
        exit 0
    fi
fi

# No tools available - manual instructions
echo "❌ Neither ImageMagick nor Node.js found."
echo ""
echo "📋 Manual Solution Options:"
echo ""
echo "Option 1: Install ImageMagick"
echo "  sudo apt-get install imagemagick  # Ubuntu/Debian"
echo "  brew install imagemagick          # macOS"
echo "  Then run this script again."
echo ""
echo "Option 2: Use Online Tool (Recommended)"
echo "  1. Go to: https://realfavicongenerator.net/"
echo "  2. Upload your /public/favicon.ico file"
echo "  3. Download the generated package"
echo "  4. Extract all files to /public/ folder"
echo ""
echo "Option 3: Manual Creation"
echo "  Use any image editor (GIMP, Photoshop, etc.) to resize"
echo "  favicon.ico to these sizes and save as PNG:"
echo "    - 16x16   → favicon-16x16.png"
echo "    - 32x32   → favicon-32x32.png"
echo "    - 180x180 → apple-touch-icon.png"
echo ""

exit 1
