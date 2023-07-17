/* eslint-disable no-unused-vars */
class UseIndexedDB {
  /**
   * @param databaseName
   * @param databaseTableName
   */
  constructor(databaseName, databaseTableName) {
    this.isIndexedDB = true;
    window.myIndexedDB =
      window.indexedDB ||
      window.mozIndexedDB ||
      window.webkitIndexedDB ||
      window.msIndexedDB;

    this.isIndexedDB = Boolean(window.myIndexedDB);
    if (this.isIndexedDB) {
      this.db = null;
      this.version = 1;
      this.databaseName = databaseName;
      this.databaseTableName = databaseTableName;
      this.dbRequest = window.myIndexedDB.open(this.databaseName, 1);

      this.dbRequest.onerror = (event) => {
        console.log("error", event);
      };
      this.dbRequest.onupgradeneeded = (event) => {
        this.db = event.target.result;
        this.store = this.db.createObjectStore(this.databaseTableName, {
          keyPath: "id",
        });
      };
    }
  }

  init() {
    return new Promise((resolve, reject) => {
      this.dbRequest = window.myIndexedDB.open(this.databaseName, this.version);
      this.dbRequest.onsuccess = (event) => {
        const db = event.target.result;
        this.db = db;
        if (db.objectStoreNames.contains(this.databaseTableName)) {
          const transaction = db.transaction(
            [this.databaseTableName],
            "readwrite"
          );
          const objectStore = transaction.objectStore(this.databaseTableName);
          resolve(objectStore);
        } else {
          this.db.createObjectStore(this.databaseTableName, { keyPath: "id" });
        }
      };
      this.dbRequest.onerror = (event) => {
        reject(event);
      };
    });
  }

  select(key) {
    return new Promise((resolve, reject) => {
      this.init().then((objectStore) => {
        const selectObjectStore = objectStore.get(key);
        selectObjectStore.onsuccess = function (event) {
          if (selectObjectStore.result) {
            resolve(selectObjectStore.result);
          } else {
            reject(new Error("查询数据失败"));
          }
        };
        selectObjectStore.onerror = function (event) {
          console.log("查询数据失败");
          reject(event);
        };
      });
    });
  }

  selectAll() {
    return new Promise((resolve, reject) => {
      this.init().then((objectStore) => {
        const results = [];
        const cursorObjectStore = objectStore.openCursor();
        cursorObjectStore.onsuccess = function (event) {
          const cursor = event.target.result;
          if (cursor) {
            results.push(cursor.value);
            cursor.continue();
          } else {
            resolve(results);
          }
        };
        cursorObjectStore.onerror = function () {
          console.log("查询游标失败");
          reject(cursorObjectStore.result);
        };
      });
    });
  }

  insert(options) {
    return new Promise((resolve, reject) => {
      this.init().then((objectStore) => {
        const insertObjectStore = objectStore.add(options);
        insertObjectStore.onsuccess = (event) => {
          resolve(insertObjectStore.result);
        };
        insertObjectStore.onerror = (event) => {
          console.log(
            "插入数据失败",
            this.databaseName,
            this.databaseTableName,
            event,
            options
          );
          reject(insertObjectStore.result);
        };
      });
    });
  }

  update(options) {
    return new Promise((resolve, reject) => {
      this.init().then((objectStore) => {
        const insertObjectStore = objectStore.put(options);
        insertObjectStore.onsuccess = (event) => {
          console.log("更新数据成功");
          resolve(insertObjectStore.result);
        };
        insertObjectStore.onerror = (event) => {
          console.log("更新数据失败");
          reject(insertObjectStore.result);
        };
      });
    });
  }

  delete(key) {
    return new Promise((resolve, reject) => {
      this.init().then((objectStore) => {
        const clearRequest = objectStore.delete(key);
        clearRequest.onsuccess = function () {
          resolve("删除数据成功");
        };
        clearRequest.onerror = function () {
          console.log("删除数据失败");
          reject(clearRequest.result);
        };
      });
    });
  }

  deleteAll() {
    return new Promise((resolve, reject) => {
      this.init().then((objectStore) => {
        const clearRequest = objectStore.clear();
        clearRequest.onsuccess = function () {
          resolve("删除数据成功");
        };
        clearRequest.onerror = function () {
          console.log("删除数据失败");
          reject(clearRequest.result);
        };
      });
    });
  }
}

const db = new UseIndexedDB("mydatabase", "persion-table");

const jsonDb = new UseIndexedDB("jsonStoryDB", "json-table");

export { db, jsonDb };
