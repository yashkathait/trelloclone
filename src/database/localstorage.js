import { reactLocalStorage } from "reactjs-localstorage";

const KEY_NAME = "trello";

class LocalStorageManager {
  static addData = (data) => reactLocalStorage.setObject(KEY_NAME, data);

  static getData = () => reactLocalStorage.getObject(KEY_NAME);

  static clearData = () => reactLocalStorage.remove(KEY_NAME);
}

export default LocalStorageManager;
