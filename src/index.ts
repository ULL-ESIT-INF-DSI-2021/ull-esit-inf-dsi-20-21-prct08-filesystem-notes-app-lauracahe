import * as yargs from 'yargs';
import {Note} from './note';
import {Collection} from './collection';

const chalk = require('chalk');
const spawn = require('child_process').spawn;

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    user: {
      describe: 'Username',
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
  handler(argv) {
    if(typeof argv.title === 'string' && typeof argv.body === 'string' && typeof argv.colour === 'string'  
    && typeof argv.user === 'string') {
      const newNote = new Note(argv.title, argv.body, argv.colour);
      const ls = spawn('ls');
      let output: string = '';
      ls.stdout.on('data', (data: any) => output += data);
      const split = output.split(/\s+/);
      const i = split.findIndex((temp) => temp === argv.user);
      const aux = new Collection(argv.user);
      if (i === -1) {
        spawn('mkdir', [`${argv.user}`]);
      }
      aux.addNote(newNote);
    }
  },
});

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

yargs.parse();