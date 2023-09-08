// Create an algorithm that generates the following random ID pattern: XXXX-AAAA-BBBB-CCCC
// Where XXXX, AAAA, BBBB and CCCC patterns are random alphanumeric
// The default is a string: "XXXX-AAAA-BBBB-CCCC"
// The result must be stored in a variable. For example:
// $id = generarId()
// id is ~ abc1-bb12-234a-bcc2

const generateId = () => {
  const random = () => Math.random().toString(36).substr(2, 4);
  return `${random()}-${random()}-${random()}-${random()}`;
}

const id = generateId();
console.log(id);