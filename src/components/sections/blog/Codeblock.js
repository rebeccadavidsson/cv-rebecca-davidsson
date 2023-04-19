import React from 'react';
import { CodeBlock, atomOneDark } from "react-code-blocks";

const Code = ({
    longSnippet,
    innerHtml,
    classNames
}) => {

    return (
        <section
        >
            <div className="container">
                {innerHtml ?
                    <div className={'split-wrap'}>
                        <div className="split-item">
                            <div className={"split-item-content split-item-code center-content-mobile reveal-from-left " + classNames}
                                 data-reveal-container=".split-item">
                                <CodeBlock
                                    text={longSnippet}
                                    language={"javascript"}
                                    theme={atomOneDark}
                                    showLineNumbers={false}
                                    wrapLines
                                />
                            </div>

                            <div className={
                                'center-content-mobile reveal-from-bottom'}
                                 data-reveal-container=".split-item">
                                {innerHtml}
                            </div>
                        </div>
                    </div>
                    :
                    <CodeBlock
                        text={longSnippet}
                        language={"javascript"}
                        theme={atomOneDark}
                        showLineNumbers={false}
                        wrapLines
                    />
                }

            </div>
        </section>
    );
}

export default Code;