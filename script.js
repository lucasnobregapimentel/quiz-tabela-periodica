const elementosQuimicos = [
  { nome: "Hidrogênio", simbolo: "H" },
  { nome: "Hélio", simbolo: "He" },
  { nome: "Lítio", simbolo: "Li" },
  { nome: "Berílio", simbolo: "Be" },
  { nome: "Boro", simbolo: "B" },
  { nome: "Carbono", simbolo: "C" },
  { nome: "Nitrogênio", simbolo: "N" },
  { nome: "Oxigênio", simbolo: "O" },
  { nome: "Flúor", simbolo: "F" },
  { nome: "Neônio", simbolo: "Ne" },
  { nome: "Sódio", simbolo: "Na" },
  { nome: "Magnésio", simbolo: "Mg" },
  { nome: "Alumínio", simbolo: "Al" },
  { nome: "Silício", simbolo: "Si" },
  { nome: "Fósforo", simbolo: "P" },
  { nome: "Enxofre", simbolo: "S" },
  { nome: "Cloro", simbolo: "Cl" },
  { nome: "Argônio", simbolo: "Ar" },
  { nome: "Potássio", simbolo: "K" },
  { nome: "Cálcio", simbolo: "Ca" },
  { nome: "Escândio", simbolo: "Sc" },
  { nome: "Titânio", simbolo: "Ti" },
  { nome: "Vanádio", simbolo: "V" },
  { nome: "Cromo", simbolo: "Cr" },
  { nome: "Manganês", simbolo: "Mn" },
  { nome: "Ferro", simbolo: "Fe" },
  { nome: "Cobalto", simbolo: "Co" },
  { nome: "Níquel", simbolo: "Ni" },
  { nome: "Cobre", simbolo: "Cu" },
  { nome: "Zinco", simbolo: "Zn" },
  { nome: "Gálio", simbolo: "Ga" },
  { nome: "Germânio", simbolo: "Ge" },
  { nome: "Arsênio", simbolo: "As" },
  { nome: "Selênio", simbolo: "Se" },
  { nome: "Bromo", simbolo: "Br" },
  { nome: "Criptônio", simbolo: "Kr" },
  { nome: "Rubídio", simbolo: "Rb" },
  { nome: "Estrôncio", simbolo: "Sr" },
  { nome: "Ítrio", simbolo: "Y" },
  { nome: "Zircônio", simbolo: "Zr" },
  { nome: "Nióbio", simbolo: "Nb" },
  { nome: "Molibdênio", simbolo: "Mo" },
  { nome: "Tecnécio", simbolo: "Tc" },
  { nome: "Rutênio", simbolo: "Ru" },
  { nome: "Ródio", simbolo: "Rh" },
  { nome: "Paládio", simbolo: "Pd" },
  { nome: "Prata", simbolo: "Ag" },
  { nome: "Cádmio", simbolo: "Cd" },
  { nome: "Índio", simbolo: "In" },
  { nome: "Estanho", simbolo: "Sn" },
  { nome: "Antimônio", simbolo: "Sb" },
  { nome: "Telúrio", simbolo: "Te" },
  { nome: "Iodo", simbolo: "I" },
  { nome: "Xenônio", simbolo: "Xe" },
  { nome: "Césio", simbolo: "Cs" },
  { nome: "Bário", simbolo: "Ba" },
  { nome: "Lantânio", simbolo: "La" },
  { nome: "Cério", simbolo: "Ce" },
  { nome: "Praseodímio", simbolo: "Pr" },
  { nome: "Neodímio", simbolo: "Nd" },
  { nome: "Promécio", simbolo: "Pm" },
  { nome: "Samário", simbolo: "Sm" },
  { nome: "Európio", simbolo: "Eu" },
  { nome: "Gadolínio", simbolo: "Gd" },
  { nome: "Térbio", simbolo: "Tb" },
  { nome: "Disprósio", simbolo: "Dy" },
  { nome: "Hólmio", simbolo: "Ho" },
  { nome: "Érbio", simbolo: "Er" },
  { nome: "Túlio", simbolo: "Tm" },
  { nome: "Itérbio", simbolo: "Yb" },
  { nome: "Lutécio", simbolo: "Lu" },
  { nome: "Háfnio", simbolo: "Hf" },
  { nome: "Tântalo", simbolo: "Ta" },
  { nome: "Tungstênio", simbolo: "W" },
  { nome: "Rênio", simbolo: "Re" },
  { nome: "Ósmio", simbolo: "Os" },
  { nome: "Irídio", simbolo: "Ir" },
  { nome: "Platina", simbolo: "Pt" },
  { nome: "Ouro", simbolo: "Au" },
  { nome: "Mercúrio", simbolo: "Hg" },
  { nome: "Tálio", simbolo: "Tl" },
  { nome: "Chumbo", simbolo: "Pb" },
  { nome: "Bismuto", simbolo: "Bi" },
  { nome: "Polônio", simbolo: "Po" },
  { nome: "Ástato", simbolo: "At" },
  { nome: "Radônio", simbolo: "Rn" },
  { nome: "Frâncio", simbolo: "Fr" },
  { nome: "Rádio", simbolo: "Ra" },
  { nome: "Actínio", simbolo: "Ac" },
  { nome: "Tório", simbolo: "Th" },
  { nome: "Protactínio", simbolo: "Pa" },
  { nome: "Urânio", simbolo: "U" },
  { nome: "Netúnio", simbolo: "Np" },
  { nome: "Plutônio", simbolo: "Pu" },
  { nome: "Amerício", simbolo: "Am" },
  { nome: "Cúrio", simbolo: "Cm" },
  { nome: "Berquélio", simbolo: "Bk" },
  { nome: "Califórnio", simbolo: "Cf" },
  { nome: "Einstênio", simbolo: "Es" },
  { nome: "Férmio", simbolo: "Fm" },
  { nome: "Mendelévio", simbolo: "Md" },
  { nome: "Nobélio", simbolo: "No" },
  { nome: "Laurêncio", simbolo: "Lr" },
  { nome: "Rutherfórdio", simbolo: "Rf" },
  { nome: "Dúbnio", simbolo: "Db" },
  { nome: "Seabórgio", simbolo: "Sg" },
  { nome: "Bóhrio", simbolo: "Bh" },
  { nome: "Hássio", simbolo: "Hs" },
  { nome: "Meitnério", simbolo: "Mt" },
  { nome: "Darmstádio", simbolo: "Ds" },
  { nome: "Roentgênio", simbolo: "Rg" },
  { nome: "Copernício", simbolo: "Cn" },
  { nome: "Nihônio", simbolo: "Nh" },
  { nome: "Fleróvio", simbolo: "Fl" },
  { nome: "Moscóvio", simbolo: "Mc" },
  { nome: "Livermório", simbolo: "Lv" },
  { nome: "Tenessino", simbolo: "Ts" },
  { nome: "Oganessônio", simbolo: "Og" }
]

function drawElement() {
  return elementosQuimicos[Math.floor(Math.random() * elementosQuimicos.length)]
}


function embaralha(lista) {

  for (let indice = lista.length; indice; indice--) {

    const indiceAleatorio = Math.floor(Math.random() * indice);

    const elemento = lista[indice - 1];

    lista[indice - 1] = lista[indiceAleatorio];

    lista[indiceAleatorio] = elemento;
  }
}

let element = ''
let correctResponse = 0
const elementToGuess = document.getElementById('element-to-guess')
const drawerButton = document.getElementById('drawer-button')
const optionButtons = document.getElementsByClassName('option')

drawerButton.addEventListener('click', () => {
  const drawnElement = drawElement()
  elementToGuess.innerHTML = drawnElement.simbolo
  element = drawnElement.nome

  const elements = []

  for (i = 0; i < 4; i++) {
    chosenElement = drawElement().nome
    elements.push(chosenElement)
  }

  elements.push(element)

  embaralha(elements)

  for (i = 0; i < 5; i++) {
    optionButtons[i].innerHTML = elements[i]
    if (elements[i] == element) {
      correctResponse = i
    }
  }
})

for (i = 0; i < optionButtons.length; i++) {
  optionButtons[i].addEventListener('click', (e) => {
    if (e.target.innerHTML == element) {
      alert('Acertou!')
    } else {
      alert('Errou!')
    }
  })
}
