import './reset.scss';
import './style.scss';

const modalOpeners: NodeListOf<HTMLDivElement> = document.querySelectorAll('[data-modal-type]');
const modalClosers = document.querySelectorAll('.modal__close');

modalOpeners.forEach((node) => {
    node.addEventListener('click', (e) => {
        if (!(e.currentTarget instanceof HTMLElement)) return;

        document.querySelectorAll('[data-type]').forEach((el => {
            el.classList.remove('is-open');
        }));

        document.querySelector('.modal')?.classList.toggle('is-open');
        document.querySelector(`[data-type='${e.currentTarget.dataset.modalType}']`)?.classList.toggle('is-open');
    });
});

modalClosers.forEach((node) => {
    node.addEventListener('click', (e) => {
        if (!(e.currentTarget instanceof HTMLElement)) return;

        if (e.currentTarget.parentElement) {
            document.querySelector('.modal')?.classList.remove('is-open');
            e.currentTarget.parentElement.classList.remove('is-open');

        }
    })
})

