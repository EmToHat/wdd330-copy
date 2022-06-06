fetch('https://pokeapi.co/api/v2/')
    //.then(response => console.log(response))
    //.then(response => response.json())
    
    .then(res => {
        if (res.ok){
            console.log('SUCCESS')
        } else {
            console.log('NOT SUCCESSFUL')
        }
    })
    .then(data => console.log(data))
    //.catch(error => console.log('ERROR'))