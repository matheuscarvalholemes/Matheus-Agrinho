let produtos = [
  { nome: "Maçã", tipo: "frutas", regiao: "Sul" },
  { nome: "Banana", tipo: "frutas", regiao: "Sudeste" },
  { nome: "Alface", tipo: "hortaliças", regiao: "Centro-Oeste" },
  { nome: "Couve", tipo: "hortaliças", regiao: "Sudeste" },
  { nome: "Queijo Minas", tipo: "queijos", regiao: "Minas Gerais" },
  { nome: "Queijo Coalho", tipo: "queijos", regiao: "Nordeste" }
];

let tipoSelecionado = "todos";
let botoes = [];

function setup() {
  createCanvas(800, 600);
  textFont('Arial');
  botoes.push(new BotaoFiltro("Todos", 50, 20, "todos"));
  botoes.push(new BotaoFiltro("Frutas", 150, 20, "frutas"));
  botoes.push(new BotaoFiltro("Hortaliças", 270, 20, "hortaliças"));
  botoes.push(new BotaoFiltro("Queijos", 410, 20, "queijos"));
}

function draw() {
  background(245);
  
  // Título
  fill(30);
  textSize(24);
  text("Produtos do Campo", 50, 70);
  
  // Mostrar botões
  for (let botao of botoes) {
    botao.mostrar();
  }
  
  // Lista de produtos filtrados
  let y = 120;
  textSize(16);
  for (let produto of produtos) {
    if (tipoSelecionado === "todos" || produto.tipo === tipoSelecionado) {
      text(`• ${produto.nome} (${produto.regiao})`, 50, y);
      y += 30;
    }
  }
}

function mousePressed() {
  for (let botao of botoes) {
    if (botao.foiClicado(mouseX, mouseY)) {
      tipoSelecionado = botao.tipo;
    }
  }
}

class BotaoFiltro {
  constructor(rotulo, x, y, tipo) {
    this.rotulo = rotulo;
    this.x = x;
    this.y = y;
    this.largura = 100;
    this.altura = 30;
    this.tipo = tipo;
  }

  mostrar() {
    fill(tipoSelecionado === this.tipo ? 'lightblue' : 220);
    stroke(0);
    rect(this.x, this.y, this.largura, this.altura, 5);
    fill(0);
    noStroke();
    textSize(14);
    textAlign(CENTER, CENTER);
    text(this.rotulo, this.x + this.largura / 2, this.y + this.altura / 2);
  }

  foiClicado(mx, my) {
    return mx > this.x && mx < this.x + this.largura &&
           my > this.y && my < this.y + this.altura;
  }
}
