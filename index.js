const item = document.querySelector('.item')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

function dragstart() {
	console.log('drag start')
}

function dragend() {
	console.log('dragend')
}
