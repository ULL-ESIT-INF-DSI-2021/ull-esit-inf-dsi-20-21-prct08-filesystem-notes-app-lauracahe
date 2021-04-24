import * as chalk from 'chalk';

/**
 * @brief Note class
 */
export class Note {
  /**
   * 
   * @brief Note constructor
   * @param title title of the note
   * @param body body of the note
   * @param colour colour
   */
  constructor(private title: string, private body: string, private colour: ('red' | 'green' | 'blue' | 'yellow')) {}

  /**
   * @brief Print note according to the color
   */
  print() {
    switch (this.colour) {
      case 'red':
        console.log(chalk.red(this.getNote()));
        break;
      case 'green':
        console.log(chalk.green(this.getNote()));
        break;
      case 'blue':
        console.log(chalk.blue(this.getNote()));
        break;
      case 'yellow':
        console.log(chalk.yellow(this.getNote()));
        break;
      default:
        console.log(chalk.red('No se puede imprimir la nota'));
    }
  }

  /**
   * @brief Get title of the note
   */
  getTitle(): string {
    return this.title;
  }

  /**
   * @brief Get body of the note
   */
  getBody(): string {
    return this.body;
  }

  /**
   * @brief Get colour of the note
   */
  getColour(): string {
    return this.colour;
  }

  /**
   * @brief Get note
   */
  getNote(): string {
    return `${this.title}\n${this.body}\n${this.colour}`;
  }

  /**
   * 
   * @brief Modidy the note
   * @param newText New text to modify the note
   */
  change(newText: string) {
    this.body = newText;
  }
}