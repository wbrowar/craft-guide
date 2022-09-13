import { createApp } from 'vue';
import { log, scope } from './globals';
import './global.css';

if (scope.includes('display')) {
    import('./guide-display').then((display) => {
        display.default();
    });
}

if (scope.includes('admin')) {
    import('./guide-admin').then((admin) => {
        admin.default();
    });
}

if (scope.includes('welcome')) {
    import('./guide-welcome').then((welcome) => {
        welcome.default();
    });
}

log('Guide loaded for scope', scope);