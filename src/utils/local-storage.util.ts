const get = (key: string): string => {
  return localStorage.getItem(key) || '';
};

const set = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

const StorageUtil = {
  get,
  set
}

export default StorageUtil;