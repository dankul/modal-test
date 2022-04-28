let modal = document.querySelector('.modal-test'),
    modalOpen = document.querySelector(".js_modal-test--open"),
    modalClose = document.querySelector(".js_modal-test--close");

modalOpen.addEventListener('click', () => {
        modal.classList.add('modal--active');
    }
)

modalClose.addEventListener('click', () => {
        modal.classList.remove('modal--active');
    }
)