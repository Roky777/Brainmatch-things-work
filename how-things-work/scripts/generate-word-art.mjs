import {mkdir,writeFile} from 'node:fs/promises';
const base=new URL('../',import.meta.url);
await mkdir(new URL('assets/cards/',base),{recursive:true});
for(const word of ['Floats','Sinks','Rolls','Spins']){
  await writeFile(new URL(`assets/cards/text-${word.toLowerCase()}.svg`,base),`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240"><text x="120" y="140" text-anchor="middle" fill="#203975" font-family="Arial,sans-serif" font-size="${word.length===6?53:60}" font-weight="900">${word}</text></svg>`);
}
