import React from 'react';

import DetailsLayout from '../../layouts/DetailsLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Sticky footer">
            <div style={{ padding: '64px 32px' }}>
                <div style={{ lineHeight: 1.5, marginBottom: '16px' }}>
                    The footer always sticks to the bottom if the main content is short.
                </div>
                <BrowserFrame
                    content={(
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                            }}
                        >
                            <div
                                style={{
                                    borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                                    flexShrink: 0,
                                    padding: '16px',
                                }}
                            >
                                <div style={{ width: '50%' }}><Rectangle /></div>
                            </div>
                            <div style={{ flexGrow: 1, padding: '16px' }}>
                                <Block numberOfBlocks={20} />
                            </div>
                            <div
                                style={{
                                    borderTop: '1px solid rgba(0, 0, 0, 0.3)',
                                    flexShrink: 0,
                                    padding: '16px',
                                }}
                            >
                                <div style={{ width: '40%' }}><Rectangle /></div>
                            </div>
                        </div>
                    )}
                    source={`
<div style="
    display: flex;
    flex-direction: column;
    height: 100%;
">
    <header style="flex-shrink: 0;">
        ...
    </header>
    <main style="flex-grow: 1;">
        ...
    </main>
    <footer style="flex-shrink: 0;">
        ...
    </footer>
</div>
`}
                />
            </div>
        </DetailsLayout>
    );
};

export default Details;
