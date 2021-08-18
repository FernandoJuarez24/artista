addEventListener('DOMContentLoaded', () =>{

	/* ARRAY DE IMAGENES DE SE VISUALIZARAN */
	const imagenes = ['img/slider/01.jpg', 'img/slider/02.jpg', 'img/slider/03.jpg', 'img/slider/04.jpg', 'img/slider/05.jpg']

	let i = 1
	const img01 = document.querySelector('#img01')
	const img02 = document.querySelector('#img02')
	const barraProgreso = document.querySelector('#barraProgreso')
	const divIndicadores = document.querySelector('#indicadores')
	let porcentajeBase = 100 / imagenes.length
	let porcentajeActual = porcentajeBase

	/* TOTAL DE INDICADORES CREADOS DINAMICAMENTE */
	for (let index = 0; index < imagenes.length; index++){
		const div = document.createElement('div')
		div.classList.add('circulos')
		div.id = index
		divIndicadores.appendChild(div)
	}

	barraProgreso.style.width = `${porcentajeBase}%`
	img01.src = imagenes[0]
	const circulos = document.querySelectorAll('.circulos')
	circulos[0].classList.add('activado')

	/* FUNCION CAMBIO DE IMAGENES */
	const slider = () => {
		img02.src = imagenes[i]
		const circuloActual = Array.from(circulos).find(el => el.id == i)
		Array.from(circulos).forEach(cir => cir.classList.remove('activado'))
		circuloActual.classList.add('activado')

		img02.classList.add('activo')
		i++
		porcentajeActual+=porcentajeBase
		barraProgreso.style.width = `${porcentajeActual}%`

		if(i == imagenes.length){
			i = 0
			porcentajeActual = porcentajeBase - porcentajeBase
		}

		setTimeout(() =>{
			img01.src = img02.src
			img02.classList.remove('activo')
		},1000)
	}

	setInterval(slider, 4000)
})