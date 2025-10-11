import { openModal, closeModal } from "./modal";
import { postData } from "../services/services";

export default function forms(formSelector, modalTimerId) {
		//Forms

	const forms = document.querySelectorAll(formSelector);
	const message = {
		loading: 'icons/spinner.svg',
		succes: 'Спасибо! Скоро мы с вами свяжемся.',
		failure: 'Что-то пошло не так...'
	}

	forms.forEach(item => { bindPostData(item) });

	function bindPostData(form) {
		form.addEventListener('submit', (e) => {
			e.preventDefault();

			const btn = form.querySelector('.btn');
			const statusMessage = document.createElement('img');
			btn.innerHTML = '';
			statusMessage.src = message.loading;
			btn.append(statusMessage);

			const formData = new FormData(form);

			const json = JSON.stringify(Object.fromEntries(formData.entries()))

			// fetch('server.php', {
			//     method: 'POST',
			//     headers: {
			//         'Content-type': 'application/json'
			//     },
			//     body: JSON.stringify(object)
			// })
			postData('http://localhost:3000/requests', json)
				.then(data => {
					console.log(data);
					showThanksModal(message.succes);
					statusMessage.remove();
					btn.innerHTML = 'Перезвонить мне';
				}).catch(() => {
					showThanksModal(message.failure);
					btn.innerHTML = 'Перезвонить мне';
				}).finally(() => {
					form.reset();
				});

			// request.addEventListener('load', () => {
			//     if (request.status === 200) {
			//         console.log(request.response);
			//         showThanksModal(message.succes);
			//         form.reset();
			//         statusMessage.remove();
			//         btn.innerHTML = 'Перезвонить мне';
			//     } else {
			//         showThanksModal(message.failure);
			//         btn.innerHTML = 'Перезвонить мне';
			//     }
			// });
		});
	}

	function showThanksModal(message) {
		const prevModalDialog = document.querySelector('.modal__dialog');

		prevModalDialog.classList.add('hide');
		openModal('.modal', modalTimerId);

		const thanksModal = document.createElement('div');

		thanksModal.classList.add('modal__dialog');
		thanksModal.innerHTML = `
        <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
        </div>
        `;

		document.querySelector('.modal').append(thanksModal);

		setTimeout(() => {
			thanksModal.remove();
			prevModalDialog.classList.add('show');
			prevModalDialog.classList.remove('hide');
			closeModal('.modal');
		}, 4000)
	}
}
