
async function getLastItem() {
  const url = `http://api.bcb.gov.br/dados/serie/bcdata.sgs.4189/dados/ultimos/1`;
  
  return await fetch(url)
    .then(response => response.json())
    .then(selic => selic[0]);
};
  
export { getLastItem };

