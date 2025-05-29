let produtos = [
  // Frutas
  { nome: "Maçã", tipo: "frutas", regiao: "Sul" },
  { nome: "Banana", tipo: "frutas", regiao: "Sudeste" },
  { nome: "Laranja", tipo: "frutas", regiao: "Sudeste" },
  { nome: "Abacaxi", tipo: "frutas", regiao: "Nordeste" },
  { nome: "Manga", tipo: "frutas", regiao: "Nordeste" },
  { nome: "Uva", tipo: "frutas", regiao: "Sul" },
  { nome: "Pera", tipo: "frutas", regiao: "Sul" },
  { nome: "Melancia", tipo: "frutas", regiao: "Centro-Oeste" },
  { nome: "Mamão", tipo: "frutas", regiao: "Nordeste" },
  { nome: "Caju", tipo: "frutas", regiao: "Nordeste" },
  { nome: "Goiaba", tipo: "frutas", regiao: "Sudeste" },

  // Hortaliças
  { nome: "Alface", tipo: "hortaliças", regiao: "Centro-Oeste" },
  { nome: "Couve", tipo: "hortaliças", regiao: "Sudeste" },
  { nome: "Espinafre", tipo: "hortaliças", regiao: "Sul" },
  { nome: "Rúcula", tipo: "hortaliças", regiao: "Sudeste" },
  { nome: "Agrião", tipo: "hortaliças", regiao: "Sudeste" },
  { nome: "Repolho", tipo: "hortaliças", regiao: "Sul" },
  { nome: "Cenoura", tipo: "hortaliças", regiao: "Centro-Oeste" },
  { nome: "Beterraba", tipo: "hortaliças", regiao: "Sul" },
  { nome: "Pimentão", tipo: "hortaliças", regiao: "Nordeste" },
  { nome: "Tomate", tipo: "hortaliças", regiao: "Sudeste" },
  { nome: "Abóbora", tipo: "hortaliças", regiao: "Nordeste" },

  // Queijos
  { nome: "Queijo Minas", tipo: "queijos", regiao: "Minas Gerais" },
  { nome: "Queijo Coalho", tipo: "queijos", regiao: "Nordeste" },
  { nome: "Queijo Prato", tipo: "queijos", regiao: "Sul" },
  { nome: "Queijo Mussarela", tipo: "queijos", regiao: "Sudeste" },
  { nome: "Queijo Parmesão", tipo: "queijos", regiao: "Sul" },
  { nome: "Queijo Gorgonzola", tipo: "queijos", regiao: "Sudeste" },
  { nome: "Queijo Canastra", tipo: "queijos", regiao: "Minas Gerais" },
  { nome: "Queijo Meia Cura", tipo: "queijos", regiao: "Minas Gerais" },
  { nome: "Queijo Reino", tipo: "queijos", regiao: "Nordeste" },
  { nome: "Queijo Brie", tipo: "queijos", regiao: "Sudeste" },
  { nome: "Queijo Azul", tipo: "queijos", regiao: "Sul" },

  // Grãos
  { nome: "Arroz", tipo: "grãos", regiao: "Sul" },
  { nome: "Feijão", tipo: "grãos", regiao: "Sudeste" },
  { nome: "Milho", tipo: "grãos", regiao: "Centro-Oeste" },
  { nome: "Soja", tipo: "grãos", regiao: "Centro-Oeste" },
  { nome: "Lentilha", tipo: "grãos", regiao: "Sul" },
  { nome: "Grão-de-bico", tipo: "grãos", regiao: "Sudeste" },
  { nome: "Ervilha", tipo: "grãos", regiao: "Sul" },
  { nome: "Trigo", tipo: "grãos", regiao: "Sul" },
  { nome: "Cevada", tipo: "grãos", regiao: "Sul" },
  { nome: "Sorgo", tipo: "grãos", regiao: "Centro-Oeste" },
  { nome: "Amendoim", tipo: "grãos", regiao: "Sudeste" }
];

let tipoSelecionado = "todos";
let botoes = [];

function setup() {
  createCanvas(780, 3650);
  textFont('Arial');
  botoes.push(new BotaoFiltro("Todos", 50, 20, "todos"));
  botoes.push(new BotaoFiltro("Frutas", 160, 20, "frutas"));
  botoes.push(new BotaoFiltro("Hortaliças", 270, 20, "hortaliças"));
  botoes.push(new BotaoFiltro("Queijos", 380, 20, "queijos"));
  botoes.push(new BotaoFiltro("Grãos", 490, 20, "grãos"));
}

function draw() {
  background(245);
  
  // Título
  fill(30);
  textSize(24);
  text("Produtos do Campo", 50, 90);

  // Botões
  for (let botao of botoes) {
    botao.mostrar();
  }

  // Lista de produtos filtrados
  let y = 120;
  for (let p of produtos) {
    if (tipoSelecionado === "todos" || p.tipo === tipoSelecionado) {
      desenharProduto(p, y);
      y += 80;
    }
  }
}

function mousePressed() {
  for (let botao of botoes) {
    if (botao.estaClicado(mouseX, mouseY)) {
      tipoSelecionado = botao.tipo;
    }
  }
}

function desenharProduto(produto, y) {
  fill(255);
  stroke(200);
  rect(50, y, 700, 60, 10);
  
  fill(50);
  noStroke();
  textSize(16);
  textAlign(LEFT);
  text(`Produto: ${produto.nome}`, 70, y + 22);
  text(`Tipo: ${produto.tipo}`, 300, y + 22);
  text(`Região: ${produto.regiao}`, 500, y + 22);
}

class BotaoFiltro {
  constructor(rotulo, x, y, tipo) {
    this.rotulo = rotulo;
    this.x = x;
    this.y = y;
    this.largura = 100;
    this.altura = 35;
    this.tipo = tipo;
  }

  mostrar() {
    fill(tipoSelecionado === this.tipo ? "#99cc99" : "#dddddd");
    stroke(100);
    rect(this.x, this.y, this.largura, this.altura, 5);
    
    fill(0);
    noStroke();
    textSize(14);
    textAlign(CENTER, CENTER);
    text(this.rotulo, this.x + this.largura / 2, this.y + this.altura / 2);
  }

  estaClicado(mx, my) {
    return (
      mx > this.x &&
      mx < this.x + this.largura &&
      my > this.y &&
      my < this.y + this.altura
    );
  }
}
.x + this.largura &&
           my > this.y && my < this.y + this.altura;
  }
}
