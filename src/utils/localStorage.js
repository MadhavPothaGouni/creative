export const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("tasksApp");
    return data ? JSON.parse(data) : undefined;
  } catch {
    return undefined;
  }
};

export const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem("tasksApp", JSON.stringify(state));
  } catch {}
};
