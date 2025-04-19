import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
const rootUrl = import.meta.env.VITE_ROOT_URL;

window.Pusher = Pusher;

const setupEcho = () => {
    //Make sure user is authenticated first
    const token = localStorage.getItem("token");
    if (!token) return null;

    return new Echo({
        broadcaster: 'reverb',
        key: import.meta.env.VITE_REVERB_APP_KEY,
        wsHost: import.meta.env.VITE_REVERB_HOST,
        wsPort: import.meta.env.VITE_REVERB_PORT ?? 80,
        wssPort: import.meta.env.VITE_REVERB_PORT ?? 443,
        forceTLS: (import.meta.env.VITE_REVERB_SCHEME ?? 'https') === 'https',
        enabledTransports: ['ws', 'wss'],
        authEndpoint: `${rootUrl}/broadcasting/auth`,
        auth: {
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        },
    });
};

const echo = setupEcho();
export default echo;