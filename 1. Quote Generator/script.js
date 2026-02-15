let apiQuotes = [];

function newQoute(){
    const qoute = apiQuote[Math.floor(Math.random() * apiQuote.length)];
    console.log(qoute);
}

async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQoute();
    } catch (error){
        // Not to do this right now
    }
}

getQuotes();