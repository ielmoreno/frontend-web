const allStocks = [
    {
        
    },
    {

    }
];

const allHighlight = [
    {
        Bolsa:"NASDAQ",
        Ticker:"MFST",
        Empresa:"Microsoft Corporation",
        Setor:"Technology Services",
        Site:"microsoft.com",
        Url:"http://microsoft.com",
    },
    {
        Bolsa:"NASDAQ",
        Ticker:"AAPL",
        Empresa:"Apple Inc",
        Setor:"Eletronic Technology",
        Site:"apple.com",
        Url:"http://apple.com",
    },
    {
        Bolsa:"NASDAQ",
        Ticker:"NVDA",
        Empresa:"NVIDIA",
        Setor:"Eletronic Technology",
        Site:"nvidia.com",
        Url:"http://nvidia.com",
    },
    {
        Bolsa:"NYSE",
        Ticker:"LLI",
        Empresa:"Eli Lilly and Company",
        Setor:"Health Technology",
        Site:"lilly.com",
        Url:"http://lilly.com",
    },
    {
        Bolsa:"NYSE",
        Ticker:"V",
        Empresa:"Visa",
        Setor:"Commercial Services",
        Site:"usa.visa.com",
        Url:"http://usa.visa.com",
    },
    {
        Bolsa:"NYSE",
        Ticker:"JPM",
        Empresa:"JP Morgan",
        Setor:"Finance",
        Site:"jpmorganchase.com<",
        Url:"http://jpmorganchase.com",
    },
    {
        Bolsa:"IBOVESPA",
        Ticker:"PETR3",
        Empresa:"Petrobras ON",
        Setor:"Energy Minerals",
        Site:"petrobra.com.br",
        Url:"http://petrobra.com.br",
    },
    {
        Bolsa:"IBOVESPA",
        Ticker:"ITUB3",
        Empresa:"Itaú Unibanco Holding SA",
        Setor:"Finance",
        Site:"itau.com.br",
        Url:"http://itau.com.br",
    },
    {
        Bolsa:"IBOVESPA",
        Ticker:"VALE3",
        Empresa:"Vale On",
        Setor:"Non-Energy Minerals",
        Site:"vale.com.br",
        Url:"http://vale.com.br",
    }
];

function addStock(stock){

};

function addHighlight(highlight){
    const table = document.querySelector('body > main >table')
    table.innerHTML = table.innerHTML + `
        <tr>
            <th>${highlight.Bolsa}</th>
            <td>${highlight.Ticker}</td>
            <td>${highlight.Empresa}</td>
            <td>${highlight.Setor}</td>
            <td><a href=${highlight.Url} target="_blank">${highlight.Site}</a></td>
        </tr>
    `
};

function loadStock(){
    allStocks.map(stock => addStock(stock));
};

function loadHighlight(){
    allHighlight.map(highlight => addHighlight(highlight));
};