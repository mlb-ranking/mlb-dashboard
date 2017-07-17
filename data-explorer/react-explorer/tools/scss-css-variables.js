import fs from 'fs';
import readline from 'readline';
import log from './log';

export default function(filename = '/home/josh/projects/mlb-data-api/data-explorer/react-explorer/tools/vars') {
  // console.log(process.argv);

  const rd = readline.createInterface({
    input: fs.createReadStream(filename),
    console: false,
  });

  rd.on('line', function(line) {
    // const regex = new RegExp('/[ ]*([\/]{2})?[ ]*(.*?):(.*?);/is');
    const regex = new RegExp('[ ]*([\/]{2})?[ ]*(.*?):(.*?);');
    const matches = line.match(regex);
    // log.debug('matches %O', {line, matches});

    if(matches) {
      const postcss = `--${matches[2].replace('$', '')}: ${matches[3].replace(' ', '')};`;
      console.log(postcss);
    }
  });

  return Promise.resolve();
}
