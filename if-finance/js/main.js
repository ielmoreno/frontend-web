const allStocks = [
    { 
		bolsa: "NASDAQ",
		codigo: "AAPL",
		empresa: "Apple Inc",
		valor: 25080,
		variacao: 0.35,
		nAcoes: 40
	},
	{
		bolsa: "NASDAQ",
		codigo: "MSFT",
		empresa: "Microsoft Corp",
		valor: 50234,
		variacao: -1.5,
		nAcoes: 20
	},
	{
		bolsa: "NASDAQ",
		codigo: "META",
		empresa: "Meta Platforms Inc",
		valor: 43262,
		variacao: 2.3,
		nAcoes: 5
	},
	{
		bolsa: "NASDAQ",
		codigo: "GOOGL",
		empresa: "Alphabet Class A",
		valor: 16615,
		variacao: -0.78,
		nAcoes: 8
	},
	{
		bolsa: "NASDAQ",
		codigo: "NVDA",
		empresa: "NVIDIA Corp",
		valor: 87757,
		variacao: 0.02,
		nAcoes: 13
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
    const main = document.querySelector('body > main')
    main.innerHTML = main.innerHTML + `

        <div class="card-ticker">
          <header class="ticker-top">
            <h2>${stock.bolsa}: ${stock.codigo}</h2>
            <h1>${stock.empresa}</h1>
          </header>
          <main class="card-main">
            <p>R$ ${realFormat(+stock.valor / 100)}</p>
            <span ${ stock.variacao < 0 ? 'style="background: #FF0000;"' : ''} >${ stock.variacao < 0 ? '▼' : '▲'} ${stock.variacao}%</span>
            <span>R$ ${realFormat(((+stock.valor / 100)*(stock.variacao / 100)))}</span>
          </main>
          <footer>
            <div>
              <p>${stock.nAcoes}</p>
              <span>Ações</span>
            </div>
            <div>
              <p>R$ ${realFormat(stock.nAcoes * (+stock.valor / 100))}</p>
              <span>Posição</span>
            </div>
          </footer>
        </div>
    `
};

function realFormat(valor){
	return valor.toFixed(2).toString().replace('.',',')
}

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

function addNewTable(table){
    const table2 = document.querySelector('#table2')
    table2.innerHTML = table2.innerHTML + `
        <tr>
            <th>${table.Bolsa}</th>
            <td>${table.Ticker}</td>
            <td>${table.Empresa}</td>
            <td>${table.Setor}</td>
            <td><a href=${table.Url} target="_blank">${table.Site}</a></td>
        </tr>
    `
};

function loadStocks(){
    allStocks.map(stock => addStock(stock));
};

function loadHighlight(){
    allHighlight.map(highlight => addHighlight(highlight));
};

function loadNewTable(){
    allHighlight.map(table => addNewTable(table));
};