import jQuery from 'jquery';
import { render } from 'react-dom';

import App from './react';

(function($) {
    $(document).ready(() => {
        // Reorder project/todo-list titles
        $('.schedule-day__events .metadata').each((idx, item) => {
            let first = $(item).children('a:first-child');
            let last = $(item).children('a:last-child');

            if (!first || !last) {
                return;
            }

            if (first.length <= 0 || last.length <= 0) {
                return;
            }

            $(item).html(`
                ${last[0].outerHTML}
                &mdash;
                ${first[0].outerHTML}
            `);
        });

        // Setup react app
        $('body').prepend(`
            <div id="bc3-dark-mode"></div>
        `);

        const app = document.getElementById('bc3-dark-mode');
        render(<App />, app);
    });
})(jQuery);
