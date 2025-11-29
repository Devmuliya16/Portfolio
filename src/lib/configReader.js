import fs from 'fs';
import path from 'path';

export async function getSiteConfig() {
  const filePath = path.join(process.cwd(), 'data', 'siteConfig.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export async function getProjects(locale = 'en') {
  // Try locale-specific file first, fallback to default
  const localizedPath = path.join(process.cwd(), 'data', `projects_${locale}.json`);
  const defaultPath = path.join(process.cwd(), 'data', 'projects.json');
  
  const filePath = fs.existsSync(localizedPath) ? localizedPath : defaultPath;
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export async function getJourney(locale = 'en') {
  // Try locale-specific file first, fallback to default
  const localizedPath = path.join(process.cwd(), 'data', `experiance_${locale}.json`);
  const defaultPath = path.join(process.cwd(), 'data', 'experiance.json');
  
  const filePath = fs.existsSync(localizedPath) ? localizedPath : defaultPath;
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}
