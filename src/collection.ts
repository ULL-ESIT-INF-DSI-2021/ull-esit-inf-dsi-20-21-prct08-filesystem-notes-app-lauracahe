import {Note} from './note';
import {spawn} from 'child_process';
import {readFile, writeFile} from 'fs';

const chalk = require('chalk');

/**
 * @brief Collection class
 */
export class Collection {
  /**
   * 
   * @brief Collection constructor
   * @param userName User name
   */
  constructor(private userName: string) {}

  /**
   * @brief Look for a note with the same title passed as a parameter, if found, it returns true
   * @param title Title of the note
   * @return boolean
   */
  findNote(title: string): boolean {
    let output: string = '';
    let ls = spawn('ls', [`./${this.userName}`]);
    ls.stdout.on('data', (data) => output += data);
    let split = output.split(/\s+/);
    for(let i = 0; i < split.length; i++){
      if(split[i] == `${title}.json`){
        return true;
      }
    }
    return false;
  }

  /**
   * 
   * @brief Add a new note to the collection
   * @param newNote New note
   */
  addNote(newNote: Note) {
    if(!this.findNote(newNote.getTitle())) {
      writeFile(`./${this.userName}/${newNote.getTitle()}.json`, `{\n${newNote.getNote()}\n}`, (err) => {
            if(!err) {
              console.log(chalk.green('Nota añadida'));
            } 
          });
    } else {
      console.log(chalk.red('Existe una nota con el mismo título'));
    }
  }

  /**
   * 
   * @brief Modify a note of the collection
   * @param title Title of the note
   * @param newText New text to change
   * @param colour Colour of the note
   */
  modifyNote(title: string, newText: string, colour: string) {
    if(this.findNote(title)) {
      writeFile(`./${this.userName}/${title}.json`, `{\ntitle: ${title}\nbody: ${newText}\ncolour: ` + `${colour}\n}`, (err) => {
            if(!err) {
              console.log(chalk.green('Nota modificada'));
            }
          });
    } else {
      console.log(chalk.red('No existe una nota con este título'));
    }
  }

  /**
   * 
   * @brief Remove note of the collection
   * @param title Title of the note to remove
   */
  removeNote(title: string) {
    if(this.findNote(title)) {
      spawn('rm', [`./${this.userName}/${title}.json`]);
      console.log(chalk.green('Se ha eliminado la nota'));
    } else {
    console.log(chalk.red('No existe una nota con este título'));
    }
  }

  /**
   * @brief List all titles of the note colecction
   */
  titles() {
    let output: string = '';
    let ls = spawn('ls', [`./${this.userName}`]);
    ls.stdout.on('data', (data) => output += data);
    let split = output.split(/\s+/);
    for(let i = 0; i < split.length; i++) {
      readFile(`./${this.userName}/${split[i]}`, (err, data) => {
        if(!err) {
          const d = JSON.parse(data.toString());
          switch (d.colour) {
            case 'red':
              console.log(chalk.red(d.title));
              break;
            case 'green':
              console.log(chalk.green(d.title));
              break;
            case 'blue':
              console.log(chalk.blue(d.title));
              break;
            case 'yellow':
              console.log(chalk.yellow(d.title));
              break;
            default:
              console.log(d.title);
          }
        }
      });
    }
    console.log(chalk.red('Error de lectura del fichero'));
  }

  /**
   * @brief Read a note of the collection
   */
  readNote(title: string) {
    if(this.findNote(title)) {
      readFile(`./${this.userName}/${title}.json`, (err, data) => {
        if(!err) {
          const info = JSON.parse(data.toString());
          switch (info.colour) {
            case 'red':
              console.log(chalk.red(`\n${info.title}\n${info.body}\n`));
              break;
            case 'green':
              console.log(chalk.green(`\n${info.title}\n${info.body}\n`));
              break;
            case 'blue':
              console.log(chalk.blue(`\n${info.title}\n${info.body}\n`));
              break;
            case 'yellow':
              console.log(chalk.yellow(`\n${info.title}\n${info.body}\n`));
              break;
            default:
              console.log(`\n${info.title}\n${info.body}\n`);
          }
        }
      });
    } else {
      console.log(chalk.red('No existe una nota con este título'));
    }
  }

  /**
   * @brief Get user name
   * @return string with de user name
   */
  getUserName(): string {
    return this.userName;
  }
}