tusk1 = document.getElementById('tusk1')
tusk2 = document.getElementById('tusk2')
tusk3 = document.getElementById('tusk3')
tusk4 = document.getElementById('tusk4')

tusk1.onclick = act1
tusk2.onclick = act2
tusk3.onclick = act3
tusk4.onclick = act4

function act1() {
  document
    .querySelector('#tuskImg')
    .classList.remove('tuskAct2Image', 'tuskAct3Image', 'tuskAct4Image')
  document.querySelector('#tuskImg').classList.add('tuskAct1Image')
  document.getElementById('contentText').innerText =
    ' Tusk Act 1 é o stand de Jonhy Joestar em sua Primeira tranformação'
  document.getElementById('nameTittle').innerText = ' Tusk Act 1 '
}

function act2() {
  document
    .querySelector('#tuskImg')
    .classList.remove('tuskAct1Image', 'tuskAct3Image', 'tuskAct4Image')
  document.querySelector('#tuskImg').classList.add('tuskAct2Image')
  document.getElementById('contentText').innerText =
    ' Tusk Act 2 é o stand de Jonhy Joestar em sua Segunda tranformação'
  document.getElementById('nameTittle').innerText = ' Tusk Act 2 '
}

function act3() {
  document
    .querySelector('#tuskImg')
    .classList.remove('tuskAct2Image', 'tuskAct1Image', 'tuskAct4Image')
  document.querySelector('#tuskImg').classList.add('tuskAct3Image')
  document.getElementById('contentText').innerText =
    ' Tusk Act 3 é o stand de Jonhy Joestar em sua Terceira tranformação'
  document.getElementById('nameTittle').innerText = ' Tusk Act 3 '
}

function act4() {
  document
    .querySelector('#tuskImg')
    .classList.remove('tuskAct2Image', 'tuskAct3Image', 'tuskAct1Image')
  document.querySelector('#tuskImg').classList.add('tuskAct4Image')
  document.getElementById('contentText').innerText =
    ' Tusk Act 4 é o stand de Jonhy Joestar em sua Quarta tranformação'
  document.getElementById('nameTittle').innerText = ' Tusk Act 4 '
}
