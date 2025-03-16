import { createHash } from 'crypto';
const hash = createHash('md5').update(Buffer.from('hello')).digest().toString('hex');
console.log(hash);
