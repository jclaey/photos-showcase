// MODAL

const modal = document.querySelector('#exampleModal')

modal.addEventListener('show.bs.modal', e => {
    const image = e.relatedTarget
    const source = image.getAttribute('src')

    const modalImage = document.querySelector('#modal-img')
    modalImage.setAttribute('src', source)
    modalImage.style.height = '600px'
    modalImage.style.width = '100%'
})