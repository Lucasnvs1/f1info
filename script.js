const content = document.getElementById('content');

// Botão: CALENDÁRIO
document.getElementById('btn-calendar').addEventListener('click', function () {
  const content = document.getElementById('content');
  content.innerHTML = '<h2 class="titulo-classificacao">Calendário F1 2025</h2>';

  const calendario = [
    {
      bandeira: "au",
      nome: "GP da Austrália",
      data: "13 - 16 de março - 2025",
      circuito: "Albert Park – Melbourne"
    },
    {
      bandeira: "cn",
      nome: "GP da China",
      data: "21 - 23 de março - 2025",
      circuito: "Shanghai International Circuit  – Shangai"
    },
    {
      bandeira: "jp",
      nome: "GP do Japão",
      data: "3 - 6 de abril - 2025",
      circuito: "Suzuka International Racing Course – Suzuka"
    },
    {
      bandeira: "bh",
      nome: "GP do Bharein",
      data: "11 - 13 de abril - 2025",
    circuito: "Bahrain International Circuit – Sakhir"
  },
  {
    bandeira: "sa",
    nome: "GP da Arábia Saudita",
    data: "18 - 20 de abril - 2025",
    circuito: "Jeddah Corniche Circuit – Jeddah"
  },
  {
    bandeira: "us",
    nome: "GP de Miami",
    data: "2 - 4 de maio - 2025",
    circuito: "Miami international Autodrome – Florida"
  },
  {
    bandeira: "it",
    nome: "GP da Emilia Romagna",
    data: "16 - 18 de maio - 2025",
    circuito: "Autodromo Enzo e Dino Ferrari – Roma, Itália"
  },
  {
    bandeira: "mc",
    nome: "GP de Mônaco",
    data: "23 - 25 de maio - 2025",
    circuito: "Circuito de Mônaco – Mônaco"
  },
  { 
    bandeira: "es",
    nome: "GP da Espanha",
    data: "30 mai - 1 de junho - 2025",
    circuito: "Circuit de Barcelona-Catalunya – Barcelona"
  },
  { 
    bandeira: "ca",
    nome: "GP do Canadá",
    data: "13 - 15 de junho - 2025",
    circuito: "Circuit Gilles Villeneuve – Montreal"
  },
  { 
    bandeira: "at",
    nome: "GP da Áustria",
    data: "27 - 29 de junho - 2025",
    circuito: "Red Bull Ring – Spielberg"
  },
  { 
    bandeira: "gb",
    nome: "GP da Grã-Bretanha",
    data: "4 - 6 de julho - 2025",
    circuito: "Silverstone Circuit – Silverstone"
  },
  { 
    bandeira: "be",
    nome: "GP da Belgica",
    data: "25 - 27 de julho - 2025",
    circuito: "Circuit de Spa-Francorchamps – Stavelot"
  },
  { 
    bandeira: "hu",
    nome: "GP da Hungria",
    data: "1 - 3 de agosto - 2025",
    circuito: "Hungaroring – Budapeste"
  },
  { 
    bandeira: "nl",
    nome: "GP da Holanda",
    data: "29 - 31 de agosto - 2025",
    circuito: "Circuit Zandvoort – Zandvoort"
  },
  { 
    bandeira: "it",
    nome: "GP da Itália",
    data: "5 - 7 de setembro - 2025",
    circuito: "Autodromo Nazionale Monza – Monza"
  },
  {
    bandeira: "az",
    nome: "GP do Azerbaijão",
    data: "19 - 21 de setembro - 2025",
    circuito: "Baku City Circuit – Baku" 
  },
  {
    bandeira: "sg",
    nome: "GP de Singapura",
    data: "3 - 5 de outubro - 2025",
    circuito: "Marina Bay Street Circuit – Singapura"
  },
  {
    bandeira: "us",
    nome: "GP dos Estados Unidos",
    data: "17 - 19 de outubro - 2025",
    circuito: "Circuit of the Americas – Austin"
  },
  {
    bandeira: "mx",
    nome: "GP do México",
    data: "24 - 26 de outubro - 2025",
    circuito: "Autódromo Hermanos Rodríguez – Cidade do México"
  },
  {
    bandeira: "br",
    nome: "GP do Brasil",
    data: "7 - 9 de novembro - 2025",
    circuito: "Autódromo José Carlos Pace – São Paulo"
  },
  {
    bandeira: "us",
    nome: "GP de Las Vegas",
    data: "20 - 23 de novembro - 2025",
    circuito: " Las Vegas Street Circuit – Nevada"
  },
  {
    bandeira: "qa",
    nome: "GP do Qatar",
    data: "28 - 30 de novembro - 2025",
    circuito: "Losail International Circuit – Lusail"
  },
  {
    bandeira: "ae",
    nome: "GP de Abu Dhabi",
    data: "5 - 7 de dezembro - 2025",
    circuito: "Yas Marina Circuit – Abu Dhabi"
  },

  ];

  calendario.forEach(gp => {
    content.innerHTML += `
      <div class="calendar-card">
        <div class="flag">
          <img src="https://flagcdn.com/w40/${gp.bandeira}.png" alt="${gp.nome}" class="bandeira">
        </div>
        <div class="info">
          <h3>${gp.nome}</h3>
          <p>${gp.data}</p>
          <p>${gp.circuito}</p>
        </div>
      </div>
    `;
  });
});



// Função para bandeira baseada no nome do país
function getFlagEmoji(pais) {
  const map = {
    "Australia": "🇦🇺",
    "Bahrain": "🇧🇭",
    "Saudi Arabia": "🇸🇦",
    "Japan": "🇯🇵",
    "China": "🇨🇳",
    "USA": "🇺🇸",
    "United States": "🇺🇸",
    "Italy": "🇮🇹",
    "Monaco": "🇲🇨",
    "Canada": "🇨🇦",
    "Spain": "🇪🇸",
    "Austria": "🇦🇹",
    "United Kingdom": "🇬🇧",
    "Hungary": "🇭🇺",
    "Belgium": "🇧🇪",
    "Netherlands": "🇳🇱",
    "Singapore": "🇸🇬",
    "Mexico": "🇲🇽",
    "Brazil": "🇧🇷",
    "Qatar": "🇶🇦",
    "Abu Dhabi": "🇦🇪"
  };
  return map[pais] || "🏁";
}


// Botão: CLASSIFICAÇÃO
document.getElementById('btn-standings').addEventListener('click', function () {
  const content = document.getElementById('content');
  content.innerHTML = '<h2 class="titulo-classificacao">Classificação da Fórmula 1 2025</h2>';


  const pilotos = [
    { pos: 1 , nome: "Oscar Piastri", equipe: "McLaren", pontos: 216 },
    { pos: 2, nome: "Lando Norris", equipe: "McLaren", pontos: 201 },
    { pos: 3, nome: "Max Verstappen", equipe: "Red Bull", pontos: 155 },
    { pos: 4, nome: "George Russell", equipe: "Mercedes", pontos: 146 },
    { pos: 5, nome: "Charles Leclerc", equipe: "Ferrari", pontos: 119 },
    { pos: 6, nome: "Lewis Hamilton", equipe: "Ferrari", pontos: 91 },
    { pos: 7, nome: "Kimi Antonelli", equipe: "Mercedes", pontos: 63 },
    { pos: 8, nome: "Alexander Albon", equipe: "Williams", pontos: 42 },
    { pos: 9, nome: "Esteban Ocon", equipe: "Haas", pontos: 23 },
    { pos: 10, nome: "Nico Hülkenberg", equipe: "Sauber", pontos: 22 },
    { pos: 11, nome: "Isack Hadjar", equipe: "Racing Bulls", pontos: 21 },
    { pos: 12, nome: "Lance Stroll", equipe: "Aston Martin", pontos: 14 },
    { pos: 13, nome: "Fernando Alonso", equipe: "Aston Martin", pontos: 14 },
    { pos: 14, nome: "Carlos Sainz", equipe: "Williams", pontos: 13 },
    { pos: 15, nome: "Liam Lawson", equipe: "Racing Bulls", pontos: 12 },
    { pos: 16, nome: "Pierre Gasly", equipe: "Alpine", pontos: 11 },
    { pos: 17, nome: "Yuki Tsunoda", equipe: "Red Bull", pontos: 10 },
    { pos: 18, nome: "Oliver Bearman", equipe: "Haas", pontos: 6 },
    { pos: 19, nome: "Gabriel Bortoleto", equipe: "Sauber", pontos: 4 },
    { pos: 20, nome: "Franco Colapinto", equipe: "Alpine", pontos: 0 }
  ];

  pilotos.forEach(p => {
    const equipeClasse = p.equipe.toLowerCase().replace(/\s/g, "-");
    const destaqueLider = p.pos === 1 ? "lider" : "";

   content.innerHTML += `
      <div class="race-card ${equipeClasse} ${destaqueLider}">
        <strong>${p.pos} – ${p.nome}</strong><br>
         Equipe: ${p.equipe}<br>
         Pontos: ${p.pontos}
      </div>
    `;
  });
});

// Botão: CONSTRUTORES
document.getElementById('btn-constructors').addEventListener('click', function () {
  const content = document.getElementById('content');
  content.innerHTML = '<h2 class="titulo-classificacao">Classificação de Construtores 2025 </h2>';

  const construtores = [
    { pos: 1, equipe: "McLaren", pontos: 417 },
    { pos: 2, equipe: "Ferrari", pontos: 210 },
    { pos: 3, equipe: "Mercedes", pontos: 209 },
    { pos: 4, equipe: "Red Bull", pontos: 162 },
    { pos: 5, equipe: "Williams", pontos: 55 },
    { pos: 6, equipe: "Racing Bulls", pontos: 36 },
    { pos: 7, equipe: "Haas", pontos: 29 },
    { pos: 8, equipe: "Aston Martin", pontos: 28 },
    { pos: 9, equipe: "Sauber", pontos: 26 },
    { pos: 10, equipe: "Alpine", pontos: 11 }
  ];

  construtores.forEach(c => {
    const equipeClasse = c.equipe.toLowerCase().replace(/\s/g, "-");
    const destaqueLider = c.pos === 1 ? "lider" : "";

  content.innerHTML += `
  <div class="race-card ${equipeClasse}">
    <strong>${c.pos} – <span class="equipe-nome">${c.equipe}</span></strong><br>
    Pontos: ${c.pontos}
  </div>
`;


  });
});

function iniciarSite() {
  document.getElementById('intro').style.display = 'none';
  document.getElementById('site').style.display = 'block';
}