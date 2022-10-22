async function fetchAccounts() {
  return await fetch('/accounts', {
    'Content-Type': 'application/json'
  }).then(res => res.json());
}

$(document).ready(function() {
  (async() => {
    const accounts = await fetchAccounts();
  
    accounts.forEach(account => {
      $('select[name=account]').append(`
        <option value="${account}">${account}</option>
      `);
    })
  })();
});