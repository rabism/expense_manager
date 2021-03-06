import * as SQLite from "expo-sqlite";
import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";
const dbName = "expensemanager_v11.db";
const getDb = () => SQLite.openDatabase(dbName);
export const init = async (isreplace) => {
  const sqliteDirectory = `${FileSystem.documentDirectory}/SQLite`;
  const dbfilepath = `${sqliteDirectory}/${dbName}`;
  const path = await FileSystem.getInfoAsync(dbfilepath);
  if (!path.exists || isreplace) {
    console.log("in condition");
    const { exists, isDirectory } = await FileSystem.getInfoAsync(
      sqliteDirectory
    );
    if (!exists) {
      await FileSystem.makeDirectoryAsync(sqliteDirectory);
    } else if (!isDirectory) {
      throw new Error("SQLite dir is not a directory");
    }
    const pathToDownloadTo = `${sqliteDirectory}/${dbName}`;
    const uriToDownload = Asset.fromModule(
      require("../assets/db/expensemanager.db")
    ).uri;
    //const returnObj = await FileSystem.downloadAsync(
    // uriToDownload,
    // pathToDownloadTo
    // );
    ///console.info(returnObj);
    await FileSystem.downloadAsync(uriToDownload, pathToDownloadTo);
  }
};

export const fetchCategory = () => {
  const db = getDb();
  console.log(db);
  try {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT * FROM category",
          [],
          (_, result) => {
            resolve(result);
          },
          (_, err) => {
            reject(err);
          }
        );
      });
    });
    return promise;
  } catch (err) {
    // console.log(err);
    throw err;
  } finally {
    // db._db.close();
  }
};

export const addCategory = (
  categoryName,
  iconAndroid,
  iconIos,
  iconType,
  parentId
) => {
  const db = getDb();
  try {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "INSERT INTO category (category_name, icon_android, icon_ios, icon_type, parent_id) VALUES (?, ?, ?, ?, ?);",
          [categoryName, iconAndroid, iconIos, iconType, parentId],
          (_, result) => {
            resolve(result);
          },
          (_, err) => {
            reject(err);
          }
        );
      });
    });
    return promise;
  } catch (err) {
    //console.log(err);
    throw err;
  } finally {
    //db._db.close();
    //db.
  }
};

export const addTransaction = (
  transactionType,
  categoryId,
  categoryIcon,
  categoryName,
  categoryIconType,
  transactionDate,
  description,
  transactionDay,
  transactionWeek,
  transactionMonth,
  transactionQuater,
  transactionYear,
  transactionFiscalYear,
  transactionDayOfWeek,
  amountCredit,
  amountDebit
) => {
  const db = getDb();
  try {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          `INSERT INTO app_transaction (
            transaction_type,
            category_id,
            category_icon,
            category_name,
            category_icon_type,
            transaction_date,
            description,
            transaction_day,
            transaction_week,
            transaction_month,
            transaction_quater,
            transaction_year,
            transaction_fiscal_year,
            transaction_day_of_week,
            amount_credit,
            amount_debit
            ) VALUES (?, ?, ?, ?, ?,?,?,?,?,?,?,?,?,?,?,?);`,
          [
            transactionType,
            categoryId,
            categoryIcon,
            categoryName,
            categoryIconType,
            transactionDate,
            description,
            transactionDay,
            transactionWeek,
            transactionMonth,
            transactionQuater,
            transactionYear,
            transactionFiscalYear,
            transactionDayOfWeek,
            amountCredit,
            amountDebit,
          ],
          (_, result) => {
            resolve(result);
          },
          (_, err) => {
            reject(err);
          }
        );
      });
    });
    return promise;
  } catch (err) {
    //console.log(err);
    throw err;
  } finally {
    //db._db.close();
    //db.
  }
};

export const fetchTransaction = () => {
  const db = getDb();
  console.log(db);
  try {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT * FROM app_transaction",
          [],
          (_, result) => {
            resolve(result);
          },
          (_, err) => {
            reject(err);
          }
        );
      });
    });
    return promise;
  } catch (err) {
    // console.log(err);
    throw err;
  } finally {
    // db._db.close();
  }
};

/*
export const init = () => {
  // downloadDatabase();

  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS category (id INTEGER PRIMARY KEY NOT NULL, category_name TEXT NOT NULL, icon_android TEXT NOT NULL, icon_ios TEXT NOT NULL, icon_type TEXT NOT NULL, parent_id INTEGER NOT NULL,initial_data_id INTEGER NOT NULL);",
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

export const setInitialCategory = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO category (category_name, icon_android, icon_ios, icon_type, parent_id,initial_data_id) VALUES ("Education", "md-book", "ios-book", "ionicon", 0,1),("Life Style", "md-cart", "ios-cart", "ionicon", 0,2),("Medical", "md-medkit", "ios-medkit", "ionicon", 0,3),("Home", "md-home", "ios-home", "ionicon", 0,4),("Salary", "md-gift", "ios-gift", "ionicon", 0,5);`,
        [],
        () => {
          // resolve();
          console.log(`data created successfully`);
          //resolve();
        },
        (_, err) => {
          // console.log(`error occured during category table creation`);
          reject(err);
        }
      );
    });
  });
};
*/
