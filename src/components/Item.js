import * as React from 'react';

import Link from 'next/link';
import { getComponent } from '@stackbit/components';
import classNames from 'classnames';

export default function Item(props) {
    return (
        <div>
            <article className="sb-card">
                <div className="px-4 py-6 sm:px-6 sm:pb-10">
                    {props.title && <h3 className="text-xl sm:text-2xl mb-1">{props.title}</h3>}
                    {props.subtitle && <h4 className="text-l sm:text-xl mb-1">{props.subtitle}</h4>}
                    {props.content && <p>{props.content}</p>}
                    {props.author && <div>{props.author}</div>}
                    {props.rating && <div>{props.rating}</div>}

                    <div className="my-3 flex-1 px-4 w-full">{itemActions(props)}</div>
                </div>
            </article>
        </div>
    );
}

function itemActions(props) {
    const actions = props.actions || [];
    if (actions.length === 0) {
        return null;
    }
    const styles = props.styles || {};
    const Action = getComponent('Action');
    return (
        <div className={classNames('flex', 'flex-wrap', 'items-center', '-mx-2')} data-sb-field-path=".actions">
            {actions.map((action, index) => (
                <Action key={index} {...action} className="mb-3 mx-2 lg:whitespace-nowrap" annotationPrefix={`.${index}`} />
            ))}
        </div>
    );
}
