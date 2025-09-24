# NPM Publishing Guide with Bun

This guide explains how to publish the `uieh` package to NPM using Bun in this monorepo.

## 🚀 Automatic Publishing (GitHub Actions)

### Release Trigger
1. Create a release tag on GitHub (e.g., `v0.1.0-alpha.4`)
2. The `npm-publish-with-bun.yml` workflow triggers automatically
3. The package is built and published to NPM

### Manual Trigger
1. Go to the "Actions" tab of your GitHub repository
2. Select the "NPM Publish with Bun (Monorepo)" workflow
3. Click "Run workflow"
4. Specify the package path (default: `packages/uieh`)

## 🛠️ Local Publishing

### Prerequisites
- Bun installed
- NPM token configured (`NPM_TOKEN` in GitHub secrets or local `.npmrc`)

### Publishing Script
```bash
# Publishing with patch version
./scripts/publish.sh packages/uieh patch

# Publishing with minor version
./scripts/publish.sh packages/uieh minor

# Test in dry-run mode
./scripts/publish.sh packages/uieh patch --dry-run
```

### Manual Commands
```bash
# Go to the package
cd packages/uieh

# Clean and build
bun run clean
bun run build

# Update version
bun version patch  # or minor, major

# Publish
bun publish --access public --no-git-checks
```

## 📦 Available Scripts

### In the monorepo (`bun-test/package.json`)
- `bun run dev` - Starts the development server
- `bun run build` - Builds the uieh package
- `bun run build:all` - Builds all packages
- `bun run publish:uieh` - Publishes the uieh package
- `bun run version:patch` - Increments the patch version
- `bun run version:minor` - Increments the minor version
- `bun run version:major` - Increments the major version

### In the package (`packages/uieh/package.json`)
- `bun run clean` - Removes the dist folder
- `bun run build` - Builds the package
- `bun run prepublishOnly` - Automatic script before publishing
- `bun run publish:public` - Publishes with public access
- `bun run publish:beta` - Publishes with beta tag

## 🔧 Configuration

### Bun Configuration (`bunfig.toml`)
- Cache enabled for faster installations
- Exact versions for reproducible builds
- NPM scopes configuration

### GitHub Actions
- Uses Bun for installation and building
- Automatic version verification
- Publishing with public access
- Support for workflow dispatch for manual publishing

## 🐛 Troubleshooting

### Version Error
Make sure the version in `package.json` matches the release tag.

### Build Error
Check that all build files are present in the `dist` folder.

### Publishing Error
Verify that the NPM token is correctly configured.

## 📝 Important Notes

- The package is published with public access
- Git checks are disabled for CI
- The `prepublishOnly` script automatically cleans and rebuilds
- Alpha/beta versions can be published with specific tags
