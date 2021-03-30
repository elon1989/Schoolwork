class RandomWord {

    static getWord() {
        const response = fetch('https://random-word-api.herokuapp.com/word?number=1');

        response.then(response => response.json())
        .then(data => {
            let wordStr = data.toString();
            let wordArray = wordStr.split('');
            return 'hej';
        })
        
        
        
    }
}

/* class Data{
    static getData(newApiUrl){
        fetch(newApiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherData = data;
            const farenheitBot = ((data.list[0].main.temp_min* 9/5) - 459.67);
            const farenheitTop = ((data.list[0].main.temp_max * 9/5) - 459.67);
            const kelvin = weatherData.list[0].main.temp;
            const celsius = kelvin - 273.15;
            const farenheit = (kelvin * 9/5) - 459.67;
            Ui.render(celsius, farenheit, farenheitBot, farenheitTop);
        })
    }
} */

export default RandomWord;