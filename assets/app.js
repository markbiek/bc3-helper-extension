import jQuery from 'jquery';
import React from 'react';
import { render } from 'react-dom';
import useDarkMode from 'use-dark-mode';

const Toggle = ({ checked, onChange }) => (
    <span className='toggle-control'>
        <input
            className='dmcheck'
            type='checkbox'
            checked={checked}
            onChange={onChange}
            id='dmcheck'
        />
        <label htmlFor='dmcheck' />
    </span>
);

const DarkModeToggle = () => {
    const darkMode = useDarkMode(false);

    return (
        <div className='dark-mode-toggle'>
            <button type='button' onClick={darkMode.disable}>
                ☀
            </button>
            <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
            <button type='button' onClick={darkMode.enable}>
                ☾
            </button>
        </div>
    );
};

const App = () => {
    return <DarkModeToggle />;
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

        const app = document.getElementById('bc3-dark-mode');
        render(<App />, app);
    });
})(jQuery);
