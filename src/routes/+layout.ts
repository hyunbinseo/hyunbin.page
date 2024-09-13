import { dev } from '$app/environment';
import '../normalize.css';

export const csr = !!dev;
export const prerender = true;
