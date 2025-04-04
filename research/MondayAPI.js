fetch ("https://api.monday.com/v2", {
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
    'Authorization' : 'YOUR_API_KEY_HERE',
    'API-Version' : '2023-04'
   },

  mutation {
  change_column_value(
    board_id: 6730625724,
    item_id: 6730773852,
    column_id: "link_mkpnam63",
    value: "{\"url\":\"https://example.com\",\"text\":\"Click here\"}"
  ) {
    id
  }
}

//  body: JSON.stringify({
//     'query' : 'query{boards (limit:1) {id name} }'
//   })
//  });
