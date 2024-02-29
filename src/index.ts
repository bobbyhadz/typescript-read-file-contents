import { readFileSync } from 'fs';
import { join } from 'path';

function syncReadFile(filename: string) {
  const result = readFileSync(join(__dirname, filename), 'utf-8');

  // bobby
  // hadz
  // com
  console.log(result);

  return result;
}

syncReadFile('./example.txt');
