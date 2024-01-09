import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('iluminacao', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres',
});

export default sequelize;
