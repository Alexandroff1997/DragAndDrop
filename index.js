const item = document.querySelector('.item')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

function dragstart(e) {
	setTimeout(() => {
		e.target.classList.add('hold', 'hide')
	}, 0)
	e.target.classList.add('hold')
}

function dragend(e) {
	e.target.className = 'item'
}
