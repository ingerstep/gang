export const formatPhone = (str: string) => {
  return str
    .replace(/\s+/g, '')
    .replace(/[{()}]/g, '')
    .replace(/-/g, '');
};
