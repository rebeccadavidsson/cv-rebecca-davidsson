import React from 'react';
import { atomOneDark, CodeBlock } from "react-code-blocks";
const AccessibleFrontends = () => {
    const codeSnippet = `import 'cypress-axe';       
describe('Accessibility tests', () => {
    it('should pass accessibility tests', () => {
        // Visit the page to be tested
        cy.visit('https://www.example.com');
        
        // Run accessibility tests using cypress-axe
        cy.injectAxe();
        cy.checkA11y();
        
        // Check for any violations
        cy.checkA11y(null, null, (violations) => {
            expect(violations.length).to.equal(0);
        });
    });
});`
    const py11Result = `{
  results: [
    {      
      issues: [
        {
          type: 'error',
          message: 'Img element missing an alt attribute.',
          context: '<img src="example.png">',
          selector: 'img',
          runnerExtras: {
            // Additional information about the issue
            description: 'Ensures every img element has an alt attribute',
            help: 'Provide a text alternative for every non-text content',
            helpUrl: 'https://dequeuniversity.com/rules/axe/4.5/image-alt',
            tags: ['cat.text-alternatives'],
          },
        },
        // ... additional issues
      ],
      
      // Summary of the test results
      passes: 10,
      warnings: 2,
      errors: 3,
      // ... additional info
    },
  ],
}`
  return (
    <>
      <div className="container-sm section">
          <h2>Tools for Digital Accessibility: A Short Guide for Frontend Developers</h2>
          <p>As a frontend developer, it's important to ensure that the websites and applications you build are accessible to all users, including those with disabilities.
              Fortunately, there are many tools available that can help you test and improve the accessibility of your digital products.
              In this article, we'll discuss some of the most useful tools for digital accessibility and their key features.</p>
          <p>Sidenote: I am definitely not an expert on this subject, but I do have experience with which tools made my life easier, which is exactly what I wanted to share.</p>
          <h3>Tools</h3>
          <ol>
              <li>
                  <p><span className={'font-bold'}>Axe Core</span> is an open-source accessibility testing engine that can be integrated with various tools such as Chrome DevTools, Visual Studio Code, and Selenium. It can automatically test your website for common accessibility issues and generate detailed reports.</p>
                  <p>
                      With <a rel="noopener noreferrer" target={'_blank'} href='https://www.npmjs.com/package/cypress-axe'>cypress-axe</a>, you can easily write Cypress tests that include accessibility testing. The plugin automatically runs accessibility checks during the Cypress testing process, and generates detailed reports with suggestions for fixing any identified accessibility issues.
                      You can use the <code className={'code dark-code'}>checkA11y()</code> command to run accessibility tests.
                  </p>

                  <CodeBlock
                      text={codeSnippet}
                      language={"javascript"}
                      theme={atomOneDark}
                      showLineNumbers={false}
                      wrapLines
                  />

              </li>

              <li className={'mt-16'}>
                  <p><span className={'font-bold'}>Pa11y</span> is another open-source accessibility testing tool that can be integrated with Node.js, Grunt/Gulp tasks. It can test your website or application for accessibility issues, generate detailed reports, and provide suggestions for fixing them.
                Below is an example output of running <code className={'code dark-code'}>pa11y('https://www.example.com', options)`</code>:
                  </p>
                  <CodeBlock
                      text={py11Result}
                      language={"javascript"}
                      theme={atomOneDark}
                      showLineNumbers={false}
                      wrapLines
                  />
              </li>
              <li className={'mt-16'}>
                  <p><span className={'font-bold'}>Google Lighthouse</span> is an open-source tool that can be used as a Chrome extension or command-line tool to test the accessibility, performance, and best practices of your website or application. It can generate detailed reports with suggestions for improving accessibility, performance, and other issues.</p>
              </li>

              <li>
                  <p><span className={'font-bold'}>Wave</span> is a free web accessibility evaluation tool that can be used as a Chrome or Firefox extension. It can automatically test your website for accessibility issues and generate detailed reports with suggestions for fixing them.</p>
              </li>
              <li>
                  <p><span className={'font-bold'}>Chrome Web Developer</span> is a free browser extension for Google Chrome that provides a suite of web development tools, including an accessibility audit tool. It can automatically test your website for accessibility issues and generate detailed reports with suggestions for fixing them.</p>
              </li>
              <li>
                  <p><span className={'font-bold'}>Funkify</span> is a browser extension for Google Chrome that can simulate various disabilities and help you test the accessibility of your website or application. It provides detailed reports with suggestions for improving accessibility. The basic version of Funkify is free, while the pro version is paid.</p>
              </li>
              <li>
                  <p><span className={'font-bold'}>Taba11y</span> is a free tool that can be used with any browser to test the accessibility of your website or application. It provides detailed reports with suggestions for fixing accessibility issues. It displays the tab order of all clickable elements on a page.</p>
              </li>
          </ol>
          <br/>
            <p>Below is a table that compares the key features of the mentioned digital accessibility tools. All tools are free to use, and all of them give suggestions for solutions.</p>

          <div style={{overflowX: 'auto'}}>
          <table>
              <thead>
              <tr>
                  <th>Tool</th>
                  <th>Type</th>
                  <th>Integration with</th>
                  <th>Automated in pipeline</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                  <td><span className={'font-bold'}>Axe Core</span></td>
                  <td>Open-source</td>
                  <td>Chrome DevTools, Visual Studio Code, Selenium, Cypress and more</td>
                  <td>Yes</td>
              </tr>
              <tr>
                  <td><span className={'font-bold'}>Pa11y</span></td>
                  <td>Open-source</td>
                  <td>Node.js, Grunt/Gulp task, command-line tool</td>
                  <td>Yes</td>
              </tr>
              <tr>
                  <td><span className={'font-bold'}>Google Lighthouse</span></td>
                  <td>Open-source</td>
                  <td>Chrome extension</td>
                  <td>Yes, with Lighthouse CLI</td>
              </tr>
              <tr>
                  <td><span className={'font-bold'}>Wave</span></td>
                  <td>Free web tool</td>
                  <td>Chrome and Firefox extension</td>
                  <td>Yes, with WAVE API</td>
              </tr>
              <tr>
                  <td><span className={'font-bold'}>Chrome Web Developer</span></td>
                  <td>Browser extension</td>
                  <td>Google Chrome</td>
                  <td>No</td>
              </tr>
              <tr>
                  <td><span className={'font-bold'}>Funkify</span></td>
                  <td>Browser extension</td>
                  <td>Google Chrome</td>
                  <td>No</td>
              </tr>
              <tr>
                  <td><span className={'font-bold'}>Taba11y</span></td>
                  <td>Browser extension</td>
                  <td>Any type of browser</td>
                  <td>No</td>
              </tr>
              </tbody>
          </table>
          </div>

          <h3>Conclusion</h3>
          <p>Testing for digital accessibility is crucial for ensuring that your websites and applications are usable by all users, regardless of their abilities. These tools can help identify and fix accessibility issues, ensuring that digital products are accessible to everyone.
       My favorite is cypress-axe, fast, easy to use and very helpful.</p>
          <p>Starting in 2025, websites and apps will be obligated to adhere to globally applicable standards for accessible online products. Read more about the European Accessibility Act on <a target={'_blank'} rel="noopener noreferrer" aria-label={'read more on forbes.com'} href={'https://www.forbes.com/sites/forbesbusinesscouncil/2022/05/11/the-european-accessibility-act-everything-you-need-to-know/?sh=4d3eb3565b86'}>Forbes.</a></p>
          <br/> <br/>
      </div>

    </>
  );
}

export default AccessibleFrontends;
