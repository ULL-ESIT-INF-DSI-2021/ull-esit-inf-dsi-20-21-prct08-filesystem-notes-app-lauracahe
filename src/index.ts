import * as fs from 'fs';
import * as chalk from 'chalk';
import * as yargs from 'yargs';
import {Note} from './note';
import {Collection} from './collection';

/**
 * @brief Command that allow us to add a note from a user into his note collection
 */
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    user: {
      describe: 'User name',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
    colour: {
      describe: 'Note colour',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv: { user: string; title: string; body: string; colour: string; }) {
    if(typeof argv.user === 'string'){
      if(typeof argv.title === 'string'){
        if(typeof argv.body === 'string'){
          if(typeof argv.colour === 'string'){
            const filename = argv.title.toLowerCase().replace(/[^A-Za-z0-9]+(.)/g, (LowLine, chr) => chr.toUpperCase());
            const path: string = './users/' + argv.user;
            const notePath: string = path + '/' + filename + '.json';
            const newNote = new Note(argv.title, argv.body, argv.colour);
            const aux = new Collection(argv.user);
            if (fs.existsSync(path)) {
              if (!fs.existsSync(notePath)) {
                aux.addNote(newNote);
                console.log(chalk.green('New note added!'));
              }
            } else {
              fs.mkdirSync(path);
              aux.addNote(newNote);
              console.log(chalk.green('New note added!')); 
            } 
          }
        }
      } 
    }  
  },
});

/**
 * @brief Command that allow us to list all titles of a collection
 */
yargs.command({
  command: 'list',
  describe: 'List all titles of the note colecction of a particular user',
  builder: {
    user: {
      describe: 'Username',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string') {
      const ls = spawn('ls');
      let output: string = '';
      ls.stdout.on('data', (data: any) => output += data);
      const split = output.split(/\s+/);
      const i = split.findIndex((temp) => temp === argv.user);
      const aux = new Collection(argv.user);
      if (i == -1) {
        console.log(chalk.red('El usuario no existe'));
      } else {
        aux.titles();
      }
    }
  },
});

/**
 * @brief Command that allow us to read a specified note
 */
yargs.command({
  command: 'read',
  describe: 'Read a particular note of the user specified',
  builder: {
    user: {
      describe: 'Username',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.title === 'string' && typeof argv.user === 'string') {
      const ls = spawn('ls');
      let output = '';
      ls.stdout.on('data', (data: any) => output += data);
      const split = output.split(/\s+/);
      const i = split.findIndex((temp) => temp === argv.user);
      const aux = new Collection(argv.user);
      if (i == -1) {
        console.log(chalk.red('El usuario no existe'));
      } else {
        aux.readNote(argv.title);
      }
    }
  },
});

/**
 * @brief Command that allow us to remove a note
 */
yargs.command({
  command: 'remove',
  describe: 'Removes a note of the user',
  builder: {
    user: {
      describe: 'Username',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.title === 'string' && typeof argv.user === 'string') {
      const ls = spawn('ls');
      let output = '';
      ls.stdout.on('data', (data: any) => output += data);
      const split = output.split(/\s+/);
      const i = split.findIndex((temp) => temp === argv.user);
      const aux = new Collection(argv.user);
      if (i == -1) {
        console.log(chalk.red('El usuario no existe'));
      } else {
        aux.removeNote(argv.title);
      }
    }
  },
});

/**
 * @brief Command that allow us to edit the body of a note
 */
yargs.command({
  command: 'edit',
  describe: 'Edit a note',
  builder: {
    user: {
      describe: 'Note user',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string') {
      if (typeof argv.title === 'string') {
        if (typeof argv.body === 'string') {
          const path: string = './users/' + argv.user;
          const title = argv.title.toLowerCase().replace(/[^A-Za-z0-9]+(.)/g, (LowLine, chr) => chr.toUpperCase());
          const notePath: string = path + '/' + title + '.json';

          if (fs.existsSync(notePath)) {
            const data = JSON.parse(fs.readFileSync(notePath, 'utf8'));
            fs.writeFileSync(notePath, new Note(argv.user, argv.title, argv.body, data.color).write());
            console.log(chalk.green('Note edited!'));
          } else {
            console.log(chalk.red('Note not found'));
          }
        }
      }
    }
  },
});

/**
 * @brief Pase function that allow to works correctly from command line
 */
yargs.parse();