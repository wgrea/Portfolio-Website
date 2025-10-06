// listFiles.js
const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  icons: {
    directory: '📂',
    file: '📄',
    symlink: '🔗'
  },
  colors: {
    directory: '\x1b[34m',  // Blue
    file: '\x1b[90m',       // Gray
    symlink: '\x1b[36m',    // Cyan
    reset: '\x1b[0m'        // Reset colors
  },
  indent: {
    branch: '│   ',
    lastBranch: '    ',
    tee: '├── ',
    corner: '└── '
  }
};

// Enhanced exclusion list with wildcard support
const DEFAULT_EXCLUDE = [
  // Build/output directories
  'node_modules', 'build', 'dist', '.next', '.vercel', '.netlify', 
  
  // Version control
  '.git', '.svn', '.hg',
  
  // Environment/config files
  '.env*', '.npmrc', '.yarnrc', '.prettierrc', '.eslintrc*',
  
  // IDE/Editor files
  '.vscode', '.idea', '.vs', '*.suo', '*.ntvs*', '*.njsproj', '*.sln',
  
  // OS files
  '.DS_Store', 'Thumbs.db', 'desktop.ini',
  
  // Logs and cache
  'npm-debug.log*', 'yarn-debug.log*', 'yarn-error.log*',
  '.eslintcache', '.cache', '.parcel-cache',
  
  // Lockfiles
  'package-lock.json', 'yarn.lock', 'pnpm-lock.yaml',
  
  // Coverage and tests
  'coverage', '.nyc_output', '*.test.*', '*.spec.*', '__tests__', '__mocks__',
  
  // CSS and style files (since you'll use Tailwind)
  '*.css', '*.scss', '*.sass', '*.less', '*.styl',
  
  // Build artifacts
  '*.map', '*.d.ts', '*.log', '*.tmp', '*.temp',
  
  // Runtime data
  'pids', '*.pid', '*.seed', '*.pid.lock',

  //Manually Added
  'README.md', 'listFiles.js', 'public', 'out'
];

// Helper function to check if item should be excluded
function shouldExclude(item, excludePatterns) {
  return excludePatterns.some(pattern => {
    if (pattern.includes('*')) {
      // Convert wildcard pattern to regex
      const regexPattern = '^' + pattern.replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexPattern);
      return regex.test(item);
    }
    return item === pattern;
  });
}

function listFiles(dir, exclude = DEFAULT_EXCLUDE, depth = 0, isLast = false) {
  try {
    const items = fs.readdirSync(dir).sort();
    
    const filteredItems = items.filter(item => !shouldExclude(item, exclude));

    filteredItems.forEach((item, index) => {
      const fullPath = path.join(dir, item);
      let stats;
      
      try {
        stats = fs.lstatSync(fullPath);
      } catch (error) {
        console.log(`${'    '.repeat(depth)}${CONFIG.indent.tee}${CONFIG.colors.file}🚫 ${item} (Permission Denied)${CONFIG.colors.reset}`);
        return;
      }
      
      const isLastItem = index === filteredItems.length - 1;
      
      // Indentation
      let indent = '';
      if (depth > 0) {
        indent = CONFIG.indent.branch.repeat(depth - 1) + 
                (isLast ? CONFIG.indent.lastBranch : CONFIG.indent.branch);
      }

      // Prefix
      const prefix = isLastItem ? CONFIG.indent.corner : CONFIG.indent.tee;

      // Color and icon based on file type
      let displayName;
      if (stats.isDirectory()) {
        displayName = `${CONFIG.colors.directory}${CONFIG.icons.directory} ${item}/${CONFIG.colors.reset}`;
      } else if (stats.isSymbolicLink()) {
        displayName = `${CONFIG.colors.symlink}${CONFIG.icons.symlink} ${item}${CONFIG.colors.reset}`;
      } else {
        // Color code by file extension
        const ext = path.extname(item).toLowerCase();
        let fileColor = CONFIG.colors.file;
        
        if (['.ts', '.tsx', '.js', '.jsx'].includes(ext)) {
          fileColor = '\x1b[33m'; // Yellow for code files
        } else if (['.json', '.md', '.txt'].includes(ext)) {
          fileColor = '\x1b[35m'; // Magenta for config/text files
        } else if (['.png', '.jpg', '.jpeg', '.gif', '.svg'].includes(ext)) {
          fileColor = '\x1b[36m'; // Cyan for images
        }
        
        displayName = `${fileColor}${CONFIG.icons.file} ${item}${CONFIG.colors.reset}`;
      }

      console.log(indent + prefix + displayName);

      // Recurse for directories (with increased depth limit)
      if (stats.isDirectory() && depth < 10) { // Prevent infinite recursion
        listFiles(fullPath, exclude, depth + 1, isLastItem);
      }
    });
  } catch (error) {
    console.error(`${'    '.repeat(depth)}${CONFIG.indent.tee}${CONFIG.colors.file}🚫 Error reading: ${dir}${CONFIG.colors.reset}`);
    console.error(`${'    '.repeat(depth)}${CONFIG.indent.lastBranch}  ${error.message}`);
  }
}

// Parse command line arguments
function parseArgs() {
  const args = process.argv.slice(2);
  let targetDir = '.';
  let exclude = DEFAULT_EXCLUDE;

  for (const arg of args) {
    if (arg.startsWith('--exclude=')) {
      const newExcludes = arg.split('=')[1].split(',');
      exclude = [...DEFAULT_EXCLUDE, ...newExcludes];
    } else if (arg.startsWith('--include=')) {
      const includes = arg.split('=')[1].split(',');
      exclude = DEFAULT_EXCLUDE.filter(pattern => !includes.includes(pattern));
    } else if (!arg.startsWith('--')) {
      targetDir = arg;
    } else if (arg === '--help' || arg === '-h') {
      console.log(`
Usage: node listFiles.js [directory] [options]

Options:
  --exclude=pattern1,pattern2  Add additional exclusions
  --include=pattern1,pattern2  Remove patterns from default exclusions
  --help, -h                   Show this help message

Examples:
  node listFiles.js                        # Current directory
  node listFiles.js src                    # Specific directory
  node listFiles.js --exclude=*.test.ts    # Exclude test files
  node listFiles.js --include=*.css        # Include CSS files
      `);
      process.exit(0);
    }
  }

  return { targetDir, exclude };
}

// Main execution
const { targetDir, exclude } = parseArgs();
console.log(`\n${path.resolve(targetDir)}\n`);
listFiles(targetDir, exclude);
console.log(''); // Empty line at the end