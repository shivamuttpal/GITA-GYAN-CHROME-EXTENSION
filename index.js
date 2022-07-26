const chapter=Math.floor(Math.random() * 18);

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '635c6f0580mshcdaa328a46d8d07p122244jsn2adfb39fc12e',
        'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
    }
};


fetch('https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?limit=18', options)
    .then(response => response.json())
    .then(response => {
       
        const gettingdata1 = response[chapter].name;
        const gettingdata2 = response[chapter].chapter_summary_hindi;
        const getelement1 = document.getElementById('hello1');
        const getelement2 = document.getElementById('hello2');
        getelement1.innerText = gettingdata1;
        getelement2.innerText = gettingdata2;

    })
    .catch(err => console.error(err));



