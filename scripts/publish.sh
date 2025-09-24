#!/bin/bash

# Publication script for uieh monorepo with Bun
# Usage: ./scripts/publish.sh [package] [version_type] [--dry-run]

set -e

PACKAGE_PATH=${1:-"packages/uieh"}
VERSION_TYPE=${2:-"patch"}
DRY_RUN=${3:-""}

echo "🚀 Publishing package: $PACKAGE_PATH"
echo "📦 Version type: $VERSION_TYPE"

# Check that the package exists
if [ ! -d "$PACKAGE_PATH" ]; then
    echo "❌ Error: Package $PACKAGE_PATH does not exist"
    exit 1
fi

# Go to the package directory
cd "$PACKAGE_PATH"

# Check that package.json exists
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found in $PACKAGE_PATH"
    exit 1
fi

# Clean and build
echo "🧹 Cleaning..."
bun run clean

echo "🔨 Building..."
bun run build

# Check that the build succeeded
if [ ! -d "dist" ]; then
    echo "❌ Error: Build failed, dist folder does not exist"
    exit 1
fi

# Update version
echo "📝 Updating version ($VERSION_TYPE)..."
bun pm version "$VERSION_TYPE" --no-git-tag-version

# Get the new version
NEW_VERSION=$(bun -p "require('./package.json').version")
PACKAGE_NAME=$(bun -p "require('./package.json').name")

echo "✅ New version: $PACKAGE_NAME@$NEW_VERSION"

# Publication
if [ "$DRY_RUN" = "--dry-run" ]; then
    echo "🔍 Dry-run mode: simulating publication..."
    bun publish --dry-run --access public --no-git-checks
else
    echo "📤 Publishing to NPM..."
    bun publish --access public --no-git-checks
    echo "🎉 Publication successful: $PACKAGE_NAME@$NEW_VERSION"
fi

# Return to root directory
cd - > /dev/null
