import React from 'react';

import DetailsLayout from '../../layouts/DetailsLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Same height columns">
            <div style={{ padding: '64px 32px' }}>
                <BrowserFrame
                    content={(
                        <div
                            style={{
                                alignItems: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                justifyContent: 'center',
                                padding: '8px',
                            }}
                        >
                            <div style={{ display: 'flex', height: '100%', width: '100%' }}>
                                <div
                                    style={{
                                        border: '1px solid rgba(0, 0, 0, 0.2)',
                                        borderRadius: '4px',
                                        display: 'flex',
                                        flex: 1,
                                        flexDirection: 'column',
                                        margin: '0 8px',
                                    }}
                                >
                                    <Rectangle height={200} />
                                    <div style={{ flex: 1, padding: '16px' }}>
                                        <Block numberOfBlocks={10} />
                                    </div>
                                    <div style={{ padding: '16px', width: '128px' }}>
                                        <Rectangle height={32} />
                                    </div>
                                </div>
                                <div
                                    style={{
                                        border: '1px solid rgba(0, 0, 0, 0.2)',
                                        borderRadius: '4px',
                                        display: 'flex',
                                        flex: 1,
                                        flexDirection: 'column',
                                        margin: '0 8px',
                                    }}
                                >
                                    <Rectangle height={200} />
                                    <div style={{ flex: 1, padding: '16px' }}>
                                        <div style={{ marginBottom: '16px' }}><Block numberOfBlocks={15} /></div>
                                        <Block numberOfBlocks={5} />
                                    </div>
                                    <div style={{ padding: '16px', width: '128px' }}>
                                        <Rectangle height={32} />
                                    </div>
                                </div>
                                <div
                                    style={{
                                        border: '1px solid rgba(0, 0, 0, 0.2)',
                                        borderRadius: '4px',
                                        display: 'flex',
                                        flex: 1,
                                        flexDirection: 'column',
                                        margin: '0 8px',
                                    }}
                                >
                                    <Rectangle height={200} />
                                    <div style={{ flex: 1, padding: '16px' }}>
                                        <div style={{ marginBottom: '16px' }}><Block numberOfBlocks={5} /></div>
                                        <Block numberOfBlocks={10} />
                                    </div>
                                    <div style={{ padding: '16px', width: '128px' }}>
                                        <Rectangle height={32} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    source={`
<div style="display: flex;">
    <!-- Column -->
    <div style="
        flex: 1;
        /* Space between columns */
        margin: 0 8px;

        /* Layout each column */
        display: flex;
        flex-direction: column;
    ">
        <!-- Cover -->
        ...

        <!-- Content -->
        <div style="
            /* Take available height */
            flex: 1;
        ">
            ...
        </div>

        <!-- Button sticks to the bottom -->
        ...
    </div>

    <!-- Repeat with other columns -->
    ...
</div>
`}
                />
            </div>
        </DetailsLayout>
    );
};

export default Details;
