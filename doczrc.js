
const projectRoot = __dirname.replace('/.docz', '');

const { menuItems } = require(`${projectRoot}/config/menu.json`);

export default {
  title: 'Cartlog Manual',
  menu: menuItems
}
