import { toast, updateGlobalOptions, type ToastOptions } from 'vue3-toastify';

updateGlobalOptions({
  autoClose: 1500,
  clearOnUrlChange: false,
  multiple: true,
  limit: 2,
  style: {
    opacity: '1',
    userSelect: 'initial',
  },
});

export const notifySuccess = (message = 'Ação realizada com sucesso!') => {
  toast(message, {
    type: toast.TYPE.SUCCESS,
    position: toast.POSITION.TOP_CENTER,
    transition: toast.TRANSITIONS.FLIP
  } as ToastOptions);
}

export const notifyInfo = (message = 'Informação padrão') => {
  toast(message, {
    type: toast.TYPE.INFO,
    position: toast.POSITION.TOP_CENTER,
    transition: toast.TRANSITIONS.FLIP
  } as ToastOptions);
}

export const notifyWarning = (message = 'Warning padrão!') => {
  toast(message, {
    type: toast.TYPE.WARNING,
    position: toast.POSITION.TOP_CENTER,
    transition: toast.TRANSITIONS.FLIP
  } as ToastOptions);
}

export const notifyError = (message = 'Ocorreu um erro!') => {
  toast(message, {
    type: toast.TYPE.ERROR,
    position: toast.POSITION.TOP_CENTER,
    transition: toast.TRANSITIONS.FLIP
  } as ToastOptions);
}
