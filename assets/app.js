import jQuery from 'jquery';
import React from 'react';
import { render } from 'react-dom';

const App = () => {
    return <p>App</p>;
};

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
        const el = $('body').prepend(`
            <div id="bc3-dark-mode"></div>
        `);
        console.log('el');
        console.log(el);

        const app = document.getElementById('bc3-dark-mode');
        console.log({ app });
        render(<App />, app);
    });
})(jQuery);
