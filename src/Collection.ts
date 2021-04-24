import {Note} from './note';
import * as chalk from 'chalk';

/**
 * @brief Collection class
 */
export class Collection {
  /**
   * 
   * @brief Collection constructor
   * @param userName User name
   * @param notecollection Note collection
   */
  constructor(private userName: string, private notecollection: Note[]) {}

  /**
   * @brief Look for a note with the same title passed as a parameter, if found, it returns true
   * @param title Title of the note
   */
  findNote(title: string): boolean {
    for(let i = 0; i < this.notecollection.length; i++){
      if(this.notecollection[i].getTitle() === title){
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
    if (!this.findNote(newNote.getTitle())) {
      this.notecollection.push(newNote);
      console.log(chalk.green('Nota añadida a la colección'));
    } 
    else {
      console.log(chalk.red('Existe una nota con el mismo título'));
    }
  }

  /**
   * 
   * @brief Modify a note of the collection
   * @param title Title of the note
   * @param newText New text to change
   */
  modifyNote(title: string, newText: string) {
    for(let i = 0; i < this.notecollection.length; i++) {
      if(this.notecollection[i].getTitle() === title) {
        this.notecollection[i].change(newText);
        console.log(chalk.green('Nota modificada'));
      }
    } 
    console.log(chalk.red('No existe una nota con este título'));
  }

  /**
   * 
   * @brief Remove note of the collection
   * @param title Title of the note to remove
   */
  removeNote(title: string) {
    for(let i = 0; i < this.notecollection.length; i++) {
      if(this.notecollection[i].getTitle() === title) {
        this.notecollection.splice(i, 1);
        console.log(chalk.green('Nota eliminada'));
      } 
    }
    console.log(chalk.red('No existe una nota con este título'));
  }

  /**
   * @brief List all titles of the note colecction
   */
  titles() {
    this.notecollection.forEach((note) => {
      switch (note.getColour()) {
        case 'red':
          console.log(chalk.red(note.getTitle()));
          break;
        case 'green':
          console.log(chalk.green(note.getTitle()));
          break;
        case 'blue':
          console.log(chalk.blue(note.getTitle()));
          break;
        case 'yellow':
          console.log(chalk.yellow(note.getTitle()));
          break;
        default:
          console.log(note.getTitle());
      }
    });
  }

  /**
   * @brief Read a note of the collection
   */
  readNote(title: string) {
    for(let i = 0; i < this.notecollection.length; i++){
      if(this.notecollection[i].getTitle() === title) {
        switch (this.notecollection[i].getColour()) {
          case 'red':
            console.log(chalk.red(this.notecollection[i].getNote()));
            break;
          case 'green':
            console.log(chalk.green(this.notecollection[i].getNote()));
            break;
          case 'blue':
            console.log(chalk.blue(this.notecollection[i].getNote()));
            break;
          case 'yellow':
            console.log(chalk.yellow(this.notecollection[i].getNote()));
            break;
        default:
        console.log(this.notecollection[i].getNote());
      }
    } 
  }
  console.log(chalk.red('No existe una nota con este título'));
  }
}