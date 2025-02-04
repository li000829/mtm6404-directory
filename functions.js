//2 Create a list function
function list(clients) {
    return clients
      .map(
        (client) => `
        <li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
          ${client.name}
          <strong>$ ${client.balance.toFixed(2)}</strong>
        </li>
      `
      )
      .join("");
  }
  
  //3 Create an order function
  function order(clients, property) {
    return clients.sort((a, b) => {
      if (a[property] < b[property]) return -1;
      if (a[property] > b[property]) return 1;
      return 0;
    });
  }
  
  //4 Create an total function
  function total(clients) {
    return clients.reduce((sum, client) => sum + client.balance, 0);
  }
  
  //5 Create an info function
  function info(index) {
    return clients.find((client) => client.index === index);
  }
  
  //6 Create an search function
  function search(query) {
    return clients.filter((client) =>
      client.name.toLowerCase().includes(query.toLowerCase())
    );
  }