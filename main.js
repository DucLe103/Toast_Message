function toast ({
    title,
    msg,
    type,
    duration
}) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');
        const delay = (duration / 1000).toFixed(2);
        const icons = {
            success: 'fa-solid fa-circle-check',
            error: 'fa-solid fa-triangle-exclamation',
            warning: 'fa-solid fa-circle-info',
            info: 'fa-solid fa-circle-info'
        }
        const icon = icons[type];
        
        //Auto Remove
        const autoRomove = setTimeout(function() {
            main.removeChild(toast);
        }, duration + 1000)

        //Remove when click
        toast.onclick = (function(e) {
             if (e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRomove)
             }
        })
        
        toast.classList.add('toast', `toast__${type}`);
        toast.style.animation = `slideIn ease 0.3s, fadeOut linear 1s ${delay}s forwards`
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <div class="toast__body--title">${title}</div>
                <div class="toast__body--msg">
                    ${msg}
                </div>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
            </div>
        `;
        main.appendChild(toast);
    }
}

function runSuccessToast() {
    toast({
        title: 'Success',
        msg: 'Bạn đã đăng kí thành công',
        type: 'success',
        duration: 3000
    })
}

function runErrorToast() {
    toast({
        title: 'Error',
        msg: 'Đăng kí chưa thành công',
        type: 'error',
        duration: 3000
    })
}

function runInfoToast() {
    toast({
        title: 'Info',
        msg: 'A info toast',
        type: 'info',
        duration: 3000
    })
}

function runWarningToast() {
    toast({
        title: 'Warning',
        msg: 'A warning toast',
        type: 'warning',
        duration: 3000
    })
}


