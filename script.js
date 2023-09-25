// Gets value of input#searchBar and opens a new google window using that value as the query
const search = () => {
  query = document.getElementById('searchBar').value;
  alert(`${query}`);
  window.open(`https://www.google.com/search?q=${query}`,'_self');
}

// Adjectives array
const adjectives = ['Adventurous','Funny','Hungry','Playful','Trendy','Curious','Artistic','Lucky'];

// Changes the text value of the I'm Feeling Lucky button to a random index of the adjectives array
const lucky = () => {
  const adjective = Math.floor(Math.random()* adjectives.length);
  document.getElementById('lucky').value = `I'm Feeling ${adjectives[adjective]}`;
}

// Prompts user to enter username and changes text of Sign in button
const signIn = () => {
  user = prompt('Enter username');
  if (user) {
    document.getElementById('signin').innerText = user;
  }
}

// Same as search() but using google images format
const searchImg = () => {
  query = document.getElementById('searchBar').value;
  window.open(`https://www.google.com/search?sca_esv=566330112&q=${query}&tbm=isch`, '_self');
}

// Same as search() but takes multiple values and uses advanced search format
const advancedSearch = () => {
  const important = document.getElementById('important').value;
  const exact = document.getElementById('exact').value;
  const or = document.getElementById('or').value;
  const minus = document.getElementById('minus').value;
  const range1 = document.getElementById('range1').value;
  const range2 = document.getElementById('range2').value;
  const site = document.getElementById('site').value;
  window.open(`https://www.google.com/search?as_q=${important}&as_epq=${exact}&as_oq=${or}&as_eq=${minus}&as_nlo=${range1}&as_nhi=${range2}&as_sitesearch=${site}`,'_self');
}