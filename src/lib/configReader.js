import fs from 'fs';
import path from 'path';

export async function getSiteConfig() {
  const filePath = path.join(process.cwd(), 'data', 'siteConfig.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export async function getProjects() {
  const filePath = path.join(process.cwd(), 'data', 'projects.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export async function getJourney() {
  const filePath = path.join(process.cwd(), 'data', 'experiance.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}




