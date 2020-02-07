const { spawn } = require('child_process');
class Console {

    constructor() {

    }

    run(command, onData = (d) => console.log(d), onDone = (a) => {}, stackData = true) {
        const child = spawn(command, {shell: true});

    // use child.stdout.setEncoding('utf8'); if you want text chunks
    child.stdout.setEncoding('utf8');
    let totalOut = '';
    child.stdout.on('data', (chunk) => {
      // data from standard output is here as buffers
    
      totalOut += chunk + `<br />`
      if(stackData)
      onData(totalOut);
      else
      onDat(chunk);
      
    });

// since these are streams, you can pipe them elsewhere
//child.stderr.pipe(dest);

child.on('close', (code) => {
  onDone(code);
});
    }

}

module.exports = Console;