export const formatDate = (date: string) => {
  const dateInstence = new Date(date);

  const mouth = dateInstence.toLocaleString('ru-ru', { month: 'long', day: 'numeric' });
  const hourse = ('0' + dateInstence.getHours()).substr(-2);
  const minutes = ('0' + dateInstence.getMinutes()).substr(-2);

  return `${mouth} ${hourse}:${minutes}`;
};
