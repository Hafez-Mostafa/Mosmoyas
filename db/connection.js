import { Sequelize } from 'sequelize';

// Correctly instantiate Sequelize with replication and pool options
export const sequelize = new Sequelize('b7okbldqbddvps6epnei', 'uuvduuop0rbwddmb', 'yIU2TKbXDhyn9Oq8ZB38', {
    dialect: 'mysql',
    port: 3306,
    replication: {
      read: [
        {
          host: 'b7okbldqbddvps6epnei-mysql.services.clever-cloud.com',
          username: 'uuvduuop0rbwddmb',
          password: 'yIU2TKbXDhyn9Oq8ZB38',
        },
      ],
      write: {
        host: 'b7okbldqbddvps6epnei-mysql.services.clever-cloud.com',
        username: 'uuvduuop0rbwddmb',
        password: 'yIU2TKbXDhyn9Oq8ZB38',
      },
    },
    pool: {
      max: 20,
      idle: 30000,
    },
});

const connectionDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await sequelize.sync({ alter: false, force: false });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

export default connectionDB;

// import { Sequelize } from 'sequelize';

// // export const sequelize = new Sequelize('b7okbldqbddvps6epnei', 'uuvduuop0rbwddmb', 'yIU2TKbXDhyn9Oq8ZB38', {
// //     port: '3306',
// //     host: 'b7okbldqbddvps6epnei-mysql.services.clever-cloud.com',
// //     dialect: "mysql"
// // });
// export const sequelize = new Sequelize('b7okbldqbddvps6epnei', null, null, {
//     dialect: 'mysql',
//     port: 3306,
//     replication: {
//       read: [
//         {
//           host: 'b7okbldqbddvps6epnei-mysql.services.clever-cloud.com',
//           username: 'uuvduuop0rbwddmb',
//           password: 'yIU2TKbXDhyn9Oq8ZB38',
//         },
       
//       ],
//       write: {
//         host: 'b7okbldqbddvps6epnei-mysql.services.clever-cloud.com',
//         username: 'uuvduuop0rbwddmb',
//         password: 'yIU2TKbXDhyn9Oq8ZB38',
//       },
//     },
//     pool: {
//       // If you want to override the options used for the read/write pool you can do so here
//       max: 20,
//       idle: 30000,
//     },
//   });

// const connectionDB = async () => {
//     return await sequelize.sync({ alter: false, force: false }).then((data) => {
//         console.log('Connection has been established successfully.');
//     }).catch((error) => {
//         console.error('Unable to connect to the database:', error);
//     });
// }

// export default connectionDB



// // try {
// //     await sequelize.authenticate();
// //     console.log('Connection has been established successfully.');
// // } catch (error) {
// //     console.error('Unable to connect to the database:', error);
// // }

// // export default sequelize