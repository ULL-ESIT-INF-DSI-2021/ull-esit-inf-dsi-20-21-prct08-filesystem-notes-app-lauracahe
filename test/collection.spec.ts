import 'mocha';
import {expect} from 'chai';

import {Note} from '../src/note'; 
import {Collection} from '../src/Collection'

describe('Test block class Collection', () => {
  const note1 = new Note('Primera nota', 'Soy la primera', 'blue');
  const note2 = new Note('Segunda nota', 'Soy la segunda', 'yellow');
  const note3 = new Note('Tercera nota', 'Soy la tercera', 'green');
  const note4 = new Note('Cuarta nota', 'Soy la cuarta', 'red');

  let collection: Note[];
  collection.push(note1);
  collection.push(note2);
  collection.push(note3);

  const myObject = new Collection('Laura', collection);

  it('findNote in the collection', () => {
    expect(myObject.findNote(note1.getTitle()));
  });

  it('addNote to the collection', () => {
    expect(myObject.addNote(note4));
  });

  it('modifyNote of the collection', () => {
    expect(myObject.modifyNote(note4.getTitle(), 'He sido modificada'));
  });

  it('removeNote of the collection', () => {
    expect(myObject.removeNote(note2.getTitle()));
  });
});