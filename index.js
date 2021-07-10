const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
	placeholder.addEventListener('dragover', dragover)
	placeholder.addEventListener('dragenter', dragenter)
	placeholder.addEventListener('dragleave', dragleave)
	placeholder.addEventListener('drop', dragdrop)
}

function dragstart(e) {
	setTimeout(() => {
		e.target.classList.add('hold', 'hide')
	}, 0)
	e.target.classList.add('hold')
}

function dragend(e) {
	e.target.className = 'item'
}

function dragover(e) {
	console.log('drag over')
}

function dragenter(e) {
	console.log('drag enter')
}

function dragleave(e) {
	console.log('drag leave')
}

function dragdrop(e) {
	console.log('drag drop')
}
