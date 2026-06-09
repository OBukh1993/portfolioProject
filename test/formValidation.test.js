const assert = require('node:assert/strict');
const { formValidation } = require('../contacts.js');

describe('formValidation', () => {
  it('returns false for empty name', () => {
    assert.strictEqual(formValidation.validateUserName(''), false);
  });

  //add test case that name and surname do not contain spaces
  it('returns false for name with spaces', () => {
    assert.strictEqual(formValidation.validateUserName('Oleg Bukhtoiarov'), false);
  });

  it('returns true for valid name', () => {
    assert.strictEqual(formValidation.validateUserName('Oleg'), true);
  });

  it('rejects non-latin name characters', () => {
    assert.strictEqual(formValidation.validateUserName('Олег'), false);
  });

  it('rejects digits in name', () => {
    assert.strictEqual(formValidation.validateUserName('Oleg123'), false);
  });

  it('rejects special symbols in name', () => {
    assert.strictEqual(formValidation.validateUserName('Oleg!'), false);
  });

  it('returns false for empty surname', () => {
    assert.strictEqual(formValidation.validateUserSurname(''), false);
  });

  it('returns true for valid surname', () => {
    assert.strictEqual(formValidation.validateUserSurname('Bukhtoiarov'), true);
  });

  it('rejects non-latin surname characters', () => {
    assert.strictEqual(formValidation.validateUserSurname('Бухтояров'), false);
  });

  it('rejects digits in surname', () => {
    assert.strictEqual(formValidation.validateUserSurname('Bukhto123'), false);
  });

  it('rejects special symbols in surname', () => {
    assert.strictEqual(formValidation.validateUserSurname('Bukhtoiarov!'), false);
  });

  it('validates correct email', () => {
    assert.strictEqual(formValidation.validateUserEmail('oleg@example.com'), true);
  });

  it('rejects invalid email', () => {
    assert.strictEqual(formValidation.validateUserEmail('oleg@@example'), false);
  });

  it('validates correct phone', () => {
    assert.strictEqual(formValidation.validateUserPhone('+491234567890'), true);
  });

  it('rejects invalid phone', () => {
    assert.strictEqual(formValidation.validateUserPhone('abc123'), false);
  });
});
