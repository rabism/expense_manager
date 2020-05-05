import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("expensemanager.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS category (id INTEGER PRIMARY KEY NOT NULL, category_name TEXT NOT NULL, icon_android TEXT NOT NULL, icon_ios TEXT NOT NULL, icon_type TEXT NOT NULL, parent_id INTEGER NOT NULL);",
        [],
        () => {
          // resolve();
          console.log(`successfully created category table`);
          //resolve();
        },
        (_, err) => {
          // console.log(`error occured during category table creation`);
          reject(err);
        }
      );

      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS apptransaction (id INTEGER PRIMARY KEY NOT NULL,transaction_type TEXT NOT NULL,amount REAL NOT NULL,category_id TEXT NOT NULL,category_icon TEXT NOT NULL,category_name TEXT NOT NULL,transaction_date TEXT NOT NULL,description TEXT NOT NULL, transaction_day INTEGER NOT NULL, transaction_week INTEGER NOT NULL,transaction_month INTEGER NOT NULL,transaction_quater TEXT NOT NULL,transaction_year INTEGER NOT NULL,transaction_fiscal_year TEXT NOT NULL);",
        [],
        () => {
          // resolve();
          console.log(`successfully created transaction table`);
          // resolve();
        },
        (_, err) => {
          // console.log(`error occured during transaction table creation`);
          reject(err);
        }
      );

      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS transactiontag (id INTEGER PRIMARY KEY NOT NULL, transaction_id INTEGER NOT NULL, tag TEXT NOT NULL);",
        [],
        () => {
          console.log(`successfully created transaction tag table`);
          resolve();
        },
        (_, err) => {
          //reject(err);
          // console.log(`error occured during transaction tag table creation`);
          reject(err);
        }
      );
    });
  });
  return promise;
};
