/*$('#searchbutton').on('click', function(event) {
  event.preventDefault();
  $('#results').html('<div class="loader">Loading...</div>');

  let url = 'https://www.reddit.com/r/javascript.json';

  // let promise = $.ajax({
  //   type: 'GET',
  //   url: url
  // });

//fetch function using jquery
  let promise = fetch(url).then(function(response) {
    let promise = response.json(); //convert to json, the return promise
    return promise;
  });

  promise.then(function(members) {
    console.log('success', members);
    let html = '';

    members.forEach(function(member){
      html += `
        <img src="${member.avatar_url}"
        width="150"
        title="${member.login}">
      `;
    });

    $('#results').html(html);
  }, function () {
    console.log('error', error);
  });

});*/

//--------------------------- NEW

$('#searchbutton').on('click', function(event) {
  event.preventDefault();
  $('#results').html('<div class="loader">Loading...</div>');

  var searchinput =  $('#searchinput').val();

  let url = `https://www.reddit.com/r/${searchinput}.json`;

  // let promise = $.ajax({
  //   type: 'GET',
  //   url: url
  // });

//fetch function using jquery
  let promise = fetch(url).then(function(response) {
    let promise = response.json(); //convert to json, the return promise
    return promise;
  });

  promise.then(function(posts) {
    console.log('success', posts);
    let html = '';

    posts.data.children.forEach(function(post){
      html += `
      <div>
      <h3>${post.data.title}</h3>
      <p>${post.data.score}</p>
      <p>${post.data.author}</p>
      </div>
      `;
    });

    $('#results').html(html);
  }, function () {
    console.log('error', error);
  });

});
