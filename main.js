const fetchDogs = () => {
    const url = `https://dog.ceo/api/breeds/list/all`

    fetch(url)
      .then(response => response.json())
      .then(data =>{
          let output = '<h3></h3>'
          for(let obj in data.message){
          console.log(obj)
          output += `
            <ul style="list-style: none">
              <li>${obj}</li>
            </ul>
          `
          }
          document.getElementById('lisDogs').innerHTML = output
        
        })
}
fetchDogs()

